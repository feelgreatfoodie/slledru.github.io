"use strict";
var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello, World!";

var myImage = document.querySelector("img");
myImage.onclick = function() {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "assets/hackers_001.jpg") {
    myImage.setAttribute("src", "assets/hackers_002.jpg");
  } else {
    myImage.setAttribute("src", "assets/hackers_001.jpg");
  }
};

var imageArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
var thumbBar = document.querySelector(".thumb-bar");
var displayImage = document.querySelector(".displayed-img");
for (var i = 0; i < imageArray.length; i++) {
  var thumbNail = document.createElement("img");
  thumbNail.setAttribute("src", "assets/" + imageArray[i]);
  thumbNail.setAttribute("width", "120px");
  thumbNail.setAttribute("height", "80px");
  thumbNail.onclick = function() {
    displayImage.setAttribute("src", this.getAttribute("src"));
    displayImage.setAttribute("width", "600px");
    displayImage.setAttribute("height", "400px");
  };
  thumbBar.append(thumbNail);
}

/*
navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
});
*/

const canvas = document.querySelector("#canvas");
// Initialize the GL context
const gl = canvas.getContext("webgl");

// Only continue if WebGL is available and working
if (!gl) {
  alert("Unable to initialize WebGL. Your browser or machine may not support it.");
} else {
  console.log(gl);
  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}
