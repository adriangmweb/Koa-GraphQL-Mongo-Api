const Koa = require('koa');

const app = new Koa();

app.listen(3000);

app.on('error', err => log.error(`Server error: ${err}`));

app.use(async ctx => ctx.body = 'Hello Koa');