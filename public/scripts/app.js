/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 // jshint esversion: 6
$(() => {
  var data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function createTweetElement(tweetElement){
    var $tweet = $("<article>", {"class": "tweet"});
    var $header = $("<header>");
    var $img = $("<img>").addClass("avatar").attr({
      "src": tweetElement.user.avatars.small,
      "alt": "avatar"
    });
    var $name = $("<p>").addClass("name").text(tweetElement.user.name);
    var $handle = $("<p>").addClass("handle").text(tweetElement.user.handle);

    var $content = $("<div>").addClass("content").append($("<p>").text(tweetElement.content.text));
    
    var $footer = $("<footer>");
    var $time = $("<p>").addClass("time").text(tweetElement.created_at);
    var $icons = $("<div>", {"class": "icons"});

    $tweet.append($header, $content, $footer);
    $header.append($img, $name, $handle);
    $footer.append($time, $icons);
    $icons.append('<i class="icon fa fa-flag" aria-hidden="true"></i>',
                '<i class="icon fa fa-retweet" aria-hidden="true"></i>',
                '<i class="icon fa fa-heart" aria-hidden="true"></i>');

    return $tweet;
  }

  function renderTweet(tweetsData){
    tweetsData.forEach((ele) => {
      var $tweet = createTweetElement(ele);
      $("#old-tweets").append($tweet);
    });
  }
  
  renderTweet(data);


  

});
