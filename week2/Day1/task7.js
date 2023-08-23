/*Task 9: Create an object account with properties: name, balance and
methods: deposit, withdraw. Use the this keyword appropriately.
Task 10: For the account object, ensure that the balance can’t go negative using
the this keyword.*/
let fruit=[];
fruit.push('Mango');
fruit.push('Apple');
console.log(fruit);
console.log('Popped element : '+fruit.pop());
fruit.unshift('Strawberry');
console.log(fruit);
console.log('Shift fruit : '+fruit.shift());
console.log(fruit);
function number(){

    fruit.push(7);
}
number();
console.log(fruit);
function string(){
    fruit.push('Dhanush');
}
string();
console.log(fruit);
console.log('string not a fruit pop : '+fruit.pop());
let days=[
    'sunday','monday','tuesday','wednesday','thrusday','friday','saturday'
];
console.log(days);
for(i=0;i<days.length-1;i++){
    var num=days.shift();
        var num1=days.pop();
        days.unshift(num1,num);
}
console.log(days);
function letter(){
    days.push('z');
    days.unshift('z');
}
letter();
console.log(days);
let movies=[
    'Vikram','Jailer','Leo','Kanguva','Vadivaasal'
];
console.log(movies);
var name=prompt("enter the movie name");
movies.push(name);
console.log(movies);
movies.splice(2,1)
console.log(movies);