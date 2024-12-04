// // var arr1=["flipkart","amazon"];
// // arr1.push("meesho")
// // arr1.push("myntra","ajio","snapdeal","libas","h&m","zara","zudio")
// // arr1.unshift("shopsy","max","yerragadda bazar","rythu bazar")
// // arr1.pop()
// // arr1.pop()
// // arr1.pop()
// // arr1.shift()
// // arr1.shift()
// // arr1.shift()
// // console.log(arr1.length);
// // console.log(arr1);


// var fruits=["apple","Banana","custordApple","Drgaon fruit"];
// // console.log(fruits.reverse())
// var vegatbles=["tomato","carrot"];
// // console.log(typeof (fruits + vegatbles))
// console.log(fruits.concat(vegatbles).concat([1,2,3]).concat("ntr","prabhas",undefined,null,true))



// var  fruits=["apple","Banana","custordApple","DrgaonFruit"];
// console.log(fruits.join(" "));
// console.log(fruits.indexOf("Apple"));


var a="10Kcoders"
// console.log(a.split("").reverse().join(""));

// console.log(a.slice(startIndex,EndINdex))
// console.log(a.slice(0,2))
// console.log(a.slice(0,4))
// console.log(a.slice(0))
// console.log(a.slice(-6,-1))
// console.log(a.slice(-6))







// console.log(fruits.includes(["watermelon","grapes","apple","Mango"]));


var arr=["Alice", "Bob", "Charlie", "David"];
arr.unshift("deepika")
arr.pop()


if(arr.includes("Bob")){
    // console.log(arr);
}else{
    console.log("not such person found");
    
}



var a=["Song1", "Song2", "Song3"];
var b= ["Song4", "Song5"];

var songs=a.concat(b)
songs.shift()
songs.push("kissik","peelings","debbalu padtayaroi")
// console.log(songs)


var movies=["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"]
var sliceMovies=movies.slice(1,4).concat(["The Matrix", "The Godfather"]).reverse()
// console.log(sliceMovies);


var cartItems=["Milk", "Bread", "Eggs", "Butter"];
if(cartItems.includes("Eggs")){
    cartItems.pop()
    cartItems.push("Cheese","Juice")
    // console.log(cartItems); 
}
else{
    console.log("eggs item not found in the cart");
    
}

var items=["Milk", "Bread", "Eggs", "Butter"];
var x=items.indexOf("Eggs");
console.log(x);
items[x]="Cheese"
items.unshift("Juice")
console.log(items);

