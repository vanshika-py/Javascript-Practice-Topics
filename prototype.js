
const p1 = {
    fname : "vanshika",
    lname : "kathpal",
    getfullname (){
        return `${this.fname} ${this.lname}`;
    },
};

// console.log(p1);

// const p2 = {
//     fname : "diya",
//     lname : "kathpal"
// }
// console.log(p2.fname)

//using prototype//

//  const p2 = Object.create (p1);

// // console.log(p2);

// console.log(p2.lname);

const p2 = {
    __proto__: p1 
}

console.log("p1 before is", p1.fname);

p2.__proto__.fname = "Sumit";
console.log("p1 after is", p1.fname);

