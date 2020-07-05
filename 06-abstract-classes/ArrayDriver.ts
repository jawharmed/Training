import {Shape} from "./Shape";
import {Circle} from "./Circle";
import { Rectangle } from "./Rectangle";


let myCircle = new Circle(4, 3, 10);
let myRectangle = new Rectangle(6,7, 29, 10);

// declare an array of shapes ... 
let theShapes: Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShap of theShapes){
    console.log(tempShap.getInfo());
    console.log(tempShap.calculateArea());
    console.log();
}