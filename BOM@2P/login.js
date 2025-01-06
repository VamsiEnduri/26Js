let form = document.querySelector("form")


form.addEventListener("submit",(e)=>{
    e.preventDefault();

     let email = document.getElementById("email").value;
     let password = document.getElementById("paswd").value;


    //  const AllUsrsData=[]
     const userdetailsLogin = {
        emailL:email,
        passwordL:password
     }
   
     const dataFromStorage=JSON.parse(localStorage.getItem("allUsers"))
     console.log(dataFromStorage);
     
    const userFound=dataFromStorage.filter(x=>{
     return   x.email === userdetailsLogin.emailL && x.password===userdetailsLogin.passwordL
    })

    console.log(userFound);
    
    if(userFound){
        alert("login succesful")
        localStorage.setItem("user",JSON.stringify(userFound))
        location.href="./home.html"
    }else{
        alert("no user found in storage");
        location.href="./login.html"
    }
    
})