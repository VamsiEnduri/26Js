let formRegister = document.getElementById("register");
formRegister.addEventListener("submit", (k) => {
    
  k.preventDefault();
  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;
  let p = document.getElementById("pswd").value;

localStorage.setItem("user",JSON.stringify({"name":n,"email":e, "password":p}))
location.href="./login.html"
});
