var half_perc;

var name;

var iii=0;

//age  
/////drawStackChart(data_a);
//gender
////drawStackChart(data_b);

//gender
////////drawStackChart(data_c);

 












    function drawPieChart(dataset) {


///    var donutchart_width = parseInt(d3.select("#sections").style("width"));
///    var donutchart_height = parseInt(d3.select("#sections").style("height"));

var name = "svg"+iii;

var width = 300,
    height = 300,
    radius = Math.min(width, height) / 2;
console.log("radius");

var color = d3.scale.category20();

var pie = d3.layout.pie()
    .sort(null);

var arc = d3.svg.arc()
  .innerRadius(radius - 100)
  .outerRadius(radius - 50);
  /////       .outerRadius(radius)
 /////       .innerRadius(radius - (radius/2.5));


var donutchart = d3.select("#"+name)
    .attr("width", width)
    .attr("height", height)
.attr("class","donut")
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	    
///////// var g = donutchart.selectAll(".arc")
var g = donutchart.selectAll("g")
    .data(pie(dataset.apples))
      .enter().append("g")
      .attr("class", "arc");

      g.append("path")
        // Attach current value to g so that we can use it for animation
        .each(function(d) { this._current = d; })
        .attr("d", arc)
        .style("fill", function(d) { return color(d.dataset.key); });
      g.append("text")
          .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
          .attr("dy", ".35em")
          .style("text-anchor", "middle");
      g.select("text").text(function(d) { return d.dataset.key; });

	    
	    
	    
	    
	    
	    
	    
	    
	    
///////////////////////////////////////////////	var path = donutchart.selectAll("path")
 /////////////////////////////////////////////   .data(pie(dataset.apples))
 ////////////////////////////////////////	 .enter().append("path")
	    
/////////slice.append("path")
  ///////////////////////////////////////////  .attr("fill", function(d, i) { return color(i); })
/////////////////////////////////////////////    .attr("d", arc);
 
	iii++;

};	

		
d3.select(window).on('resize', resize);

function resize () {
	var width = parseInt(d3.select("body").selectAll("svg").style("width"));
	//console.log(width);
	//console.log(bar);
}
