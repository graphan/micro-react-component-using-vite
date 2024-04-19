import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // lib: {
    //   entry: './src/App.tsx',
    //   name: 'OurReactComponent',
    //   formats: ['es'],
    //   fileName: (format) => `our-react-component.${format}.js`
    // },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          reactDom: 'react-dom'
        }
      }
    }
  }
});
