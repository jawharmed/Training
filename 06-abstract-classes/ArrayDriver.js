"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(4, 3, 10);
var myRectangle = new Rectangle_1.Rectangle(6, 7, 29, 10);
// declare an array of shapes ... 
var theShapes = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShap = theShapes_1[_i];
    console.log(tempShap.getInfo());
    console.log(tempShap.calculateArea());
    console.log();
}
