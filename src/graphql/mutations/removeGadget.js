const { GraphQLString } = require('graphql');
const gadgetGraphQLType = require('../types/gadgetType');
const Gadget = require('../../models/gadgets');

module.exports = {
  type: gadgetGraphQLType,
  args: {
    id: { type: GraphQLString }
  },
  async resolve(parent, args) {
    return Gadget.findByIdAndDelete(args.id)
  }
}