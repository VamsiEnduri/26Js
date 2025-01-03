let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
     let fname = document.getElementById("fname").value;
     let lname = document.getElementById("lname").value;
     let email = document.getElementById("email").value;
     let password = document.getElementById("paswd").value;


    //  const AllUsrsData=[]
     const userdetails = {
        firstname:fname,
        lastname:lname,
        email:email,
        password:password
     }
    //  AllUsrsData.push(userdetails)
     
     
    // localStorage.setItem("allUsers",JSON.stringify(userdetails))
    // const dataFromStorage=localStorage.getItem("allUsers",JSON.parse(userdetails)) || [];
    const dataFromStorage=JSON.parse(localStorage.getItem("allUsers")) || []

    dataFromStorage.push(userdetails)
    

    localStorage.setItem("allUsers",JSON.stringify(dataFromStorage))

    console.log(dataFromStorage);


    location.href="./login.html"

  
    
})