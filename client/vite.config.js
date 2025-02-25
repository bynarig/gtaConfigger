import {viteCommonjs} from '@originjs/vite-plugin-commonjs';
import babel from '@rollup/plugin-babel';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';
import tailwindcss from '@tailwindcss/vite';
// https://vite.dev/config/

export default defineConfig({
  plugins: [
    tailwindcss(),
    viteCommonjs(),
    react(),
    svgr(),
    babel({extensions: ['.ts', '.tsx'], babelHelpers: 'bundled'}),
    checker({typescript: true}),
  ],
  base: './', // Set this to your subfolder name
  build: {
    outDir: 'dist', // Output directory
    assetsDir: 'assets', // Directory for assets in the build
    emptyOutDir: true, // Clear the output directory before building
  },
  resolve: {
    alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}],
  },

  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `
  //
  //       `,
  //     },
  //   },
  // },
});
