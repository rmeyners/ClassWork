
$(document).ready(function(){

	var searchTerm;
	var numRecords = [];
	var startYear;
	var endYear;
	var key = "25a179ec37af4722a95cd2fdd571b65e"

	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=";

	$("#runSearch").on("click", function(){

		console.log("hi");

	$.ajax({
	  url: url,
	  method: "GET"
	})

	.done(function(result) {
	  console.log(result);

	 for (var i = 0; i < 5; i++){ // change 1 to whatever.length

	   var artTitle = result.response.docs[i].snippet;
	    console.log(artTitle);

	   $("#top-articles").text(artTitle);

	 }
	});
});
});