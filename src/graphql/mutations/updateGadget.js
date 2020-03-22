const { GraphQLString } = require('graphql');
const gadgetGraphQLType = require('../types/gadgetType');
const Gadget = require('../../models/gadgets');

module.exports = {
  type: gadgetGraphQLType,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    release_date: { type: GraphQLString },
    by_company: { type: GraphQLString },
    price: { type: GraphQLString }
  },
  async resolve(parent, args) {
    const gadget = await Gadget.findById(args.id)
    gadget.name = args.name,
      gadget.release_date = args.release_date
    gadget.by_company = args.by_company
    gadget.price = args.price
    return gadget.save()
  }
}