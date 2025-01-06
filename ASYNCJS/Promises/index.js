// // // promises
// // //setTimeout with async js behaviour

// // //e-com
// // setTimeout(()=>{
// // alert("order placed!!!!")
// // },10000)

// // setTimeout(()=>{
// //     alert("order shipped!!!!")
// //     },2000)

// // setTimeout(()=>{
// //     alert("order reached to nearest hub!!!!")
// //     },3000)

// // setTimeout(()=>{
// //     alert("order pickby delivery person!!!!")
// //     },4000)

// // setTimeout(()=>{
// //     alert("order recived!!!!")
// //     },5000)


// // setTimeout(() => {
// //   alert("order placed");
// //   setTimeout(() => {
// //     alert("order shipped!!!!");
// //     setTimeout(() => {
// //       alert("order reached to nearest hub!!!!");
// //       setTimeout(() => {
// //         alert("order pickby delivery person!!!!");
// //         setTimeout(() => {
// //           alert("order recived!!!!");
// //         }, 5000);
// //       }, 4000);
// //     }, 3000);
// //   }, 2000);
// // }, 10000);


// //promise

// // it is an object and it is having one function and that function  will take 2 params 1.resolve 2.reject and if promise successful
// // resolve gets executed otherwise reject gets executed and it has 3 stages
// // pending   fullfilled rejected
// //executer fu ction

// //promise constructor

// // syntax:--
// // const hello=new Promise((resolve,reject)=>{
// //        if(1){
// //         resolve("successfully executed")
// //        }else{
// //         reject("not executed")
// //        }
// // });
// // console.log(hello);



// // const hello2=new Promise((resolve,reject)=>{
// //     if(0){
// //      resolve("successfully executed")
// //     }else{
// //      reject("not executed")
// //     }
// // });
// // console.log(hello2);


// // const a="true"
// // const b="true"
// // const c=30;
// // const d=900;

// // const hello=new Promise((resolve,reject)=>{
// //     if(1 && a && b && c && d ){
// //      setTimeout(()=>{
// //         resolve("successfully executed")
// //      },4000)
// //     }else{
// //      reject("not executed")
// //     }
// // });

// // hello.then(
// //     output=>console.log(output)
// // ).catch(err=>console.log(err)
// // )
// // console.log(hello);
// // alert(hello)



// // const a="true"
// // const b="true"
// // const c=30;
// // const d=900;

// // const hello=new Promise((resolve,reject)=>{
// //     if(1 && a && b && c && d && 0 ){
// //      setTimeout(()=>{
// //         resolve("successfully executed")
// //      },4000)
// //     }else{
// //      setTimeout(()=>{
// //         reject("not executed")
// //      },2000)
// //     }
// // });

// // hello.then(
// //     output=>console.log(output)
// // ).catch(err=>console.log(err)
// // )

// const step1=new Promise((resolve,reject)=>{
//     try{
//         if(1){
//             setTimeout(()=>{
//                 resolve("successful")
//             },2000)
//         }else{
//             setTimeout(()=>{
//                 reject("failed 1")
//             })
//         }
//     }catch(err){
//         console.log(err);
        
//     }
// })




// const step2=new Promise((resolve,reject)=>{
//    try{
//     if(0){
//         setTimeout(()=>{
//             resolve("successful 2")
//         },2000)
//     }else{
//         setTimeout(()=>{
//             reject("failed 2")
//         })
//     }
//    }catch(err){
//     console.log(err);
    
//    }
// })


// step1.then(step2).catch(err=>{
//     console.log(err);
    
// })
// step1.then(output1=>{
//     console.log(output1)
//     return step2
// }
// ).then(res=>{
//     console.log(res);
// })

// .catch(err=>console.log(err)
// )

// // promise chaining



// step1.then((output1)=>{
//     console.log(output1)
//     // return console.log(step2);
//     return step2;
// }
// ).then((res)=>console.log(res))
// .catch((err)=>console.error(err)
// )




// const step2=new Promise((reject,ramCharan)=>{
//     try{
//         if(1){
//             setTimeout(()=>{
//                 reject("successful 2")
//             },2000)
//         }else{
//             setTimeout(()=>{
//                 ramCharan("failed 2")
//             })
//         }
//     }catch(err){
//         crossOriginIsolated.log(err)
//     }
// })
// // console.log(step2);
// step2.then(res=>console.log(res)
// ).catch(err=>console.log(err)
// )



const step1=new Promise((resolve, reject)=>{
        try{
            if(1){
                setTimeout(()=>{
                resolve("yedo okati rayandi")
                },2000)
                 }else{
                    setTimeout(()=>{
                           reject("failed at step 1")
                    },2000)
                 }
        }catch(err){
                          reject(`error at step1 ${err.message}`);
                          
        }
});


const step2=new Promise((resolve, reject)=>{
   try{
    if(0){
        setTimeout(()=>{
        resolve("yedo okati rayandi 2")
        },2000)
         }else{
            setTimeout(()=>{
                   reject("failed at step 2")
            },2000)
         }
   }
   catch(err){
    reject(`error at step2 ${err.message}`);
   }
});



step1.then(res=>{
    console.log(res)
return step2;
}
).then(res=>{
    console.log(res)
    return step2;
    // return step3
})
.catch(err=>{
    console.log(err);
})
