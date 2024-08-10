//                              Array


const myrr = [0,3,5,7,2,6,9]
const marvel= new Array("IronMan","CaptainAmerica","tun tun","Bheem")
console.log(marvel[0]);//IronMan
marvel.push("Hulk");
console.log(marvel);// [ 'IronMan', 'CaptainAmerica', 'Ranu' ]
console.log(marvel[2]);//Hulk
const dc= new Array("Batman","flash","Superman","Doremon","pintu_don")
console.log(dc);//[ 'Batman', 'flash', 'Superman' ]
const allhero=marvel.concat(dc)
console.log(allhero);//[ 'IronMan', 'CaptainAmerica', 'Hulk', 'Batman', 'flash', 'Superman' ]
marvel.unshift("Thor");
console.log(marvel);//[ 'Thor', 'IronMan', 'CaptainAmerica', 'Hulk' ] adds the new element at front
marvel.shift();
console.log(marvel);//[ 'IronMan', 'CaptainAmerica', 'Hulk' ] removes the 1st element
console.log(marvel.includes("IronMan"))//true
console.log(marvel.indexOf("IronMan"))//0


//                      SPLICE AND SLICE

console.log("A " ,marvel);//A  [ 'IronMan', 'CaptainAmerica', 'tun tun', 'Bheem', 'Hulk' ]
const splicee = marvel.splice(0,3)
console.log(splicee);//[ 'IronMan', 'CaptainAmerica', 'tun tun' ]
console.log("C ",marvel);//C  [ 'Bheem', 'Hulk' ]
console.log("B " ,dc);//B  [ 'Batman', 'flash', 'Superman', 'Doremon', 'pintu_don' ]
const slicee= dc.slice(0,3)
console.log(slicee);//[ 'Batman', 'flash', 'Superman' ]



//            SPLICE TO REPLACE AND INSERT


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');// It inserts Feb at 1st index of array
console.log(months);//[ 'Jan', 'Feb', 'March', 'April', 'June' ]
months.splice(4, 1, 'May');//replaces element at 4th index 
console.log(months);//[ 'Jan', 'Feb', 'March', 'April', 'May' ]


//                             SPREAD       


const spread=[...marvel, ...dc]
console.log(spread);
/*[
  'IronMan',
  'CaptainAmerica',
  'tun tun',
  'Bheem',
  'Hulk',
  'Batman',
  'flash',
  'Superman',
  'Doremon',
  'pintu_don'
]*/
// CONCATS THE VALUE

//                              FLAT

const aaraaay=[12,64,3,6,3,6,3,[5,6],[5,3,63,32,6,[7,38,27,3]]]
const real_aaraaay=aaraaay.flat(Infinity)
console.log(real_aaraaay);
/*
[
  12, 64,  3, 6,  3,  6, 3,
   5,  6,  5, 3, 63, 32, 6,
   7, 38, 27, 3
]
*/
//                        ARRAY FROM
console.log(Array.isArray("Aryadeep"));//false
console.log(Array.from("Aryadeep"));
/*
[
  'A', 'r', 'y',
  'a', 'd', 'e',
  'e', 'p'
]
*/
//                      ARRAY OF
let sc1=100;
let sc2=500;
let sc3=300;
console.log(Array.of(sc1,sc2,sc3));//[ 100, 500, 300 ]
