//Pull Dependencies
const path = require('path');

//Export HTML routes
module.exports = function(app) {
  // GET route that leads to survey
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  //USE Home page route
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });
};
