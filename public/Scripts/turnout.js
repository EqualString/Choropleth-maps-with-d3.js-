			/* 
			|------------------------------------------|
			| Vizualizacija EU Parlamentarnih izbora   |
			|             - izlaznost -                |
			|------------------------------------------|
			| @author:  Egredžija Alen                 |
			| @version: 1.5 (12.6.2014)                |
			| @website: http://aquafeed.cleverapps.io  |
			|------------------------------------------|
			*/
			
			//Preloader
			Royal_Preloader.config({
				mode:           'text', // 'number', "text" ili "logo"
				text:           'EU Izbori 2014 - Izlaznost',
				timeout:        0,
				showInfo:       true,
				opacity:        1,
				background:     ['#74c476']
			});
			
			/** Dopunske funkcije za bojanje choropletha **/
				
			//Fja za bojanje grafa, poziva se za svaku od država
			function Colorize()
			{ var retcolor;//Varijabla preko koje ćemo vratiti vrijednost za ispunjavanje
					
			   for (var i = 0; i < data.length ; i++)//Prolazi 28 puta, kroz sve elemente u data
				{   
				   if(data[i].id == this.id) 
				   { retcolor = getColor(data[i].turnout);}
				   //console.log(""+data[i].turnout+""+retcolor+"");
				}
			  return retcolor;
				  
			}
		
			//Fja za odabir boja pomoću postotka...Brew za choropleth, izabere se stil i dobije : http://colorbrewer2.org/ 
			function getColor(d) 
			{
				return d > 80  ? '#00441b' :
					   d > 70  ? '#006d2c' :
					   d > 58  ? '#238b45' ://Iz razloga jer mi je bilo žao ne pokriti Italiju i Grčku... 
					   d > 50  ? '#41ab5d' :
					   d > 40  ? '#74c476' :
					   d > 30  ? '#a1d99b' :
					   d > 20  ? '#c7e9c0' :
								  '#e5f5e0';
			}
			
			/** Dopunske fje za interakciju s kartom **/
			
			//Fje za hover mišem
			function hover()
			{
				d3.select(this).transition()
					.duration(340)
					.style("stroke-width","30")
					var p = this;
					d3.select("#tooltip")
					.style("left", (d3.event.pageX) + "px")     
					.style("top", (d3.event.pageY - 30) +"px")
					.select("#country")
					.text(function() //Vraća ime države u tooltip
						{  
							for (var i = 0; i < data.length ; i++)
								{   
									if(data[i].id == p.id) 
										{ 
											//console.log(""+data[i].name+"");
											return data[i].name;
										}
									
								}
						
						});
				d3.select("#value")
					.text(function()//Vraća postotak, iz nekog razloga nije radilo skupa s prijašnjim, nego je potreban drugi d3.select() poziv 
						{  
							for (var i = 0; i < data.length ; i++)
								{   
									if(data[i].id == p.id) 
										{ 
											return data[i].turnout;
										}	
								}
						});
				d3.select("#tooltip").classed("hidden", false);//Mijenja hidden u false, te prikazuje tooltip
			}
			
			function out()
			{
				d3.select(this).transition()
					.duration(380)
					.style("stroke-width","8");//Mora se pozvati inače bi ostala debljina granica
				//Skrivanje tooltipa
				d3.select("#tooltip").classed("hidden", true);
			}
			