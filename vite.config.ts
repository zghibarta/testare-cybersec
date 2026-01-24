
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Dacă publici pe GitHub Pages sub forma 'username.github.io/repo-name/', 
// înlocuiește '/' cu '/nume-repo-ul-tau/'
export default defineConfig({
  plugins: [react()],
  base: './', 
  define: {
    'process.env.ADMIN_PASSWORD': JSON.stringify(process.env.ADMIN_PASSWORD || 'Admin2025')
  }
});
