/**
 * scrollVis - encapsulates
 * all the code for the visualization
 * using reusable charts pattern:
 * http://bost.ocks.org/mike/chart/
 */
var scrollVis = function() {
  // constants to define the size
  // and margins of the vis area.

  var width = window.innerWidth,
    height = window.innerHeight;

  var margin = {
    top: 10,
    left: 20,
    bottom: 80,
    right: 10
  };

  // Keep track of which visualization
  // we are on and which was the last
  // index activated. When user scrolls
  // quickly, we want to call all the
  // activate functions that they pass.
  var lastIndex = -1;
  var activeIndex = 0;

  // main svg used for visualization
  var svg = null;

  // d3 selection that will be used
  // for displaying visualizations
  var g = null;

  // When scrolling to a new section
  // the activation function for that
  // section is called.
  var activateFunctions = [];
  // If a section has an update function
  // then it is called while scrolling
  // through the section with the current
  // progress through the section.
  var updateFunctions = [];
////////////
////////
var trigger;
var digtrigger;

var kftrigger;



///////



////////////
  /**
   * chart
   *
   * @param selection - the current d3 selection(s)
   *  to draw the visualization in. For this
   *  example, we will be drawing it in #vis
   */
  var chart = function(selection) {
    selection.each(function() {
      setupSections();
    });
  };

  /**
   * setupVis - creates initial elements for all
   * sections of a visualization.
   */
  setupVis = function() {};

  /**
   * setupSections - each section is activated
   * by a separate function. Here we associate
   * these functions to the sections based on
   * the section's index.
   *
   */
  setupSections = function() {
    // activateFunctions are called each
    // time the active section changes

    activateFunctions[0] = showTitle0;
    activateFunctions[1] = showTitle1;
    activateFunctions[2] = showTitle2;
    activateFunctions[3] = showTitle3;
    activateFunctions[4] = showTitle4;
    activateFunctions[5] = showTitle5;
    activateFunctions[6] = showTitle6;
    activateFunctions[7] = showTitle7;
    activateFunctions[8] = showTitle8;
    activateFunctions[9] = showTitle9;
    activateFunctions[10] = showTitle10;
    activateFunctions[11] = showTitle11;
    activateFunctions[12] = showTitle12;
    activateFunctions[13] = showTitle13;

    activateFunctions[14] = showTitle14;
    activateFunctions[15] = showTitle15;
    activateFunctions[16] = showTitle16;
    activateFunctions[17] = showTitle17;
    activateFunctions[18] = showTitle18;

    activateFunctions[19] = showTitle19;
    activateFunctions[20] = showTitle20;
    activateFunctions[21] = showTitle21;
    activateFunctions[22] = showTitle22;
    activateFunctions[23] = showTitle23;
    activateFunctions[24] = showTitle24;
    activateFunctions[25] = showTitle25;
    activateFunctions[26] = showTitle26;

    // updateFunctions are called while
    // in a particular section to update
    // the scroll progress in that section.
    // Most sections do not need to be updated
    // for all scrolling and so are set to
    // no-op functions.
    for (var i = 0; i < 27 + 1; i++) {
 //////   for (var i = 0; i < window.slides.length + 1; i++) {
      updateFunctions[i] = function() {};
    }

      };

  /**
   * ACTIVATE FUNCTIONS
   *
   * These will be called their
   * section is scrolled to.
   *
   * General pattern is to ensure
   * all content for the current section
   * is transitioned in, while hiding
   * the content for the previous section
   * as well as the next section (as the
   * user may be scrolling up or down).
   *
   */






var npoints = 100;
var ptdata = [];


var line = d3.svg.line()
    .interpolate("basis")
    .x(function(d, i) { return d[0]; })
    .y(function(d, i) { return d[1]; });

var svg = d3.select("#vis").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var svgagain = d3.select("#vis").select("svg")
    .on("mousemove", function() { var pt = d3.mouse(this); tick(pt); });



var path = svg.append("g")
  .append("path")
    .data([ptdata])
    .attr("class", "drawline")
    .attr("d", line);

function tick(pt) {

  // push a new data point onto the back
  ptdata.push(pt);

  // Redraw the path:
  path
      .attr("d", function(d) { return line(d);})


  // If more than 100 points, drop the old data pt off the front
  if (ptdata.length > npoints) {
    ptdata.shift();
  }
}






  /**
   *
   */
   function showTitle0() {
    //////////////
    ////////////
    /////////

    ////////////////////////////////////////////
    ///////// SET INITIAL CONTAINER VISIBILITY
    ////////////////////////////////////////////
 





///////////
//////////////
//////////////////

      if (!trigger==2) {
//////////

d3.select("#bigcontain")
  .style("opacity","1")
.style("top","0")
.style("position","relative")
 .transition(1600)
  .style("visibility","visible")
 .style("opacity","0")
 .style("top","-100px");

//////////

d3.select("#logoOpener")
  .style("opacity","0")
.style("top","-3px")
.style("left","-3px")
 .style("height","12px")
 .transition(600)
 .style("opacity","1")
 .style("height","98px")
.style("top","3px")
.style("left","3px");

//////////
      } else {


d3.select("#logoOpener")
  .style("opacity","0")
.style("top","-3px")
.style("left","-3px")
 .style("height","12px")
 .transition(600)
 .style("opacity","1")
 .style("height","98px")
.style("top","3px")
.style("left","3px");
 

 trigger='';

}



//////////
//////////////////




    var logoOpener = document.getElementById("logoOpener");
    logoOpener.setAttribute("style", "display:inline-block; ");



     var bigcontain = document.getElementById("bigcontain");
    bigcontain.setAttribute("style", "visibility:hidden !important; ");
    bigcontain.setAttribute("style", "display:none !important; ");
    bigcontain.setAttribute("style", "top:-200px !important; ");
  


 ///   var navtitle = document.getElementById("nav-title");
  /////  navtitle.setAttribute("style", "display:none; ");


     



 

 var logobar = document.getElementById("logobar");
    logobar.setAttribute("style", "display:block; ");





/*
   
   var containerC = document.getElementById("illo-1");
    containerC.setAttribute("style", "visibility:hidden; ");

 

    ////////////////////////////////////////////
 
var containerD = document.getElementById("illo-2");
    containerD.setAttribute("style", "visibility:hidden; ");


    ////////////////////////////////////////////
    /////////////////////////////
 var containerB = document.getElementById("illo-0");
    containerB.setAttribute("style", "visibility:hidden; ");

    ///////////



var containerE = document.getElementById("illo-3");
    containerE.setAttribute("style", "visibility:hidden; ");




var containerF = document.getElementById("illo-4");
    containerF.setAttribute("style", "visibility:hidden; ");




var containerG = document.getElementById("container-5");
    containerG.setAttribute("style", "visibility:hidden; ");




var containerH = document.getElementById("illo-6");
    containerH.setAttribute("style", "visibility:hidden; ");




var containerI = document.getElementById("illo-7");
    containerI.setAttribute("style", "visibility:hidden; ");




var containerJ = document.getElementById("illo-8");
    containerJ.setAttribute("style", "visibility:hidden; ");




var containerK = document.getElementById("illo-9");
    containerK.setAttribute("style", "visibility:hidden; ");





var containerL = document.getElementById("illo-10");
    containerL.setAttribute("style", "visibility:hidden; ");





var containerM = document.getElementById("illo-11");
    containerM.setAttribute("style", "visibility:hidden; ");





var containerN = document.getElementById("illo-12");
    containerN.setAttribute("style", "visibility:hidden; ");





var containerO = document.getElementById("illo-13");
    containerO.setAttribute("style", "visibility:hidden; ");





var containerP = document.getElementById("illo-14");
    containerP.setAttribute("style", "visibility:hidden; ");





var containerQ = document.getElementById("illo-15");
    containerQ.setAttribute("style", "visibility:hidden; ");





var containerR = document.getElementById("illo-16");
    containerR.setAttribute("style", "visibility:hidden; ");





var containerS = document.getElementById("illo-17");
    containerS.setAttribute("style", "visibility:hidden; ");







var containerT = document.getElementById("illo-18");
    containerT.setAttribute("style", "visibility:hidden; ");







var containerU = document.getElementById("illo-19");
    containerU.setAttribute("style", "visibility:hidden; ");







var containerV = document.getElementById("illo-20");
    containerV.setAttribute("style", "visibility:hidden; ");







var containerW = document.getElementById("illo-21");
    containerW.setAttribute("style", "visibility:hidden; ");







var containerX = document.getElementById("illo-22");
    containerX.setAttribute("style", "visibility:hidden; ");







var containerY = document.getElementById("illo-23");
    containerY.setAttribute("style", "visibility:hidden; ");


 */




var forces = document.getElementById("forces");
    forces.setAttribute("style", "visibility:visible; ");



var vizz = document.getElementById("vis");
    vizz.setAttribute("style", "visibility:visible; ");



var digest = document.getElementById("digest");
    digest.setAttribute("style", "visibility:hidden; ");





var stairs = document.getElementById("stairs");
    stairs.setAttribute("style", "visibility:hidden; ");





 
///////////
///////////
/////////




var width = window.innerWidth,
    height = window.innerHeight;


var halfheight = (window.innerHeight/7);
var halfwidth = (window.innerWidth/3);

var svgF = d3.select("#forces").append("svg")
    .attr("width", width)
    .attr("height", height);
var currenty = d3.transform(svgF.attr("transform")).translate[0];

    svgF.attr("transform", "translate(0," + (currenty - halfheight) + ")");

var force = d3.layout.force()
    .gravity(0.05)
    .distance(halfwidth)
    .charge(-halfwidth)
    .size([width, height]);

d3.json("graph.json", function(error, json) {
  if (error) throw error;

  force
      .nodes(json.nodes)
      .links(json.links)
      .start();

  var link = svgF.selectAll(".link")
      .data(json.links)
    .enter().append("line")
      .attr("class", "link");

  var node = svgF.selectAll(".node")
      .data(json.nodes)
    .enter().append("g")
      .attr("class", "node")
      .call(force.drag);

  node.append("image")
      .attr("xlink:href", function(d) { return d.name + ".png"; })
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 71)
      .attr("height", 73);

      console.log(node);

  /////////////  node.append("text")
    //////////  .attr("dx", 12)
   //////////   .attr("dy", ".35em")
   /////////   .text(function(d) { return d.name });

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });


   

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  });



    // Clear the canvas and then iterate over child elements.




});

    function resredraw() {
 
var width = window.innerWidth,
    height = window.innerHeight;


var halfheight = (window.innerHeight/7);
var halfwidth = (window.innerWidth/3);



d3.select("#forces").select("svg").remove();
  d3.select("#forces.parent").selectAll("*").remove();

 this.nodes = null;
this.force = null;
this.link = null;



 
var svgF = d3.select("#forces").append("svg")
    .attr("width", width)
    .attr("height", height);
var currenty = d3.transform(svgF.attr("transform")).translate[0];

    svgF.attr("transform", "translate(0," + (currenty - halfheight) + ")");

var force = d3.layout.force()
    .gravity(0.05)
    .distance(halfwidth)
    .charge(-halfwidth)
    .size([width, height]);

d3.json("graph.json", function(error, json) {
  if (error) throw error;

  force
      .nodes(json.nodes)
      .links(json.links)
      .start();

  var link = svgF.selectAll(".link")
      .data(json.links)
    .enter().append("line")
      .attr("class", "link");

  var node = svgF.selectAll(".node")
      .data(json.nodes)
    .enter().append("g")
      .attr("class", "node")
      .call(force.drag);

  node.append("image")
      .attr("xlink:href", function(d) { return d.name + ".png"; })
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 71)
      .attr("height", 73);

      console.log(node);

  /////////////  node.append("text")
    //////////  .attr("dx", 12)
   //////////   .attr("dy", ".35em")
   /////////   .text(function(d) { return d.name });

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });


   

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  });

  
   });

     
   /////// .attr("transform", "translate(" + widthhalf + "," + heighthalf + ")");

 
     }


 window.addEventListener("resize", resredraw, false);





 

d3.select("#container-A")
   .style("overflow","hidden")
 .style("visibility","visible")
  ;
 
//////////

d3.select("#container-Al")
  .style("opacity","1")
  .style("visibility","visible")
 .style("bottom","-3vh")
  .style("position","fixed")
 ;
 

//////////

d3.select("#container-Ar")
   .style("visibility","visible")
   .style("opacity","1")
.style("bottom","-4vh")
 .style("position","fixed")
;
 digtrigger='';

//////////

///// digtrigger='1';

//////////

console.log(digtrigger);
console.log('gogogoog');
     

    ///////////
  }

  /**
   *
   */
  function showTitle1() {
    ////////////////////////////////////////////
    ////////// Video item to turn off
    //////////
    ///////// var videoplay = document.getElementById('bgvid0');
    ///////// videoplay.setAttribute("style", "display:none; ");
    ///////////////////////////////////////////

  d3.select("#forces.parent").selectAll("*").remove();
d3.select("#forces").select("svg").remove();

 this.nodes = null;
this.force = null;
this.link = null;


var vizz = document.getElementById("vis");
    vizz.setAttribute("style", "visibility:visible; ");



var forces = document.getElementById("forces");
    forces.setAttribute("style", "visibility:hidden; ");




 var logobar = document.getElementById("logobar");
    logobar.setAttribute("style", "display:block; ");




    ////////////////////////////////////////////
    ////////// Scroll prompt image turned off
    var scrollimg = document.getElementById("scrollimg");
    scrollimg.setAttribute("style", "display:none; ");

 
///////////////////////////////////////////    var bigcontain = document.getElementById("bigcontain");
 ////////////////////////////////////////////   bigcontain.setAttribute("style", "visibility:visible; ");
 

var digest = document.getElementById("digest");
    digest.setAttribute("style", "visibility:visible; ");




var stairs = document.getElementById("stairs");
    stairs.setAttribute("style", "visibility:visible; ");




var digesthead = document.getElementById("digesthead");
    digesthead.setAttribute("style", "visibility:visible; ");





///////////
//////////////
/////// 




///////////
//////////////
//////////////////

      if (trigger===2) {
//////////

d3.select("#bigcontain")
  .style("opacity","1")
.style("top","0")
.style("position","relative")
 .transition(1600)
  .style("visibility","visible")
 .style("opacity","0")
 .style("top","-100px");

//////////

d3.select("#logoOpener")
  .style("opacity","0")
.style("top","-3px")
.style("left","-3px")
 .style("height","12px")
 .transition(600)
 .style("opacity","1")
 .style("height","98px")
.style("top","3px")
.style("left","3px");
 






////////////

d3.select("#digest")
  .style("opacity","1")
.style("bottom","0")
.style("position","relative")
   .style("visibility","visible")
 ;
 
//////////




//////////
//////////
/////////

} else if (kftrigger===1) {

 
 kftrigger='';

}


 



////////////

d3.select("#digest")
  .style("opacity","1")
.style("bottom","-120vh")
.style("position","relative")
   .style("visibility","visible")
 ;
 
//////////


     


d3.select("#container-A")
    .style("overflow","hidden")

;
 
//////////

d3.select("#container-Al")
 .style("position","absolute")
 ;
 

//////////

d3.select("#container-Ar")
 .style("position","absolute")
;
 digtrigger='1';

     


//////////
//////////////////


//////////
//////////////////
//// cover anims
//////////////////


   
////
//////////



 var backgroundColoredIn = document.getElementById("backgroundColoredIn");
    backgroundColoredIn.setAttribute("style", "visibility:hidden; ");



////
/////////



 
 /////   var navtitle = document.getElementById("nav-title");
  //////  navtitle.setAttribute("style", "display:inline-block; ");



  }

  /**
   *
   *
   */
   
   
  function showTitle2() {


 ///////////////////////////////////////   var logoOpener = document.getElementById("logoOpener");
 //////////////////////////////////////////////   logoOpener.setAttribute("style", "display:none; ");

 var logobar = document.getElementById("logobar");
    logobar.setAttribute("style", "display:none; ");

 
var digest = document.getElementById("digest");
    digest.setAttribute("style", "visibility:hidden; ");


  d3.select("#forces.parent").selectAll("*").remove();
d3.select("#forces").select("svg").remove();

 this.nodes = null;
this.force = null;
this.link = null;

     var bigcontain = document.getElementById("bigcontain");
    bigcontain.setAttribute("style", "visibility:visible !important; ");
    bigcontain.setAttribute("style", "display:block !important; ");
    bigcontain.setAttribute("style", "top:0 !important; ");







 ////////////////////document.getElementById("tab1").click();




   ////var containerA = document.getElementById("container-A");
   ////// containerA.setAttribute("style", "visibility:hidden; ");




   /////var containerAl = document.getElementById("container-Al");
  ////  containerAl.setAttribute("style", "visibility:hidden; ");




  //// var containerAr = document.getElementById("container-Ar");
  ////  containerAr.setAttribute("style", "visibility:hidden; ");


   var containerObj = document.getElementById("container-Obj");
    containerObj.setAttribute("style", "visibility:hidden; ");



/*
 

d3.select("#container-B")
    .style("opacity", "0") // make the body green
  .transition()
    .style("opacity", "1"); // then transition to red
 

d3.select("#container-C")
    .style("opacity", "1") // make the body green
  .transition()
    .style("opacity", "0"); // then transition to red
 
*/
 

 var backgroundColoredIn = document.getElementById("backgroundColoredIn");
    backgroundColoredIn.setAttribute("style", "visibility:hidden; ");



///////////
//////////////
//////////////////

      if (!trigger) {

//////////

d3.select("#bigcontain")
 .style("opacity","0")
 .style("top","-100px")
 .transition(1600)
  .style("visibility","visible")
  .style("opacity","1")
.style("position","fixed")
.style("top","0");

//////////

d3.select("#logoOpener")
 .style("opacity","1")
 .style("height","98px")
.style("top","3px")
.style("left","3px")
 .transition(600)
  .style("opacity","0")
 .style("height","12px")
.style("top","-3px")
.style("left","-3px");

//////////


  kftrigger='1';


 trigger=2;

}




 }

  /////////////
  //////////

  /**
   *
   */
  function showTitle3() {

     
  /// var backgroundColoredIn = document.getElementById("backgroundColoredIn");
  /////  backgroundColoredIn.setAttribute("style", "background-color:#e1e2e1; ");



 var backgroundColoredIn = document.getElementById("backgroundColoredIn");
    backgroundColoredIn.setAttribute("style", "visibility:hidden; ");

 
 
  


  


 //////////////////////////////document.getElementById("tab2").click();

 
 

  }

  ///////
  ///////

  /**
   *
   *
   */
  function showTitle4() {

 

  }

  /////
  ////////

  /**
   *
   */
  function showTitle5() {


///////////////////////////// document.getElementById("tab3").click();


 



  var backgroundColoredIn = document.getElementById("backgroundColoredIn");
  ////////////////////////////  backgroundColoredIn.setAttribute("style", "background-color:#ff5722; ");
 backgroundColoredIn.setAttribute("style", "background-color:#cfcfcf; ");


 



  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle6() {

 
 



  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle7() {


 var backgroundColoredIn = document.getElementById("backgroundColoredIn");
    backgroundColoredIn.setAttribute("style", "background-color:#e1e2e1; ");



 

//////////////////////////////////////////
///// remove interactive above
 
////////////////////////////////////////////
///////////////////////////////////////////

  


  }


  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle8() {

  



  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle9() {


 




  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle10() {


 



  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle11() {


 




  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle12() {



 


  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle13() {



 


  }

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle14() {

 





  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle15() {

 

  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle16() {


 





  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle17() {


 




  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle18() {
/////////////////////////////document.getElementById("tab4").click();


 


  }

  ////////////////
  /////////////////////////
  ///////////////////////



  function showTitle19() {


 



  }

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle20() {  
    



}

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle21() {


 



//////////////////////////    document.getElementById("tab5").click();
}

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle22() {


 



       
  }

 ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle23() {
 



 






  }


 ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle24() {
 


 





     

  }


 ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle25() {
 //
 


 

  }

  ////////////////
  /////////////////////////
  ///////////////////////



  function showTitle26() {
 //
//////////////////////////// document.getElementById("tab6").click();

///////////////////////////        var titleCloser = document.getElementById("titleCloser");
 ////////////////////////   titleCloser.setAttribute("style", "display:inline-block; ");
  
        var titleCloser = document.getElementById("titleCloser");
    titleCloser.setAttribute("style", "display:none; ");




  }

  ////////////////
  /////////////////////////
  ///////////////////////







  ////////////////
  /////////////////////////
  ///////////////////////
  /**
   * UPDATE FUNCTIONS
   *
   * These will be called within a section
   * as the user scrolls through it.
   *
   * We use an immediate transition to
   * update visual elements based on
   * how far the user has scrolled
   *
   */

  /**



  /**
   * DATA FUNCTIONS
   *
   * Used to coerce the data into the
   * formats we need to visualize
   *
   */

  /**
   * activate -
   *
   * @param index - index of the activated section
   */
  chart.activate = function(index) {
    activeIndex = index;
    var sign = activeIndex - lastIndex < 0 ? -1 : 1;
    var scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    scrolledSections.forEach(function(i) {
      activateFunctions[i]();
    });
    lastIndex = activeIndex;
  };

  /**
   * update
   *
   * @param index
   * @param progress
   */
  chart.update = function(index, progress) {
    updateFunctions[index](progress);
  };

  // return chart function
  return chart;
};

/**
 * display - called once data
 * has been loaded.
 * sets up the scroller and
 * displays the visualization.
 *
 * @param data - loaded tsv data
 */
function display() {
  // create a new plot and
  // display it
  var plot = scrollVis();
  d3.select("#vis")
    ////  .datum(data)
    .call(plot);
 
  // setup scroll functionality
  var scroll = scroller().container(d3.select("#graphic"));
 
   // pass in .step selection as the steps
  scroll(d3.selectAll(".step"));
 
  // setup event handling
  scroll.on("active", function(index) {
    // highlight current step text
    for (var i = 0; i < window.slides.length; i++) {
      var slide = window.slides[i];
      if (i + 1 === index) {
       slide.show();
        console.log("show");
      } else {
       slide.hide();
        console.log("hide");
      }
    }

    ////////////////document.body.style.backgroundImage = "url("+index+".jpg)";

   
 



    ///////////var getBG = document.getElementById( 'container'+index );
    ///////    getBG.setAttribute("style", "background-image:url("+index+".jpg); "  );

     console.log(index);

    // activate current section
    plot.activate(index);
  });

  scroll.on("progress", function(index, progress) {
    plot.update(index, progress);
  });
}

// load data and display
document.addEventListener("DOMContentLoaded", function() {
  display();
});

window.addEventListener("resize", onResize);

function onResize(h) {
  var height = window.windowHeight;
  var width = window.windowWidth;

 
}
