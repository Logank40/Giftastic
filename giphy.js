$(document).ready(function)

$("#searchButton").on("click", function(){
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchedTerm + "&api_key=dc6zaTOxFJmzC&limit=10";
  
  $.ajax ({
    url: queryURL,
    method: "GET"
  })

  .then(function(response){
    var imageUrl = response.data.image_original_url;
    var
  })
});