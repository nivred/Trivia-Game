//	format the questions, choices, and answer key
var allQuestions = [{
    question: "Where was Bruce Lee born?",
    choices: ["Hong Kong", "San Francisco", "Beijing", "Seattle"],
    correctAnswer: 1,
  }, {
    question: "When was Bruce Lee born?",
    choices: ["October 4th, 1940", "November 27th, 1940", "April 27th, 1938", "October 4th, 1937"],
    correctAnswer: 1,
  }, {
    question: "How tall was Bruce Lee?",
    choices: ["6 foot", "6 foot 2 inches", "5 foot 7 and a half", "5 foot 9 and a half"],
    correctAnswer: 2,
  }, {
    question: "Which ancient Asian martial art did Bruce train in before going to America?",
    choices: ["Wing Chun", "Tae Kwon Do", "Wushu", "Karate"],
    correctAnswer: 0,
  }, {
    question: "Which legendary move did Bruce make famous after a demonstration in a gathering of martial arts experts?",
    choices: ["Karate Chop", "Roundhouse Kick", "One Inch Punch", "Flying Kick"],
    correctAnswer: 2,
  }, {
    question: "His own martial art, Jeet Kune Do, translates into _______ ?",
    choices: ["Way of the Dragon", "Secrets of the Arts", "The Art of the Fist of Fury", "Way of the Intercepting Fist"],
    correctAnswer: 3,
  }, {
    question: "Which TV series did Bruce co-star in before gaining international stardom?",
    choices: ["Batman", "The Green Hornet", "Kung Fu", "The Avengers"],
    correctAnswer: 1,
  }, {
    question: "Jackie Chan was a stuntman in 'Fist Of Fury' (1972).",
    choices: ["True", "False"],
    correctAnswer: 0,
  }, {
    question: "What was the title of the film that Bruce did not finish making due to his untimely death?",
    choices: ["Way Of The Dragon", "Fist Of Fury", "Enter The Dragon", "Game Of Death"],
    correctAnswer: 3,
  }, {
    question: "What was the official cause, as annnounced at the time, of Bruce's death?",
    choices: ["cancer", "allergic reaction", "brain edema", "brain tumor"],
    correctAnswer: 2,
  }];


$(document).ready(function() {
	//	on click hide start button
	$("button").click(function() {
		$(this).remove();
		//	display questionaire
		$("section").css("display", "initial");
		//	set and display timer
		var count = 10;
		var counter = setInterval(function(){
			count--;
			$("#countdown").html("Time Remaining: " + count);
			//	display each question
			for (var i = 0; i < allQuestions.length; i++) {
				$("#form").append("<br>" + allQuestions[i].question + "<br>");
				//	display respective answer options for each question
				for (var j = 0; j < allQuestions[i].choices.length; j++) {
					$("#form").append("<input id='choices' type='radio' name='bruce"+ i +"' value='"+ j +"'>" + allQuestions[i].choices[j]);
				}
			}
			// $("section").append("<button id='done' type='button'>Done</button>");
			//	if time runs out process answers given
			if (count <= 0) {
				clearInterval(counter);
				var userSelected = "";
				var rightAnswer = 0;
				var noAnswer = 0;
				var wrongAnswer = 0;
				//	for every question record option selected by user
				for (var i = 0; i < allQuestions.length; i++) {
					userSelected = $("input[name='bruce" + i + "']:checked").val();
					//	if user selection matches correct answer increment correct answers tally
					if (userSelected == allQuestions[i].correctAnswer) {
						rightAnswer++;
						console.log(userSelected + '=' + allQuestions[i].correctAnswer);
					//	else if no selection made increment unanswered tally
					} else if (userSelected == null){
						noAnswer++;
					//	else increment wrong answer tally
					} else {
						wrongAnswer++;
					}
				}
				//	hide questionnaire and display results
				$("#timer").remove();
				$("#countdown").remove();
				$("#form").remove();
				$("#results").append(
					"<h2>All Done</h2> <br> Right Answers: " + rightAnswer + 
					"<br>Incorrect Answers: " + wrongAnswer + 
					"<br>Unanswered: " + noAnswer);
				// console.log('right answers '+ rightAnswer);
				// console.log('no answer ' + noAnswer);
				// console.log('wrong answer ' + wrongAnswer);
			}
		}, 1000);
	});
});