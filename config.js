// ==========================================
// FILE: config.js
// Pusat Konfigurasi Database KOPDESKEL
// ==========================================

const SB_URL = "https://dhtezbjltciwqytgkbma.supabase.co"; 
const SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRodGV6YmpsdGNpd3F5dGdrYm1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMjA3NTksImV4cCI6MjA5MTc5Njc1OX0.q8xVCso4aSBmR6OWF9YBdAYmRaVOrlE34p7YB7TxACw";

// PERUBAHAN PENTING: Kita beri nama variabelnya 'supabaseClient'
const supabaseClient = window.supabase.createClient(SB_URL, SB_KEY);

console.log("Koneksi Supabase Siap Digunakan!");
