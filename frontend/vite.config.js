import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import eslint from 'vite-plugin-eslint';  // Temporarily disabled

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // ESLint plugin temporarily disabled to reduce noise during development
    // eslint({
    //   lintOnStart: true,
    //   failOnError: mode === "production"
    // })
  ],
  server: {
    port: 5173
  }
  // To automatically open the app in the browser whenever the server starts,
  // uncomment the following lines:
  // server: {
  //   open: true
  // }
}));
