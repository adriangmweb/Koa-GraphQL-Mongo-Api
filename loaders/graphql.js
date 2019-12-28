const graphqlHTTP = require('koa-graphql');
const schema = require('../graphql/schema');
const mount = require('koa-mount');

module.exports = ({app}) => {
    app.use(mount('/graphql', graphqlHTTP({
        schema: schema,
        graphiql: true
    })));
}