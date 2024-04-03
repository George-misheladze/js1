"use strict"

//1st 
let item1 = 100;
if (item1 < 50) {
    console.log("ნაკლებია 50ზე")
} else if (item1 > 20) {
    console.log(" მეტია 15ზე ")
}
  else {
    console.log("შეცდომა")
  }


  // 2nd
let name1 ="მარიამი";
if (name1 === "მარიამი") {
    console.log("true")
}  else {
    console.log("false")
}

//3rd
let name2 = "მარიამი";

switch (name2) {
    case 'მარიამი';
    console.log('true');
    default:
        console.log('false');
}
