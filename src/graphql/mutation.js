const { GraphQLObjectType } = require('graphql');
const mutations = require('./mutations')

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: mutations
})

module.exports = Mutation;