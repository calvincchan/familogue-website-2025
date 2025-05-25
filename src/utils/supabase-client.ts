import { createClient } from '@supabase/supabase-js';
import { Database } from "src/types/database.types";

// Create a single supabase client for interacting with your database
export const supabaseClient = createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);