// const arr=new Array(34,24,56,13,67)
// const inex=0;
// for (const inex of arr) 
//   {
//   console.log(inex);
  
// }
// 34
// 24
// 56
// 13
// 67


const greet ="Arya namaste"
for (const gre of greet) 
{
  console.log(gre);
}
// A
// r
// y
// a

// n
// a
// m
// a
// s
// t
// e 
const mpp=new Map
mpp.set('IN',"INDIA")
mpp.set('US',"USA")
mpp.set('CN',"CANADA")
mpp.set('JP',"JAPAN")
// console.log(mpp);
// Map(4) {
//   'IN' => 'INDIA',
//   'US' => 'USA',
//   'CN' => 'CANADA',
//   'JP' => 'JAPAN'
// }
for (const [key,val] of mpp) 
{
 console.log(`${key} :- ${val}`);
}
// IN :- INDIA
// US :- USA
// CN :- CANADA
// JP :- JAPAN

//          FOR OF LOOP IS ONLY FOR ARRAYS AND MAPS