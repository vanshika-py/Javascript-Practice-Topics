
//currying in javacript //


// function add (a,b,c){
//     return a + b + c;
// }


// console.log(add(2,3,4))

// but suppose wqe have so many arguments if any arghument come from bfirst api second is from second api and third argument is typed by the user so first we have collect that arguments value then only w can console it 





// const add =   (a) => (b)=> (c) => a + b + c;
// console.log(add(1) (2) (3));

function sendAutoEmail (to){
    return function (subject) {
    return function (body) {
    console.log(`sending email to ${to} with subject ${subject} : ${body}`)
}
    }
};



let step1 = sendAutoEmail("vanshikakathpal381@gmail.com");
let step2 = step1("New order confirmation")
let step3 = step2("Hey vanshika , there is somethging for you")