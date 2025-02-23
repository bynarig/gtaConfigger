import {viteCommonjs} from '@originjs/vite-plugin-commonjs';
import babel from '@rollup/plugin-babel';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';
// https://vite.dev/config/

export default defineConfig({
  plugins: [
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

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          /* Color styles */
$colors-red: rgba(255, 59, 48, 1);
$colors-orange: rgba(255, 149, 0, 1);
$colors-yellow: rgba(255, 204, 0, 1);
$colors-green: rgba(52, 199, 89, 1);
$colors-mint: rgba(0, 199, 190, 1);
$colors-teal: rgba(48, 176, 199, 1);
$colors-cyan: rgba(50, 173, 230, 1);
$colors-blue: rgba(0, 122, 255, 1);
$colors-indigo: rgba(88, 86, 214, 1);
$colors-purple: rgba(175, 82, 222, 1);
$colors-pink: rgba(255, 45, 85, 1);
$colors-brown: rgba(162, 132, 94, 1);

/* Background styles */
$backgrounds-primary: rgba(255, 255, 255, 1);
$backgrounds-secondary: rgba(242, 242, 247, 1);
$backgrounds-tertiary: rgba(255, 255, 255, 1);

/* Grouped backgrounds */
$backgrounds-grouped-primary: rgba(242, 242, 247, 1);
$backgrounds-grouped-secondary: rgba(255, 255, 255, 1);
$backgrounds-grouped-tertiary: rgba(242, 242, 247, 1);

/* Fill styles */
$fills-primary: rgba(120, 120, 128, 0.2);
$fills-secondary: rgba(120, 120, 128, 0.16);
$fills-tertiary: rgba(120, 120, 128, 0.12);
$fills-quaternary: rgba(120, 120, 128, 0.08);

/* Grayscale styles */
$grays-gray-bg: rgb(27, 27, 27);
$grays-gray-dark: rgba(115, 115, 115, 1);
$grays-gray: rgb(142, 142, 147);
$grays-gray-2: rgba(174, 174, 178, 1);
$grays-gray-3: rgba(199, 199, 204, 1);
$grays-gray-4: rgba(209, 209, 214, 1);
$grays-gray-5: rgba(229, 229, 234, 1);
$grays-gray-6: rgba(242, 242, 247, 1);
$grays-black: rgba(0, 0, 0, 1);
$grays-white: rgba(255, 255, 255, 1);

/* Label styles */
$labels-primary: rgb(255, 255, 255);
$labels-secondary: rgb(199, 199, 199);
$labels-tertiary: rgb(127, 127, 127);
$labels-quaternary: rgba(60, 60, 67, 0.18);

/* Separator styles */
$separators-opaque: rgba(198, 198, 200, 1);
$separators-non-opaque: rgba(84, 84, 86, 0.34);

/* Vibrant fills */
$vibrant-fills-primary: rgba(127, 127, 127, 0.5);
$vibrant-fills-secondary: rgba(127, 127, 127, 0.4);
$vibrant-fills-tertiary: rgba(127, 127, 127, 0.2);

@mixin no-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

        `,
      },
    },
  },
});
