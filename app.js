const Koa = require('koa');
const loaders = require('./loaders');

const startServer = async () => {
    const app = new Koa();

    await loaders.init({koaApp: app});

    app.listen(3000);

    app.on('error', err => log.error(`Server error: ${err}`));
}
startServer();