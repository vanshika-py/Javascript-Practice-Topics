/*1.let employee = { 
    name: "vanshika kathpal",
    position:"full stack developer",
    age : 21,
    performance : function perf() {
        console.log("vanshika is a very excellent full stack developer")
    } 
}
employee.performance();*/

/*2.let car = { 
    name: "defender",
    brand: "toyata",
    price: "2 crore",
    speed : 120,
    color: "white",
    status: function check() { 
        if(this.speed > 100) { 
            console.log("Buy this car")
         } else { 
                console.log("don't buy")
    }
}
};*/

//car.status();//

/*3. let students = {
    totalcount : 12000,
    female : 4000,
    male : 8000,
    category : "topper",
    marks : 95,
    check : function () { 
        if(this.marks === 99) {
       console.log("Topper of the School") 
        } else if (this.marks = 95) {
         console.log("Bright student")
        } else {
            console.log("Average Student")
        }
    } 
};

 4.students.check();*/ /*Bank account object,name,balance,Ek function:,deposit(amount) balance increase kare,withdraw(amount) balance kam kare,Final balance print karo.*/

 /*let account = {
    holdername: "Vanshika Kathpal",
    balance: 10000000,
    deposit (amount) {
        this.balance += amount
        console.log("Final balance after deposit = " + this.balance)
    },
        withdrawl(amount) {
            this.balance -= amount
            console.log("Final balance after withdrwal= " + this.balance)
        }
    };

account.deposit(20000000);
account.withdrawl(1000000);*/

/* 5. Book ---object {title, author,pages,Ek function readTime(),pages / 2 karke “minutes” print kare
(Assume 2 pages = 1 minute)*/

 /*let book = { 
    title : "Master your mindset",
    author: "Ravi Saroj",
    pages: 60,
    readTime() {
        console.log("minutes =" + this.pages/2)
    }
    };
    
book.readTime();


6. 5. Create a Laptop object and add a function checkPrice() that returns
 expensive/cheap.*/
 
 /*let laptop = {
    brand : "Dell",
    color : "grey-black",
    Price : 80000,
    checkPrice() {
        if(this.Price > 50000 ){
            console.log("Expensive")
        } else {
            console.log("Cheap")
        }
    }
};
laptop.checkPrice();*/

/*7.  Make a mobile object and add a function batteryStatus().*/

let mobile = {
    brand: "samsung",
    color: "black",
    model: "s20",
    battery: "80",
    batterystatus() {
        if(this.battery >= 60){
            console.log("battery status is good can buy") 
        } else if(this.battery === 100){
            console.log("excellent status must buy it")
        } else {
            console.log("don't buy")
        }
    }
};


let van = Object.keys(mobile);
console.log(van);

let val = Object.values(mobile);
console.log(val);

let ent = Object.entries(mobile);
console.log(ent);

delete mobile.color;