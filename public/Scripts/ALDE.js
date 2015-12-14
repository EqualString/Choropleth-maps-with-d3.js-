 /* 
			|------------------------------------------|
			| Vizualizacija EU Parlamentarnih izbora   |
			|                - ALDE -                  |
			|------------------------------------------|
			| @author:  Egredžija Alen                 |
			| @version: 1.5 (12.6.2014)                |
			| @website: http://aquafeed.cleverapps.io  |
			|------------------------------------------|
			*/
			
			//Preloader
			Royal_Preloader.config({
				mode:           'text', // 'number', "text" ili "logo"
				text:           'EU Izbori 2014 - ALDE',
				timeout:        0,
				showInfo:       true,
				opacity:        1,
				background:     ['#fec44f']
			});
			
			/** Dopunske funkcije za bojanje choropletha **/
				
			function Colorize()
			{ 
				var retcolor;	
				for (var i = 0; i < data.length ; i++)
				{   
				   if(data[i].id == this.id) 
				    { 
						retcolor = getColor((data[i].ad)/(data[i].seats)*100);
					}
				}
			  return retcolor; 
			}
			
			function getColor(d) 
			{
				return d > 49  ? '#662506' :
					   d > 40 ? '#993404' :
					   d > 30  ? '#cc4c02' :
					   d > 25  ? '#ec7014' :
					   d > 20  ? '#fe9929' :
					   d > 10  ? '#fec44f' :
					   d > 5  ? '#fee391' :
								  '#fff7bc';
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
											return data[i].ad;
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