// a()

// // var x=200;
// // function a(){

// //     var x=100;
// //     console.log(x)

// // }
// // a()
// // console.log(x,"8 th line")
// // local scope == functiona scope

// // var z=500;
// // function a(){
// //    function x(){
// //     function hello(){
// //         console.log(100 +z)
// //     }
// //     hello()
// //    }
// //    x()
// // }
// // a()
// // var z=100;
// // console.log(z)


// // function b(){
// //     console.log("b function")
// // }

// // var z=500;
// // function a(){
    
// // function b(){
// //     console.log("b function")
// // }
// // //   b()
// // }
// // b()
// // a()
// // console.log(z)

// // local scope: its a place where i cna access my functions and varaibles which were delcared in side that local scope

// //globalscope:-- its place where i cna access my functions and varaibles which were delcared in global level



// let a; // declaration
// a=200;  // assiging
// a=300;
// a="vamsi"
// // let a=1000; //initiliasation  dec+assi


// const b=200;

// const b=300;
// console.log(b)


// if(true){
//     // console.log("vamsi") ;
//     // alert("vamsi is registered successfully!!!")
//     let x=200;
//     x="vamsiEnduri";
//     x="123456789"
//     console.log(x)
//     x="ravi"
// }
// console.log(x)


// let b=200;
// const c=300;

// {
//     var a=100;
//     let b=200;
//     const c=300;
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(a+b+c)
// }
// console.log(a)


// let b=200;
// const c=300;

// {
//     var a=100;
  
//    {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(a+b+c)
//    }
// }
// console.log(a)


// the way of accessing te parent scopes from deep level is called as lexical scope r lexical environment
// the way of checking the varaibles in lexical scope is called as scope chain



// let b=200;
// const c=300;

// {
//     var a=100;
//    {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(a+b+c)
//    }
// }
// console.log(a)


//accessing varibles r functions even before declaration r init :-- Hoisting
// console.log(a)
// var a=10;
// console.log(a)



// function a(){
//     console.log("a function")
// }
// a()

// a()
// console.log(z())
// console.log(z)

// var z=function (){
//     console.log("function expression")
// }
// z()



//hoisting:--

// console.log(z);
// var z=100;


// abc()
// function abc(){
// console.log("123456789");

// }
// console.log(b)

// console.log(a)

// let a=10;
// a=200;
// a="vamsi"

// const b=200;

//  temporal dead zone 
// a time taken by let r const varaibles to assign a value  r to store a value



// a()
// var a=function (){
//     console.log("vamsi")
// }


// function b(){
//     console.log("b");
    
// }
// b()

// a()
// var a=()=>{
//     console.log("arrow function");
    
// }

// // parameters are identufeirs which take args x=1, y=2
// function a(y,z,w,k,c){ // x,y are parameters // params
//     // console.log(x+y+z+w)
//     console.log(k);
//     console.log(c);
// }
// a("vamsi",true,undefined,[1,2,3,4],{id:1,name:"ravi"}) // at the time invokation , if i pass some values are called as arguments

// var rrr=[1,2,3,4]

//a function which is passed as an arg to another function at invoking and that function is callled as callback function

// function parent(x){
//   x()
// }
// parent(function b(){
//     console.log("b function")
// })


// setTimeout(
//     function a(){
//         console.log("a function")
//        }, 2000
// )




//  DOM :-- document object modal
//  to chnage the ui dynamically

//accessing the dom
//   -- getElementById()
//   -- getElementsByClassName()
//   -- getElemenstByTagName()
// -- querySelector
// -- querySelectorAll


let h1Tag=document.getElementById("h1");
let h2Tag=document.getElementById("h2");
let h3Tag=document.getElementById("h3");
console.log(h1Tag)


function chnageTextClick(){
    h1Tag.textContent="vamsi is from 10K coders"
    h1Tag.style.backgroundColor="red"
h1Tag.style.padding="60px"
h1Tag.style.cursor="pointer"
h1Tag.style.boxShadow="2px 2px 5px black"
h1Tag.style.borderRadius="100px"
}


function chnageTextClick(){
    h1Tag.textContent="vamsi is from 10K coders"
    h1Tag.style.backgroundColor="red"
h1Tag.style.padding="60px"
h1Tag.style.cursor="pointer"
h1Tag.style.boxShadow="2px 2px 5px black"
h1Tag.style.borderRadius="100px"
}



function chnageTextDblClick(){
    h2Tag.textContent="vamsi is from 10K coders"
    h2Tag.style.backgroundColor="red"
h2Tag.style.padding="60px"
h2Tag.style.cursor="pointer"
h2Tag.style.boxShadow="2px 2px 5px black"
h2Tag.style.borderRadius="100px"
}


function chnageTextMouseOver(){
    h3Tag.textContent="vamsi is from 10K coders"
    h3Tag.style.backgroundColor="red"
h3Tag.style.padding="60px"
h3Tag.style.cursor="pointer"
h3Tag.style.boxShadow="2px 2px 5px black"
h3Tag.style.borderRadius="100px"
}

// h1Tag.ondblclick=h1Tag.textContent="hello im vamsi from 10K coders"

