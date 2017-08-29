var half_perc;

var name;

var iii=0;

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


name = "svg"+iii;

/////console.log(name);
////////data.sort(function(a, b){return a-b});
//data.sort(d3.descending());
var width = "100%",
    height = 80,
	goal = 100,
	perc_so_far = 0;


//console.log(d3.sum(data));
var total_time = d3.sum(data);
var bar_x = 0;
var chart = d3.select("#"+name)
	.attr("width", "100%")
	.attr("height", height);
	bar_x = 0;
	//var chart_width = chart.style("width").replace("px", "");
var chart_width = parseInt(d3.select("#"+name).style("width"));
console.log(chart_width);

/////////var color = d3.scale.category20c();
var color_range = d3.scale.ordinal()
  .range(["#78933f", "#436f61", "#4a683a", "#e4af34", "#e2d497", "#417a4f", "#cddeb7", "#284635"]);

	//d3.scale.ordinal()
	//.domain(["6TH", "7TH", "5TH", "4TH"])
	//.range(colorbrewer.RdBu[12]);
var bar = chart.selectAll("g")
	.data(data)
	.enter().append("g");
	console.log(bar);
bar.append("rect")
	.attr("width", function(d) { return (d.b) + "%"; } )
	.attr("x", function(d) {
		var prev_perc = perc_so_far;
		var this_perc = (d.b);
		perc_so_far = perc_so_far + this_perc;
		console.log("perc_so_far:" + perc_so_far + "; this_perc:" + this_perc + "; prev_perc:" + prev_perc + ";");
 		return prev_perc + "%";
	})
	.attr("height", height)
	.attr("fill",  function(d,i) { return (color_range(i)) } );

perc_so_far = 0;
bar.append("text")
	.attr("x", function(d) {
		var prev_perc = perc_so_far;
		var this_perc = (d.b);
		var this_cohort = (d.a);
		var half_perc = ((d.b)/2);

		perc_so_far = perc_so_far + this_perc;
		console.log("perc_so_far:" + perc_so_far + "; this_perc:" + this_perc + "; prev_perc:" + prev_perc + ";");
		return prev_perc + "%";
	})
	//.attr("y", 11)
	.attr("dy", "1.35em")
 	.text(function(d) { return d.a; })
 	.text(function(d) { return d.b+"%"; });

	iii++;

};	


		
d3.select(window).on('resize', resize);

function resize () {
	var width = parseInt(d3.select("body").selectAll("svg").style("width"));
	//console.log(width);
	//console.log(bar);
}
