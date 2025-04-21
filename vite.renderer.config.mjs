import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
  root: 'src/renderer/root',
  build: {
    outDir: '../dist/renderer',
    emptyOutDir: true,
    sourcemap: true
  },
  // server: {
  //   open: '/src/renderer/root/index.html'
  // }
});
