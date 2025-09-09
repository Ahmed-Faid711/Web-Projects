// // var numOne=100
// // console.log(numOne.toString())//string
// // var numTwo=1234.51789
// // console.log()
// // console.log(10)
// //  var z=numTwo.toFixed(3) //z=1234.518
// //  console.log(parseInt("100"))
// // console.log(Number.isInteger(100))
 
// // console.log('a'/2)
// // console.log(parseInt('ali'))
// // console.log(Number.isNaN(parseInt('ali')))
 
// // console.log(Math.round(99.9)) //100
// // console.log(Math.round(99.1)) //99
 
 
 
// // console.log(Math.ceil(99.1)) //100
// // console.log(Math.floor(99.9)) //99
 
// // console.log(Math.min(55,99,13,1.2))
// // console.log(Math.max(55,99,13,1.2))
 
// // console.log(9**2)
// // console.log(Math.pow(2,9))
// // console.log(Math.random()*100)
// // console.log(parseInt(Math.random()*100))
// // console.log(Math.trunc(Math.random()*100))

// // var a="hello from javascript"

// // console.log(a.slice(6,11))

// // console.log(a.charAt(15).toUpperCase().repeat(8));
// // console.log(a.split(" ",1))

// // console.log(a.substr(0,5) +" "+a.substr(15,6))
// // console.log(a.substr(0,5) +" "+a.substr(-6,6))

// // var half= Math.floor(a.length/2) 
// // console.log(a.charAt(0).toUpperCase()+a.slice(1 ,half)+a.charAt(half).toUpperCase()+a.slice(half+1,a.length) +a.charAt(a.length-1).toUpperCase())

// //task 1
// let a = 10;
// //<10    10:40    >40   make it in ternery operator
// // if (a < 10) {
// //   console.log("<10");
// // } else if (a >= 10 && a <= 40) {
// //   console.log("10 to 40");
// // } else if (a > 40) {
// //   console.log(">40");
// // } else {
// //   console.log("unknown");
// // }

// // a<10?console.log("<10"):(a >= 10 && a <= 40)?console.log("10 to 40"):a > 40?console.log(">40"):console.log("unknown")
 

// // let text = "Your JavaScript";
// // //task 2
// // if (text.length*2 == "30") {
// //   console.log("30");
// // }
// // //task3
// // if (text.charAt(5) == "J") {
// //   console.log("J");
// // }
// // //task 4
// // if (typeof text == "string") {
// //   console.log("string");
// // }
// // //task 5
// // if ( typeof text.length == "number") {
// //   console.log("number");
// // }
// // console.log()
// // //task 6
// // if (text.slice(0,4).repeat(2) == "YourYour") {
// //   console.log("your your");
// // }
// // //task7
// // var degree=40
// // // degree>50 -->fail , 50<degree>70 -> good  degree > 70 ->excellent
// //  if(degree>=70){
// //     console.log("excellent")
// //  }
// //  else if(degree<70 && degree>=50){
// //     console.log("good")
// //  }
// //  else{
// //     console.log("fail")

// //  }
 
// // //task #1
// // let myFriends = ["Sara", "Soha", "Ahmed", "Ali"];
// // // ['Sara', 'Soha', 'Ahmed']
// // myFriends.pop();
// // console.log(myFriends);
 
// // //task #2
// // let arrOne = ["C", "D", "X"];
// // let arrTwo = ["A", "B", "Z"];
// // let finalArr = [];
// // // Write One Single Line Of Code
// // // ["Z", "X", "D", "C", "B", "A"]
// //  finalArr = arrOne.concat(arrTwo).sort().reverse()
// //  console.log(finalArr);

// // //task 3
// // let arr1 = ["A", "C", "X"];
// // let arr2 = ["D", "E", "F", "Y"];
// // let allArrs = [];
// // allArrs= arr1.slice(-1).concat(arr2.slice(-2)).sort().join("").toLowerCase()
// // console.log(allArrs); // fxy
 
// // //----------------------// ++ --
// // let Zero = 0;
// // let counter = 3;
// // let my = ["Ahmed", "Maryan", "Elham", "Osama", "Gamal", "Ameer"];
 
// // //task #1
// // // ["Osama", "Elham", "Maryan", "Ahmed"];
// //  my.splice(++counter,++Zero)
// //  my.splice(counter,Zero)

// //  console.log(my.reverse())

 
// // //task #2
// // // ["Elham", "Maryan"]
// //  my.shift()
// //  my.pop()
// //  console.log(my)

 
// // //task #3
// // // "Elryan"
// // my.pop()
// // my.pop()
// // my.push('Elryan')
// // console.log(my)

// // //task #4
// // // "aN"
// // console.log(my[--Zero].slice(counter,++counter) +my[Zero].slice(counter).toUpperCase())
 
// //swicth challange
// // if (job === "Manager") {
// //   salary = 8000;
// // } else if (job === "IT" || job === "Support") {
// //   salary = 6000;
// // } else if (job === "Developer" || job === "Designer") {
// //   salary = 7000;
// // } else {
// //   salary = 4000;
// // }

// // let job = "Support";
// // let salary = 0;

// // switch(job){
// //     case "Manager":
// //         salary=8000;
// //         break;
    
// //     case "IT":
// //     case "Support":
// //         salary=6000;
// //         break;
    
// //     case "Developer":
// //     case "Designer":
// //         salary=7000;
// //         break;

// //     default:
// //         salary=4000;
// //         break;
// // }
// // console.log(salary)

// // // if challange
// // let holidays = 0;
// // let money = 0;

// // // 

// // if(holidays==0){
// //     money = 5000;
// //     console.log(`My Money is ${money}`);
// // }
// // else if(holidays==1||holidays==2){
// //     money = 3000;
// //     console.log(`My Money is ${money}`);
// // }
// // else if(holidays==3){
// //     money = 2000;
// //     console.log(`My Money is ${money}`);
// // }
// // else if(holidays==4){
// //     money = 1000;
// //     console.log(`My Money is ${money}`);
// // }
// // else{
// //     money = 0;
// //     console.log(`My Money is ${money}`);
// // }

// var arr=['ahmed', 'cairo', 1253, true, 'id','age']
// //escape cairo //stop 'id'

// for(var i=0;i<arr.length;i++){
//     if (arr[i]=='cairo') {
//         continue;
//     }
//     if (arr[i]=='id') {
//         break;
//     }
//     console.log(arr[i]);
// }

// var friends=['ali', 2, 'ahmed',3,5, 'sara']
// var names=[]//strings from friends

// for(var i=0;i<friends.length;i++){
//     if (typeof friends[i]=="string") {
//         names.push(friends[i]);
//     }
    
// }
// console.log(names);

// var friends = [ 'Ahmed', 'Sayed', 'Eman', 'Mahmoud', 'Ameer' , 'Osama' , 'Sameh'];
// let letter = 'a';
// var newArr=[]
// for (let i = 0; i < friends.length; i++) {
//     if (friends[i].charAt(0).toLowerCase() !== letter.toLowerCase()) {
//         newArr.push(friends[i])
//     }
    
// }
// for (let i = 0; i < newArr.length; i++) {
//     console.log(i+1 +' => '+newArr[i])
// }





