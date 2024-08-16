//                  IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function chai()// Named IIFE
{
  console.log("DB Connected");//DB Connected
})();// SEMICOLON FOR WRITING 2 IIFE

( (name)=>// Simple IIFE or UN NAMED IIFE
{
  console.log((`DB2${name}`));//DB2Aryadeep
  
}

)("Aryadeep");


// (
//    Function
// )() ;
//        OR
// (const func=()=>//    Always use semicolon after last()
// {


// })();
//to execute a function directly without writing function name()
//IIFE executes a function immediately it is used to reduce the pollution cause by global scope an if we use IIFE we can remove the global scope pollution(Interview)
