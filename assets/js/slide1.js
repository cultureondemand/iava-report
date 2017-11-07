(function() {
  /**
   * Create slide element
   * @param {string} id - unique id of the slide
   * @return {object} node - DOM element
   */
  function createSlide(id, illo) {
    var slide = document.createElement("section");
     slide.setAttribute("id", "step-" + id);
    slide.className = "step";
      var spanNode = document.createElement("span");
      spanNode.className = "stepspan";
     slide.appendChild(spanNode);



      var illoNode = document.createElement("div");
      illoNode.className = "opengraphics";
       illoNode.setAttribute("id", "illo-" + id);
 
    if (!!illo) {


      var illoSvg = document.createElement("svg");
      illoSvg.className = "opengraphics";
       illoSvg.setAttribute("id", "illosvg-" + id);

     illoNode.innerHTML = illo;
}

//// illoNode.appendChild(this.illo);
   content.appendChild(illoNode);

 
    return slide;
  }

  /**
   * Create header element
   * @param {string} header - text
   * @return {object} node - DOM element
   */
 







  /**
   * Create section header
   * @param {number} id - slide id
   * @param {string} text - text to populate node
   * @return {object} node - DOM element
   */
  function createHeader(id,header) {
    if (typeof header !== "undefined" && header.length > 0) {
      var node = document.createElement("div");
      node.className = "title";
      node.setAttribute("id", "h2-" + id);
      var textNodeX = document.createElement("span");
      textNodeX.innerHTML = header;
      node.appendChild(textNodeX);
      return node;
    } else {
      return false;
    }
  }




  function createHeaderB(id,headerB) {
    var node = document.createElement("h3");
  ////////// node.className = "step-content";

     node.innerHTML = headerB;

    return node;
  }






  function createIllo(id, illoUrl) {
    if (!!illoUrl) {
      var node = illoUrl;
      return node;
    } else {
      return false;
    }
  }

 
    


  function createIcon(iconUrl) {
    if (!!iconUrl) {
      var node = document.createElement("img");
      node.className = "icon";
      node.setAttribute("src", "assets/images/icons/" + iconUrl);
      node.setAttribute("alt", "icon");
      node.setAttribute("aria-hidden", true);
      return node;
    } else {
      return false;
    }
  }

  /**
   * Create body element
   * @param {string} body - html of body content
   * @return {object} node - DOM element
   */
  function createBody(body) {
    var node = document.createElement("div");
   node.className = "step-content";

     node.innerHTML = body;

    return node;
  }

  /**
   * Create section header
   * @param {number} id - slide id
   * @param {string} text - text to populate node
   * @return {object} node - DOM element
   */
  function createSectionHeader(id, text) {
    if (typeof text !== "undefined" && text.length > 0) {

  
      var node = document.createElement("div");
      node.className = "sectionhead";

      node.setAttribute("id", "container-" + id);
//////////////////////////  node.setAttribute("id", "container-" + id);
   var textNode = document.createElement("span");
    textNode.innerHTML = text;
    node.appendChild(textNode);  
       return node;
    } else {
      return false;
    }
  }








 /**
   * Create section header
   * @param {number} id - slide id
   * @param {string} text - text to populate node
   * @return {object} node - DOM element
   */
  function createLabelHeader(id, text) {
    if (typeof text !== "undefined" && text.length > 0) {





 

      var labelnode = document.createElement("div");
      labelnode.className = "mdc-tab-bar-scrollerB";
      labelnode.setAttribute("id", "label-" + id);


 

      var labelhead = document.createElement("div");
      labelhead.className = "labelnode";
     labelhead.innerHTML = text;

    labelnode.appendChild(labelhead);  

        return labelnode;
    } else {
      return false;
    }
  }








  /**
   * Create the bkg element
   * @param {number} id - slide number matching the image filename
   * @return {object} node - DOM element
   */
  function createBkg(bkgImage) {
    var node = document.createElement("div");
    node.className = "bgbg js-background-image";
    var innerHTML =
      "<picture>" +
      '<!--[if IE 9]><video style="display: none;"><![endif]-->' +
      '<source srcset="assets/images/bkg/' +
      bkgImage.large +
      '" media="(min-width: 400px)">' +
      "<!--[if IE 9]></video><![endif]-->" +
      '<img srcset="assets/images/bkg/' +
      bkgImage.small +
      '">' +
      "</picture>";
    // node.style.backgroundImage = "url(assets/images/bkg/" + id + ".jpg)";
    node.innerHTML = innerHTML;
    return node;
  }

  // Slide Instance
  var Slide = function() {};

  /**
   * Initialize new Slide
   * @param {object} config - slide settings
   * @param {number} config.id - unique id for slide
   * @param {object} config.data - to populate slide content
   * @param {string} config.data.section - text for section header
   * @param {string} config.data.header - text for header
   * @param {string} config.data.body - html string for body content
   */
    Slide.prototype.initialize = function(config) {
    this.id = config.id;
    this.slide = createSlide(config.id, config.data.illo);
   //////////////// this.bkg = createBkg(config.data.bkgImage);
    this.sectionHeader = createSectionHeader(config.id, config.data.section);
    this.labelHeader = createLabelHeader(config.id, config.data.section);
    this.header = createHeader(config.id, config.data.header);
    this.headerB = createHeaderB(config.id, config.data.section);
    this.body = createBody(config.data.body);
    this.icon = createIcon(config.data.icon);
/////////////////////////////    this.illo = createIllo(config.id, config.data.illo);

   this.content = document.createElement("div");
  this.content.className = "page-content";
 /////    !!this.sectionHeader && this.content.appendChild(this.sectionHeader);
     this.content.appendChild(this.body);

////////   !!this.header && this.content.appendChild(this.header);

 
 //////////   this.slide.appendChild(this.bkg);
     !!this.sectionHeader && this.slide.appendChild(this.sectionHeader);
    !!this.icon && this.content.appendChild(this.icon);
      !!this.header && this.content.appendChild(this.header);
      !!this.labelHeader && this.content.appendChild(this.labelHeader);

  ///////  !!this.icon && this.slide.appendChild(this.icon);
   ////  this.slide.appendChild(this.illo);
     this.slide.appendChild(this.content);

     this.slide.style.opacity = 1;

    document.body.appendChild(this.slide);
  };




///////////
///////
////////////


 

/////////////
////////
/////////////

  /**
   * Makes the slide visible
   */
  Slide.prototype.show = function(index) {
    this.slide.style.visibility = "visible";
    this.slide.style.zindex = 1;

 //////   this.slide.className = "mdl-layout__tab-panel is-active";
 //////////   this.slide.classList.add("is-active");

    
 



  };

  /**
   * Hides the slide from the view
   */
  Slide.prototype.hide = function(index) {
    this.slide.style.visibility = "hidden";
    this.slide.style.zindex = 0;

       ///// this.slide.className = "mdl-layout__tab-panel";

      ////////     this.slide.classList.remove("is-active");


 


  };

  window.Slide = Slide;
})();
