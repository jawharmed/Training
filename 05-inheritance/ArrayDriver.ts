import {Shape} from "./Shape";
import {Circle} from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 5);
let myCircle = new Circle(4, 3, 25);
let myRectangle = new Rectangle(6,7, 29, 10);

// declare an array of shapes ... 
let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShap of theShapes){
    console.log(tempShap.getInfo());
}