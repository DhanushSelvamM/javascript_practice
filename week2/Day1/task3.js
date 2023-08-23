/*Task 3: Create an object calculator with methods add(), subtract(), multiply(), and divide(). Use
the this keyword to refer to the object’s properties within these methods.
Task 4: Extend the calculator object to include a history array. Each time a calculation is made,
store the operation and result in this array.
*/
let Calculator={
    a:54,
    b:6,
    add:function(){
        return'Addition:'+(Number(this.a)+Number(this.b));
    },
    sub:function(){
        return'Subraction:'+(Number(this.a)-Number(this.b));
    },
    mul:function(){
        return'Multiplication:'+(Number(this.a)*Number(this.b));
    },
    div:function(){
        return'Division:'+(Number(this.a)/Number(this.b));
    },
    Math:[]
    
}
console.log(Calculator.add());
console.log(Calculator.sub());
console.log(Calculator.mul());
console.log(Calculator.div());
Calculator.Math.push(Calculator.add());
Calculator.Math.push(Calculator.sub());
Calculator.Math.push(Calculator.mul());
Calculator.Math.push(Calculator.div());
console.log(Calculator.Math);