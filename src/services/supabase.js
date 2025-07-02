import { createClient } from "@supabase/supabase-js";

export const VITE_SUPABASE_URL = "https://aecwzaraqxmzadvavcxr.supabase.co";
const VITE_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlY3d6YXJhcXhtemFkdmF2Y3hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0MjczNDAsImV4cCI6MjA2NzAwMzM0MH0.qV6cboQGyf-WaKnqujjhhYNi3xWpo4d9PZXKJr2LZsU";

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);

// Test connection
console.log("Supabase client created with URL:", VITE_SUPABASE_URL);
console.log("Supabase client:", supabase);

export default supabase;
