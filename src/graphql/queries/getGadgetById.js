const { GraphQLString } = require('graphql');
const gadgetGraphQLType = require('./../gadgetType');
const Gadget = require('../../models/gadgets');

module.exports = {
  type: gadgetGraphQLType,
  args: { id: { type: GraphQLString } },
  resolve: (parent, args) => Gadget.findById(args.id)
}