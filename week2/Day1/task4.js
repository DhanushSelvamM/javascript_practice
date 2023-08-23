let Person={
    Name:'Dhanush',
    age:12,
    increase:function(a){
        return 'Age Increased:'+(Number(this.age)+a)
    },
    decrease:function(a){
        if(this.age==a){
            console.log('The Age is gone to 0');
        }else{
           console.log('Age decreased:'+(Number(this.age)-a));
       }
        
        
    },
    greet:function(){
        return this.Name+' You are welcome';
    }
}
console.log(Person.increase(2));
console.log(Person.decrease(12));
console.log(Person.greet());