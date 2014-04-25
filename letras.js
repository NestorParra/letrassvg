window.onload = function()
{
	//alert("Hola");

	var color = "red";
	var dibujar = SVG('divsvg').size("100%", 500);
	var image = dibujar.image('moto.jpg');
    image.size("100%", "100%");
    image.hide();


	var letra N = [[150,20], [150, 0], [0, 0], [0, 40], [130, 130], [0, 130], 
				  [0, 150], [150, 150], [150, 110], [20, 20], [150, 20]];
	var letraP = [[150, 20], [150, 0], [0, 0], [0, 110], [70, 110], [70, 20], 
				  [150,20]; 
	var continua = dibujar.polyline(letraN).fill("none").stroke({width : 4, color: 'Green'}).attr({ fill: color });
	continua.animate(1000).plot(letraP).loop();

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
