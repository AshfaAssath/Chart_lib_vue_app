import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {} // or provide specific env vars if needed
  },
  build: {
    lib: {
        entry: 'src/main.js',    // your entry file where mountApp is exported
        name: 'VueApp',
        formats: ['umd'],
        fileName: 'VueApp'
    },
    rollupOptions: {
        external: [],
        output: {
            globals: {}
        }
    }
  },
  css: {
    preprocessorOptions: {
        scss: {
            // Optional: Import global SCSS variables and mixins automatically
            additionalData: `
              @use "./src/styles/font-icons-universal.scss" as *;
              `,

            // Enable modern Dart Sass JS API to avoid legacy-js-api deprecation warning
            sassOptions: {
                api: 'modern-compiler'
            }
        }
    }
  }
})
