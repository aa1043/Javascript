//                           OBJECTS AS SINGLETON
const chu =new Object()//singleton
const che={}//literal
console.log(chu);
console.log(che);
const obj3=
{
  obj2:
  {
    obj1:
    {//                         Nested Objects
      name:"duchuk"
    }
  }
}
console.log(obj3);//{ obj2: { obj1: { name: 'duchuk' } } }
console.log(obj3.obj2.obj1.name);//duchuk

const ob1=
{
  1:"a",
  2:"b"
}
const ob=
{
  3:"a",
  4:"b"
}
const o3= Object.assign({},ob1,ob) 
console.log(o3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//                              SPREAD

const ob3={...ob1,...ob}
console.log(ob3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
 


//                              VALUES FROM DATABASES                         
const users=
[
  {
    id:1,
    email:"aryadeepdas8@gmail.com"
  },
  {
    id:2,
    email:"bheem8@gmail.com"//             JUST LIKE ARRAY
  },
  {
    id:3,
    email:"ladoo8@gmail.com"
  },
]
console.log(users[1]);//{ id: 2, email: 'bheem8@gmail.com' }

const mysm=Symbol("key1")
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


console.log(Object.keys(employee)); 

//[ 'Full name', 'age', 'company', 'loggedin', 'lastloggedin', 'email' ]

// so the output comes as an array now you can loop it or do nything it is good to acces databases
console.log(Object.values(employee))
/*
[
  'Aryadeep',
  20,
  'Hopefull',
  true,
  [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ],
  'aryadeepdas18@gmail.com'
]
*/

console.log(Object.entries(employee));
// RARELY USED
/*
[
  [ 'Full name', 'Aryadeep' ],
  [ 'age', 20 ],
  [ 'company', 'Hopefull' ],
  [ 'loggedin', true ],
  [
    'lastloggedin',
    [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]
  ],
  [ 'email', 'aryadeepdas18@gmail.com' ]
]
*/
console.log(employee.hasOwnProperty('lastloggedin'));//true
