const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const gadgetGraphQLType = require('./../gadgetType');
const Gadget = require('../../models/gadgets');

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    gadget: {
      type: gadgetGraphQLType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Gadget.findById(args.id)
      }
    }
  }
})