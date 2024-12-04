// var a="10kCoders";
// var b=a.concat("kphbHydPhase1Rd1");
// var c=b.slice(9,16).toUpperCase();
// console.log(a.length)
// console.log(b.slice(9,16).toUpperCase())
// console.log(c.toLowerCase())

// var z="          Aahello    world    ";  // splice
// // console.log(z.trimStart());
// // console.log(z.trimEnd());
// console.log(z.trim());
// console.log(z.charAt(16))
// console.log(z.charCodeAt(0))


// var a=prompt("enter string here");

// var trimStr=a.trim();
// var result=trimStr.charAt(0);
// var result2=trimStr.charAt(trimStr.length-1);
// console.log(result+result2);


// var char=a.charAt(2);
// var strLength=a.length;
// var SliceLastChar=a.slice(-1)
// console.log(SliceLastChar);

// var b=prompt("enter string here");

// var lowerCaseStr=a.toLowerCase();
// var upperCase=b.toUpperCase()
// var result=lowerCaseStr.concat(upperCase)
// console.log(result);


// var trimStr=a.trim();
// var asciiCode=trimStr.charCodeAt(1);
// var result=trimStr.slice(1,4)
// console.log(trimStr)
// console.log(asciiCode)
// console.log(result)

// var str=a.length;
// console.log(str)
// var strUpperCase=a.toUpperCase();
// console.log(strUpperCase)

// var singleChar=strUpperCase.charAt(0);
// console.log(singleChar)


// var aname="ravi";
// var age=27;

// var details={
//     aname,age
// }
// console.log(details)

var personDetails= new Object()
personDetails.name="ravi";
personDetails.age=27
Object.seal(personDetails)
personDetails.age=35
Object.freeze(personDetails)

personDetails.isMarried=false
delete personDetails.age

console.log(Object.isFrozen(personDetails))
console.log(Object.isSealed(personDetails))
console.log(personDetails);
// console.log(Object.keys(personDetails))
// console.log(Object.values(personDetails))
// console.log(Object.entries(personDetails))
