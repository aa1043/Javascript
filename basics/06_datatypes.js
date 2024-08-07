//Java script is dynamically typed

//Primitive Datatypes
//Call by value means a copy is sent and changes are made on it
// 7 types :string,number,bollean,null,undefined,symbol,BigInt
const score = 100
const scorevalue = 100.3
const isloggedin=false
const id=Symbol('123')
const aid=Symbol('123')
console.log(id);
console.log(aid);
console.log(id === aid);//false that is if symbols input is same but they are different


//Non Primitive Datatypes
//Reference
//Arrays Objects Function
const heros=["spoidermon","capitan amerikaaaa","bootMon"]//Array
//Object
let obj =
{
   name: "Aryadeep",
   age: 22 ,
}
//Function
const myfunc = function () 
{
    console.log('Helllloooooo');
}
myfunc()
const temp=null
console.log(typeof temp);//object as all non primimitive says object only
