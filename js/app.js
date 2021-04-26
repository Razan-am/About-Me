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


    let question2 = prompt('Would you like to have an overview of your job experience?(yes/no)').toLowerCase();
    switch(question2){
        case 'yes': 
  
        alert ("Your answer is yes");
        console.log ('the answer is yes');
        document.write ('So i have many different job experiences in different fields,i have worked in the sales/marketing/promotion,also as a event/parties planner, and i have worked as adesigner espacially as a graphic designer.'
        "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");
        break;
  
        case 'NO':
  
          alert ("Your answer is NO");
          console.log ('the answer is NO');
          break;
       }

     let question3 = prompt('Now as you know a little bit more about me , could you tell if i am ok with changes or not ?(yes/no)').toLowerCase();  
     switch(question3){
        case 'yes': 
  
        alert ("Your answer is yes, and it is a correct answer ");
        console.log ('the answer is yes, and it is a correct answer ');
        break;
  
        case 'NO':
  
          alert ("Your answer is NO");
          console.log ('the answer is NO');
          break;
       }

    

  




  }







