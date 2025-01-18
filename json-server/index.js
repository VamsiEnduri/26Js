// let url="http://localhost:3000/users"
// async function getUsersData(){
//    let data= await fetch(url);
//    let response=await data.json()
//    console.log(response);
// }
// getUsersData()


// let url2="http://localhost:3000/owners"

// async function getOwnersData(){
//     let data= await fetch(url2);
//     let response=await data.json()
//     console.log(response);
//  }
//  getOwnersData()




// async function postUser(){
//     let url="http://localhost:3000/users";
// let options={
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         id:5,
//         name:"pavan",
//         age:24
//     })
// }
//     let data= await fetch(url,options);
//     let response=await data.json()
//     console.log(response);
    
// }
// postUser()





async function postMobile(){
    let url="http://localhost:3000/mobiles";
let options={
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(
   [
    {
        name:"iq",
        price:16000
    },
    {
        name:"mi",
        price:26000
    }
   ]
)
}
    let data= await fetch(url,options);
    let response=await data.json()
    console.log(response);
    
}
postMobile()






// let url="http://localhost:3000/mobiles?_limit=3"

// // let url="http://localhost:3000/mobiles?price_lte=40000"
// // let url="http://localhost:3000/mobiles?price_gte=40000&price_lte=75000"
// async function getMobilesData(){
//    let data= await fetch(`${url}`);
//    let response=await data.json()
//    console.log(response);
// }
// getMobilesData()







// async function getDeleteData(id){
//     let url="http://localhost:3000/mobiles"
//     let options={
//         method:"DELETE",
//     }
//    let data= await fetch(`${url}/${id}`,options);
//    let response=await data.json()
//    console.log(response);
// }
// getDeleteData("3")




async function getDeleteData(id){
    let url="http://localhost:3000/mobiles"
    let options={
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:"samsung galaxy",
            price:120000
        })
    }
   let data= await fetch(`${url}/${id}`,options);
   let response=await data.json()
   console.log(response);
}
// getDeleteData("46a3")

