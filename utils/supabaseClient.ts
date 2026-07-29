import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseKey) {
  if (typeof window !== 'undefined') {
    if (!(window as any).__supabaseClient) {
      (window as any).__supabaseClient = createClient(supabaseUrl, supabaseKey);
    }
    supabase = (window as any).__supabaseClient;
  } else {
    supabase = createClient(supabaseUrl, supabaseKey);
  }
}

export { supabase };
