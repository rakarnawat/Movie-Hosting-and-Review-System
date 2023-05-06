const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app =>{
    app.use(
        createProxyMiddleware('/api/v1/movies',
        {
            target:'http://localhost:8080',
            changeOrigin:true
        })
    )
}