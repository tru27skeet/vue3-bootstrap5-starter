import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        //https: true,
        port: 5179,
        strictPort: true,
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        rollupOptions: {
            //external: ['bootstrap'],
            // output: {
            //     manualChunks(id) {
            //         console.log('chunk id: ', id); // id is the file name in most cases
            //         if (id.includes('node_modules')) {
            //             return 'vendor';
            //         }
            //     }
            // }
        }
    }
})
