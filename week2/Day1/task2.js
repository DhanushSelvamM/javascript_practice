/*Task 1: Create an object named book with properties: title, author, and yearPublished. Add a
method named getSummary that returns a string summarizing the book.
Task 2: Modify the book object to include a method named age that calculates how old the
book is based on its publication year.*/
let Book={
    title:'Mahabharatham',
    author:'Vyasa',
    yearPublished:300,
    getSummary: function(){
        return "Title:"+this.title+"\nAuthor:"+this.author+"\nYearPublished:"+this.yearPublished;
   
    },
    age:function(){
        return "yearPublished:"+(2023-this.yearPublished);
    }
}
console.log(Book.getSummary());
console.log(Book.age());
