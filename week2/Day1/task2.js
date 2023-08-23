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
