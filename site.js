let questions = [
    {
      id: 1,
      question: "Which of the following statements defines JavaScript correctly?",
      answer: "It’s a scripting language used to make the website interactive",
      options: [
        "It’s a scripting language used to make the website interactive",
        "It’s an assembly language used to make the website interactive",
        "It’s compiled language used to make the website interactive",
        "None of the above"
      ]
    },
    {
      id: 2,
      question: "The function and  var are known as:",
      answer: "Declaration statements",
      options: [
        "Keywords",
        "Data types",
        "Declaration statements",
        "Prototypes"
      ]
    },
    {
      id: 3,
      question: " In the JavaScript, which one of the following is not considered as an error:",
      answer: "Division by zero",
      options: [
        "Syntax error",
        "Missing of semicolons",
        "Division by zero",
        "Missing of Bracket"
        
      ]
    }
  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
     
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
