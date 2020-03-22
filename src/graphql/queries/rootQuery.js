const { GraphQLObjectType } = require('graphql');
const getGadgetById = require('./getGadgetById');
const getAllGadgets = require('./getAllGadgets');

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    gadget: getGadgetById,
    gadgets: getAllGadgets
  }
})