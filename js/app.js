'use strict';

let start = document.getElementById ("button")
.onclick = function () {myFunction()};

function myFunction (){
     
    alert('hello');

    let userName = prompt('please enter yout name');
  console.log (userName);
  document.write ('Hello'+" "+userName+','+"welcome to my webpage,let's make you know me better"+
  "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");

  let question1 = prompt('Would you like to have a brief about my educational history?(YES/NO)').toUpperCase();
  switch(question1){
      case 'YES': 

      alert ("Your answer is YES");
      console.log ('the answer is YES');
      document.write ('Well thanks for your interesting, i was majoring in the college in the architecture field. And now im building my self to become a software developer.'
      "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");
      break;

      case 'NO':

        alert ("Your answer is NO");
        console.log ('the answer is NO');
        break;

    default:
        alert ('this is not the right answer');
        console.log('this is not the right answer');
        break;


    



  }







