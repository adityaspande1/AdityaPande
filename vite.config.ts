import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    eslint({
      // You can turn off build failures on lint errors:
      failOnWarning: false,
      failOnError: false,
    }),
  ],
  base: '',
});
