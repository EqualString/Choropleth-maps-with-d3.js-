            /* 
			|------------------------------------------|
			| Vizualizacija EU Parlamentarnih izbora   |
			|                - S&D -                   |
			|------------------------------------------|
			| @author:  Egredžija Alen                 |
			| @version: 1.5 (12.6.2014)                |
			| @website: http://aquafeed.cleverapps.io  |
			|------------------------------------------|
			*/
			
			//Preloader
			Royal_Preloader.config({
				mode:           'text', // 'number', "text" ili "logo"
				text:           'EU Izbori 2014 - S&D',
				timeout:        0,
				showInfo:       true,
				opacity:        1,
				background:     ['#ef3b2c']
			});
			
			/** Dopunske funkcije za bojanje choropletha **/
				
			function Colorize()
			{ 
				var retcolor;	
				for (var i = 0; i < data.length ; i++)
				{   
				   if(data[i].id == this.id) 
				    { 
						retcolor = getColor((data[i].sd)/(data[i].seats)*100);
					}
				}
			  return retcolor; 
			}
			
			function getColor(d) 
			{
				return d > 49  ? '#67000d' :
					   d > 40 ? '#a50f15' :
					   d > 30  ? '#cb181d' :
					   d > 25  ? '#ef3b2c' :
					   d > 20  ? '#fb6a4a' :
					   d > 10  ? '#fc9272' :
					   d > 5  ? '#fcbba1' :
								  '#fee0d2';
			}
				
			function hover()
			{
				d3.select(this).transition()
					.duration(340)
					.style("stroke-width","30");
				var p = this;
				d3.select("#tooltip")
					.style("left", (d3.event.pageX) + "px")     
					.style("top", (d3.event.pageY - 30) +"px")
					.select("#country")
					.text(function() 
						{  
							for (var i = 0; i < data.length ; i++)
								{   
									if(data[i].id == p.id) 
										{ 
											return data[i].name;
										}
								}
						});
				d3.select("#value")
					.text(function()
						{  
							for (var i = 0; i < data.length ; i++)
								{   
									if(data[i].id == p.id) 
										{ 
											return data[i].sd;
										}
								}
						});
				d3.select("#value2")
					.text(function()
						{  
							for (var i = 0; i < data.length ; i++)
								{   
									if(data[i].id == p.id) 
										{ 
											return data[i].seats;
										}
								}
						});
			    d3.select("#tooltip").classed("hidden", false);
			}
			function out()
			{
				d3.select(this).transition()
					.duration(380)
					.style("stroke-width","8");
				d3.select("#tooltip").classed("hidden", true);
			}