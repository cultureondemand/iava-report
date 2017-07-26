/*
* Define horizontal stacked bar graph 
*/
function stacked(){
  // Default settings
  var $el = d3.select("body")
  var width = 960;
  var height = 500;
  var color = "steelblue";
  var margin = {top: 10, right: 30, bottom: 30, left: 30};


  var svg, xScale, yScale, xAxis, yAxis, line, years;
/////////////////////////  var x = d3.scale.linear().range([0, width]);



  var object = {};

  // Method for render/refresh graph
  object.render = function(){
    if(!svg){ // Render first time
stack = d3.layout.stack();



stack(data);  //d3 stack function on the dataset defined & modified above



        var data = data.map(function(group) {
            return group.map(function(d) {
                // Invert the x and y values, and y0 becomes x0
                return {
                    x: d.y,
                    y: d.x,
                    x0: d.y0
                };
            });

 });

      svg = $el.append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//////////////      x.domain(d3.extent(data, function(d) { return d.x; }));

var xScale = d3.scale.linear()
            .domain([0, xMax])
            .range([0, width]);



years = data[0].map(function (d) {
    return d.y;
});
       yScale = d3.scale.ordinal()
            .domain(years)
            .rangeRoundBands([0, height], .1);


     
xAxis = d3.svg.axis()
    .scale(xScale)
    .orient('bottom');

      
yAxis = d3.svg.axis()
    .scale(yScale)
    .orient('left');

     ////////////////     y.domain(d3.extent(data, function(d) { return d.y; }));

      svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

      svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)

      svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("stroke", color)
        .attr("d", line);
    }else{ //Refresh
      object.data(data);
      x.domain(d3.extent(data, function(d) { return d.x; }));
      y.domain(d3.extent(data, function(d) { return d.y; }));

      svg.select("g.y")
        .transition()
        .duration(1000)
        .call(yAxis);

      svg.select("g.x")
        .transition()
        .duration(1000)
        .call(xAxis);

      svg.selectAll("path.line")
       .datum(data)
        .transition()
        .duration(1000)
       .attr("d", line);
    } 
    return object;
  };

  // Getter and setter methods






  object.data = function(value){
    if (!arguments.length) return data;
    data = value;
    return object;
  };

  object.$el = function(value){
    if (!arguments.length) return $el;
    $el = value;
    return object;
  };

  object.width = function(value){
    if (!arguments.length) return width;
    width = value;
    return object;
  };







  object.height = function(value){
    if (!arguments.length) return height;
    height = value;
    return object;
  };

 //// object.color = function(value){
 ///   if (!arguments.length) return color;
 ////   color = value;
  ////  return object;
 ////// };
  object.x = function(value){
    if (!arguments.length) return x;
    x = value;
    return object;
  }





  object.x = function(value){
    if (!arguments.length) return x;
    x = value;
    return object;
  }




object.data = function (value) {
        return value.values.map(function (o, i) {
            // Structure it so that your numeric
            // axis (the stacked amount) is y
            return {
                //all the data that's going to be used in the chart
                //y-axis has the count; x-axis has the year; also passing in names for tooltips
                y: o.count,
                x: o.year,
                n: o.names_list
            };
                return object;

        });
    };










  return object;
};