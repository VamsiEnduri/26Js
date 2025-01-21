export {a,b,hello}

const a="vamsi"

const b="Enduri"

function hello(){
    console.log("hello invoked and it is from index.js file");
}

// let cardContainer=document.getElementById("cardDiv")
function card(){
let c=document.createElement("div");
c.innerHTML=`
<img src="https://w0.peakpx.com/wallpaper/196/34/HD-wallpaper-virat-kohli-in-blue-jersey-virat-kohli-blue-indian-cricket-king-kohli-sports-thumbnail.jpg"/>

`
return c;
// cardContainer.append(c)
}

// card()





export {card}

// card()


// export {a,b,hello}
// console.log(a+b);
// hello()

