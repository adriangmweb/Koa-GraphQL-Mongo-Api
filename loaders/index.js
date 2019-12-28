const mongooseLoader = require('./mongoose');

module.exports.init = async() => {
    await mongooseLoader();
    console.log('MongoDB initialized');
}