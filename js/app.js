'use strict';


let start = document.getElementById("button").onclick = function () { greeting(); };



let container = document.getElementById('container');

let score = 0;
function greeting() {

  alert('hello');

  let userName = prompt('please enter yout name');

  let data = document.createElement('p');
  container.appendChild(data)
  data.textContent = 'Hello' + " " + userName + ',' + "welcome to my webpage,let's make you know me better.";

  

  q1();
  q2();
  q3();
  q4();
  q5();
  q6();
  q7();

  let result = confirm('Thank you for answering to these questions,hope you will enjoy exploring my web page,and  wish you to have a great day');

  alert('Your final result is ' + score);
}

function q1() {
  let question1 = prompt('Would you like to have a brief about my educational history?(YES/NO)(Y/N)').toUpperCase();

  switch (question1) {

    case 'YES' || 'Y':
      alert("Your answer is YES");
      let data = document.createElement('p');
      container.appendChild(data);
      data.textContent = "Well thanks for your interesting, i was majoring in the college in the architecture field. And now im building my self to become a software developer.";
      score++;
      break;

    case 'NO' || 'N':
      alert("Your answer is NO");
      break;

    default:
      alert('this is not the right answer');
      break;
  }
}

function q2() {
  let question2 = prompt('Would you like to have an overview of my job experience?(yes/no)(y/n)').toLowerCase();

  switch (question2) {
    case 'yes' || 'y':
      alert("Your answer is yes");
      let data = document.createElement('p');
      container.appendChild(data);
      data.textContent = "So i have many different job experiences in different fields,i have worked in the sales/marketing/promotion,also as a event/parties planner, and i have worked as adesigner espacially as a graphic designer.";
      score++;
      break;

    case 'no' || 'n':
      alert("Your answer is NO");
      break;
  }

}


function q3() {
  let question3 = prompt('Now as you know a little bit more about me , could you tell if i am ok with changes or not ?(yes/no)(y/n)').toLowerCase();

  switch (question3) {
    case 'yes' || 'y':
      alert("Your answer is yes, and it is a correct answer ");
      score++;
      break;

    case 'no' || 'n':
      alert("Your answer is NO");
      break;
  }

}

function q4() {
  let question4 = prompt('Would you like to have an idea about my main goal?(YES/No)(Y/N)').toUpperCase;

  switch (question4) {
    case 'YES' || 'Y':

      alert("Your answer is YES");
      let data = document.createElement('p');
      container.appendChild(data)
      data.textContent = "my main goal is to live my life without any regrets and to always do my best in everything";
      score++;
      break;

    case 'NO' || 'N':
      alert("Your answer is NO");
      break;
  }
}

function q5() {
  let question5 = prompt('Do you have a similar goals as mine?(yes/no)(y/n)').toLowerCase;

  switch (question5) {
    case 'yes' || 'y':
      alert("Your answer is yes");
      container.appendChild(data)
      data.textContent = "that is amazing to know";
      score++;
      break;

    case 'no' || 'n':
      alert("Your answer is NO");
      container.appendChild(data)
      data.textContent = "that is good to know";
      break;
  }

}
function q6() {
  let age = 24;
  for (let i = 1; i <= 4; i++) {
    let question6 = parseInt(prompt('Can you guess how old i am ?'));

    if (question6 === age) {
      alert('That is correct');
      score++;
      break;
    } else if (question6 < age) {
      alert('Your answer is too low');

    } else if (question6 > age) {
      alert('Your answer is too high');
    }
  }

  alert('I am 24 years old');

}

function q7() {
  let counrtyName = ['canada', 'singapore', 'germany'];

  for (let attempt = 1; attempt <= 6; attempt++) {

    let question7 = prompt('Can you guess which countries i am planning to visit?').toLowerCase();
    let correct = false;

    for (let j = 0; j < counrtyName.length; j++) {

      if (question7 === counrtyName[j]) {
        alert('That is correct')
        correct = true;
        score++;
        break;
      }
    }
    if (correct === false) {
      alert('Sorry, you have not guess right')
    }
  }
}





