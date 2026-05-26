import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const supabase_url = process.env.SUPABASE_URL;
const supabase_key = process.env.SUPABASE_KEY;

// supabase_url connection string
// supabase_key api key

if (!supabase_url || !supabase_key) {
  throw new Error("Missing keys");
}

export const supabase = createClient(supabase_url, supabase_key);