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


var donutchart = d3.select("#"+name)
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
	    

	    
	    
var path = donutchart.selectAll("path")
    .data(pie(dataset.apples))
 	 .enter().append("path")
.attr("class","donut")

	    
/////////slice.append("path")
    .attr("fill", function(d, i) { return color(i); })
    .attr("d", arc);
 
 
 
	iii++;

};	


		
d3.select(window).on('resize', resize);

function resize () {
	var width = parseInt(d3.select("body").selectAll("svg").style("width"));
	//console.log(width);
	//console.log(bar);
}
