import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        importToCDN({
            modules: [
                autoComplete('vue'),
                {
                    name: 'element-plus',
                    var: 'ElementPlus',
                    path: 'https://unpkg.com/element-plus/lib/index.full.js',
                },
            ],
        }),
    ],
})