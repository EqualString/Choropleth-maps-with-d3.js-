			/* 
			|------------------------------------------|
			| Vizualizacija EU Parlamentarnih izbora   |
			|              - main.js -                 |
			|------------------------------------------|
			| @author:  Egredžija Alen                 |
			| @version: 1.5 (12.6.2014)                |
			| @website: http://aquafeed.cleverapps.io  |
			|------------------------------------------|
			*/
			
			/** Zajedničke funkcije svim choropleth-ima **/
			//Uvoz externog SVG-a
			//SVG karta europe modificirana, preuzeta sa : https://upload.wikimedia.org/wikipedia/commons/b/b3/Blank_map_of_Europe.svg
			var svgMap = d3.select("#map"); //Selektiranje div-a u DOM-u koji će sadržavati kartu
			d3.xml("Map/europe.svg", "image/svg+xml", function(error, mapFragment) { 
				if (error) {console.log(error); return;}
				var svg = mapFragment.getElementsByTagName("svg")[0];
				svgMap.node().appendChild(svg);
			
				//Pozivanje zasebnih funkcija za sve države preko #id-a u svg elementu
				d3.select("#be").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#dk").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#de").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#ie").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#fr").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#it").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#lu").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#nl").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#uk").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#gr").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#es").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#pt").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#se").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#at").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#fi").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#cz").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#ee").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#cy").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#lt").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#lv").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#hu").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#mt").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#pl").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#si").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#sk").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#bg").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#ro").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
				d3.select("#hr").on("mouseover",hover).on("mouseout",out).style("fill",Colorize);
	
			});	
			
			//Podaci, koji sadrže id države(ISO-3116-1-ALPHA2 code in lower case), 
			//Izlaznost u postotku te puno ime za tooltip i podatke o pojedinačnim rezultatima (izvor: http://www.results-elections2014.eu/en/turnout.html)
			var data = [{id:"be",turnout:90,name:"Belgija",ep:4,sd:4,seats:21,ad:6},
			{id:"dk",turnout:56.4,name:"Danska",ep:1,sd:3,seats:13,ad:3},
			{id:"de",turnout:47.9,name:"Njemačka",ep:34,sd:27,seats:96,ad:4},
			{id:"ie",turnout:51.6,name:"Irska",ep:4,sd:0,seats:11,ad:2},
			{id:"fr",turnout:43.5,name:"Francuska",ep:20,sd:13,seats:74,ad:7},
			{id:"it",turnout:60,name:"Italija",ep:17,sd:31,seats:73,ad:0},
			{id:"lu",turnout:90,name:"Luksemburg",ep:3,sd:1,seats:6,ad:1},
			{id:"nl",turnout:37,name:"Nizozemska",ep:5,sd:3,seats:26,ad:7},
			{id:"uk",turnout:36,name:"Ujedinjeno Kraljevstvo",ep:0,sd:20,seats:73,ad:1},
			{id:"gr",turnout:58.2,name:"Grčka",ep:5,sd:4,seats:21,ad:0},
			{id:"es",turnout:45.9,name:"Španjolska",ep:17,sd:14,seats:54,ad:2},
			{id:"pt",turnout:34.5,name:"Portugal",ep:7,sd:8,seats:21,ad:0},
			{id:"se",turnout:48.8,name:"Švedska",ep:4,sd:5,seats:20,ad:3},
			{id:"at",turnout:45.7,name:"Austrija",ep:5,sd:5,seats:18,ad:1},
			{id:"fi",turnout:40.9,name:"Finska",ep:3,sd:2,seats:13,ad:4},
			{id:"cz",turnout:19.5,name:"Češka",ep:7,sd:4,seats:21,ad:4},
			{id:"ee",turnout:36.44,name:"Estonija",ep:1,sd:1,seats:6,ad:3},
			{id:"cy",turnout:43.97,name:"Cipar",ep:2,sd:2,seats:6,ad:0},
			{id:"lt",turnout:44.91,name:"Litva",ep:2,sd:2,seats:11,ad:3},
			{id:"lv",turnout:30.04,name:"Latvija",ep:4,sd:1,seats:8,ad:0},
			{id:"hu",turnout:28.92,name:"Mađarska",ep:12,sd:4,seats:21,ad:0},
			{id:"mt",turnout:74.81,name:"Malta",ep:3,sd:3,seats:6,ad:0},
			{id:"pl",turnout:22.7,name:"Poljska",ep:23,sd:5,seats:51,ad:0},
			{id:"si",turnout:20.96,name:"Slovenija",ep:5,sd:1,seats:8,ad:1},
			{id:"sk",turnout:13,name:"Slovačka",ep:6,sd:4,seats:13,ad:1},
			{id:"bg",turnout:35.5,name:"Bugarska",ep:7,sd:4,seats:17,ad:4},
			{id:"ro",turnout:32.16,name:"Rumunjska",ep:15,sd:16,seats:32,ad:0},
			{id:"hr",turnout:25.06,name:"Hrvatska",ep:5,sd:2,seats:11,ad:2}];
			
			//Onemogućuje povezivanje na 'lažni' link, tj. na '#'
			[].slice.call( document.querySelectorAll('a[href="#"') ).forEach( function(el) {
				el.addEventListener( 'click', function(ev) { ev.preventDefault(); } );
			} );