function addTask(){
    console.log("add task clicked");
    let i=document.querySelector("input");
    let iValue=i.value.trim()
  

    console.log(iValue);

    if(iValue === ""){
        alert("pls enter task to proceed furthur")
        return;
    }
    let taskItem=document.createElement("div");
    taskItem.style.backgroundColor="red"
    taskItem.style.marginTop="30px"
    
    let dataInput=document.createElement("h1");
    dataInput.textContent=iValue;

    let editBtn=document.createElement("button");
    editBtn.textContent="Edit"
    editBtn.className="edit-btn"


    let dlteBtn=document.createElement("button");
    dlteBtn.textContent="Delete"
    dlteBtn.className="dlte-btn"

    taskItem.append(dataInput,editBtn,dlteBtn)
    i.value=""

    document.body.append(taskItem)

    dlteBtn.addEventListener("click",()=>{
        deleteTask(taskItem)
    //    let x=confirm("are you sure to dlete the task?")
    //    if(x){
    //     taskItem.remove(dataInput,editBtn,dlteBtn)
    //    }
    })

    editBtn.addEventListener("click",()=>{
        editTask(taskItem)
        // let currentText=dataInput.textContent;
        // // alert(currentText)
        // let editText=prompt("edit task here",currentText);
        // if(editText !== "" && editText.trim() !==""){
        //       dataInput.textContent =editText;
        // }else{
        //     alert("enyer something in prompt")
        //     prompt("type to edit",currentText)
        // }
    })
    
}

function editTask(editSingleTask){
    console.log(editSingleTask);
    
    let currentText=editSingleTask.querySelector("h1");
        // alert(currentText)
        let editText=prompt("edit task here",currentText.textContent);
        if(editText !== "" && editText.trim() !==""){
            currentText.textContent  =editText;
        }
        // else{
        //     alert("enyer something in prompt")
        //     prompt("type to edit",currentText)
        // }
}


function deleteTask(dlteItem){
    let x=confirm("are you sure to dlete the task?")
    if(x){
     dlteItem.remove()
    }
}