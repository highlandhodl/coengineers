import { vi, beforeEach, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';

// Mock environment variables
vi.stubEnv('SUPABASE_URL', 'http://localhost:54321');
vi.stubEnv('SUPABASE_SERVICE_ROLE_KEY', 'test-service-role-key');
vi.stubEnv('RESEND_API_KEY', 're_test_key');
vi.stubEnv('RESEND_FROM_EMAIL', 'test@coengineers.ai');
vi.stubEnv('PUBLIC_SITE_URL', 'http://localhost:4321');

// Mock Supabase client
export const mockSupabaseClient: any = {
  from: vi.fn(() => mockSupabaseClient),
  select: vi.fn(() => mockSupabaseClient),
  insert: vi.fn(() => mockSupabaseClient),
  update: vi.fn(() => mockSupabaseClient),
  upsert: vi.fn(() => mockSupabaseClient),
  eq: vi.fn(() => mockSupabaseClient),
  single: vi.fn(() => Promise.resolve({ data: null, error: null })),
  maybeSingle: vi.fn(() => Promise.resolve({ data: null, error: null })),
};

vi.mock('../src/lib/supabase', () => ({
  getSupabaseClient: vi.fn(() => mockSupabaseClient),
  supabase: mockSupabaseClient,
}));

// Mock Resend
export const mockResendSend = vi.fn(() =>
  Promise.resolve({ data: { id: 'test-resend-id' }, error: null })
);

vi.mock('resend', () => ({
  Resend: vi.fn(() => ({
    emails: {
      send: mockResendSend,
    },
  })),
}));

// Reset mocks before each test
beforeEach(() => {
  vi.clearAllMocks();
});

// Clean up after each test
afterEach(() => {
  vi.restoreAllMocks();
});

// Helper to reset mock implementations
export function resetMocks() {
  mockSupabaseClient.from.mockReturnValue(mockSupabaseClient);
  mockSupabaseClient.select.mockReturnValue(mockSupabaseClient);
  mockSupabaseClient.insert.mockReturnValue(mockSupabaseClient);
  mockSupabaseClient.update.mockReturnValue(mockSupabaseClient);
  mockSupabaseClient.upsert.mockReturnValue(mockSupabaseClient);
  mockSupabaseClient.eq.mockReturnValue(mockSupabaseClient);
  mockSupabaseClient.single.mockResolvedValue({ data: null, error: null });
  mockSupabaseClient.maybeSingle.mockResolvedValue({ data: null, error: null });
  mockResendSend.mockResolvedValue({ data: { id: 'test-resend-id' }, error: null });
}

// Helper to mock database error
export function mockDatabaseError(message = 'Database error') {
  mockSupabaseClient.single.mockResolvedValue({
    data: null,
    error: { message, code: 'PGRST301' },
  });
  mockSupabaseClient.maybeSingle.mockResolvedValue({
    data: null,
    error: { message, code: 'PGRST301' },
  });
}

// Helper to mock existing subscriber
export function mockExistingSubscriber(overrides: Record<string, any> = {}) {
  const subscriber = {
    id: 'test-uuid-123',
    email: 'test@example.com',
    subscribed_at: new Date().toISOString(),
    unsubscribed: false,
    unsubscribed_at: null,
    unsubscribe_token: 'test-token-uuid',
    source: 'website',
    ...overrides,
  };
  mockSupabaseClient.single.mockResolvedValue({ data: subscriber, error: null });
  mockSupabaseClient.maybeSingle.mockResolvedValue({ data: subscriber, error: null });
  return subscriber;
}
