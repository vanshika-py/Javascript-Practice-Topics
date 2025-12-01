/*1.let employee = { 
    name: "vanshika kathpal",
    position:"full stack developer",
    age : 21,
    performance : function perf() {
        console.log("vanshika is a very excellent full stack developer")
    } 
}
employee.performance();*/

/*const { useLayoutEffect } = require("react");*/

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

/*let mobile = {
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

delete mobile.color; */


/*1.Append a new list item at the end

Task:
Given this HTML:

<ul id="fruits">
  <li>Apple</li>
  <li>Mango</li>
</ul>


Add a new <li>Banana</li> at the end using append or appendChild.*/
  
/*let a = document.querySelector('ul');
let elem = document.createElement('li');
elem.innerHTML = 'banana';
/*a.append(elem);*/

/*2. Prepend an item at the top of list

Task:
Add <li>Orange</li> at the start of the same list using prepend.*/
 /*let a = document.querySelector('ul');
 let elem = document.createElement('li');
 elem.innerHTML = "Orange";
 a.prepend(elem);*/

 
/*3. Insert a paragraph before a div

HTML:

<div id="box">Hello</div>


Insert: <p>Inserted Before</p> before the div using insertBefore.*/

/*let div = document.querySelector('div');
let elem = document.createElement('p');
elem.innerHTML = "Inserted Before";
div.before(elem);*/


/*4. Append text to an element

HTML:

<h1 id="title">Welcome</h1>


Task: Add " to DOM Practice" at the end using append() (no HTML).*/



/*let a = document.querySelector('h1');
a.innerHTML = "to DOM practice";
h1.append(a);*/



/*5. Prepend text inside a div

HTML:

<div id="msg">This is message.</div>


Task: Add "NOTE: " at the beginning using prepend().*/



/*6. insertAdjacentHTML (beforebegin)

HTML:

<button id="btn">Click Me</button>


Task: Insert

<p>Above the button</p>


above the button using insertAdjacentHTML("beforebegin").

7. insertAdjacentHTML (afterbegin)

HTML:

<div id="card">
  <h2>Card</h2>
</div>


Insert inside the div at the top:

<p>Inserted at start</p>

8. insertAdjacentHTML (beforeend)

HTML:

<div id="notes"></div>


Insert at bottom:

<p>End note</p>

9. insertAdjacentElement

HTML:

<section id="container"></section>


Create a new <h3> with JS and insert it afterbegin using insertAdjacentElement().

10. Insert a new item before another specific element

HTML:

<ul id="tasks">
  <li id="first">Task 1</li>
  <li>Task 2</li>
</ul>


Insert a new <li>Task 0</li> before Task 1 using insertBefore().

🔥 Advanced Practice Tasks
11. Build a comment system using append/prepend

HTML:

<input id="commentInput">
<button id="addBtn">Add</button>
<ul id="commentList"></ul>


Task:
When user adds a comment, insert the new comment at:

top using prepend

bottom using append

(Practice both)

12. Chat message UI

HTML:

<div id="chatBox"></div>


Task:
When message is sent → append at bottom.
When message is received → prepend at top.

13. Add notifications using insertAdjacentHTML

HTML:

<div id="notificationBox"></div>


Each new notification:

<div class="noti">New alert!</div>


Insert using "afterbegin" so most recent shows on top.

14. Insert ads between paragraphs

HTML:

<p>Para 1</p>
<p id="target">Para 2</p>
<p>Para 3</p>


Task: Insert:

<div class="ad">Ad Banner</div>


before Para 2 using insertBefore().

15. Build a dynamic list with 3 options

Buttons:

Add to top

Add to bottom

Add before selected item

Practice all insert positions.*/















