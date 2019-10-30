//Pull in Dependencies required

const path = require('path');

//Import list of friends entries

const friends = require('../data/friends.js');

//Export two APIs routes

module.exports = function(app) {
  //Display a JSON of all possible friends
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });

  //Incoming survey entries
  app.post('/api/friends', function(req, res) {
    //User input object
    const userInput = req.body;
    const userResponses = userInput.scores;
    // Compute best friend match
    const matchName = '';
    const matchImage = '';
    //Initial value comparison
    var totalDifference = 10000;
    //Compatibility Logic
    // check all your system friends list
    for (const i = 0; i < friends.length; i++) {
      //calculate differences for each question
      const diff = 0;
      for (const j = 0; j < userResponses.length; j++) {
        diff += Math.abs(friends[i].scores[j] - userResponses[j]);
      }

      if (diff < totalDifference) {
        totalDifferences = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
      }
    }
    // Adding New User to your friend list
    friends.push(userInput);

    //Sending a Response
    res.json({ status: 'Ok', matchName: matchName, matchImage: matchImage });
  });
};
