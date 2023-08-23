/*Task 9: Create an object account with properties: name, balance and
methods: deposit, withdraw. Use the this keyword appropriately.
Task 10: For the account object, ensure that the balance can’t go negative using
the this keyword.*/
let account={
    name:'Dhanush',
    balance:4000,
    deposit:function(a){
        this.balance=(Number(this.balance)+Number(a));
        return 'Deposited ammount : '+Number(a);
    },
    withdraw:function(b){
        if(b>this.balance){
            console.log('Negative');
        }else{
        this.balance=(Number(this.balance)-Number(b));
        return 'Withdraw amount : '+Number(b);
        }
    },

}
console.log(account.name);
console.log(account.deposit(1000));
console.log(account.withdraw(6000));
console.log(account.balance);
