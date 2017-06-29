// IMPORT DATA
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var friends = require("../data/friends");

module.exports = function(app){

	// Display the API
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

	// Post new survey data to the API
	app.post("/api/friends", function(req, res){
		friends.push(req.body);
		

//compatibility logic to compare the existing friends for the best match
  var comparisonArray = [];
  var newFriendScores= req.body.scores;
  
  //loop through each exising friend to compare scores
  for (i = 0;i < friends.length; i++) {
      var scores = friends[i].scores;

      //loop through each score for the friend in this position    
      var comparisonArray = [];
      for (j = 0; j < scores.length; j++) {
        //compare the variance for each score compared to the new friend's score
        var comparison = Math.abs(scores[j] - newFriendScores[j]);
        comparisonArray.push(comparison);
      }
      
      //sum each value in the comparison array and push the total to the varianceArray
      var summed = eval(comparisonArray.join('+'));
      comparisonArray.push(summed);
  }
  
  //loop through the comparisonArray and determine which value is the lowest, therefore best match
      console.log("comparisonArray: " + comparisonArray);
      var bestMatch = comparisonArray.indexOf(Math.min.apply(null, varianceArray));
      console.log("bestMatch: " + bestMatch);   
       
    res.json(bestMatch); 
	});
}