   var div = d3.select("body").append("div").attr("class", "toolTip");


 function drawHBarChart(data) {



    var name = "svg"+this.iii;
 







    var axisMargin = 5,
            margin = 10,
            valueMargin = 4,
  ///////          width = parseInt(d3.select('body').style('width'), 10),
            width = (window.innerWidth-16),
     //////////       height = parseInt(d3.select('body').style('height'), 10),
            height = 500,
            barHeight = (height-axisMargin-margin*2)* 0.6/data.length,
            barPadding = (height-axisMargin-margin*2)*0.4/data.length,
            data, bar, svg, scale, xAxis, labelWidth = 0;

    max = d3.max(data, function(d) { return d.b; });



var chart = d3.select("#"+name)
          ////  .attr("width", width+"px")
          .attr("width", "100%")
            .attr("height", "500px");
         ////   .style("margin-right", "80px")


    bar = chart.selectAll("g")
            .data(data)
            .enter()
            .append("g");

    bar.attr("class", "thing-0")
            .attr("cx",0)
            .attr("transform", function(d, i) {
                return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
            });

    bar.append("text")
            .attr("class", "bartexth")
            .attr("y", barHeight / 2)
            .attr("dy", ".35em") //vertical align middle
            .text(function(d){
             /////////////////   return d.a;
            }).each(function() {
        labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
    });

    scale = d3.scale.linear()
            .domain([0, max])
            .range([0, width - margin*4 - labelWidth]);

    xAxis = d3.svg.axis()
            .scale(scale)
            .tickSize(-height + 4*margin + axisMargin)
            .orient("bottom");

    bar.append("rect")





 .on("mousemove", function(d){
            div.style("left", d3.event.pageX+10+"px");
            div.style("top", (d3.event.pageY)-25+"px");
            div.style("display", "inline-block");
            div.style("position", "absolute");
            div.html((d.a)+"<h4>"+(d.b)+"%</h4>");
         })

        .on("mouseout", function(d){
            div.style("display", "none");
        })





            .attr("transform", "translate("+labelWidth+", 0)")
            .attr("height", barHeight)
          ///  .attr("width", function(d){
        ///        return (width*((d.b*+".01")));
      ////      }) 

      .attr("width", function(d){
                return scale(d.b);
            });
 
;

    bar.append("text")
            .attr("class", "bartexth")
             .attr("y", barHeight / 2)
       /////////////     .attr("dx", -valueMargin + labelWidth) //margin right
            .attr("x", 15) //margin right
            .attr("dy", ".35em") //vertical align middle
            .attr("text-anchor", "start")
            .text(function(d){
                return (d.a+": "+d.b+"%");
            })
       ////////// .attr("x", function(d){
          ///////      var width = this.getBBox().width;
      ///////////          return Math.max(width + valueMargin, scale(d.b));
      ///////////      });

 
          

  
    chart.insert("g",":first-child")
            .attr("class", "axisHorizontal")
            .attr("transform", "translate(" + (margin + labelWidth) + ","+ (height - axisMargin - margin)+")")
            .call(xAxis);





iii++;




       };
      












         function changeHBarChart(data,name) {

 



    var axisMargin = 5,
            margin = 10,
            valueMargin = 4,
  ///////          width = parseInt(d3.select('body').style('width'), 10),
            width = (window.innerWidth-16),
     //////////       height = parseInt(d3.select('body').style('height'), 10),
            height = 500,
            barHeight = (height-axisMargin-margin*2)* 0.6/data.length,
            barPadding = (height-axisMargin-margin*2)*0.4/data.length,
            data, bar, svg, scale, xAxis, labelWidth = 0;

    max = d3.max(data, function(d) { return d.b; });



var chart = d3.select("#"+name)
           //// .attr("width", width+"px")
           .attr("width", "100%")
            .attr("height", "500px");
       /////     .style("margin-right", "80px")


    bar = chart.selectAll("g")
            .data(data)
            .enter()
            .append("g");

    bar.attr("class", "thing-0")
            .attr("cx",0)
            .attr("transform", function(d, i) {
                return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
            });

    bar.append("text")
            .attr("class", "label")
            .attr("y", barHeight / 2)
            .attr("dy", ".35em") //vertical align middle
            .text(function(d){
    ///////////////////////////////////////////            return d.a;
            }).each(function() {
        labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
    });

    scale = d3.scale.linear()
            .domain([0, max])
            .range([0, width - margin*4 - labelWidth]);

    xAxis = d3.svg.axis()
            .scale(scale)
            .tickSize(-height + 4*margin + axisMargin)
            .orient("bottom");

    bar.append("rect")




 .on("mousemove", function(d){
            div.style("left", d3.event.pageX+10+"px");
            div.style("top", (d3.event.pageY)-25+"px");
            div.style("display", "inline-block");
            div.style("position", "absolute");
            div.html((d.a)+"<h4>"+(d.b)+"%</h4>");
         })

        .on("mouseout", function(d){
            div.style("display", "none");
        })




            .attr("transform", "translate("+labelWidth+", 0)")
            .attr("height", barHeight)
  

  .transition().duration(1000)
        .attrTween("width", function(d){
              return scale(d.b);
          //////        return (width*((d.b*+".01")));
            })


       


;

    bar.append("text")
            .attr("class", "bartexth")
             .attr("y", barHeight / 2)
     /////////       .attr("dx", -valueMargin + labelWidth) //margin right
            .attr("x", 15) //margin right
            .attr("dy", ".35em") //vertical align middle
            .attr("text-anchor", "start")
            .text(function(d){
                return (d.a+": "+d.b+"%");
            })
                   ////////// .attr("x", function(d){
          ///////      var width = this.getBBox().width;
      ///////////          return Math.max(width + valueMargin, scale(d.b));
      ///////////      });


     

iii++;



       };
      




///////
///////
///// small chart 
///
///////////




 function drawHBarChartsm(data) {



    var name = "svg"+this.iii;
 







    var axisMargin = 5,
            margin = 10,
            valueMargin = 4,
  ///////          width = parseInt(d3.select('body').style('width'), 10),
            width = (window.innerWidth-16),
     //////////       height = parseInt(d3.select('body').style('height'), 10),
            height = 250,
            barHeight = (height-axisMargin-margin*2)* 0.6/data.length,
            barPadding = (height-axisMargin-margin*2)*0.4/data.length,
            data, bar, svg, scale, xAxis, labelWidth = 0;

    max = d3.max(data, function(d) { return d.b; });



var chart = d3.select("#"+name)
         //////   .attr("width", width+"px")
         .attr("width", "100%")
            .attr("height", "250px");
       //////////////////////     .style("margin-right", "80px")


    bar = chart.selectAll("g")
            .data(data)
            .enter()
            .append("g");

    bar.attr("class", "thing-0")
            .attr("cx",0)
            .attr("transform", function(d, i) {
                return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
            });

    bar.append("text")
            .attr("class", "bartexth")
            .attr("y", barHeight / 2)
            .attr("dy", ".35em") //vertical align middle
            .text(function(d){
     //////////////////////////////////////////////////////           return d.a;
            }).each(function() {
        labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
    });

    scale = d3.scale.linear()
            .domain([0, max])
            .range([0, width - margin*4 - labelWidth]);

    xAxis = d3.svg.axis()
            .scale(scale)
            .tickSize(-height + 4*margin + axisMargin)
            .orient("bottom");

    bar.append("rect")





 .on("mousemove", function(d){
            div.style("left", d3.event.pageX+10+"px");
            div.style("top", (d3.event.pageY)-25+"px");
            div.style("display", "inline-block");
            div.style("position", "absolute");
            div.html((d.a)+"<h4>"+(d.b)+"%</h4>");
         })

        .on("mouseout", function(d){
            div.style("display", "none");
        })





            .attr("transform", "translate("+labelWidth+", 0)")
            .attr("height", barHeight)
          ///  .attr("width", function(d){
        ///        return (width*((d.b*+".01")));
      ////      }) 

      .attr("width", function(d){
                return scale(d.b);
            });
 
;

    bar.append("text")
            .attr("class", "bartexth")
             .attr("y", barHeight / 2)
   ///////////////////////         .attr("dx", -valueMargin + labelWidth) //margin right
            .attr("x", 15) //margin right
            .attr("dy", ".35em") //vertical align middle
            .attr("text-anchor", "start")
            .text(function(d){
                return (d.a+": "+d.b+"%");
            })
       ////////// .attr("x", function(d){
          ///////      var width = this.getBBox().width;
      ///////////          return Math.max(width + valueMargin, scale(d.b));
      ///////////      });

 
          

  
    chart.insert("g",":first-child")
            .attr("class", "axisHorizontal")
            .attr("transform", "translate(" + (margin + labelWidth) + ","+ (height - axisMargin - margin)+")")
            .call(xAxis);





iii++;




       };
      












         function changeHBarChartsm(data,name) {

 



    var axisMargin = 5,
            margin = 10,
            valueMargin = 4,
  ///////          width = parseInt(d3.select('body').style('width'), 10),
            width = (window.innerWidth-16),
     //////////       height = parseInt(d3.select('body').style('height'), 10),
            height = 250,
            barHeight = (height-axisMargin-margin*2)* 0.6/data.length,
            barPadding = (height-axisMargin-margin*2)*0.4/data.length,
            data, bar, svg, scale, xAxis, labelWidth = 0;

    max = d3.max(data, function(d) { return d.b; });



var chart = d3.select("#"+name)
            .attr("width", "100%")
            .attr("height", "250px");
         //////////   .style("margin-right", "80px")


    bar = chart.selectAll("g")
            .data(data)
            .enter()
            .append("g");

    bar.attr("class", "thing-0")
            .attr("cx",0)
            .attr("transform", function(d, i) {
                return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
            });

    bar.append("text")
            .attr("class", "label")
            .attr("y", barHeight / 2)
            .attr("dy", ".35em") //vertical align middle
            .text(function(d){
   ///////////////////////////////////////////////             return d.a;
            }).each(function() {
        labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
    });

    scale = d3.scale.linear()
            .domain([0, max])
            .range([0, width - margin*4 - labelWidth]);

    xAxis = d3.svg.axis()
            .scale(scale)
            .tickSize(-height + 4*margin + axisMargin)
            .orient("bottom");

    bar.append("rect")




 .on("mousemove", function(d){
            div.style("left", d3.event.pageX+10+"px");
            div.style("top", (d3.event.pageY)-25+"px");
            div.style("display", "inline-block");
            div.style("position", "absolute");
            div.html((d.a)+"<h4>"+(d.b)+"%</h4>");
         })

        .on("mouseout", function(d){
            div.style("display", "none");
        })


            .attr("transform", "translate("+labelWidth+", 0)")
            .attr("height", barHeight)
            .attr("width", function(d){
              return scale(d.b);
          //////        return (width*((d.b*+".01")));
            })


       


;

    bar.append("text")
            .attr("class", "bartexth")
             .attr("y", barHeight / 2)
     ///////////////       .attr("dx", -valueMargin + labelWidth) //margin right
            .attr("x", 15) //margin right
            .attr("dy", ".35em") //vertical align middle
            .attr("text-anchor", "start")
            .text(function(d){
                return (d.a+": "+d.b+"%");
            })
                   ////////// .attr("x", function(d){
          ///////      var width = this.getBBox().width;
      ///////////          return Math.max(width + valueMargin, scale(d.b));
      ///////////      });


     

iii++;



       };
      






       //////
       //////////////
       //////




      //line wrap function adapted from "Wrapping Long Labels" - mike bostock
      function wrap(text, width) {
        text.each(function() {
          var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, //em
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", 15).attr("y", y).attr("dy", dy + "em");
          while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
              line.pop();
              tspan.text(line.join(" "));
              line = [word];
              tspan = text.append("tspan").attr("x", 15).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            } 
          }
        })
      }

      //while the data is being loaded it turns the strings into a number
      function type(d) {
        d[yName] = +d[yName];
        return d;

      }




    
d3.select(window).on('resize', resize);

function resize () {
  var width = parseInt(d3.select("body").selectAll("svg").style("width"));
  //console.log(width);
  //console.log(bar);
}

