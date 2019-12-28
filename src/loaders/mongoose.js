const mongoose = require('mongoose');
const {mongodb} = require('../config')

module.exports = async () => await mongoose.connect(`mongodb://${mongodb.user}:${mongodb.password}@${mongodb.host}`, {useNewUrlParser: true, useUnifiedTopology: true});