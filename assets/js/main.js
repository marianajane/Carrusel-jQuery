$(document).ready(function(){
	var SliderModule = (function(){
		var objeto = {};
		objeto.el = $("#slider-list");
		objeto.items = {
			panel: objeto.el.find("li")
		}
		// Variables
		var SliderInterval
			currentSlider = 0,
			nextSlider = 1,
			lengthSlider = objeto.items.panel.length;

		objeto.init = function(settings){
			objeto.init= function(settings){};
            var output = '';

			//activa slider
			SliderInit();
			for(var i = 0; i < lengthSlider; i++) {
                if (i == 0) {
                    output += '<li class="active"></li>';
                } else {
                    output += '<li></li>';
                }
            }

			$("#slide-circles").html(output).on('click', 'li', function (e){
				var $this = $(this);
                if (currentSlider !== $this.index()) {
                    changePanel($this.index());
                };
            });
        }

		var SliderInit = function() {
			SliderInterval = setInterval(objeto.startSlider, objeto.settings.duratio);
		}

		objeto.startSlider = function(){
			var panels = objeto.items.panel;
				controls = $('#slider-circles li');

			if (nextSlider >= lengthSlider) {
				nextSlider = 0;
				currentSlider = lengthSlider-1;
			}

			//Efectos
			controls.removeClass('active').eq(nextSlider).addClass('active');
			panels.eq(currentSlider).fadeOut("slow");
			panels.eq(nextSlider).fadeIn("slow");

			currentSlider = nextSlider;
			nextSlider += 1;

			SliderInit();
		}


		return objeto;
	});
	SliderModule.init({duration: 6000});
});