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

  function createTweetHeader(user) {
    var $header = $("<header>");
    var $img = $("<img>").addClass("avatar").attr({
      "src": user.avatars.small,
      "alt": "avatar"
    });
    var $name = $("<p>").addClass("name").text(user.name);
    var $handle = $("<p>").addClass("handle").text(user.handle);
    $header.append($img, $name, $handle);
    return $header;
  }
  function createTweetFooter(tweet){
    var $footer = $("<footer>");
    var $time = $("<p>").addClass("time").text(tweet.created_at);
    var $icons = $("<div>", {"class": "icons"});
    $footer.append($time, $icons);
    $icons.append('<i class="icon fa fa-flag" aria-hidden="true"></i>',
                '<i class="icon fa fa-retweet" aria-hidden="true"></i>',
                '<i class="icon fa fa-heart" aria-hidden="true"></i>');
    return $footer;
  }

  function createTweetElement(tweetElement){
    var $tweet = $("<article>", {"class": "tweet"});
    var $header = createTweetHeader(tweetElement.user);
    let $footer = createTweetFooter(tweetElement);
    var $content = $("<div>").addClass("content").append($("<p>").text(tweetElement.content.text));
  
    $tweet.append($header, $content, $footer);
    
    return $tweet;
  }

  function renderTweet(tweetsData){
    $("#old-tweets").append(tweetsData.map(createTweetElement));
  }
  
  renderTweet(data);


  

});
