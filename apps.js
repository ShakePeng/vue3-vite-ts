const fs = require('fs')
const path = require('path')
const express = require('express')
const { createServer, loadEnv } = require('vite')
const serveStatic = require('serve-static')
const cookieParser = require('cookie-parser')
const { createProxyMiddleware } = require('http-proxy-middleware')

const mode = process.env.NODE_ENV || 'development'
const root = process.cwd()
let env = loadEnv(mode, root)

async function render() {
    const app = express()
    app.use(cookieParser())
    app.use(
        `${env.VITE_BASE_URL}checkinApi`,
        createProxyMiddleware({
            target: env.VITE_CHECKIN_API,
            changeOrigin: true,
            pathRewrite: {
                [`${env.VITE_BASE_URL}checkinApi`]: '/'
            },
            onProxyRes: function (proxyRes, req, res) {
                proxyRes.headers['Content-Type'] = 'application/json'
            }
        })
    )
    let vite
    if (mode == 'development') {
        vite = await createServer({
            mode: 'development',
            envFile: true,
            server: {
                middlewareMode: true
            }
        })

        app.use(vite.middlewares)
    } else {
        app.use(`${env.VITE_BASE_URL}assets`, serveStatic(path.resolve('./dist/assets'), { index: false }))
    }
    app.use('*', async (req, res) => {
        const url = req.originalUrl
        let template
        if (mode == 'development') {
            template = fs.readFileSync(path.resolve('index.html'), 'utf-8')
            template = await vite.transformIndexHtml(url, template)
        } else {
            template = fs.readFileSync(path.resolve('dist/index.html'), 'utf-8')
        }

        res.status(200).set({ 'Content-Type': 'text/html' }).end(template)
    })

    app.listen(env.PORT || 3000, () => {
        console.log(`server start on http://localhost:${env.PORT || 3000}`)
    })
}

render()
