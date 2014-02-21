$(document).ready(function(){
	var userJson;
	$("#searchrepos").click(function(){
		urlbase = "https://api.github.com/users/";
		urlappend = "/repos";
		username = $("#searchrepos").value;
		$.get(urlbase + "tizionario" + urlappend, function(data){
			userJson = data;
			
			//console.log(data);
			$(userJson).each(function(index, value){
				console.log(value.name);
				console.log(value.description);
				
			})
		}, "json");
	});
})