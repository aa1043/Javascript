let date= new Date()
console.log(date);//2024-08-08T22:07:50.484Z
console.log(date.toDateString());//Thu Aug 08 2024
console.log(date.toString());//Thu Aug 08 2024 21:39:46 GMT+0000 (Coordinated Universal Time)
console.log(date.toLocaleDateString());//8/8/2024
console.log(date.toLocaleString());//8/8/2024, 9:39:46 PM
let createddate = new Date(2024,7,9)
console.log(createddate.toDateString());//Fri Aug 09 2024
let createddatetime = new Date(2024,7,9,3,17)
console.log(createddatetime.toLocaleString());//8/9/2024, 3:17:00 AM
let ddmmyy=new Date("09-08-24")
console.log(ddmmyy.toLocaleString());// 9/8/2024, 12:00:00 AM
//                        Time Stamps used in case of polls
let timestamp= Date.now()
console.log(timestamp.toLocaleString()); // 1,723,154,135,511 its in milliseconds
console.log(createddatetime.getTime())// 1723173420000 its in milliseconds
console.log(Date.now())// 1723154487658 again millisecond
console.log(Math.round(Date.now()/1000)) // 1723154549 econd and this all sec or mili sec all are like from 1970
console.log(date.getDay());//4
console.log(date.getMonth());//7
date.toLocaleString('default',{
   weekday:"long",                 // More Specific
})
console.log(date);//2024-08-08T22:16:20.406Z