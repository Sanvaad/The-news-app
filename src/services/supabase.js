import { createClient } from "@supabase/supabase-js";

<<<<<<< HEAD
export const VITE_SUPABASE_URL = "https://aecwzaraqxmzadvavcxr.supabase.co";
const VITE_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlY3d6YXJhcXhtemFkdmF2Y3hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0MjczNDAsImV4cCI6MjA2NzAwMzM0MH0.qV6cboQGyf-WaKnqujjhhYNi3xWpo4d9PZXKJr2LZsU";

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);

// Test connection
console.log("Supabase client created with URL:", VITE_SUPABASE_URL);
console.log("Supabase client:", supabase);
=======
export const supabaseUrl = "https://cauckavobwjvlzfcmpxd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhdWNrYXZvYndqdmx6ZmNtcHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2ODQxNDcsImV4cCI6MjAzNDI2MDE0N30.DjeytvFEbtv7u26pRtDvWJqA2JsS5g2HVQO6EPbcAEE";
const supabase = createClient(supabaseUrl, supabaseKey);
>>>>>>> 6ca7a2d1585679c85c7afef27838194f49b42fd2

export default supabase;
