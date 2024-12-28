let logOut=document.getElementById("logOut");



logOut.addEventListener("click",(e)=>{
    e.preventDefault()
    
// let loggedOut=localStorage.setItem("isLoggedIn",false)
let loggedOutConfirm=localStorage.getItem("isLoggedIn")
    alert("logout clicked")
      if(!loggedOutConfirm){
          location.href="./home.html"
      }else{
        location.href="./login.html"
      }
})