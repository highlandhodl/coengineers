import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { APIContext } from 'astro';

/**
 * Unsubscribe endpoint tests
 * Per plan.md Test Coverage Requirements: 6+ scenarios
 */

// Create mock chain - each method returns an object with more methods
const createMockChain = () => {
  const chain: Record<string, ReturnType<typeof vi.fn>> = {};
  chain.from = vi.fn(() => chain);
  chain.select = vi.fn(() => chain);
  chain.update = vi.fn(() => chain);
  chain.eq = vi.fn(() => chain);
  chain.single = vi.fn();
  return chain;
};

const mockChain = createMockChain();

vi.mock('../../src/lib/supabase', () => ({
  getSupabaseClient: vi.fn(() => mockChain),
}));

// Import after mocking
import { GET } from '../../src/pages/api/unsubscribe';

describe('GET /api/unsubscribe', () => {
  const validToken = '550e8400-e29b-41d4-a716-446655440000';

  beforeEach(() => {
    vi.clearAllMocks();
    // Reset mock implementations to default chain behaviour
    mockChain.from.mockReturnValue(mockChain);
    mockChain.select.mockReturnValue(mockChain);
    mockChain.update.mockReturnValue(mockChain);
    mockChain.eq.mockReturnValue(mockChain);
    mockChain.single.mockReset();
  });

  // Helper to create mock API context
  function createContext(token?: string): APIContext {
    const url = token
      ? `http://localhost:4321/api/unsubscribe?token=${token}`
      : 'http://localhost:4321/api/unsubscribe';

    return {
      request: new Request(url),
      url: new URL(url),
      params: {},
      props: {},
    } as unknown as APIContext;
  }

  // Test 1: Valid token, subscribed user → 200 HTML confirmation
  it('should unsubscribe user with valid token', async () => {
    // First call: select to find subscriber
    mockChain.single
      .mockResolvedValueOnce({
        data: {
          id: 'sub-uuid',
          email: 'user@example.com',
          unsubscribed: false,
        },
        error: null,
      })
      // Second implicit call after update - return success via eq chain end
      .mockResolvedValueOnce({ data: null, error: null });

    // Mock the update chain - eq is called at the end of update chain
    let updateCallCount = 0;
    mockChain.eq.mockImplementation(() => {
      updateCallCount++;
      if (updateCallCount > 1) {
        // This is the update's eq call, return a promise
        return Promise.resolve({ error: null });
      }
      return mockChain;
    });

    const context = createContext(validToken);
    const response = await GET(context);
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('text/html');
    expect(html).toContain("You've been unsubscribed");
    expect(html).toContain('Return to CoEngineers');
  });

  // Test 2: Valid token, already unsubscribed → 200 HTML confirmation
  it('should return success for already unsubscribed user', async () => {
    mockChain.single.mockResolvedValueOnce({
      data: {
        id: 'already-unsub-uuid',
        email: 'unsub@example.com',
        unsubscribed: true,
      },
      error: null,
    });

    const context = createContext(validToken);
    const response = await GET(context);
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('text/html');
    expect(html).toContain("You've been unsubscribed");
  });

  // Test 3: Invalid token format → 400 JSON error
  it('should return 400 for invalid token format', async () => {
    const context = createContext('not-a-uuid');
    const response = await GET(context);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(response.headers.get('Content-Type')).toBe('application/json');
    expect(data.success).toBe(false);
    expect(data.error).toBe('Invalid unsubscribe link.');
  });

  // Test 4: Token not found → 404 JSON error
  it('should return 404 when token not found', async () => {
    mockChain.single.mockResolvedValueOnce({
      data: null,
      error: { code: 'PGRST116', message: 'No rows found' },
    });

    const context = createContext(validToken);
    const response = await GET(context);
    const data = await response.json();

    expect(response.status).toBe(404);
    expect(data.success).toBe(false);
    expect(data.error).toBe('Subscription not found.');
  });

  // Test 5: Database error handling → 500
  it('should return 500 on database update error', async () => {
    // First call succeeds (find subscriber)
    mockChain.single.mockResolvedValueOnce({
      data: {
        id: 'error-uuid',
        email: 'error@example.com',
        unsubscribed: false,
      },
      error: null,
    });

    // Update call fails
    let eqCallCount = 0;
    mockChain.eq.mockImplementation(() => {
      eqCallCount++;
      if (eqCallCount > 1) {
        // Second eq call is from update - return error
        return Promise.resolve({ error: { message: 'Update failed' } });
      }
      return mockChain;
    });

    const context = createContext(validToken);
    const response = await GET(context);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.success).toBe(false);
    expect(data.error).toBe('Something went wrong. Please try again.');
  });

  // Test 6: Missing token parameter → 400
  it('should return 400 when token is missing', async () => {
    const context = createContext();
    const response = await GET(context);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.error).toBe('Invalid unsubscribe link.');
  });

  // Test 7: Idempotency - repeat unsubscribe still returns 200
  it('should be idempotent for repeat unsubscribe attempts', async () => {
    mockChain.single.mockResolvedValueOnce({
      data: {
        id: 'repeat-uuid',
        email: 'repeat@example.com',
        unsubscribed: true,
      },
      error: null,
    });

    const context = createContext(validToken);
    const response = await GET(context);

    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('text/html');
  });

  // Test 8: Empty token string → 400
  it('should return 400 for empty token string', async () => {
    const context = createContext('');
    const response = await GET(context);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
  });
});
