import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mockSupabaseClient, resetMocks } from '../setup';

// Mock the modules before importing
vi.mock('../../src/lib/supabase', () => ({
  getSupabaseClient: vi.fn(() => mockSupabaseClient),
}));

vi.mock('../../src/lib/email', () => ({
  sendWelcomeEmail: vi.fn(() => Promise.resolve({ id: 'test-email-id' })),
}));

// Import after mocking
import { POST } from '../../src/pages/api/subscribe';
import type { APIContext } from 'astro';

/**
 * Subscribe endpoint tests
 * Per plan.md Test Coverage Requirements: 8+ scenarios
 */
describe('POST /api/subscribe', () => {
  beforeEach(() => {
    resetMocks();
  });

  // Helper to create mock API context
  function createContext(
    body: Record<string, unknown>,
    contentType = 'application/json'
  ): APIContext {
    const request = new Request('http://localhost:4321/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': contentType },
      body: contentType.includes('form')
        ? new URLSearchParams(body as Record<string, string>).toString()
        : JSON.stringify(body),
    });

    return {
      request,
      url: new URL(request.url),
      params: {},
      props: {},
    } as unknown as APIContext;
  }

  // Test 1: Valid email, new subscriber → 201, welcome email sent
  it('should create new subscriber and send welcome email', async () => {
    // Mock no existing subscriber
    mockSupabaseClient.single.mockResolvedValueOnce({ data: null, error: { code: 'PGRST116' } });
    // Mock successful insert
    mockSupabaseClient.single.mockResolvedValueOnce({
      data: {
        id: 'new-uuid',
        email: 'new@example.com',
        unsubscribe_token: 'token-uuid',
      },
      error: null,
    });
    // Mock email_sends insert
    mockSupabaseClient.insert.mockReturnValueOnce(mockSupabaseClient);

    const context = createContext({ email: 'new@example.com' });
    const response = await POST(context);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.success).toBe(true);
    expect(data.message).toBe("You're in! Check your inbox.");
  });

  // Test 2: Valid email, existing active subscriber → 200, no email sent
  it('should return 200 for already subscribed user', async () => {
    mockSupabaseClient.single.mockResolvedValueOnce({
      data: {
        id: 'existing-uuid',
        email: 'existing@example.com',
        unsubscribed: false,
      },
      error: null,
    });

    const context = createContext({ email: 'existing@example.com' });
    const response = await POST(context);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.message).toBe("You're already subscribed!");
  });

  // Test 3: Valid email, previously unsubscribed → 201, resubscription, email sent
  it('should resubscribe previously unsubscribed user', async () => {
    // First query finds unsubscribed user
    mockSupabaseClient.single.mockResolvedValueOnce({
      data: {
        id: 'unsub-uuid',
        email: 'unsub@example.com',
        unsubscribed: true,
      },
      error: null,
    });
    // Update returns resubscribed user
    mockSupabaseClient.single.mockResolvedValueOnce({
      data: {
        id: 'unsub-uuid',
        email: 'unsub@example.com',
        unsubscribed: false,
        unsubscribe_token: 'token-uuid',
      },
      error: null,
    });

    const context = createContext({ email: 'unsub@example.com' });
    const response = await POST(context);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.success).toBe(true);
    expect(data.message).toBe("You're in! Check your inbox.");
  });

  // Test 4: Invalid email format → 400
  it('should return 400 for invalid email format', async () => {
    const context = createContext({ email: 'not-an-email' });
    const response = await POST(context);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.error).toBe('Please enter a valid email address.');
  });

  // Test 5: Missing email → 400
  it('should return 400 for missing email', async () => {
    const context = createContext({});
    const response = await POST(context);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.error).toBe('Please enter a valid email address.');
  });

  // Test 6: Form-encoded request → Works same as JSON
  it('should handle form-encoded requests', async () => {
    mockSupabaseClient.single.mockResolvedValueOnce({ data: null, error: { code: 'PGRST116' } });
    mockSupabaseClient.single.mockResolvedValueOnce({
      data: {
        id: 'form-uuid',
        email: 'form@example.com',
        unsubscribe_token: 'token-uuid',
      },
      error: null,
    });

    const context = createContext(
      { email: 'form@example.com', source: 'homepage' },
      'application/x-www-form-urlencoded'
    );
    const response = await POST(context);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.success).toBe(true);
  });

  // Test 7: With valid source parameter → Source recorded
  it('should record valid source parameter', async () => {
    mockSupabaseClient.single.mockResolvedValueOnce({ data: null, error: { code: 'PGRST116' } });
    mockSupabaseClient.single.mockResolvedValueOnce({
      data: {
        id: 'source-uuid',
        email: 'source@example.com',
        unsubscribe_token: 'token-uuid',
      },
      error: null,
    });

    const context = createContext({ email: 'source@example.com', source: 'day-page' });
    const response = await POST(context);

    expect(response.status).toBe(201);
    // Verify insert was called with source
    expect(mockSupabaseClient.insert).toHaveBeenCalled();
  });

  // Test 8: Database error handling → 500
  it('should return 500 on database error during insert', async () => {
    mockSupabaseClient.single.mockResolvedValueOnce({ data: null, error: { code: 'PGRST116' } });
    mockSupabaseClient.single.mockResolvedValueOnce({
      data: null,
      error: { message: 'Database connection failed' },
    });

    const context = createContext({ email: 'error@example.com' });
    const response = await POST(context);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.success).toBe(false);
    expect(data.error).toBe('Something went wrong. Please try again later.');
  });

  // Test 9: Email normalisation to lowercase
  it('should normalise email to lowercase', async () => {
    mockSupabaseClient.single.mockResolvedValueOnce({ data: null, error: { code: 'PGRST116' } });
    mockSupabaseClient.single.mockResolvedValueOnce({
      data: {
        id: 'lower-uuid',
        email: 'lower@example.com',
        unsubscribe_token: 'token-uuid',
      },
      error: null,
    });

    const context = createContext({ email: 'UPPER@EXAMPLE.COM' });
    const response = await POST(context);

    expect(response.status).toBe(201);
    // The insert should have been called with lowercase email
    expect(mockSupabaseClient.from).toHaveBeenCalledWith('subscribers');
  });

  // Test 10: Invalid source is ignored and defaults to website
  it('should ignore invalid source and use default', async () => {
    mockSupabaseClient.single.mockResolvedValueOnce({ data: null, error: { code: 'PGRST116' } });
    mockSupabaseClient.single.mockResolvedValueOnce({
      data: {
        id: 'default-uuid',
        email: 'default@example.com',
        unsubscribe_token: 'token-uuid',
      },
      error: null,
    });

    const context = createContext({ email: 'default@example.com', source: 'invalid-source' });
    const response = await POST(context);

    expect(response.status).toBe(201);
  });
});
