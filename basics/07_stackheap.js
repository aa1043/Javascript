//Stack (Primitive)
//Heap (Non-Primitive)
let myname='Aryadeep'
let anothername=myname
anothername='Oreo'
console.log(myname);//Aryadeep//as it sends copy original data is unchanged
console.log(anothername);//oreo
let user1=
{
    email : 'aryadeep@google.com',
    upi : 'arya@ybl'
}
let user2=user1;
user2.email = 'tunku';
console.log(user1.email);
console.log(user2.email);
//both says tunku as in case of objects they refer the same data not copy so changes made stays