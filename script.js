  // Wrap the whole thing up in a closure so that it’s descrete from everything else "avoiding polluting the global scope"
(function () {  
  //record info about what the users doing
  var log = [];
  // place to store what people click on. See: 52 – preffer array literals to array constructor
  funtion addEventListeners () {
    // define how we listen for events
    var ClickHandler = function (event) {
      console.log('event', event);
    }
    document.addEventListener('click', clickHandler, false);
  };
  addEventListeners();
  // command to actually start listening for events
}());