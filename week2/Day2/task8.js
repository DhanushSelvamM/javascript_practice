/*Task 1: Create an array of numbers. Use map() to create a new array with each number
squared.
Task 2: Use filter() on an array of numbers to get a new array with only even numbers.
Task 3: Create an array of product prices. Use reduce() to find the total price.
Task 4: For an array of strings, use map() to create a new array that contains the length of
each string.
Task 5: Use splice() to remove the third item of an array and replace it with the string
“replaced!”.
Task 6: For an array of integers, use slice() to get a new array containing the 2nd, 3rd, and 4th
elements.
Task 7: Create an array of names. Use filter() to produce a new array that contains names
starting with the letter ‘A’.
Task 8: For an array of scores (out of 100), use map() to grade each score (e.g., 90-100 = ‘A’,
80-89 = ‘B’).
Task 9: Given an array of ages, use reduce() to find the average age.
Task 10: Use splice() to insert two new fruits after the second fruit in an array of fruits*/
//map()
//Task1
var arr=[1,2,3,4];
const sqr=(num)=>num*num;
let arrs=arr.map(sqr);
console.log(arrs);
//Task2
//filter
var arr=[1,2,3,4,5,6,7,8,9];
const evennum=(num)=>(num%2==0);
var evennums=arr.filter(evennum);
console.log(evennums);
//Task3
//reduce()
var price=[1,2,3,4,5];
const red=(num,num1)=>(num+num1);
var prices=price.reduce(red);
console.log("Total:"+prices);
//Task4
//map()
var str=['Dhanush','Kumar'];
const len=(string)=>(string.length);
var length=str.map(len);
console.log(length);
//Task5
//splice()
var arr=['dhnaush','kumar','leo','captain miller'];
arr.splice(2,1);
console.log(arr);
//Task6
//slice()
var arr=[1,2,3,4,5,6,7];
const element=arr.slice(1,4);
console.log(element);
//Task7
//filter();
var arr=['apple','banana','cherry','mango'];
const fruit=(name)=>(name.toLowerCase().charAt(0)=="a")
var alpha=arr.filter(fruit);
console.log(alpha);
//Task8
//map()
var arr=[83,80,95,70];
var grade=(num)=>{
    if(num>=90&&num<=100){
        return 'Gradde='+num+'(A)';
    }else if(num>=80&&num<90){
        return 'Grade='+num+'(B)';
    }else{
        return 'c';
    }
}
var grades=arr.map(grade);
console.log(grades);
//Task9
//reduce()
var arr=[30,22,18,19];
var ave=(num,num1)=>(num+num1)/arr.length;
var sum=arr.reduce(ave);
console.log(sum);
//Task10
//splice()
var arr=['apple','mango'];
arr.splice(2,0,'orange','cherry');
console.log(arr);
