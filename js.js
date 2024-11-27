// // var a; //declaration
// // a=100;  // assigning
// // a=2000; // reassigning
// // var a=1000; //initialisation
// // var a="hello"  // re-init

// var a;
// a="2000000";
// var a=100;
// var a=true
// var b=200;
// var c=200;
// var d="123456789"
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d)
// console.log(a+b+c+d);



const createCounter = (initialValue = 0) => {
    let counter = initialValue
    return (incrementalValue) => {
    counter += incrementalValue
    console.log(counter)
    }
   }
   let counter = createCounter(20);
   counter(10);
   counter(30)
