const { GraphQLObjectType, GraphQLList } = require('graphql');
const gadgetGraphQLType = require('./../gadgetType');
const Gadget = require('../../models/gadgets');

module.exports = {
  type: new GraphQLList(gadgetGraphQLType),
  resolve: () => Gadget.find()
}