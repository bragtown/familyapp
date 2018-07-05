module.exports = {
    devServer: {
        proxy: {
            '/api/*': {target:'http://family.lvh.me:9000'}
        }
    }   
}