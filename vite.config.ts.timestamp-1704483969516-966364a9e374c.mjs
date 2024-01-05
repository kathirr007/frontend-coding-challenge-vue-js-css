// vite.config.ts
import { fileURLToPath, URL } from 'node:url';
import AutoImport from 'file:///D:/Webprojects/Practices/frontend-coding-challenge-vue-js-css/node_modules/.pnpm/unplugin-auto-import@0.17.3_@vueuse+core@10.7.1/node_modules/unplugin-auto-import/dist/vite.js';
import Components from 'file:///D:/Webprojects/Practices/frontend-coding-challenge-vue-js-css/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.3.11/node_modules/unplugin-vue-components/dist/vite.js';
import { defineConfig } from 'file:///D:/Webprojects/Practices/frontend-coding-challenge-vue-js-css/node_modules/.pnpm/vite@5.0.8_@types+node@20.10.6_sass@1.69.7/node_modules/vite/dist/node/index.js';
import vue from 'file:///D:/Webprojects/Practices/frontend-coding-challenge-vue-js-css/node_modules/.pnpm/@vitejs+plugin-vue@5.0.2_vite@5.0.8_vue@3.3.11/node_modules/@vitejs/plugin-vue/dist/index.mjs';
import Pages from 'file:///D:/Webprojects/Practices/frontend-coding-challenge-vue-js-css/node_modules/.pnpm/vite-plugin-pages@0.32.0_vite@5.0.8/node_modules/vite-plugin-pages/dist/index.js';
import Layouts from 'file:///D:/Webprojects/Practices/frontend-coding-challenge-vue-js-css/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.0.8_vue-router@4.2.5_vue@3.3.11/node_modules/vite-plugin-vue-layouts/dist/index.mjs';
import { PrimeVueResolver } from 'file:///D:/Webprojects/Practices/frontend-coding-challenge-vue-js-css/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.3.11/node_modules/unplugin-vue-components/dist/resolvers.js';
const __vite_injected_original_import_meta_url =
  'file:///D:/Webprojects/Practices/frontend-coding-challenge-vue-js-css/vite.config.ts';
const vite_config_default = defineConfig({
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
      '@': fileURLToPath(
        new URL('./src', __vite_injected_original_import_meta_url)
      ),
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
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXZWJwcm9qZWN0c1xcXFxQcmFjdGljZXNcXFxcZnJvbnRlbmQtY29kaW5nLWNoYWxsZW5nZS12dWUtanMtY3NzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxXZWJwcm9qZWN0c1xcXFxQcmFjdGljZXNcXFxcZnJvbnRlbmQtY29kaW5nLWNoYWxsZW5nZS12dWUtanMtY3NzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9XZWJwcm9qZWN0cy9QcmFjdGljZXMvZnJvbnRlbmQtY29kaW5nLWNoYWxsZW5nZS12dWUtanMtY3NzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XHJcbmltcG9ydCBQYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcyc7XHJcbmltcG9ydCBMYXlvdXRzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzJztcclxuaW1wb3J0IHsgUHJpbWVWdWVSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSh7XHJcbiAgICAgIHRlbXBsYXRlOiB7XHJcbiAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XHJcbiAgICAgICAgICAvLyBpc0N1c3RvbUVsZW1lbnQ6ICh0YWcpID0+IFsnY3VzdG9tLXRhZyddLmluY2x1ZGVzKHRhZyksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgUGFnZXMoKSxcclxuICAgIExheW91dHMoKSxcclxuICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgJ3Z1ZScsXHJcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxyXG4gICAgICAgICd2dWUvbWFjcm9zJyxcclxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcclxuICAgICAgICAnQHZ1ZXVzZS9oZWFkJyxcclxuICAgICAgXSxcclxuICAgICAgZHRzOiAnLi9zcmMvYXV0by1pbXBvcnRzLmQudHMnLFxyXG4gICAgICBlc2xpbnRyYzoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRpcnM6IFsnLi9zcmMvY29tcG9zYWJsZXMvKionXSxcclxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXHJcbiAgICB9KSxcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICBkdHM6ICcuL3NyYy9jb21wb25lbnRzLmQudHMnLFxyXG4gICAgICBkaXJlY3RvcnlBc05hbWVzcGFjZTogdHJ1ZSxcclxuICAgICAgZGVlcDogdHJ1ZSxcclxuICAgICAgcmVzb2x2ZXJzOiBbUHJpbWVWdWVSZXNvbHZlcih7fSldLFxyXG4gICAgfSksXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIC8qIHByb3h5OiB7XHJcbiAgICAgICcvYXBpLyc6IHtcclxuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vMTI3LjAuMC4xOjkwMDAnLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sICovXHJcbiAgICBwb3J0OiAzMTAwLFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBkZXZTb3VyY2VtYXA6IHRydWUsXHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNjc3M6IHtcclxuICAgICAgICAvLyBhZGRpdGlvbmFsRGF0YTogYFxyXG4gICAgICAgIC8vICAgLyogaW1wb3J0IGdsb2JhbCBzdHlsZXMgd2l0aCByZWxhdGl2ZSBwYXRoIGhlcmUgKi9cclxuICAgICAgICAvLyBgLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpWCxTQUFTLGVBQWUsV0FBVztBQUNwWixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sYUFBYTtBQUNwQixTQUFTLHdCQUF3QjtBQVB3TSxJQUFNLDJDQUEyQztBQVUxUixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixVQUFVO0FBQUEsUUFDUixpQkFBaUI7QUFBQTtBQUFBLFFBRWpCO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLE1BQ1QsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLFFBQ1IsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLE1BQU0sQ0FBQyxzQkFBc0I7QUFBQSxNQUM3QixhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxLQUFLO0FBQUEsTUFDTCxzQkFBc0I7QUFBQSxNQUN0QixNQUFNO0FBQUEsTUFDTixXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0FBQUEsSUFDbEMsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFPTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsY0FBYztBQUFBLElBQ2QscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSU47QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
