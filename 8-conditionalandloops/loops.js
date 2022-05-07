let arrOfNumbers=[1,2,3,4,5,6]
for (let i = 0; i < arrOfNumbers.length; i++) {
    if(arrOfNumbers[i]<5){
        console.log(arrOfNumbers[i]);
    }
}

const person = {fname:"John", lname:"Doe", age:25};

//for-in
//The JavaScript for in statement loops through the properties of an Object:
let text = "";
for (let x in person) {
  text += person[x];
}

//for of
//hace un loop sobre iterables como arrays
const cars = [{key:"BMW"}, {key:"Volvo"}, {key:"Mini"}];

let text1 = "";
for (let x of cars) {
  text1 += x.key;
}
console.log(text1)
