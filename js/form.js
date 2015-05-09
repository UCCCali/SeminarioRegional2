$(function(){

	$('.titular-publicar').on("click", mostrarFormulario);

	function mostrarFormulario(){
		$('form').slideToggle();
	}

	$('input[type=submit]').click(crearPost);

	function crearPost(evt){

		evt.preventDefault();

		var titulo = $('#titulo').val();
		var autor = $('#autor').val();
		var tag = $('#tag').val();
		
		var plantilla = '<article class="post"> \
			<div class="post-descripcion">  \
				<figure class="imagen">  \
					<img src="../images/foto.jpg">  \
				</figure>  \
				<div class="post-detalles"> \
					<h2 class="detalle-titulo">'+titulo+'</h2> \
					<p class="detalle-autor"> \
						por <a href="#">'+autor+'</a> \
					</p> \
					<a class="detalle-tag" href="#">'+tag+'</a> \
					<p class="detalle-fecha">Hace <strong>20</strong> min </p> \
				</div> \
			</div> \
			<div class="post-acciones"> \
				<div class="acciones-votos"> \
					<a class="votos-up" href="#"></a> \
					<span class="votos-total">16</span> \
					<a class="votos-down" href="#"></a> \
				</div> \
				<div class="acciones-datos"> \
					<a class="datos-comentarios" href="#"> \
						10 \
					</a> \
					<a class="datos-estrellita" href="#"> \
					</a> \
				</div> \
			</div>  \
		</article>';

		$('.posts').prepend($(plantilla).fadeIn(function(){
			$(this).css("display", "inline-block");
		}));

		$('input[type=text]').val('');

		$('form').slideUp();

	}

	function conteo(numeroInicial){

		var contador = numeroInicial || 0;

		return{

			up: function(){
				return ++contador;
			},

			down: function(){

				if((contador - 1) >= 0){
					contador--;
				}			

				return contador;
			}

		};
	}

	$('.votos-total').each(function(index, element){

		var fntCont = conteo(element.innerHTML);

		$(element).siblings('.votos-up').click(function(evt){
			evt.preventDefault();
			$(element).html(fntCont.up());
		});

		$(element).siblings('.votos-down').click(function(evt){
			evt.preventDefault();
			$(element).html(fntCont.down());
		});

	});


	var geolocalizacion = navigator.geolocation;
	propiedades = {};

	function geoExito(posicion){
		console.log(posicion);
		var lat = posicion.coords.latitude;
		var lon = posicion.coords.longitude;
		var img = new Image();

		img.src = "http://maps.googleapis.com/maps/api/staticmap?zoom=15&size=300x300&markers=color:red&sensor=false&center="+lat+","+lon;

		$('.mapa').append(img);

	}

	function geoError(error){
		console.log("error -> " + error.code + ' -- ' + error.message);
	}

	geolocalizacion.getCurrentPosition(geoExito, geoError, propiedades);

});