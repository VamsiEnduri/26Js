// // // var a=10;
// // // a=20;
// // // a=30;
// // // a= a+ 70;  // 30 +70 == 100
// // // a=a+100;  // 100 + 100
// // // a += 200;   // a = 200 +200
// // // console.log(a); //200

// // // var b=20;
// // // b=10;
// // // b=b-2 // 10 -2 =8
// // // b-=10;   // 8 - 10 == -2
// // // console.log(b);

// // // var c=100;
// // // c= c*2;  // 100 *2 =200
// // // c *= 1  // ==> 200 *1=200 ==> c=200;
// // // c *= 5; // ==> 200 *5=1000; ==> c=1000;
// // // console.log(c);

// // // var d=50;
// // // d =d /10;  //==> 50/10 = 5 d=5
// // // d /= 5; // == 5 /5 =1;  d=1
// // // console.log(d);


// // // var a=200;

// // // // a= a % 200;
// // // a= a %

// // // console.log(a);


// // var a=5;
// // // a = a % 3;

// // a %=2;
// // console.log(a);



// // var a=[1,2,3];

// // a[2]="vamsi";
// // a[3]=true
// // a[10]="ramesh"
// // a[20]=""

// // a.length=5
// // console.log(a[7]);

// // console.log(a);
// // console.log(a.length);


// // var a={
// //     id:1,
// //     name:"vamsi",
// //     state:"ap"
// // }
// // console.log(a);

// // a.id=10;
// // a.name="praveen";
// // a.state="ts"

// // delete a.id;
// // delete a.name;
// // console.log(a);


// var a=10;
// var b=20;
// // console.log(a && b); //  left operand(10)  operator(&&) right operand (20)


// console.log(a && b); // =>20
// console.log(a>b && a<b);   // 10>20 && 10<20    ==> false
// console.log(a<b && a>b);   // 10<20 && 10>20    ==> false
// console.log(false && true);  



// var a=20;
// var b=0;
// // console.log(a && b); //  left operand(10)  operator(&&) right operand (20)


// console.log(b && a);
// // console.log(a>b && a<b);   // 10>20 && 10<20    ==> false
// // console.log(a<b && a>b);   // 10<20 && 10>20    ==> false
// // console.log(false && true);  


//  var a=10;
//  var b=0;
//  var c=10;

// //  console.log(a>b || a>b);
//  console.log(a<b || a<b || c>b);  //  a<b || a<b || c>a  
//                                   //  false || c>b
//                                   // false || true

// var a=10;
// console.log(!!a);    //  !!a
//                      // !!10
//                     // !false
//                     // true

//                     var z=!true;
//                     console.log(!z);


// if(!!"vamsi"){
//     alert("hello there good morning")
// }else{
//     alert("hello there see you tmrw !!!!")
// }



// if(10 && 10){  // if(true)
//     alert("hello there good morning")
// }else{
//     alert("hello there see you tmrw !!!!")
// }
        

// if(["vamsi"] && [1,2,3]){  // ["vamsi"] && [1,2,3] == true  if(true)
//     alert("hello there good morning")
// }else{
//     alert("hello there see you tmrw !!!!")
// }


// if(["vamsi"] == [1,2,3]){
//     alert("hello there good morning")
// }else{
//     alert("hello there see you tmrw !!!!")
// }

 

// if(["vamsi"] && []){  
//     alert("hello there good morning")
// }else{
//     alert("hello there see you tmrw !!!!")
// }



// if(["vamsi"] && " "){  
//     alert("hello there good morning")
// }else{
//     alert("hello there see you tmrw !!!!")
// }


// if(["vamsi"] && undefined){  
//     alert("hello there good morning")
// }else{
//     alert("hello there see you tmrw !!!!")
// }



// if(null && null){  
//     alert("hello there good morning")
// }else{
//     alert("hello there see you tmrw !!!!")
// }


// if("" || 10){  
//     alert("hello there good morning")
// }else{
//     alert("hello there see you tmrw !!!!")
// }



// if(["vamsi"] || undefined){  
//     alert("hello there good morning")
// }else{
//     alert("hello there see you tmrw !!!!")
// }