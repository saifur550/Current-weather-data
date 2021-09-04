// function showMessage1(){
//   return 'this line will output'
// }

// const output1 = showMessage1();
// console.log(output1);



// function showMessage2(){
//     console.log("Hi line will output");
// }

// const output2 = showMessage2('line');
// console.log(output2);



//  set time out 

// let name = ''

// function showMessage2(){
//    alert("added here set time here", 5000);
// }

// setTimeout(showMessage2());

// function alertMessage(user, name ){
//     alert(user + " , " + name)
// }
// const userItem = setTimeout (alertMessage, 5000 ,  'sakib', 'crickter')
// clearTimeout(userItem)



// console.log('1st');
// console.log('2nd');
// setInterval(() => {
//     console.log('something will output here ');
// } ,3000);
// console.log('3rd');





let seconds  = 0;
 const timeId = setInterval(() => {
    let item = seconds ++ ;

    if(seconds>5){
        clearInterval(timeId)
    }
}, 3000);

console.log(seconds);
