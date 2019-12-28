const mongooseLoader = require('./mongoose');
const graphqlLoader = require('./graphql');

module.exports.init = async({koaApp}) => {
    await mongooseLoader();
    console.log('MongoDB initialized');
    await graphqlLoader({app: koaApp});
    console.log('GraphQL initialized');
}