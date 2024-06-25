async function includeHTML() {
  let includeElements = document.querySelectorAll('[w3-include-html]');
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute('w3-include-html'); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = 'Page not found';
    }
  }
}

function init() {
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById('endscreensuccess').classList.remove('d-none');
    document.getElementById('mainquizwrapper').classList.add('d-none');
    document.getElementById('totalquestions').innerHTML = questions.length;
    document.getElementById('totalrightanswers').innerHTML = rightAnswers;
  } else {
    let question = questions[currentQuestion];
    document.getElementById('questionheadline').innerHTML =
      question['question'];
    document.getElementById('answer1').innerHTML = question['answer_1'];
    document.getElementById('answer2').innerHTML = question['answer_2'];
    document.getElementById('answer3').innerHTML = question['answer_3'];
    document.getElementById('answer4').innerHTML = question['answer_4'];
  }
}

function answer(index) {
  let question = questions[currentQuestion];
  let selectedQuestionNo = index.slice(-1);
  let idOfRightAnswer = `answer${question['right_answer']}`;

  if (selectedQuestionNo == question['right_answer']) {
    document.getElementById(index).classList.add('list-group-item-success');
    rightAnswers++;
  } else {
    document.getElementById(index).classList.add('list-group-item-danger');
    document
      .getElementById(idOfRightAnswer)
      .classList.add('list-group-item-success');
  }
  document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById('next-btn').disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document
    .getElementById('answer1')
    .classList.remove('list-group-item-success');
  document.getElementById('answer1').classList.remove('list-group-item-danger');
  document
    .getElementById('answer2')
    .classList.remove('list-group-item-success');
  document.getElementById('answer2').classList.remove('list-group-item-danger');
  document
    .getElementById('answer3')
    .classList.remove('list-group-item-success');
  document.getElementById('answer3').classList.remove('list-group-item-danger');
  document
    .getElementById('answer4')
    .classList.remove('list-group-item-success');
  document.getElementById('answer4').classList.remove('list-group-item-danger');
}

function restartQuiz() {
  let currentQuestion = 0;
  showQuestion(currentQuestion);
}
