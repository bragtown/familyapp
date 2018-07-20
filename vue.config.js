module.exports = {
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/api/*': {target:'http://family-local.bragtown.com:9000'}
        },
        port:3030   
    }
}