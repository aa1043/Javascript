const promiseone = new Promise(function(resolve,reject)
{
  // Do an async task
  //DB calls,Cryptography,network
  setTimeout(()=>{
    console.log("Async task is complete")
    resolve()
  },1000)
})
promiseone.then(function(){
  console.log("Promise consumed")
})

//                          ANOTHER WAY

new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("ASYNC");
    resolve()
  })
},1000).then(function(){
  console.log("done");
  
})

const promisethree = new Promise(function(resolve,reject){
  setTimeout(function () {
    resolve({username:"chai",email:"chai@example.com"})
  },1000)
})
promisethree.then(function(user){// HOW TO GET INFOS
  console.log(user)
  
})

const promisefour= new Promise(function(resolve,reject)
{
  setTimeout(() => {
    let error=false
    if(!error)
    {
      resolve({username:"Aryadeep",password:"1234"})
    }
    else{
      reject('ERROR')
    }
  }, 1000);
})
promisefour.then((user)=>{
  console.log(user);
  return user.username
}).then((username)=>{
  console.log(username);
}).catch((error)=>
{
  console.log(error);
}
).finally(()=>{
  console.log("the promise is done");
})

//  Output = { username: 'Aryadeep', password: '1234' }
//           Aryadeep
//  the promise is done
   

//        ANOTHER SYNTAX

const promisefive= new Promise(function(resolve,reject){
  setTimeout(() => {
    let error=true
    if(!error)
    {
      resolve({username:'javascript',password:'123'})
    }
    else{
      reject("Error js ")
    }
  }, 1000);
})
async function consumePromisefive()
{
  try {
    const response= await promisefive
    console.log(response);
  } catch (error) {
    console.log(error);
    
  }
}
consumePromisefive()

async function getallusers() {
try {
  const response=await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data);
  
} 
catch (error) {
  console.log(error);
}
}

getallusers()

//   returns the API


//            ANOTHER WAY

fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
  return response.json()
}).then(function(data){
  console.log(data);
  
})
.catch(function(error){
  console.log(error);
  
})