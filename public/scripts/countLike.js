// jshint esversion: 6
$(() => {

  const express = require('express');
  const router = express.Router();
  const mongo = require('mongodb');
  const assert = require('assert');

  const url = "mongodb://localhost:27017/tweeter";

  mongo.connect(url, (err, db) => {
    assert.equal(null, err);

    let likeCount = 1;
    $("#old-tweets").on('click', "#like", function(event){
      console.log('da');
    });
  
  



    $(this).parent().find(".likeCount").text(count++);
  });

});