const a=[1,2,3,true,undefined,null,[123456789,{id:1}]];

const b={
    id:1,
    name:"vamsi"
};

// function parent(x){
// // x()
// }
// parent(function child(){
//     console.log("vamsi");
    
// })


// setTimeout(()=>{

// },2000)


let btnRed=document.querySelectorAll("button")
// let btnRedTextConetent=btnRed.textContent

for(i=0;i<btnRed.length;i++){
    let btnRedTextConetent=btnRed[i].textContent
    console.log(btnRedTextConetent);
    
    btnRed[i].addEventListener("click",

        function bgColorChange(){
            document.body.style.backgroundColor=btnRedTextConetent
        }
    )
  
}

