import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
let root = process.cwd()
// https://vitejs.dev/config/
const resolve = (dir: string) => path.join(__dirname, dir)

export default ({ command, mode }) => {
    let env = loadEnv(mode, root)
    return defineConfig({
        plugins: [vue()],
        base: env.VITE_BASE_URL,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        server: {
            proxy: {
                // '/api': {
                //     target: env.VITE_CHECKIN_API,
                //     changeOrigin: true,
                //     rewrite: (path) => path.replace(/^\/api/, '')
                // },
            }
        }
    })
}
