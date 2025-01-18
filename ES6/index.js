// destructruing :--
//  unpacking of elem in array

const a=["vamsi","ravi","jyothi","sneha"];

// const [x,y,z,h]=a

// const x="vamsi";
// const y="ravi"

// console.log(x,y);
// console.log(y);


const b={
    name:"vamsi",
    age:26,
    city:"hyderabad"
}
// const {x,y,z}=b
const {name,age,city}=b
// console.log(Object.keys(b));


// console.log(x,y,z);
console.log(name);



const data=[{
    name:"vamsi",
    age:26,
    city:"hyderabad"
},{
    name:"vamsi",
    age:26,
    city:"hyderabad"
},{
    name:"vamsi",
    age:26,
    city:"hyderabad"
}]

const [x,y,z]=data
// console.log(x);




//spread rest operators:--

// spread  spreading the values in the array inyo another array r spreading the keys in an object into another object
// ...f

// const f=[123456]

// const g=["vamsi"]
const sizes=["sm","m","L","xl"]
// fetch()
// data.forEach(l=>{
//     ...l,
//     sizes
// })

// const obj={
//     ...sizes,
//     id:1,
//     name:"vamsi"
// }

// console.log(obj);


// const aaa={
//     ...sizes,
//    id:1,
//    title:"black bag",
//    price:355,
// }



// console.log(g);

//rest operator:--

// function login(...v){
// //   console.log(x,z,a);
//   console.log(v);
// }
// login("vamsi",26,11,11,11,111,11,11)


// Swal.fire("SweetAlert2 is working!");
// alert("item added to cart")

// let aaaaaaa=confirm("arw you sure to dlete?") //true //false

// if(aaaaaaa){
//     alert("successfully dleteed!!!!!")
// }else{
//     alert("item removing cancelled")
// }



Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });










