// let a=document.querySelector("#search");

// function b(e){
//     console.log(e.target.value);
//     alert(e.target.value)
    
// }

// a.addEventListener("input",b)





// let a=document.querySelector("#search");

// function b(e){
//     console.log(e.target.value);
//     // alert(e.target.value)
// }


// const debounce=(func, wait)=>{
//      return (e)=>{
//        setTimeout( ()=>{
//         func(e)
//        },wait)
//      }
// }
// const debounceApiCall=debounce(b,6000)
// console.log(debounceApiCall)

// a.addEventListener("input",debounceApiCall);






let a=document.querySelector("#search");

function b(e){
    console.log(e.target.value);
    // alert(e.target.value)
}


const debounce=(func, wait)=>{
    let timer;
     return (e)=>{
        clearTimeout(timer)
       timer=setTimeout( ()=>{
        func(e)
       },wait)
     }
}
const debounceApiCall=debounce(b,2000)
console.log(debounceApiCall)

a.addEventListener("input",debounceApiCall);