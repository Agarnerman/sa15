function checkAnswer(questionNumber, correctAnswer) {
  var userAnswer = document.getElementById('answer' + questionNumber).value;
  var feedbackElement = document.getElementById('feedback' + questionNumber);
  
  if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      feedbackElement.textContent = "Correct!";
      feedbackElement.style.color = 'green';
  } else {
      feedbackElement.textContent = "Wrong! The correct answer is " + correctAnswer + ".";
      feedbackElement.style.color = 'red';
  }
}
