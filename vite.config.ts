
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';
  import { writeFileSync } from 'fs';

  export default defineConfig({
    plugins: [
      react(),
      {
        name: 'github-pages-plugin',
        closeBundle() {
          // Add .nojekyll to disable Jekyll processing on GitHub Pages
          writeFileSync('build/.nojekyll', '');
          // Copy CNAME for custom domain
          try {
            const { readFileSync } = require('fs');
            const cname = readFileSync('CNAME', 'utf-8');
            writeFileSync('build/CNAME', cname);
          } catch (e) {
            // CNAME file doesn't exist, skip
          }
        }
      }
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });