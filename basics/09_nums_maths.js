const score=100

const score1=new Number(100)
console.log(score1);
console.log(score);
const scs=score1.toString()
console.log(typeof scs);
console.log(score1.toFixed(3));//add 0 after point
const score3=123.8966
console.log(score3.toPrecision(3));//124
const aloo=100000000
console.log(aloo.toLocaleString());//AMERICAN 100,000,000
console.log(aloo.toLocaleString('en-IN'));//INDIAN 10,00,00,000
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


//             MATH           //
console.log(Math.abs(-456789));//456789
console.log(Math.round(12.87));//13
console.log(Math.ceil(67.4));//68
console.log(Math.floor(67.9));//67
console.log((Math.random()*(100-0)+0));//34.56789//its formula is Math.random*(Max-Min)+Min