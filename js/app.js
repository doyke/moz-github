//$(function () {
	
	$("#searchbutton").on("Click", function (e) {
	$.get( "https://api.github.com/users/"+$(#user).innertext+"/repos"(, function( data ) {
		$( "#result_page" ).html( data );
		    alert( "Load was performed." );
		});
		
//	});
//});
