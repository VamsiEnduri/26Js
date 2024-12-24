// let dvTag=document.querySelector("div");
// let child=document.createElement("img");
// let child2=document.createElement("img");
// child.src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202403/r-ashwin-in-action-against-england-in-ranchi-reuters-072527734-1x1_0.jpg?VersionId=7.LxFwzi4kCSK40RQmdRouZfRkIGIChQ"

// child2.setAttribute("src","https://c.ndtvimg.com/2024-07/iqk11iqg_ms-dhoni-and-ravichandran-ashwin-bcci_625x300_09_July_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738")

// // let kohli=document.createElement("img");
// // kohli.src="https://images.indianexpress.com/2024/05/VIRAT-KOHLI-ORANGE-CAP-PTI-CROP-1.jpg"

// dvTag.append(child,child2)
// // dvTag.replaceChild(kohli, child)
// // dvTag.replaceChild(child2, kohli)

// // dvTag.removeChild(child)
// // document.body.remove()




// // for(i=1;i<=20;i++){
// //     const dvTagClone=dvTag.cloneNode(true);
// //     document.body.appendChild(dvTagClone)
// // }


// let divContainer=document.createElement("div");
// divContainer.setAttribute("id","divContainer");
// let divContainerId=divContainer.getAttribute(divContainer);
// divContainerId.sty


// let divTag=document.querySelector("div");
// divTag.id="divContainerId";
// divTag.className="divContainerClass"
// divTag.classList.add("ramesh","suresh")
// divTag.classList.remove("ramesh")

// let imageElem=document.querySelector("img")
// let div=document.createElement("div")
// div.textContent="asdfghjklqwertyuio diiiiivvvvvvvvv"
// let p=document.createElement("p");
// p.textContent="p tag from js"
// imageElem.addEventListener("mouseover",()=>{
//       imageElem.style.borderRadius="50%"
//   imageElem.style.boxShadow="2px 3px 4px red"
//   document.body.style.backgroundColor="lightgray"
// })
// function image(){
//   imageElem.style.borderRadius="50%"
//   imageElem.style.boxShadow="2px 3px 4px red"
// }
// imageElem.insertAdjacentElement("beforebegin",p)
// imageElem.insertAdjacentElement("afterbegin",p)
// document.body.append(div)
// div.insertAdjacentHTML("afterbegin",p)
// div.insertAdjacentElement("afterbegin",p)
// div.insertBefore(p)

let div=document.querySelector("div");
let p=document.getElementById("vamsi")

let img =document.createElement("img")
img.src="https://images.indianexpress.com/2024/05/VIRAT-KOHLI-ORANGE-CAP-PTI-CROP-1.jpg"
div.insertBefore(img,p)
