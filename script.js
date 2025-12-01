/*t pen = {
    color : "red",
    brand: "win",
}//

/*let k = Object.keys(pen);
console.log(k);

let v = Object.values(pen);
console.log(v);

let e = Object.entries(pen);
console.log(e);

let a = Object.assign(pencil, pen);
console.log(a);


console.log(pencil);*/

/*t obj1 = {
    name : "vanshika kathpal",
    age : 24
}
let obj2 = {
    fame : "vansh",
    class : 4
}

/*t obj3 = {...obj2};
console.log(obj3);*/

/*t obj4 = {...obj1 , ...obj2};
console.log(obj4);*/


/*.city = "panipat";
console.log(obj1);

obj2.surname = "chawla";
console.log(obj2);*/

/*ject.freeze(obj1);
obj1.country = "india";
console.log(obj1);
delete obj1.age;
obj1.name = "banas";*/

/*ject.seal(obj1);
/*j1.country = "USA";
console.log(obj1);*/

/*lete obj1.name;
console.log(obj1);

obj1.name = "banaskantha";
console.log(obj1);*/

/*let obj = {
    name : "vanshika",
    class : 5,
    city: "panipat",
    country: "india"
}

let {city, name} = obj;
console.log(city, name);

let cars = {
    first : "defender",
    second : "fortuner",
    third : "suzuki",
    fourth : "porsche"
};

let {fourth, first} = cars;
console.log(fourth, first);

let arr = [5, "vanshika kathpal", {brand: "punjabi"}];

let [item1, item2, a] = arr;
console.log(item1, item2);
console.log(item1, item2, a);

// DOM MANIPULATION --- DOCUMENT OBJECT MODEL>>>>>
 1] DOM -- LIKE A TREE 
 2] SELECTION OF HTML ELEEMENTS 
 3] HOW TO CHANGE OR MANIPULATE HTML
 4] HOW TO CHANGE OR MANIPULATE CSS
 5] EVENT LISTENER {Event, function}*/

/*let sel = document.querySelector('h1');
console.log(sel);
sel.innerHTML = "I AM LEARNING HTML AS A PART OF JAVASCRIPT";
sel.style.backgroundColor = "Red";
sel.style.color = "White";
sel.addEventListener("click", () => {
    sel.style.backgroundColor = "Orange"
});

           

let h =  document.querySelector("h5");
console.log(h);
h.innerHTML = "VANSHIKA";
h.style.backgroundColor = "Red";
h.style.color = "White";
h.style.width = "200px";
h.addEventListener("click",()=>{
    h.style.backgroundColor = "Orange"
})

let head = document.querySelector('h2');
console.log(head);
head.innerHTML = "vanshika have a good day";
head.style.backgroundColor = "RED";
head.style.color = "White";
head.addEventListener("click",()=>{
    head.style.backgroundColor = "Orange"
});

let box = document.querySelector('p');


let but = document.querySelector('button');
but.addEventListener("click",()=>{
    box.style.backgroundColor = "Orange"
    box.style.scale = 1;
});

let off = document.querySelector('.offbutton');
off.addEventListener("click",()=>{
    box.style.backgroundColor = "grey"
});

let d = document.querySelectorAll('p');*/


/*let fal = document.querySelector('.node');
console.log(fal.lastChild);*/
  
 /*let a = document.querySelector('.HTML');
 console.log(a);
 let b = document.querySelector('#css');
 console.log(b);
 let c = document.querySelectorAll('div');
 console.log(c);
let d = document.querySelectorAll('*');
console.log(d);
let e = document.querySelectorAll('div');
console.log(e);
let f = document.querySelectorAll('p');
console.log(f);
let g = document.querySelector('.div p');
console.log(g);
console.log(a.childNodes);*/



// tag Name //

/*let a = document.querySelector('h1');
//console.log(a.nodeName);
//console.log(a.firstChild);//
console.log(a.firstChild.nodeName);*/


// text// inner text // text content


/*a.innerText = "Vanshika wants to master javascript";
console.log(a.innerText);
console.log(a.textContent);

let b = document.querySelector('h2');
b.innerText = "vanshika is a very intectuall girl";
console.log(b);

let c = document.querySelector('h3');
c.innerText = "vanshika is learning JS as a part of frontend development";
console.log(c);*/ 

/*let b = document.querySelector('h1').innerHTML = '<p>vanshika is doing great</p>';
let a =document.querySelector('h2').innerHTML = '<span> done BSC. STATISTICS FROM UNIVERSITY OF DELHI</span>'
 console.log(a);
 console.log(b);*/

 /*let a = document.querySelector('h1');
 console.log(a.tagName);//ignores visibility
 console.log(a.nodeName);//ignores visibility
 console.log(a.textContent);//ignores visibility
 console.log(a.innerText);// not ignore visibility
 console.log(a.innerHTML);*/

let a = document.querySelector('h1');
console.log(a);
console.log(a.tagName);
console.log(a.nodeName);
console.log(a.childNodes);
console.log(a.textContent);
console.log(a.innerText);
a.innerHTML = '<span>Currently learning DOM AS A PART OF JAVASCRIPT</span>';
