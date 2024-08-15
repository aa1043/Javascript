//                         FUNCTIONS

// if(true)
// {
// let a=10
// const b=20
// var c=30
// }
// console.log(a);// error a is not defined as a was insie if {} and so its limited
// console.log(b); error b is not defined as a was insie if {} and so its limited
// console.log(c);//30 so this is the reason we dont use var(scope issue)
 
// let a1=10
// const b1=20
// var c1=30
// console.log(a1);//10
// console.log(b1);//20 // 
// console.log(c1);//30
// let a=10
// if(true)
// {
// const b=20
// var c=30
// }
// console.log(a);//10 as 10 was global variable 
// console.log(b);//ReferenceError: b is not defined as b was not global
// // Interview gloabal scope in console an global scope in node in code is different

//                         Scope part 2


//  function one()
//  {
//   const username="Hitesh"
//   function two()
//   {
//     const website="Youtube"
//     console.log(username);//accesible as username was global for two()
//   }
//   console.log(website);// error as website was a block scope variable
//   two()
//  }
//  one()

// if (true) 
// {
//   const username="Aryadeep"
// if (username==="Aryadeep")
// {
//   const website=" Youtube"
//   console.log(username+website);//Aryadeep Youtube
// }
// //console.log(website);// error(website is not defined) block scope
// console.log(username);//Aryadeep

// }
// //console.log(username)//error( username is not defined)block scope
// function addone(num)
// {
//   return num+1
// }
// const ha=addone(5)
// console.log(ha);// 6 so we say this a function
// const addtwo=function (num)
// {
//   return num+2
// }

// console.log(addtwo(5));// 7 and this is known as expression

//                  ARROW FUNCTION

// const user=
// {
//   username:"Aryadeep",
//   price:999,
//   welcomemesaage:function() 
//   {
//     console.log(`${this.username} welcome`);
//     console.log(this);
    
//   }
// }
// user.welcomemesaage()//Aryadeep welcome
// user.username="Tunku"
// user.welcomemesaage()//Tunku welcome

//After (console.log(this);) and printing the top 3 lines in line 80 output is
//Output start
// Aryadeep welcome
// {
//   username: 'Aryadeep',
//   price: 999,
//   welcomemesaage: [Function: welcomemesaage]
// }
// Tunku welcome
// {
//   username: 'Tunku',
//   price: 999,
//   welcomemesaage: [Function: welcomemesaage]
// }//output end

// console.log(this);// just this line gives {}
//                this.something only works for objects not functions
//function chai() 
// {
//   console.log(this);
// }
// chai()
// output
/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
} output ends*/

// function type1()
// {
//   let user="Arya"
//   console.log(`${this.user} its type 1`);
// }
// type1()//undefined its type 1 so this does not apply on function

//                   ARROW FUNCTION

// const arya=  (user)=> 
// {
//   console.log(`My nme is ${user}`);
// }
// arya("Aryadeep")//My name is Aryadeep
// const addtwo= (num1,num2)=>
// {
//   return num1+num2
// }
// console.log(addtwo(9,9))//18//explicit return as {} are used

// const addthree=(n1,n2,n3)=>(n1+n2+n3)
// console.log(addthree(4,5,6));//15//Implicit return as parenthesis used


// const objret=()=>({username:"Aryadeep"})
//console.log(objret);

