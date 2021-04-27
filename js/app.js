'use strict';


let start = document.getElementById("button")

  .onclick = function () { greeting() };




function greeting(questions) {


  alert('hello');

  let userName = prompt('please enter yout name');
  console.log(userName);
  document.write('<p>Hello' + " " + userName + ',' + "welcome to my webpage,let's make you know me better.</p><br>");



  let question1 = prompt('Would you like to have a brief about my educational history?(YES/NO)').toUpperCase();

  switch (question1) {
    case 'YES' || 'Y':

      alert("Your answer is YES");
      console.log('the answer is YES');
      document.write ('<p>Well thanks for your interesting, i was majoring in the college in the architecture field. And now im building my self to become a software developer.</p><br>');
      break;

    case 'NO' || 'N':

      alert("Your answer is NO");
      console.log('the answer is NO');
      break;

    default:
      alert('this is not the right answer');
      console.log('this is not the right answer');
      break;
  }



  let question2 = prompt('Would you like to have an overview of my job experience?(yes/no)').toLowerCase();

  switch (question2) {
    case 'yes' || 'y':

      alert("Your answer is yes");
      console.log('the answer is yes');
      document.write ('<p>So i have many different job experiences in different fields,i have worked in the sales/marketing/promotion,also as a event/parties planner, and i have worked as adesigner espacially as a graphic designer.</p><br>');
      break;

    case 'NO' || 'N':

      alert("Your answer is NO");
      console.log('the answer is NO');
      break;
  }


  let question3 = prompt('Now as you know a little bit more about me , could you tell if i am ok with changes or not ?(yes/no)').toLowerCase();

  switch (question3) {
    case 'yes' || 'y':

      alert("Your answer is yes, and it is a correct answer ");
      console.log('the answer is yes, and it is a correct answer ');
      break;

    case 'no' || 'n':

      alert("Your answer is NO");
      console.log('the answer is NO');
      break;
  }



  let question4 = prompt('Would you like to have an idea about my main goal?(YES/No)').toUpperCase;

  switch (question4) {
    case 'YES' || 'Y':

      alert("Your answer is YES");
      console.log('the answer is YES');
      document.write('<p>my main goal is to live my life without any regrets and to always do my best in everything</p><br>');
      break;

    case 'NO' || 'N':

      alert("Your answer is NO");
      console.log('the answer is NO');
      break;
  }

  let question5 = prompt('Do you have a similar goals as mine?(yes/no)').toLowerCase;

  switch (question5) {
    case 'yes' || 'y':

      alert("Your answer is yes");
      console.log('the answer is yes');
      document.write('<p>that is amazing to know</p>');
      break;

    case 'no' || 'n':

      alert("Your answer is NO");
      console.log('the answer is NO');
      document.write('<p>that is good to know</p>'
      );
      break;
  }


  

  let question6 = parseInt(prompt('Can you guess how old i am ?'));

  let flag = false;
  let age = 24;

  for (let i = 1; i < 5; i++){


    if (question6 < age) {
      alert('Your answer is too low');

    } else (question6 > age);{
      alert('Your answer is too high');
    }




    if (question6 !== age) {
      let newQ = parseInt(prompt('Please try again'))

    } else(question6 === age);{
      console.log('That is correct');
      alert('That is correct');
      flag = true;

    }


  }

  if (flag === false); {
    console.log('You are wrong')
    alert('You are wrong,i am 24 years old');
  }




  let counrtyName = ['Canada', 'Singapore', 'Germany', 'India'];
  let question7 = prompt('Can you guess which countries i am planning to visit?');

  let correct = false;

  for (let j = 0; j < 7; j++) {

    if (question7 === countryName[j]) {
      console.log('That is correct');
      alert('That is correct')
      correct = true;
      break;
    } else {
      question7 = prompt('Can you guess which countries i am planning to visit?');
    }



  }
  if (correct === false) {
    alert('Sorry, you have not guess right')

  }






  let result = confirm('Thank you for answering to these questions,hope you will enjoy exploring my web page,and  wish you to have a great day');
}




//timer
//setInterval








