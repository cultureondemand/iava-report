////////////

var width = 260,
    height = 140;
  
var start_val = 0,
    duration = 8000;
 /////////   end_val = [12, 1200000, 7300];




function startnumerosA (data) {

 
var name = "svg"+this.iii;

/////////var qSVG = d3.select("#"+name).append("svg").attr("width", width).attr("height", height);


var qSVG = d3.select("#"+name)

qSVG.select("text").remove();


qSVG.selectAll(".txt")
    .data(data)
    .enter()
    .append("text")
    .text(start_val)
    .attr("class", "txtA")
    .attr("x", 26)
    .attr("y", function(d, i) {
        return 133 + i * 72
    })
    .transition()
    .duration(3000)
        .tween("text", function(d) {
            var i = d3.interpolate(this.textContent, d),
                prec = (d + "").split("."),
                round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;


console.log(data);


console.log(start_val);


console.log(prec);


 



            return function(t) {
                this.textContent = (Math.round(i(t) * round) / round) +"%";
console.log(this.textContent);
            };
        });

        ////////
        ///////
        ////////
        ////////////
        ////////
console.log(name)



    iii++;


     };   






function startnumerosB (data) {


 
var name = "svg"+this.iii;

/////////var qSVG = d3.select("#"+name).append("svg").attr("width", width).attr("height", height);


var qSVG = d3.select("#"+name)

qSVG.select("text").remove();

 
qSVG.selectAll(".txt")
    .data(data)
    .enter()
    .append("text")
    .text(start_val)
    .attr("class", "txtB")
    .attr("x", 26)
    .attr("y", function(d, i) {
        return 133 + i * 72
    })
    .transition()
    .duration(3000)
        .tween("text", function(d) {
            var i = d3.interpolate(this.textContent, d),
                prec = (d + "").split("."),
                round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

            return function(t) {
                this.textContent = (Math.round(i(t) * round) / round) +"%";
            };
        });
         ////////
        ///////
        ////////
        ////////////
        ////////
console.log(name)

    iii++;


     };   







function startnumerosC (data) {
 
 
var name = "svg"+this.iii;

/////////var qSVG = d3.select("#"+name).append("svg").attr("width", width).attr("height", height);


var qSVG = d3.select("#"+name)

qSVG.select("text").remove();


qSVG.selectAll(".txt")
    .data(data)
    .enter()
    .append("text")
    .text(start_val)
    .attr("class", "txtC")
    .attr("x", 26)
    .attr("y", function(d, i) {
        return 133 + i * 72
    })
    .transition()
    .duration(3000)
        .tween("text", function(d) {
            var i = d3.interpolate(this.textContent, d),
                prec = (d + "").split("."),
                round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

            return function(t) {
                this.textContent = (Math.round(i(t) * round) / round) +"%";
            };
        });

        ////////
        ///////
        ////////
        ////////////
        ////////
console.log(name+"->number svg name")

    iii++;


     };   







function startsmallnumerosA (data) {
 
 
var name = "svg"+this.iii;

/////////var qSVG = d3.select("#"+name).append("svg").attr("width", width).attr("height", height);


var qSVG = d3.select("#"+name)

qSVG.select("text").remove();


qSVG.selectAll(".txttxt")
    .data(data)
    .enter()
    .append("text")
    .text(start_val)
    .attr("class", "txtA")
    .attr("x", 26)
    .attr("y", function(d, i) {
        return 140 + i * 72
    })
    .transition()
    .duration(3000)
        .tween("text", function(d) {
            var i = d3.interpolate(this.textContent, d),
                prec = (d + "").split("."),
                round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

            return function(t) {
                this.textContent = (Math.round(i(t) * round) / round) +"%";
            };
        });

        ////////
        ///////
        ////////
        ////////////
        ////////
console.log(name)

    iii++;


     };   





function startsmallnumerosB (data) {

 
 
var name = "svg"+this.iii;

/////////var qSVG = d3.select("#"+name).append("svg").attr("width", width).attr("height", height);


var qSVG = d3.select("#"+name)

qSVG.select("text").remove();


qSVG.selectAll(".txttxt")
    .data(data)
    .enter()
    .append("text")
    .text(start_val)
    .attr("class", "txtB")
    .attr("x", 26)
    .attr("y", function(d, i) {
        return 140 + i * 72
    })
    .transition()
    .duration(3000)
        .tween("text", function(d) {
            var i = d3.interpolate(this.textContent, d),
                prec = (d + "").split("."),
                round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

            return function(t) {
                this.textContent = (Math.round(i(t) * round) / round) +"%";
            };
        });

        ////////
        ///////
        ////////
        ////////////
        ////////
console.log(name)

    iii++;


     };   

