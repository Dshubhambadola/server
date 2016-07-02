var restful = require('node-restful');

module.exports = restful.model('movie',app.models.movie).methods(['get','put','post','delete']);



rest.register(app, route);


return function (req, res, next) {
    next();
};
