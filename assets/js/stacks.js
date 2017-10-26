var half_perc;

var div = d3.select("body").append("div").attr("class", "toolTip");


//age  
/////drawStackChart(data_a);
//gender
////drawStackChart(data_b);

//gender
////////drawStackChart(data_c);



    function drawStackChart(data) {


var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .rangeRound([height, 0]);



 


var name = "svg"+this.iii;
var legendname = "barlegend"+this.iii;

/////console.log(name);
////////data.sort(function(a, b){return a-b});
//data.sort(d3.descending());
var width = "100%",
    height = 75,
	goal = 100,
	perc_so_far = 0;

var color_range = d3.scale.ordinal()
  .range(["#dcf428","#9aada6", "#c2cec9","#efefef","#888888","#333333","#294636", "#3a634d", "#000000", "#e2d497", "#417a4f", "#cddeb7", "#78933f", "#284635"]);





/* var barlegend = d3.select("#"+legendname)

        // >> Loops through the dataset and appends a rectangle for each value
        barlegend.selectAll('div')
          .data(data)
          .enter()
          .append('div')
	.attr("class","legendbox")
	.attr("width","40px")
	.attr("x","4px")
	.style("background-color",  function(d,i) { return (color_range(i)) } )

        

		.append('div')
	.attr("class","legendtext")
 .html(function(d,i) { return (d.a) } ); */





  var barlegend = d3.select("#legendrow"+iii) 


        // >> Loops through the dataset and appends a rectangle for each value

    ///////////    var legendrect = barlegend.selectAll("rect")

 var keyitem = barlegend.selectAll('div')
  .data(data)
.enter().append("div")
 	.attr("class","legendblock")


        .on("mousemove", function(d){
            div.style("left", d3.event.pageX-60+"px");
            div.style("top", (d3.event.pageY)-136+"px");
            div.style("display", "inline-block");
            div.style("position", "absolute");
            div.html((d.a)+"<h4>"+(d.b)+"%</h4>");
         })

        .on("mouseout", function(d){
            div.style("display", "none");
        })

;

         /////////////////////// barlegend.selectAll('div')
keyitem.append("div")
  .attr("class","legendbox")
 /// .attr("width",40)
 //// .attr("height",10)
///.append("rect")
	///.attr("width",40)
	////.attr("x",4)
.style("background-color",  function(d,i) { return (color_range(i)) } )
    ////////////////////////////  	.attr("class",  function(d,i) { return "legendbox hbar"+i+" thing-"+i } );
  	//////////         .style("fill", function(d,i) { return ("url(#"+name+"_patternbar"+i+")"); })

	keyitem.append('div')
	.attr("class","legendtext")
 	.html(function(d,i) { return (d.a+": <strong>"+d.b+"%</strong>") } );  

 


 

  

	      
       

	///.data(data);
///	barlegend.append("div")
///	.attr("class","legendbox")
////	.style("background-color",  function(d,i) { return (color_range(i)) } );

 ////.html(function(d,i) { return (d.data.a)+"<br>"+(d.data.b)+"%" } );





	//////
	//////
	//////


//console.log(d3.sum(data));
var total_time = d3.sum(data);
var bar_x = 0;
var chart = d3.select("#"+name)
	.attr("width", "100%")
	.attr("height", height);
	bar_x = 0;
	//var chart_width = chart.style("width").replace("px", "");

 ///////////////// <div class="legendbox" style="background-color:#dba028;"></div><div class="legendtext">Very Important</div>

// create the patterns
/////////
/*
var defs = chart.append('svg:defs');

defs
  .append('svg:pattern')
    .attr('id', function(d, i) { return name+"_patternbar0"; })
    .attr('width', 4)
    .attr('height', 4)
    .attr('patternUnits', 'userSpaceOnUse') 
    .attr('patternTransform', 'rotate(15)')

  .append('svg:rect')
    .attr('width', 3)
    .attr('height', 4)
    .attr('transform', 'translate(0,0)')
    .attr('fill', '#dcf428');


 
defs
  .append('svg:pattern')
    .attr('id', function(d, i) { return name+"_patternbar1"; })
    .attr('width', 2)
    .attr('height', 2)
    .attr('patternUnits', 'userSpaceOnUse')

  .append('svg:circle')
    .attr('cx', 1)
    .attr('cy', 1)
    .attr('r', 1)
    .attr('fill', '#9aada6');


 

defs
  .append('svg:pattern')
    .attr('id', function(d, i) { return name+"_patternbar2"; })
    .attr('width', 8)
    .attr('height', 8)
    .attr('patternUnits', 'userSpaceOnUse') 
    .attr('patternTransform', 'rotate(15)')

  .append('svg:rect')
    .attr('width', 6)
    .attr('height', 8)
    .attr('transform', 'translate(0,0)')
    .attr('fill', '#c2cec9');


  
defs
  .append('svg:pattern')
    .attr('id', function(d, i) { return name+"_patternbar3"; })
    .attr('width', 4)
    .attr('height', 4)
    .attr('patternUnits', 'userSpaceOnUse')

  .append('svg:circle')
    .attr('cx', 1)
    .attr('cy', 1)
    .attr('r', 1)
    .attr('fill', '#284635');

 

 

defs
  .append('svg:pattern')
    .attr('id', function(d, i) { return name+"_patternbar4"; })
    .attr('width', 4)
    .attr('height', 4)
    .attr('patternUnits', 'userSpaceOnUse') 
    .attr('patternTransform', 'rotate(15)')

  .append('svg:rect')
    .attr('width', 2)
    .attr('height', 4)
    .attr('transform', 'translate(0,0)')
    .attr('fill', '#cdcdcd');


defs
  .append('svg:pattern')
    .attr('id', function(d, i) { return name+"_patternbar5"; })
    .attr('width', 8)
    .attr('height', 8)
    .attr('patternUnits', 'userSpaceOnUse') 
    .attr('patternTransform', 'rotate(15)')

  .append('svg:rect')
    .attr('width', 7)
    .attr('height', 7)
    .attr('transform', 'translate(0,0)')
    .attr('fill', '#284635');



defs
  .append('svg:pattern')
    .attr('id', function(d, i) { return name+"_patternbar6"; })
    .attr('width', 8)
    .attr('height', 8)
    .attr('patternUnits', 'userSpaceOnUse') 
    .attr('patternTransform', 'rotate(15)')

  .append('svg:rect')
    .attr('width', 1)
    .attr('height', 8)
    .attr('transform', 'translate(0,0)')
    .attr('fill', '#666');



   
*/
/////////
///////




var chart_width = parseInt(d3.select("#"+name).style("width"));
 
/////////var color = d3.scale.category20c();




	//d3.scale.ordinal()
	//.domain(["6TH", "7TH", "5TH", "4TH"])
	//.range(colorbrewer.RdBu[12]);
var bar = chart.selectAll("g")
	.data(data)
	.enter().append("g");
 


/////bar.append("pattern")
////.attr('width', '10')
////.attr('height', '10')
////.attr('patternUnits', 'userSpaceOnUse')
//////.attr('patternTransform', 'rotate(45)')




bar.append("rect")
 .attr("opacity", "1")


 .on("mousemove", function(d){

 	            div.style("left", d3.event.pageX-60+"px");
            div.style("top", (d3.event.pageY)-136+"px");



             div.style("display", "inline-block");
            div.style("position", "absolute");
            div.html((d.a)+"<h4>"+(d.b)+"%</h4>");
         })

        .on("mouseout", function(d){
            div.style("display", "none");
        })





	.attr("width", function(d) { return (d.b) + "%"; } )
	.attr("x", function(d) {
		var prev_perc = perc_so_far;
		var this_perc = (d.b);
		perc_so_far = perc_so_far + this_perc;
////////////////////////		console.log("perc_so_far:" + perc_so_far + "; this_perc:" + this_perc + "; prev_perc:" + prev_perc + ";");
 		return prev_perc + "%";
	})
	.attr("height", height)
.attr("fill",  function(d,i) { return (color_range(i)) } )
	////////.style("fill", function(d,i) { return ("url(#patternsvg"+i+")"+ (color_range(i))); });
//////////////////////////////////////////	.attr("class", "hbar thing-"+i);
	///////////////////////////////////////                .style("fill", function(d,i) { return ("url(#"+name+"_patternbar"+i+")"); })

/////////.attr("class",  function(d,i) { return "hbar"+i+" thing-"+i } )
//////////////////////////////////////////////.style("fill", function(d,i) { return ("url(#patternbar"+i+")"+color_range(i)); })
///////////////////////////////////////////	.style("fill",  function(d,i) { return "hbar"+i+" thing-"+i } )


////	.attr("height", height);
/////	.attr("fill",  function(d,i) { return (color_range(i)) } );
//////////////  .attr("fill", function(d,i) { return ("url(#patternbar"+i+")"+ (color_range(i))); });



perc_so_far = 0;
bar.append("text")
	.attr("class","bartext")
 	.attr("x", function(d) {
		var prev_perc = perc_so_far;
		var this_perc = (d.b);
		var this_cohort = (d.a);
		var half_perc = ((d.b)/2);

		perc_so_far = perc_so_far + this_perc;
////////////////	console.log("perc_so_far:" + perc_so_far + "; this_perc:" + this_perc + "; prev_perc:" + prev_perc + ";");
		return prev_perc + "%";
	})
	//.attr("y", 11)
	.attr("dy", "1.6em")
	.attr("dx",".3em")

 
  	.text(function(d) { 

        if(d.b < 10) {
  return '';
 
        

  ///////////////       
         //////  return '<em>' + d.b + '%</em>';

         /// return (d.b+"%");
        }
   ///////     return (d.data.a+": "+d.data.b + "%");
     /////   return (d.data.a);


  		return d.a+": "+d.b+"%"; });




  





/*

    bar
        .on("mousemove", function(d){
            div.style("left", d3.event.pageX);
            div.style("top", d3.event.pageY);
            div.style("display", "inline-block");
            div.attr("class", "toolTip");
            div.html((d.a)+"<br>"+(d.b)+"%");
         });
    bar
        .on("mouseout", function(d){
            div.style("display", "none");
        });


    */
 




	iii++;

};	




    function changeStackChart(data,name) {


var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .rangeRound([height, 0]);

 

//////var name = "svg"+this.iii;
 var legendname = "barlegend"+this.iii;

/////console.log(name);
////////data.sort(function(a, b){return a-b});
//data.sort(d3.descending());
var width = "100%",
    height = 75,
	goal = 100,
	perc_so_far = 0;
var color_range = d3.scale.ordinal()

  .range(["#dcf428","#9aada6", "#c2cec9","#efefef","#888888","#333333","#294636", "#3a634d", "#000000", "#e2d497", "#417a4f", "#cddeb7", "#78933f", "#284635"]);






  var barlegend = d3.select("#legendrow"+iii) 


        // >> Loops through the dataset and appends a rectangle for each value

    ///////////    var legendrect = barlegend.selectAll("rect")

 var keyitem = barlegend.selectAll('div')
  .data(data)
.enter().append("div")
 	.attr("class","legendblock")


        .on("mousemove", function(d){
            div.style("left", d3.event.pageX-60+"px");
            div.style("top", (d3.event.pageY)-136+"px");
            div.style("display", "inline-block");
            div.style("position", "absolute");
            div.html((d.a)+"<h4>"+(d.b)+"%</h4>");
         })

        .on("mouseout", function(d){
            div.style("display", "none");
        })

;

         /////////////////////// barlegend.selectAll('div')
keyitem.append("div")
  .attr("class","legendbox")
 /// .attr("width",40)
 //// .attr("height",10)
///.append("rect")
	///.attr("width",40)
	////.attr("x",4)
.style("background-color",  function(d,i) { return (color_range(i)) } )
    ////////////////////////////  	.attr("class",  function(d,i) { return "legendbox hbar"+i+" thing-"+i } );
  	//////////         .style("fill", function(d,i) { return ("url(#"+name+"_patternbar"+i+")"); })

	keyitem.append('div')
	.attr("class","legendtext")
 	.html(function(d,i) { return (d.a+": <strong>"+d.b+"%</strong>") } );  

 



 ////
 /////
/*
  var barlegend = d3.selectAll("#legendrow"+iii);
  barlegend.append('div')
  .data(data)
  .enter()
        .append('rect')
	 	.attr("class","legendbox")
		.attr("width","40px")
		.attr("x","4px")

////////////////////////////////	.style("background-color",  function(d,i) { return (color_range(i)) } )
////////////////////////////.attr("class",  function(d,i) { return "hbar"+i+" thing-"+i } )
        
        .style("fill", function(d,i) { return ("url(#"+name+"_patternbar"+i+")"); })

	.append('div')
	.attr("class","legendtext")
 	.html(function(d,i) { return (d.a) } );  
*/
//////
////
 
	      
///.data(data);
///	barlegend.append("div")
///	.attr("class","legendbox")
////	.style("background-color",  function(d,i) { return (color_range(i)) } );
////.html(function(d,i) { return (d.data.a)+"<br>"+(d.data.b)+"%" } );

	//////
	//////
	//////

//console.log(d3.sum(data));
var total_time = d3.sum(data);
var bar_x = 0;
 var chart = d3.select("#"+name)
	.attr("width", "100%")
	.attr("height", height);
	bar_x = 0;

//var chart_width = chart.style("width").replace("px", "");
///////////////// <div class="legendbox" style="background-color:#dba028;"></div><div class="legendtext">Very Important</div>



var chart_width = parseInt(d3.select("#"+name).style("width"));
 
/////////var color = d3.scale.category20c();

	//d3.scale.ordinal()
	//.domain(["6TH", "7TH", "5TH", "4TH"])
	//.range(colorbrewer.RdBu[12]);
var bar = chart.selectAll("g")
	////////.data(data)
	.data(data, function(d) { return d.b; })



	.enter().append("g");
 


/////bar.append("pattern")
////.attr('width', '10')
////.attr('height', '10')
////.attr('patternUnits', 'userSpaceOnUse')
//////.attr('patternTransform', 'rotate(45)')






bar.append("rect")
 .attr("opacity", "1")


 .on("mousemove", function(d){
            div.style("left", d3.event.pageX-60+"px");
            div.style("top", (d3.event.pageY)-136+"px");
            div.style("display", "inline-block");
            div.style("position", "absolute");
            div.html((d.a)+"<h4>"+(d.b)+"%</h4>");
         })

        .on("mouseout", function(d){
            div.style("display", "none");
        })





//////
/////
//	.attr

         .attr("width", 0 )
	.attr("x", function(d) {
		var prev_perc = perc_so_far;
		var this_perc = (d.b);
		perc_so_far = perc_so_far + this_perc;
////////////////////////		console.log("perc_so_far:" + perc_so_far + "; this_perc:" + this_perc + "; prev_perc:" + prev_perc + ";");
 		return prev_perc + "%";
	})
	.attr("height", height)
.attr("fill",  function(d,i) { return (color_range(i)) } )

 ;
////////////////////////////////////	.attr("fill",  function(d,i) { return (color_range(i)) } );
    ///////////////////////////////////////////////
  /////////// taken out for mask ////////  .attr("fill", function(d,i) { return ("url(#patternbar"+i+")"+ (color_range(i))); });
 


 
	bar.attr("x", function(d) {
 
		var prev_perc = perc_so_far;
		var this_perc = (d.b);
		perc_so_far = perc_so_far + this_perc;
/////////////////////	console.log("perc_so_far:" + perc_so_far + "; this_perc:" + this_perc + "; prev_perc:" + prev_perc + ";");
 		return prev_perc + "%";
	})

 


 

	//////////////////////.attrTween("width", function(d) {  
    //////////////////////////        this._current = this._current || d;
    ////////////////////////////        var interpolate = d3.interpolate(this._current, d);
    ////////////////////////////        this._current = interpolate(0);
	//////////////	return (d.b) + "%";
	//////////////////	 } )



bar.append("text")
	.attr("class","bartext")
 	.attr("x", function(d) {
		var prev_perc = perc_so_far;
		var this_perc = (d.b);
		var this_cohort = (d.a);
		var half_perc = ((d.b)/2);

		perc_so_far = perc_so_far + this_perc;
///////////////	console.log("perc_so_far:" + perc_so_far + "; this_perc:" + this_perc + "; prev_perc:" + prev_perc + ";");
		return prev_perc + "%";
	})
	//.attr("y", 11)
	.attr("dy", "1.6em")
	.attr("dx",".3em");

/*
    bar
        .on("mouseover", function(d){
            div.style("left", d3.event.pageX);
            div.style("top", d3.event.pageY);
            div.style("display", "inline-block");
            div.attr("class", "toolTip");
            div.html((d.a)+"<br>"+(d.b)+"%");
         });
    bar
        .on("mouseout", function(d){
            div.style("display", "none");
        });

*/
    

 
  	bar.html(function(d) { 


       

                    if(d.b < 20) {
           return '<span style=font-size:50%;>' + d.b + '%</span>';
       }
   ///////     return (d.data.a+": "+d.data.b + "%");
     /////   return (d.data.a);

 

 
  		return d.a+": "+d.b+"%"; 

  	});

 




   


perc_so_far = 0;




  





	iii++;

};	










		
d3.select(window).on('resize', resize);

function resize () {
	var width = parseInt(d3.select("body").selectAll("svg").style("width"));
	//console.log(width);
	//console.log(bar);
}



 

