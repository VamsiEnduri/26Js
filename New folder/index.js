// async:--
// async is a keyword which makes a function as async and returs a promise

// await :-- await is a keyword which pauses the execution of
//  function until unless the promise get resolved

//fetch :-- to make http requests ( post , get, dlete, update)

// let url="https://dummyjson.com/products/30"
// let url="https://dummyjson.com/products"
// let url="https://dummyjson.com/products/categories"
// let url="https://dummyjson.com/products/category/smartphones"
// function getData(){
//    const data=fetch(url).then(res=>res.json()).then(res=>res.products
//    ).catch(err=>{
//     console.error(err)
//    })
//    console.log(data);
// }
// getData()


// async function  getData() {
//    const data= await fetch(url)
//   const response= await data.json()
//   const arryData=await response.products
// //   console.log(response.products);
// // console.log(response);
// console.log(arryData);

// arryData.forEach((x,index)=>{
//     if(index === 1){
//             //    console.log();
//     console.log(arryData[index].dimensions.height + "    height of mobile");
               
//     }
//     // console.log(arryData[index].dimensions);
// })

// }

// async function  getData() {
//     const data= await fetch(url)
//    const response= await data.json()
// //    const arryData=await response.products
//  //   console.log(response.products);
//  // console.log(response);
// //  console.log(arryData);
 
// //  arryData.forEach((x,index)=>{
// //      if(index === 1){
// //              //    console.log();
// //      console.log(arryData[index].dimensions.height + "    height of mobile");
                
// //      }
// //      // console.log(arryData[index].dimensions);
// //  })
 
//  }
let urlTodos='https://dummyjson.com/todos?limit=10&skip=5'
//?limit=3&skip=10

//queryParams -- researching topic
//async await fetch try catch


// async function  getData() {
//    try{
//     let data=await fetch(urlTodosaaaaa)
//     let res=await data.json()
//     let allTodos=await res.todosssss;
//     console.log(allTodos);
//    }catch(err){
//     console.log(err)
//    }
// }

// getData()
