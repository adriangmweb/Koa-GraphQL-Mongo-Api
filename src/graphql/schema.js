const { GraphQLSchema } = require('graphql');
const Mutations = require('./mutation')
const RootQuery = require('./queries/rootQuery')

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});