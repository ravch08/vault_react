import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://luxlixpjzmxwsoffctpk.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1eGxpeHBqem14d3NvZmZjdHBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxMzUyNjAsImV4cCI6MjAxMDcxMTI2MH0.O0de54o1VxP8m9aOjIr_JqtdZQgOi4Ivg5fAfDvMGhs`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
