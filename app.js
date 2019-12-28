const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema')
const loaders = require('./loaders');

const startServer = async () => {
    const app = new Koa();

    await loaders.init();

    app.listen(3000);

    app.on('error', err => log.error(`Server error: ${err}`));

    app.use(mount('/graphql', graphqlHTTP({
        schema: schema,
        graphiql: true
    })));
}
startServer();