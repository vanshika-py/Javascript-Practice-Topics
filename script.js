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

let sel = document.querySelector('h1');
console.log(sel);
sel.innerHTML = "I AM LEARNING HTML AS A PART OF JAVASCRIPT";
sel.style.backgroundColor = "Red";
sel.style.color = "White";
sel.addEventListener("click", () => {
    sel.style.backgroundColor = "Orange"
});

let para = document.querySelector('p');
console.log(para);
para.innerHTML = "I feel Dom as interesting but facing little problems while scripting , but it's ok today is my first day"
para.style.backgroundColor = "Greeb";
para.style.Color = "White";
para.addEventListener("click", ()=> {
  para.style.color = "Orange"
})

let h =  document.querySelector("h5");
console.log(h);
h.innerHTML = "VANSHIKA";
h.style.backgroundColor = "Red";
h.style.color = "White";
h.style.width = "200px";
h.addEventListener("click",()=>{
    h.style.backgroundColor = "Orange"
})









