let formRegister = document.getElementById("register");
// console.log(formRegister);

// let n=document.getElementById("name")
// localStorage.setItem("userInfo",JSON.stringify({id:1, name:"vamsi", email:"cvbnm,", pw:123456789}))
formRegister.addEventListener("submit", (k) => {
  k.preventDefault();
  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;
  let p = document.getElementById("pswd").value;
  // console.log(n,e,p);
//   localStorage.setItem("name",n)
//   localStorage.setItem("email",e)
//   localStorage.setItem("vamsi",p)

localStorage.setItem("user",JSON.stringify({"name":n,"email":e, "password":p}))

});
// console.log(n);
