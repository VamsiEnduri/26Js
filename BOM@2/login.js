let login = document.getElementById("login");
login.addEventListener("submit", (k) => {
    
  k.preventDefault();
  let e = document.getElementById("email").value;
  let p = document.getElementById("pswd").value;

let credentails=JSON.parse(localStorage.getItem("user"));
let eS=credentails.email
let pS=credentails.password;
let loggedIn=false;


if( e === eS && p ===pS){
localStorage.setItem("isLoggedIn",!loggedIn)


    if(loggedIn){
        alert("successfully loggedin")
    location.href="./home.html"
    }else{
    location.href="./login.html"
    }
}else{
    alert("credentials not matched")
}
});
