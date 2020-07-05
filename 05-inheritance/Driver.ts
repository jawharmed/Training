import {Shape} from "./Shape";
import {Circle} from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 5);
console.log(myShape.getInfo());

let myCircle = new Circle(4, 3, 25);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(6,7, 29, 10);
console.log(myRectangle.getInfo());