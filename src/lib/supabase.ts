import { createClient } from '@supabase/supabase-js';

/**
 * Get a Supabase client configured for server-side API routes.
 * Uses service role key to bypass RLS (Row Level Security).
 * Session persistence disabled for serverless functions.
 */
export function getSupabaseClient() {
  return createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );
}
