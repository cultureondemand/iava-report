var half_perc;

 var pie;

////////var iii=0;
///////////
 var scolor='';


////////////

var width = 310,
    height = 396,
 ///////   radius = 150;

    radius = (Math.min(width, height) - 110) / 2;



/* 
var arc = d3.svg.arc()
  .outerRadius(radius * 0.8)
  .innerRadius(radius * 0.6);

*/

    var arc = d3.svg.arc()
        .outerRadius(radius - 12)
        .innerRadius(12);





var outerArc = d3.svg.arc()
  .innerRadius(radius * 0.75)
  .outerRadius(radius * 0.75);


    var labelArc = d3.svg.arc()
        .outerRadius(radius + 20)
        .innerRadius(radius-5);




var legendRectSize = (radius * 0.07);
var legendSpacing = radius * 0.08;

var div = d3.select("body").append("div").attr("class", "toolTip");

////////////////////////donutchart.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

/////var color = d3.scale.ordinal().range(["#417a4f", "#cddeb7", "#284635", "#78933f", "#436f61", "#e4af34", "#e2d497", "#4a683a"]);

var legendRectSize = (radius * 0.07);
var legendSpacing = radius * 0.11;
 
 


//age  
/////drawStackChart(data_a);
//gender
////drawStackChart(data_b);

//gender
////////drawStackChart(data_c);


 

 


    function drawPieChart(dataset) {


///    var donutchart_width = parseInt(d3.select("#sections").style("width"));
///    var donutchart_height = parseInt(d3.select("#sections").style("height"));

var name = "svg"+this.iii;

var width = 310,
    height = 396,
  ////////////////  radius = Math.min(width, height) / 2;
   radius = (Math.min(width, height) - 110) / 2;



 

/* 
var arc = d3.svg.arc()
  .outerRadius(radius * 0.8)
  .innerRadius(radius * 0.6);

*/
///////var color = d3.scale.category20();
 
var donutchart = d3.select("#"+name).append("g")
/////    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


donutchart.append("g")
  .attr("class", "slices");
donutchart.append("g")
  .attr("class", "legend");
donutchart.append("g")
  .attr("class", "labelName");
donutchart.append("g")
  .attr("class", "labelValue");
donutchart.append("g")
  .attr("class", "lines");









pie = d3.layout.pie()
  .sort(null)
 .value(function(d) {
  return d.b;
 });


    var arc = d3.svg.arc()
        .outerRadius(radius - 12)
        .innerRadius(12);





var outerArc = d3.svg.arc()
  .innerRadius(radius * 0.75)
  .outerRadius(radius * 0.75);


    var labelArc = d3.svg.arc()
        .outerRadius(radius + 20)
        .innerRadius(radius-5);


var outerArc = d3.svg.arc()
  .innerRadius(radius * 0.75)
  .outerRadius(radius * 0.75);

var legendRectSize = (radius * 0.07);
var legendSpacing = radius * 0.11;
 
donutchart.attr("transform", "translate(" + width / 2 + "," + height / 3.45 + ")");

var color = d3.scale.ordinal()
////////  .range(["#436f61", "#4a683a", "#e4af34", "#e2d497", "#417a4f", "#cddeb7", "#78933f", "#284635"]);
///////////////////////////////////  .range(["#dcf428", "#c2cec9","#efefef","#9aada6","#355c4d", "#4a683a", "#e4af34", "#e2d497", "#417a4f", "#cddeb7", "#78933f", "#284635"]);
  .range(["#dcf428","#9aada6", "#c2cec9","#efefef","#888888","#333333","#294636", "#3a634d", "#000000", "#e2d497", "#417a4f", "#cddeb7", "#78933f", "#284635"]);



 ///////////////////////////////////////////////////arc = d3.svg.arc()
 ////////////////////////////////////////////////// .innerRadius(radius - 100)
  /////////////////////////////////////////////////.outerRadius(radius - 50);
  /////       .outerRadius(radius)
 /////       .innerRadius(radius - (radius/2.5));
  

//////////////////////
///////////////////////
///////////////////////
///////////////////////


  var slice = donutchart.select(".slices").selectAll("path.slice")
        .data(pie(dataset), function(d){ return d.data.a });

    slice.enter()


        .insert("path")
       ///// .style("fill", function(d) { return color(d.data.a); })

            //////////   .attr("fill", function(d) { return url("pattern"+name); })
//                .style("fill", function(d) { return ("url(#patternsvg"+d+")"); })
  /////////            .style("fill", function(d) { return ("url(#pattern"+name+")"+ color(d.data.a)); })

   //////////////////////////           .style("fill", function(d) { return ("url(#patternsvg"+d+")"+ color(d.data.a)); })
//////// .style("fill", function(d,i) { return ("url(#"+name+"_patternbar"+i+")"+ color(d.data.a)); })
 .style("fill", function(d,i) { return (color(d.data.a)); })


 


/////////////////////// pattern fill version
/////////////////////////
/////////////////////
       ////  .style("fill", function(d,i) { return ("url(#"+name+"_patternbar"+i+")"+ color(d.data.a)); })

      .attr("class", "slice") 

scolor++;
 
    slice
        .transition().duration(1000)
        .attrTween("d", function(d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                return arc(interpolate(t));
            };

        })



    slice
    

        .on("mousemove", function(d){
            div.style("left", d3.event.pageX+10+"px");
            div.style("top", (d3.event.pageY)-25+"px");
            div.style("display", "inline-block");
            div.style("position", "absolute");
            div.html((d.data.a)+"<h4>"+(d.data.b)+"%</h4>");
         });


 
 
 
    slice
        .on("mouseout", function(d){
            div.style("display", "none");
        });

    slice.exit()
        .remove();

    
    /* ------- TEXT LABELS -------*/

    var text = donutchart.select(".labelName").selectAll("text")
        .data(pie(dataset), function(d){ return d.data.b+"% "+ d.data.a })





  

    text.enter()
        .append("text")
    //////   .attr("dy", ".35em")
    //////   .attr('text-anchor','middle')
   .attr("text-anchor", "middle")
      //////  .attr("dx", ".35em")
        .text(function(d) {
            return (d.data.a);
        })

        .append("text")
    //////   .attr("dy", ".35em")
    //////   .attr('text-anchor','middle')
   .attr("text-anchorB", "middle")
      //////  .attr("dx", ".35em")
        .text(function(d) {
            return (d.data.b+"%");
        });



 








    function midAngle(d){
   return d.startAngle + (d.endAngle - d.startAngle)/2;
/////      return midAngle = d.endAngle < Math.PI ? d.startAngle/2 + d.endAngle/2 : d.startAngle/2  + d.endAngle/2 + Math.PI ;

    }

    text
        .transition().duration(1000)
        .attrTween("transform", function(d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                var d2 = interpolate(t);
                var pos = labelArc.centroid(d2);
             ////   pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
           //////  return "translate("+ pos +")rotate(" + angle(d2) + ")";
             return "translate("+ pos +")";
   

        /////////   return "translate(" + outerArc.centroid(d2)[0] + "," + outerArc.centroid(d2)[1] + ") rotate(-90) rotate(" + (midAngle(d2) * 180/Math.PI) + ")";  


         };
        })
        .styleTween("text-anchor", function(d){
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                var d2 = interpolate(t);
          return radius * (midAngle(d2) < Math.PI ? 1 : -1);
  

          ////        return "translate("+ pos +")";
var namename = (d.data.b+"%"+d.data.a);

          };
        })
        .text(function(d) {

                    if(d.data.b < 2) {
          return '';
        }

                    if(d.data.b < 5) {
          return (d.data.b+"%");
        }
   ///////     return (d.data.a+": "+d.data.b + "%");
     /////   return (d.data.a);


                 return (d.data.a);


 
      })



 .styleTween("text-anchorB", function(d){
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
             /////////////    var pos = arc.centroid(d2);
               var d2 = interpolate(t);
          return arc.centroid(d2);
  

          ////        return "translate("+ pos +")";
var namename = (d.data.b+"%"+d.data.a);

          };
        })
        .text(function(d) {

                    if(d.data.b < 2) {
          return '';
        }

                    if(d.data.b < 5) {
          return '';
        }
   ///////     return (d.data.a+": "+d.data.b + "%");
     /////   return (d.data.a);


                 return (d.data.a);


 
      });




         ///   return (d.data.a+": "+d.data.b+"%");
     ////   });


 

    text.exit()
        .remove();

    /* ------- SLICE TO TEXT POLYLINES -------*/

    var polyline = donutchart.select(".lines").selectAll("polyline")
        .data(pie(dataset), function(d){ return d.data.a });

    polyline.enter()
        .append("polyline");

    polyline.transition().duration(1000)
        .attrTween("points", function(d){
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                var d2 = interpolate(t);
                var pos = arc.centroid(d2);
                pos[0] = radius / 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
    

                    if(d.data.b < 2) {
    /////     return [arc.centroid(d2), labelArc.centroid(d2)];

    return '';
        }

    if(d.data.b < 5) {
        ///  return '';
            ///polyline.style("opacity",".1")
            ////return [arc.centroid(d2), labelArc.centroid(d2)];

            return '';
      

        }
            return [arc.centroid(d2), labelArc.centroid(d2)];
            };
        });

    polyline.exit()
        .remove();



 
	 
///////////////////////////////////////////////	var path = donutchart.selectAll("path")
 /////////////////////////////////////////////   .data(pie(dataset.apples))
 ////////////////////////////////////////	 .enter().append("path")
	    
/////////slice.append("path")
  ///////////////////////////////////////////  .attr("fill", function(d, i) { return color(i); })
/////////////////////////////////////////////    .attr("d", arc);
 
	iii++;

};	










function changePieChart(dataset,name) {


//////////////////////
///////////////////////












///////////////var name = "svg"+this.iii;

 
///////var color = d3.scale.category20();

 
var donutchart = d3.select("#"+name);

donutchart.selectAll("text").remove();

 
/////////var pie = d3.layout.pie()
/////////    .sort(null)
//////// .value(function(d) {
////////  return d.b;
///////// });



var color = d3.scale.ordinal()
////////  .range(["#436f61", "#4a683a", "#e4af34", "#e2d497", "#417a4f", "#cddeb7", "#78933f", "#284635"]);
///////////////////////////////////  .range(["#dcf428", "#c2cec9","#efefef","#9aada6","#355c4d", "#4a683a", "#e4af34", "#e2d497", "#417a4f", "#cddeb7", "#78933f", "#284635"]);
  .range(["#dcf428","#9aada6", "#c2cec9","#efefef","#888888","#333333","#294636", "#3a634d", "#000000", "#e2d497", "#417a4f", "#cddeb7", "#78933f", "#284635"]);



///////////////////////
///////////////////////

  var slice = donutchart.select(".slices").selectAll("path.slice")
        .data(pie(dataset), function(d){ return d.data.a });

    slice.enter()
        .insert("path")
.style("fill", function(d) { return color(d.data.a); })
 ////       .attr("fill", function(d) { return url("pattern"+name); })
  /////////////              .style("fill", function(d) { return ("url(#patternsvg"+d+")"); })

////////////////////////////////////// .style("fill", function(d,i) { return ("url(#namepatternsvg"+i+")"+ color(d.data.a)); })




/////////////////////// pattern fill version
/////////////////////////
/////////////////////
       ////  .style("fill", function(d,i) { return ("url(#"+name+"_patternbar"+i+")"+ color(d.data.a)); })

      .attr("class", "slice") 

scolor++;
 
    slice
        .transition().duration(1000)
        .attrTween("d", function(d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                return arc(interpolate(t));
            };

        })



    slice
    

        .on("mousemove", function(d){
            div.style("left", d3.event.pageX+10+"px");
            div.style("top", (d3.event.pageY)-25+"px");
            div.style("display", "inline-block");
            div.style("position", "absolute");
            div.html((d.data.a)+"<h4>"+(d.data.b)+"%</h4>");
         });


 
 
 
    slice
        .on("mouseout", function(d){
            div.style("display", "none");
        });

    slice.exit()
        .remove();

    
    /* ------- TEXT LABELS -------*/

    var text = donutchart.select(".labelName").selectAll("text")
        .data(pie(dataset), function(d){ return d.data.b+"% "+ d.data.a })





  

    text.enter()
        .append("text")
    //////   .attr("dy", ".35em")
    //////   .attr('text-anchor','middle')
   .attr("text-anchor", "middle")
      //////  .attr("dx", ".35em")
        .text(function(d) {
            return (d.data.a);
        })

        .append("text")
    //////   .attr("dy", ".35em")
    //////   .attr('text-anchor','middle')
   .attr("text-anchorB", "middle")
      //////  .attr("dx", ".35em")
        .text(function(d) {
            return (d.data.b+"%");
        });



 








    function midAngle(d){
   return d.startAngle + (d.endAngle - d.startAngle)/2;
/////      return midAngle = d.endAngle < Math.PI ? d.startAngle/2 + d.endAngle/2 : d.startAngle/2  + d.endAngle/2 + Math.PI ;

    }

    text
        .transition().duration(1000)
        .attrTween("transform", function(d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                var d2 = interpolate(t);
                var pos = labelArc.centroid(d2);
             ////   pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
           //////  return "translate("+ pos +")rotate(" + angle(d2) + ")";
             return "translate("+ pos +")";
   

        /////////   return "translate(" + outerArc.centroid(d2)[0] + "," + outerArc.centroid(d2)[1] + ") rotate(-90) rotate(" + (midAngle(d2) * 180/Math.PI) + ")";  


         };
        })
        .styleTween("text-anchor", function(d){
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                var d2 = interpolate(t);
          return radius * (midAngle(d2) < Math.PI ? 1 : -1);
  

          ////        return "translate("+ pos +")";
var namename = (d.data.b+"%"+d.data.a);

          };
        })
        .text(function(d) {

                    if(d.data.b < 2) {
          return '';
        }

                    if(d.data.b < 5) {
          return (d.data.b+"%");
        }
   ///////     return (d.data.a+": "+d.data.b + "%");
     /////   return (d.data.a);


                 return (d.data.a);


 
      })



 .styleTween("text-anchorB", function(d){
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
             /////////////    var pos = arc.centroid(d2);
               var d2 = interpolate(t);
          return arc.centroid(d2);
  

          ////        return "translate("+ pos +")";
var namename = (d.data.b+"%"+d.data.a);

          };
        })
        .text(function(d) {

                    if(d.data.b < 2) {
          return '';
        }

                    if(d.data.b < 5) {
          return '';
        }
   ///////     return (d.data.a+": "+d.data.b + "%");
     /////   return (d.data.a);


                 return (d.data.a);


 
      });




         ///   return (d.data.a+": "+d.data.b+"%");
     ////   });


 

    text.exit()
        .remove();

    /* ------- SLICE TO TEXT POLYLINES -------*/

    var polyline = donutchart.select(".lines").selectAll("polyline")
        .data(pie(dataset), function(d){ return d.data.a });

    polyline.enter()
        .append("polyline");

    polyline.transition().duration(1000)
        .attrTween("points", function(d){
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function(t) {
                var d2 = interpolate(t);
                var pos = arc.centroid(d2);
                pos[0] = radius / 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
    

                    if(d.data.b < 2) {
      ////   return [arc.centroid(d2), labelArc.centroid(d2)];

      return '';
        }

    if(d.data.b < 5) {
        return '';
  /// polyline.style("opacity",".1")
                ///    return [arc.centroid(d2), labelArc.centroid(d2)];


      

        }
            return [arc.centroid(d2), labelArc.centroid(d2)];
            };
        });

    polyline.exit()
        .remove();


///////////////////////
////////////////////////
////////////////////
/////////////////

   



///////////////////////
////////////////////////
 
 /* ------- LEGEND -------*/

    var legend = donutchart.select(".legend").selectAll("g")
        .data(pie(dataset), function(d){ return d.data.a });

    legend.enter()
        .append("g")


     .attr('transform', function(d, i) {
            var height = legendRectSize + legendSpacing;
          ///////  var offset =  height * .domain().length;
      var offset =  height * i;
             ///////   var offset = height + 15+"px";
            var horz = legendRectSize-46;
            var vert = (height + offset)+92;
            return 'translate(' + (horz) + ',' + (vert) + ')';
        })

    .append('circle')
   /////     .attr('r', legendRectSize)
        .attr('r', '8')
         .attr('cx', legendRectSize)
         .attr('cy', legendSpacing)


 
        .on("mousemove", function(d){
            div.style("left", d3.event.pageX+10+"px");
            div.style("top", (d3.event.pageY)-25+"px");
            div.style("display", "inline-block");
            div.style("position", "absolute");
            div.html((d.data.a)+"<h4>"+(d.data.b)+"%</h4>");
         }) 


 
 
 
         .on("mouseout", function(d){
            div.style("display", "none");
        }) 




 .style("fill", function(d,i) { return ("url(#"+name+"_patternbar"+i+")"+ color(d.data.a)); })

 /////////////.style("fill", function(d,i) { return ("url(#patternsvg"+i+")"+ color(i)); })

       ///////////// .style('fill', color)
        .style('stroke', 'none');




legend.append('text')
        .attr('class','legendtextp')
        .attr('x', legendRectSize + legendSpacing)
        .attr('y', (legendRectSize + legendSpacing)-2+"px")
        .text(function(d) { return d.data.a+": "+d.data.b+"%"; })


 
        .on("mousemove", function(d){
            div.style("left", d3.event.pageX+10+"px");
            div.style("top", (d3.event.pageY)-25+"px");
            div.style("display", "inline-block");
            div.style("position", "absolute");
            div.html((d.data.a)+"<h4>"+(d.data.b)+"%</h4>");
         }) 


 
 
 
         .on("mouseout", function(d){
            div.style("display", "none");
        }) 

;

      
 

    legend.exit()
        .remove();



 






///////////////////////
////////////////////////
////////////////////
/////////////////




iii++;





   
      
   
   
/////////////////////////////////////////////// var path = donutchart.selectAll("path")
 /////////////////////////////////////////////   .data(pie(dataset.apples))
 ////////////////////////////////////////  .enter().append("path")
      
/////////slice.append("path")
  ///////////////////////////////////////////  .attr("fill", function(d, i) { return color(i); })
/////////////////////////////////////////////    .attr("d", arc);
 

};  








///
////////////

   
    // Computes the angle of an arc, converting from radians to degrees.
    function angle(d) {
      var a = (d.startAngle + d.endAngle) * 45 / Math.PI - 45;
      return a > 45 ? a - 90 : a;
    }


/////
/////////


function type(d) {
  d.b = +d.b;
  d.a = +d.a;
  return d;
}   
   




d3.select(window).on('resize', resize);

function resize () {
	var width = parseInt(d3.select("body").selectAll("svg").style("width"));
	//console.log(width);
	//console.log(bar);
}
