function sayname()
{
  console.log("A");
  console.log("R");
  console.log("Y");
  console.log("A");
  console.log("D");
  console.log("E");
  console.log("E");
  console.log("P");
  
}
sayname()
function add2numbers(n1,n2)//The vlues written here are parameters
{
  console.log(n1+n2);//6
}
add2numbers(3,3)//The vlues written here are arguments
function add3numbers(n1,n2,n3)//The vlues written here are parameters
{
  return(n1+n2+n3);
}
let j =add3numbers(3,56,34);
console.log(j);//93
function loggedin(username)
{
  if(!username)
  {
    console.log("Bkl");
    
  }
  else
  return`${username} Just logged in`
}
let j1=loggedin("Aryadeep");
console.log(j1);//Aryadeep Just logged in
let j2=loggedin();
console.log(j2);// Bkl
// undefined


//                   REST     AND    SPREAD(...)
function calprice(...num1)
{
  return num1
}
console.log(calprice(19,8,5));//19 before using rest,//[ 19, 8, 5 ] after using rest
function calprice1(num1,...num2)
{
  return num1,num2
}
console.log(calprice1(19,8,5));//[ 8, 5 ] as 19 has been taken by num1

//                OBJECTS PASSED IN FUNCTION

const obj=
{
  username:"Hitesh",
  price:199
}
function handleobj(anyobject) 
{
  console.log(`Username is ${anyobject.username}`);
  
}
handleobj(obj)//Username is Hitesh

//              ARRAYS PASSED IN FUNCTION

const arr= new Array(23,54,87,76)
function handlearr(anyarr) 
{
  console.log(`Element is ${anyarr[2]}`);
  
}
handlearr(arr)//Element is 87
