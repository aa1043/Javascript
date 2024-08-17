const mynum=[1,2,3,4,5,6,7,8,9,10]
const newnum=mynum.map((i)=>i+10)
console.log(newnum);

/*[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]*/
//                    CHAINING
const chainingnum=mynum.map((num)=>num*10).map((num)=>num+1).map((num)=>num+100)
console.log(chainingnum);
/*[
  111, 121, 131, 141,
  151, 161, 171, 181,
  191, 201
]*/

const more_chainingnum=mynum.map((num)=>num*10).map((num)=>num+1).map((num)=>num+100).filter((num)=>num>140)
console.log(more_chainingnum);
/*[
  141, 151, 161,
  171, 181, 191,
  201
]*/