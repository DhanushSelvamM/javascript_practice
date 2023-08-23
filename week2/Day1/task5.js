/*Task 7: Design a circle object with properties radius and a method to calculate its area
using this.radius.
Task 8: Extend the circle object with methods to calculate its diameter and circumference.*/
let Circle={
    radius:5,
    calculate:function(){
        return 'Area of circle : '+(3.14*Number(this.radius)*Number(this.radius));
    },
    dia:function(){
        return 'Diameter of circle : '+(2*Number(this.radius));
    },
    circum:function(){
        return 'Circumference of circle : '+(2*(3.14)*Number(this.radius));
    }
}
console.log(Circle.calculate());
console.log(Circle.dia());
console.log(Circle.circum());