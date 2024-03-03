//variables and constants 


//hoisting :variables and functions are hoisted which means thier declaration 
//is moved on the top.declarations are moved to the top 
//this feature is only in the javascript;
//primitive 
//var a=12;
//var b=a;


//b=b+2;
//refernce 
//var a=[1,2,3,4]
//var b=a;
//b.pop();

// types of javascript
// primitive, refernence
//primitives
//refernce=[]{}()
//aisi koi bhi value jisko copy krne par real copy nhi hota
//balki us main value ka refernce pass hojata hai
//use hum refernce value kehte hai,aur jiska copy karne par 
//real copy hojay wo value primitiv hoti hai

//push :adding new element on last
//pop :remove an element from last
//unshift and shift 
//var ,const,let differnce 
//function abcd(){
  //  for (var i=1;i<12;i++)
    //  {
      //  console.log(i);
      //}
      //after coming out from loop, value of i is 12.
      //console.log(i);//does not show error.if we use let, it will show error.
//}

//abcd();
//var apne function mai kahi bhi use ho sakta 
//thats why 12 was also printed,loop ke bahar use hogaya


//var function scoped hota hai
//let braces scoped hota hai
//var adds itself to  the window object.
// let const dosen't adds
//js language mai kuch chheze hai jo nhi hai bhtr hum usse use karte hai
//they exist in browser, they cam be  used
// they can be found in a window called as 
//aur window hai ek box of features given by browser
//to use with js

//let does not allow you to expose values to the 
//browser,its good.
//browser context api
// 1)window object:imaginary container which contains features to be used by js.
// 2)stack
// 3)heap memory
//stacks:order of getting work done 
//heap memory : jitne bhi variables ya intermediate 
//data hum banaate hai unhe store kahi toh karna 
//hai . uske liye hota hai heap memory. 
//storing intermediate data while doing calc
//is done in heap memory
//execution context matlab jab bhi hum functimn
//bulayenge ,  fnc khudka ek imaginary container bana 
// lega jismein uski teen cheeze hogi:
// 1)variables
// 2)functions  inside that parent function.
// 3)lexical environment of that function
// yeh cont ko execution context bolte.

//b cannot be acccesed by abcd 
//the lexical environment tells us what can be 
//accesed and what not.
//the lexical environment is a chart which tells 
//us what can be accessed and what not.
//var a=[1,2,3,4];
//var b=[...a];
//b.pop();
//var obj={name :"harsh"};
//var copyobj = {...obj};
//js mai ya toh truthy aur falsy ,inn dono 
//mai se ek hoga.
//falsy values=0 false undefined null NaN document .all
// truthy values
//if(null)
//{
  //console.log("hey");
//}
//else{
  //console.log("hello");
//}
//var a=[1,2,3,4,5,6,7,8,9];
//a.forEach(function(val)//anonymous function
//{
  // console.log(val+2);
//})
//for each kabhi bhi by default aapke array 
//mein change nhi krke deta hai,array ki temporary
//copy par jiske vajah se array humesha same rehta hai
//objects par loop karne kje liye hota hai 
//for in loop
var obj={
  name :"harsh",
  age:24,
  city:"pune"
}
for(var key in obj){
   console.log(key,obj[key]);
}
var a=12;
do{
   console.log("hey");
   a++;  
}
while (a<15);
//callback functions
// jab bhi koi aisa code jo baadme chalta hai
//kyuki vo code baadme chalta hai,yeh cheez js ko pata
// nhi hota ke wo complete hua ya nhi , aise code
//ke completion par js ko btaya jaata hai ke wo
//complete hogaya hai aur aap usse chala sakte ho
//ye batane ka kaam callback ka hai
setTimeout(function(){
    console.log("2 second baad chala")
},2000);
//first class function
//js mai tum functions ko tum use kar sakte
// ho as a value
//var c;
//function abcd(c){
  //c();
//}
//abcd (function(){console.log("he")})
//delete a.age;