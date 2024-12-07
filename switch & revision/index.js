// syntax

// switch(expression/value){
//     case 1:
//         //code to execute;

//         case 2:
//             // code to execute ;

//             case 3:
//                  // code to execute;

//                  default:
//                     // code to execute 
// }


// var a = prompt("enter here")
// switch (a) {
//     case "morning":
//         console.log("morning enjoy the day with lot of happiness");
//         break;
//     case "afternoon":
//         console.log("afternoon enjoy the day with lot of happiness but so sunny outside");
//         break;
//     case "evening":
//         console.log("evng enjoy the evng with lot of happiness by playing cricket");
//         break;
//     case "night":
//         console.log("night enjoy the nightlife with lot of happiness by roaming in hyd streets");
//         break;
//     default:
//         console.log("invalid search for exisiting choice")
// }

// var a = +prompt("enter here")  
// if(a<=7){
//     console.log(a);
//     switch (a) {
//         case 1:
//             console.log("monday");
//             break;
//         case 2:
//             console.log("tuesday");
//             break;
//         case 3:
//             console.log("wednesday");
//             break;
//         case 4:
//             console.log("thursday");
//             break;
//         case 5:
//             console.log("friday");
//             break;
//         case 6:
//             console.log("saturday");
//             break;
//         default:
//             console.log("sunday")
//     }
// }else{
//     alert("we have only 7 days in a week, check in b/w range of 1-7 days")
// }








var a = prompt("choose here");
var x = a.toLowerCase()
switch (x) {
    case "mocks":
        console.log("you have attended for 3 mocks ");
        break;
    case "interview prep":
        console.log("ps recordings, java recordings, nodejs recordings.. so onn");
        break;
    case "projects":
        console.log("html css project");
        break;
    case "notes":
        console.log("50+ notes");
        break;
    case "attendance":
        console.log("75% attendance");
        break;
    case "assignments":
        console.log("50%");
        break;
    case "feedback":
        console.log("my feedback: super ecellent told by rakesh sir and his team");
        break;
    case "classes":
        console.log("html, css, git, bootdstrap, js and rest are coming soon ");
        break;
    default:
        console.log("you are on home screen choose any one below");
}