var supportsES6 = function() {
  try {
    new Function("(a = 0) => a");
    return true;
  }
  catch (err) {
    return false;
  }
}();
if (supportsES6) {
  var script = document.createElement("script");
  script.src = "my-es6-file.js";
  document.head.appendChild(script);
}