window.onload = function()
{
	alert("estas son mis iniciales");

	var color = "blue";
	var dibujar = SVG('divsvg').size("100%", 400);
	var image = dibujar.image('moto.jpg');
    image.size("100%", "100%");
    image.hide();


	var letraN = [[20,250], [0, 250], [0, 0], [40, 0], [230, 230], [230, 0], 
				  [250, 0], [250, 250], [210, 250], [20, 20], [20, 250]];
	var letraP = [[40, 250], [20, 250], [20, 20], [250, 20], [250, 110], [40, 110], 
				  [40, 90], [230, 90], [230, 40], [40, 40], [40, 250]]; 
	var continua = dibujar.polyline(letraN).fill("none").stroke({width : 4, color: 'black'}).attr({ fill: color });
	continua.animate(2000).plot(letraP).loop();

	for(var i = 1; i <= 7; i++)
	{
		nom_div("opcion_" + i).addEventListener('change', function(event)
		{
			//console.debug(event);
			var ind = event.target.id.split("_");
			switch(Number(ind[1]))
			{
				case 1: continua.attr({fill: this.value}); break;
				case 2: continua.stroke({color : this.value}); break;
				case 3: continua.stroke({width : this.value}); break;
				case 4: continua.attr({opacity: this.value}); break;
				case 5: continua.rotate(this.value); break;
				case 6: continua.scale(this.value); break;
				case 7: //Mostra máscara..
						if(this.value == 1)
						{
							image.show();
							//image.maskWith(continua);
							continua.maskWith(image);
						}
						else
						{
							//continua.remove()
							//image.hide();
							continua.unmask();
							//mask.remove()
						}
						break;
			}
		});
	}

	var animo = true;
	nom_div("controla").addEventListener('click', function(event)
	{
		if(animo)
		{
			this.value = "Continuar";
			continua.pause();
		}
		else
		{
			this.value = "Detener";
			continua.play();
		}
		animo = !animo;
	});
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}
