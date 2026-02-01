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

/*const { createElement } = require("react");*/

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
 console.log(a.innerHTML);

let a = document.querySelector('h1');
console.log(a);
console.log(a.tagName);
console.log(a.nodeName);
console.log(a.childNodes);
console.log(a.textContent);
console.log(a.innerText);
a.innerHTML = '<span>Currently learning DOM AS A PART OF JAVASCRIPT</span>';*/

//parent node practice//

/*let selector = document.querySelector('#box');

let parentNode = document.parentNode*/

/* DOM -- document object model  5 phases : 1. DOM 
2. SELECTION OF AN HTML 
3.MANIPULATION OF AN HTML 
4. MANIPULATION OF CSS
5.EVENT HANDLING 


1. DOM -- DOCUMENT OBJECT MODEL 
IT CHANGES THE HTML ELEMENTS INTO OBJECTS SO THAT JAVASCRIPT CAN EASILY ACCESS THEM. 
LIKE CSS CAN EASILY ACCES  HTML BUT JAVASCRIPT CAN'T EASILY ACCESS HTML.SO IT NEED A DOM . 
IT NEED WHEN WE WANT TO CHANGE THE WEBPAGE WITHOUT LOADING 
DOM IS AVAILABLE INSIDE THE WINDOW OBJECT, 
WE HAVE TO ADD SCRIPT AT THE LAST OF THE BODY TAG , SO HTML ELEMENTS CAN LOAD FIRST, THEN JS RUN , IF WE ADD JS IN HEAD TAG IT WILL RETRUN NULL. BECAUSE AT THAT TIME HTML ELEMENTS ARE UNABLE TO LOAD,
2. SELECTION OF AN HTML */

/*let a = document.getElementsByClassName('para');
console.log(a);*/
/*et b = document.querySelector('div');
console.log(b);
b.innerHTML = "learning Web development";
let c = document.querySelectorAll('div');
let d = c.innerHTML = "she is a good girl";
console.log(d);*/

/*1.Append a new list item at the end

Task:
Given this HTML:

<ul id="fruits">
  <li>Apple</li>
  <li>Mango</li>
</ul>

Add a new <li>Banana</li> at the end using append or appendChild.*/
 

/*let a = document.querySelector('ul');
console.log(a);
let elem = document.querySelector('li');
elem.innerHTML = 'banana';
a.append(elem);*/



/*let a = document.querySelector('ul');
let elem = document.createElement('li');
elem.innerHTML = 'banana';
/*a.append(elem);*/








/*/*2. Prepend an item at the top of list

Task:
Add <li>Orange</li> at the start of the same list using prepend.*/


/*let a = document.querySelector('ul');
console.log(a);
let elem = document.createElement('li');
elem.innerHTML = "Orange";
a.prepend(elem);*/












/*3. Insert a paragraph before a div

HTML:

<div id="box">Hello</div>


Insert: <p>Inserted Before</p> before the div using insertBefore.*/


/*let a = document.querySelector('div');
let elem = document.createElement('p');
elem.innerHTML = "Inserted Before";
a.before(elem);*/

/*let a = document.querySelector('div');*/
//let b = a.getAttribute('id');//
//console.log(b);//

/*let a = document.querySelector('div');*/
/*let b = a.getAttribute('title');
console.log(b);*/
/*let b = a.attributes;
console.log(b);*/


/*let a = document.querySelector('div');
console.log(a.getAttribute('id'));
a.setAttribute('title', 'vanshika');
console.log(a);*/

/*let a = document.querySelector('div');
//console.log(a.attributes);//
//console.log(a.getAttribute('title'));//
let classvalue = a.getAttribute('class');
console.log(classvalue);

a.setAttribute('class', `{classvalue} random`);
console.log(a);*/

//create a paragraph with text "----" add background color to black & font color to green//

/*let elem = document.createElement('p');
let b = document.createElement('button');
b.innerHTML = 'Click me';
console.log('b');
b.style.backgroundColor = "black";
b.style.color = "green";
b.setAttribute('style', 'background-color: red', 'color: blue');

let body = document.querySelector('body');
body.append(b);*/


//create a div tag in html & give it a class & some styling.now create a new class in CSS & try to append this class to the <div> elem </div>//

/*let a = document.querySelector('.box');
a.setAttribute('class', `${a.getAttribute('class')} box2`);
console.log(a);*/

//Practicing CSS Manipulation://

//1.using style//
/*let a = document.querySelector('div');
a.style.fontSize = "60px";
a.style.backgroundColor = "crimson";
a.style.color = "white";*/

/*2. Using Attribute method
let a = document.querySelector('div');
a.setAttribute('style', 'color: blue;')
console.log(a);

in attribute method we can't give mutiple styling together for this , if we want multiple styling we can
use cssText method */

//3. cssText method//
/*let a = document.querySelector('div');
a.style.cssText = 'background-color: crimson; font-size: 80px';
console.log(a);*/
/*let a = document.querySelector('div');
a.style.cssFloat = "right";
a.style.cssText = 'background-color: green; font-size: 80px';
console.log(a);*/

//4.using className property*//
/*let a = document.querySelector('div');
a.className = "redbg"
console.log(a.className);*/

/*5. using classlist property

add*/
/*let a = document.querySelector('.box');
a.classList.add('learn','practice','build','deploy');


//remove//

/*let b = document.querySelector('.box');
b.classList.remove('deploy');
console.log(b.classList);*/

/*let c = document.querySelector('.box');
c.innerHTML = "VS";
c.classList.toggle('practice');
console.log(c.classList);*/

/*let d = document.querySelector('.box');
let e = d.classList.contains('learn');
console.log(e);*/


/*let button = document.querySelector('button');
let body = document.querySelector('body');
let theme = 'light';


button.addEventListener('click',()=>{
    if(theme === 'light'){
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
        theme = 'black'
    } else {
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
        theme = 'light'
    }
})*/

/*button.addEventListener('click',()=>{
    body.classList.toggle('dark')            
        });*/

 
/*let button = document.querySelector('button');
let body = document.querySelector('body');
let theme = 'light';

button.addEventListener('click',()=>{
    if(theme === 'light'){
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
        theme = 'black'
    } else {
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
        theme = 'light'
    }
})*/
/*let secondbutton = document.querySelector('.SecondBtn');

SecondBtn.onclick = function(event) {
    console.log(event);*/

/*let FirstButton = document.querySelector('.FirstBtn');

let show = function(){
    console.log("hello vanshika")
}
FirstButton.addEventListener('click', function (event) {
    console.log(event.type);
})*/

/*FirstButton.addEventListener('click',show);
FirstButton.addEventListener('click',show);
FirstButton.removeEventListener('click',show);*/

/*let firstbutton = document.querySelector('.FirstBtn');

firstbutton.addEventListener ('click',function(){
    console.log("first event listener")
});

firstbutton.addEventListener('click', function(){
    console.log('this is second event listener')
});

firstbutton.addEventListener('click', function(){
    console.log('this is second event listener')
});
firstbutton.addEventListener('click', function(){
    console.log('this is second event listener')
});

firstbutton.removeEventListener('click',function(){
    console.log("this is second event listener")
})*/


/*let firstbutton = document.querySelector('.FirstBtn')

let showconsole = function(){
    console.log("hello")
}

/*firstbutton.addEventListener('click', showconsole);
firstbutton.addEventListener('click', showconsole);

firstbutton.removeEventListener('click', showconsole);

firstbutton.addEventListener('click', function(event){
    console.log(event.type)
})*/


/*EVENT PROPAGATION

it describes  the way of how the events are travelled THROUGH THE dom when they get trigerred.
1. event capturing (up to low) using true parameter 
2. target evnt
3. event bubbling (by default low to up)*/

/*let  grandparent = document.querySelector('.grand-parent');
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');

grandparent.addEventListener('click',() =>{
    alert("CLICKED ON GRANDPARENT")
})

grandparent.addEventListener('click',() =>{
    alert("CLICKED ON GRANDPARENT")
},true)

parent.addEventListener('click',() =>{
    alert("CLICKED ON PARENT")
})

parent.addEventListener('click',() =>{
    alert("CLICKED ON PARENT")
},true)

child.addEventListener('click', () =>{
    alert("CLICKED ON CHILD")
})

child.addEventListener('click',() =>{
    alert('CLICKED ON CHILD')
},true);


/*let grandparent = document.querySelector('.grand-parent');
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');


grandparent.addEventListener('click',() =>{
    alert("CLICKED ON GRANDPARENT")
});

parent.addEventListener('click',() =>{
    alert("CLICKED ON PARENT")
});

child.addEventListener('click', () =>{
    alert("CLICKED ON CHILD")
});*/

/*let grandparent= document.querySelector('.grand-parent');
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');

grandparent.addEventListener('click',(event)=>{
    console.log("clicked on Grandparent")
    console.log(event.target)
    console.log(event.currentTarget)
})

parent.addEventListener('click',()=>{
    console.log("clicked on parent")
    console.log(event.target)
    console.log(event.stopImmediatePropagation)
})

parent.addEventListener('click',()=>{
    console.log("vanshika")
    console.log(event.stopImmediatePropagation)
})

child.addEventListener('click',()=>{
    console.log("clicked on child")
    console.log(event.target)
    console.log(event.currentTarget)
})*/


//EVENT DELEGATION

/*let container = document.querySelector('.container');
let box = document.querySelector('.box');

container.addEventListener('click',function(event){
    if(event.target.className === 'box'){
    console.log(event.target.textContent)
}
})*/


//Numbers in JS//

/*let num = 2811;
console.log(typeof num);

let num1 = "2811";
console.log(typeof num1);

let num2 = Number("2811");
console.log(typeof num2);

let num3 = new Number("2811");
console.log(typeof num3);*/

/*let num = '123.40';
let num1 = 123.40;
let num2 = '123.45465px';

//console.log(typeof num);//

console.log(Number.parseInt(num));
console.log(typeof(Number.parseInt(num1)));
console.log(Number.parseFloat(num));*/

//JAVASCRIPT  JSON SYNTAX//
/*
let json1 = `{
    "name" : "vanshika kathpal",
    "age" : 21,
    "isMarried" : false,
    "Status" : "learning frontend development"
}`;
 
/*
let json2 = JSON.parse(json1);
console.log(typeof json2);


console.log(typeof json1);
*/



const data = require('./script.json');
console.log(data);
























