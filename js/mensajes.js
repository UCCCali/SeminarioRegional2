$(function(){

	cargarTweets(10, 0);

	function cargarTweets(count, maxId){

		var URL = 'https://prd-dot-pollappusinturik.appspot.com/_ah/api/socialnetworkendpoint/v1/getAllTweetsPagination2';

	 	$.ajax({

	 		url: URL,
	 		type: 'GET',
	 		dataType: 'jsonp',
	 		contentType: 'application/json',
	 		data: {
				application: 'mobile',
				idTransaction: 'aabbccdd',
				pageNumber: 0,
				pageSize: 0,
				user: 'jggomez',
				count: count,
				maxId: maxId
			},
			success: function(datos){
				pintarTweets(datos);
				console.log(datos);
			},
			error: function(xhr, ajaxoptions, thrownError){
				console.log('Error => ' + xhr.status);
			}

	 	});

	}

	function pintarTweets(data){
			console.log("cargar => "+data);
		
			$.each(data.tweets, function(index, tweet){
				var plantilla = "<h3>"+ tweet.text +"</h3>";

				$('.tweets').append($(plantilla).fadeIn(function(){
						$(this).css("display", "block");
					}
				));
			});
		

	}



});