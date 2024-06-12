let age: number = 5;
if(age > 1){
    console.log("hi there");
    
}

interface user {
    name: string,
    age: number,
    username: string
}

const data: user = {
    name: "kiba",
    age: 12,
    username: "kibakai@gmail.com"
}

function takeData(user: user){
    console.log(user.age);
}

takeData(data);