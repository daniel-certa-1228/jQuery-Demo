console.log( "main.js" );

$(document).ready(function(){
//javascript
	// document.getElementById("top-article");
//jquery
	var article = $('#top-article').html();
	console.log( "article", article );
// ???
	var button =$('button');

	console.log( "button.html()", button );
	
//
	var mainArticles = $(".article--main");

	mainArticles.each(function(arrayIndex, currentElement) {
		console.log( "Array Element", arrayIndex, $(currentElement).html() );
	})

//
	var umbrellaOpen = $('h1[umbrella="open"]');
	console.log( "umbrellaOpen", umbrellaOpen.html() );
//
	var umbrellaClosed = $('div[umbrella="closed"]');
	console.log( "umbrellaClosed", umbrellaClosed.html() );
//
	var allChildren = $('.container').children();
	console.log( "allChildren", allChildren );
//
	console.log( "h1:", $('.container').children('h1') );
//
	console.log( "third li:", $('#letters').children('.letter').eq(2).html() );
//
	console.log( "parent:", $('.album').parents('.song-container').attr("index") );

//////////////////////////////////////////////////////////////////////

	$.ajax({
		url:"javascripts/songs.json"
	}).done(functionIwantJqueryToExecute)

	function functionIwantJqueryToExecute(songlist) {
		console.log( "songlist.songs", songlist.songs );

		for (let i = 0; i < songlist.songs.length; i++) {
			let currentSong = songlist.songs[i];
			console.log( "currentSong", currentSong );
			$("#list-of-songs").append('<h1>'+currentSong.title+'</h1>');
			$("#list-of-songs").append(`<p>Performed by ${currentSong.artist}</p>`)
			$("#list-of-songs").append(`<p>On the album ${currentSong.album}</p>`)
		};
	}


});