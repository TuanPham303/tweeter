"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet);
      callback(null, true);
    },

    //save like
    saveLike: function(id, callback) {
      let mongoId = require("mongodb").ObjectID;
      db.collection("tweets").findOneAndUpdate(
        {"_id": mongoId(id)},
        {$inc:{"like": 1}}    
      );
      callback(null, true);
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {       
      let promise = db.collection("tweets").find().sort({"created_at": -1}).toArray();
      promise.then(tweets => {
        callback(null, tweets);
      });
    }
  };
}
