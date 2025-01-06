// // setTimeout(()=>{
// //     function a(){
// //         console.log(100+200);
// //         }
// //         a()
// // },3000)

// const a=new Promise(()=>{
//    if(1){
//     function a(){
//         console.log(100+200);
//         }
//         a()
//    }else{
//     alert("not invoked ")
//    }
// })

// a.then(res=>console.log(res)
// ).catch(err=>console.log(err)
// )




// async :-- it wil make my sync code as async code
//await :-- it will make the current function to wait / pause until promoses gives output

async function a(){
   let ticketBook= new Promise ((res,rej)=>{
    if(1){
        setTimeout(()=>{
            alert("ticket booked")
        })
    }
   })
}
// a()

// setTimeout :-- 2000
// await :-- no time limit / barrier

async function a(){
    let ticketBook=await new Promise ((res,rej)=>{
     if(1){
         setTimeout(()=>{
             alert("hello vamsi ticket booked")
         },10000)
     }
    })
 }
//  a()


// async function a(){
//     let ticketBook=await fetch("https://fakestoreapi.com/products");
//     let finalData=await ticketBook.json()
//     let dd="vamsi"
    
//     console.log(finalData);
//     console.log(dd);
//  }
//  a()



async function a(){
    let ticketBook=await fetch("https://fakestoreapi.com/products");
    let ticketBook2=await fetch("https://fakestoreapi.com/products");
    let finalData=await ticketBook
    let finalData2=await ticketBook2.json()
    let dd="allmyData"
    console.log(dd);    
    console.log(finalData);
    console.log(finalData2);

 }
 a()








