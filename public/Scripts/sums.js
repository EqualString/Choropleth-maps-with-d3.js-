            /* 
			|------------------------------------------|
			| Vizualizacija EU Parlamentarnih izbora   |
			|          - Zajednički prikaz -           |
			|------------------------------------------|
			| @author:  Egredžija Alen                 |
			| @version: 1.5 (12.6.2014)                |
			| @website: http://aquafeed.cleverapps.io  |
			|------------------------------------------|
			*/
			
			//Preloader
			Royal_Preloader.config({
				mode:           'text', // 'number', "text" ili "logo"
				text:           'EU Izbori 2014 - Zajednički prikaz',
				timeout:        0,
				showInfo:       true,
				opacity:        1,
				background:     ['#CEC8B3']
			});
			
			/** Dopunske funkcije za bojanje choropletha **/
				
			function Colorize()
			{ 
				var retcolor;	
				for (var i = 0; i < data.length ; i++)
				{   
				   if(data[i].id == this.id) 
				    { 
						if (data[i].ep > data[i].sd) retcolor = '#214EB5' ;
						else if (data[i].sd > data[i].ep) retcolor = '#ef3b2c';
						 else retcolor = '#EAE3CA';
					}
				}
			  return retcolor; 
			}
				
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
						{  for (var i = 0; i < data.length ; i++)
								{  if(data[i].id == p.id) 
										{ 
											if (data[i].ep > data[i].sd) return "EPP" ;
												else if (data[i].sd > data[i].ep) return "S&D";
													else return "Jednak broj zastupnika";
										}
								}
						});
					d3.select("#value2")
				    .text(function()
						{  for (var i = 0; i < data.length ; i++)
								{  if(data[i].id == p.id) 
										{ 
											if (data[i].ep > data[i].sd) return data[i].ep ;
												else if (data[i].sd > data[i].ep) return data[i].sd;
													else return data[i].ep;
										}
								}
						});
					d3.select("#value3")
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
                     d3.select("#tooltip").classed("hidden", false);//Mijenja hidden u false, te prikazuje tooltip
					
				}
			function out()
			{
				d3.select(this).transition()
					.duration(380)
					.style("stroke-width","8");
				d3.select("#tooltip").classed("hidden", true);
            }