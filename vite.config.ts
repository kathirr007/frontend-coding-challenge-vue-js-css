import { fileURLToPath, URL } from 'node:url';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // isCustomElement: (tag) => ['custom-tag'].includes(tag),
        },
      },
    }),
    Pages(),
    Layouts(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue/macros',
        '@vueuse/core',
        '@vueuse/head',
      ],
      dts: './src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
      dirs: ['./src/composables/**'],
      vueTemplate: true,
    }),
    Components({
      dts: './src/components.d.ts',
      directoryAsNamespace: true,
      deep: true,
      resolvers: [PrimeVueResolver({})],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    /* proxy: {
      '/api/': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: true,
      },
    }, */
    port: 3100,
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        // additionalData: `
        //   /* import global styles with relative path here */
        // `,
      },
    },
  },
});
