/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 // jshint esversion: 6

$(() => {

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
    var time = new Date(tweet.created_at);
    var $time = $("<p>").addClass("time").text(time.toLocaleString());
    var $icons = $("<div>", {"class": "icons"});
    
    var $flagIcon = $('<div>').append('<i class="icon fa fa-flag" aria-hidden="true"></i>');
    var $retweetIcon = $('<div>').append('<i class="icon fa fa-retweet" aria-hidden="true"></i>');
    var $heartIcon = $('<div class="like">').append(`<i class="icon fa fa-heart" aria-hidden="true" data-id="${tweet._id}"></i>`);
    var $countLike = $("<div class='countLike'>").text(tweet.like);
    $countLike.appendTo($heartIcon);
    $icons.append($flagIcon, $retweetIcon, $heartIcon);
    $footer.append($time, $icons);
    return $footer;
  }

  function createTweetElement(tweetElement){
    var $tweet = $("<article>", {"class": "tweet"});
    var $header = createTweetHeader(tweetElement.user);
    let $footer = createTweetFooter(tweetElement);
    var $content = $("<div>").addClass("content").append($("<div>").text(tweetElement.content.text));
  
    $tweet.append($header, $content, $footer);
    
    return $tweet;
  }

  function renderTweet(tweetsData){
    $("#old-tweets").append($.map(tweetsData, createTweetElement));
  }

//RENDER OLD TWEETS
  $.ajax({
    url: './tweets',
    method: 'GET',
    success: function(tweetsData){
      renderTweet(tweetsData);
    }
  });

//NEW TWEET 
  $("#click").on("click", (event) => {
    event.preventDefault();
    $(".error").empty();
    if($("textarea").val() !== ''){
      if($("textarea").val().length > 140){
        $("<p>").text("Your tweet is too long. The limit is 140 characters!").css("color", "red").appendTo($(".error"));
      } else {
        $.ajax({
          url: '/tweets',
          method: 'POST',
          data: $("textarea").serialize(),
          success: function(data){
            $("#old-tweets").empty();
            $.ajax({
              url: '/tweets',
              method: 'GET',
              success: function(data){
                renderTweet(data);
                $("textarea").val('');
                $(".counter").text(140);
              }
            });
          }
        });
      }
    } else {
      $("<p>").text("Wanna tweet something?").css("color", "red").appendTo($(".error"));
    }
  });

//TOGGLE COMPOSE 
  $("#compose").click((event) => {
    $(".new-tweet").toggle();
    $("textarea").focus();
  });  
  
//COUNT LIKE
let countLike = 1;
$("#old-tweets").on('click', ".fa-heart", function(event){
  let id = this.dataset.id;
  $.ajax({
    url: '/tweets/like',
    method: 'PUT',
    data: {id: id},
    success: function(data){
      $("#old-tweets").empty();
      $.ajax({
        url: '/tweets',
        method: 'GET',
        success: function(data){
          renderTweet(data);
          $("textarea").val('');
          $(".counter").text(140);
        }
      });
    }
  });
});

});
