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