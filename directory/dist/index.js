"use strict";
let age = 5;
if (age > 1) {
    console.log("hi there");
}
const data = {
    name: "kiba",
    age: 12,
    username: "kibakai@gmail.com"
};
function takeData(user) {
    console.log(user.age);
}
takeData(data);
