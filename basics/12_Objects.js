const mysm=Symbol("key1");

const employee=
{
  "Full name": "Aryadeep",
  age:20,
  company:"Hopefull",
  loggedin:true,
  [mysm]:"key1",//[ ] are used to refer as symbol
  lastloggedin:["Monday","Tuesday","Wednesday","Thursday","Friday"],
  email:"aryadeepdas18@gmail.com"
}
console.log(employee.email);//aryadeepdas8@gmail.com
console.log(employee["email"]);//aryadeepdas18@gmail.com(BETTER PRACTICE)
console.log(employee["Full name"]);//Aryadeep(so this type is needed to access entities like this)
console.log(employee[mysm]);//key1
employee.email="aryadeepdas8@gmail.com";
console.log(employee.email);//aryadeepdas8@gmail.com

Object.freeze(employee)//Prevents changes
employee.email="asdadafsf"
console.log(employee.email);//aryadeepdas8@gmail.com as Object.freeze was used no changes
console.log(employee);
/*
{
  'Full name': 'Aryadeep',
  age: 20,
  company: 'Hopefull',
  loggedin: true,
  lastloggedin: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ],
  email: 'aryadeepdas8@gmail.com',
  [Symbol(key1)]: 'key1'
}
*/

employee.greeting=function ()
{
  console.log("Hey bro");
}
console.log(employee.greeting);

employee.greeting2=function ()
{
  console.log(`Hello user${this["Full name"]}`);
}
console.log(employee.greeting2);
