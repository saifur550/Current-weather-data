// arrow function 

const bank = owner =>{
    balance = 0; 
    return amount => {
        balance += amount ; 
        // balance = balancer + amount
        return balance
    }

}


const abBank = bank ('sakib');
console.log(abBank(1));
console.log(abBank(2));
console.log(abBank(3));
console.log(abBank(4));
