import { defineConfig } from 'vite';
import { resolve } from 'path';
import { ViteAliases } from 'vite-aliases'
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  server: {
    open: true,
    host: true,
  },
  plugins: [injectHTML(), ViteAliases()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contacts: resolve(__dirname, 'contacts.html'),
      },
    },
  },
});