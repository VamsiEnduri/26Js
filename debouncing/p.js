// const hello=new Promise((resolve,reject)=>{
//     if(0){
//         resolve("trueasdfghjk")
//     }else{
//         reject("false")
//     }
// })

// hello.then(res=>console.log(res)).catch(err=>console.log(err)
// )



// let bHello=new Promise((resolve,reject)=>{
//     if(1){
//         resolve("true")
//     }else{
//         reject("false")
//     }
// })
// // console.log(b);
// bHello.then(res=>console.log(res+"b")).catch(err=>console.log(err)
// )


// let cHello=new Promise((resolve,reject)=>{
//     if(1=="1"){
//         resolve("true")
//     }else{
//         reject("false")
//     }
// })
// // console.log(c)
// cHello.then(res=>console.log(res+"c")).catch(err=>console.log(err)
// )

let orderCondirm=new Promise((confirm,reject)=>{
        //    let booked=JSON.parse(prompt(""))
           try{
            if(0){
                confirm("order booked!!")
               }else{
                reject("order rejected!!!!")
               }
           }catch(err){
            console.log(err);
           }
})
// orderCondirm.then(res=>console.log(res)
// ).catch(err=>console.log(err)
// )

let orderShiiped=new Promise((confirm,reject)=>{
    // let booked=JSON.parse(prompt(""))
    if(1){
     confirm("order shiipped!!")
    }else{
     reject("order not shiiped rejected!!!!")
    }
})
// orderShiiped.then(res=>console.log(res)
// ).catch(err=>console.log(err)
// )
orderCondirm.then(res=>{
    console.log(res);
    return orderShiiped;  
}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})