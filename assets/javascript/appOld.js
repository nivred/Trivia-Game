function quizQuestion(question, choices, correctAnswer){
	this.question = question;
	this.choices = choices;
	this.correctAnswer = correctAnswer;
}

var allQuestions = [
	new quizQuestion ("Where was Bruce Lee born?",
	["Hong Kong", "San Francisco", "Beijing", "Seattle"],1),

	new quizQuestion ("When was Bruce Lee born?",
	["October 4th, 1940", "November 27th, 1940", "April 27th, 1938", "October 4th, 1937"],1),

	new quizQuestion ("How tall was Bruce Lee?",
	["6 foot", "6 foot 2 inches", "5 foot 7 and a half", "5 foot 9 and a half"],2),

	new quizQuestion ("Which ancient Asian martial art did Bruce train in before going to America?",
	["Wing Chun", "Tae Kwon Do", "Wushu", "Karate"],0),

	new quizQuestion ("Which legendary move did Bruce make famous after a demonstration in a gathering of martial arts experts?",
	["Karate Chop", "Roundhouse Kick", "One Inch Punch", "Flying Kick"],2),
	
	new quizQuestion ("His own martial art, Jeet Kune Do, translates into _______ ?",
	["Way of the Dragon", "Secrets of the Arts", "The Art of the Fist of Fury", "Way of the Intercepting Fist"],3),

	new quizQuestion ("Which TV series did Bruce co-star in before gaining international stardom?",
	["Batman", "The Green Hornet", "Kung Fu", "The Avengers"],1),

	new quizQuestion ("Jackie Chan was a stuntman in 'Fist Of Fury' (1972).",
	["True", "False"],0),

	new quizQuestion ("What was the title of the film that Bruce did not finish making due to his untimely death?",
	["Way Of The Dragon", "Fist Of Fury", "Enter The Dragon", "Game Of Death"],3),

	new quizQuestion ("What was the official cause, as annnounced at the time, of Bruce's death?",
	["cancer", "allergic reaction", "brain edema", "brain tumor"],2),
];

$(document).ready(function() {
	var count = 10;
	var counter = setInterval(function(){
		count--;
// document.getElementById("countdown").textContent = count;
		$("#countdown").html(count);
		if (count <= 0)
			clearInterval(counter);
		}, 1000);

//	on click hide button and display questions with countdown
	$("button").click(function() {
		$("button").css("display", "none");
		$("section").css("display", "initial");
	});

//	when coundown reaches zero display results
	$("section").css("display", "none");
	$("results").css("display", "initial");
});

//	====================================================	//

var currentquestion = 0;
var correctAnswers = 0;


function questionnaire() {
  $("#questions").html(1 + ". " + allQuestions.question);
  var options = allQuestions.choices;
  var formHtml = "";

  for (var i = 0; i < options.length; i++) {
    formHtml += '<div><input type="radio" name="option" value="' + i + '" class="options"><label for="option' + i + '">' + options[i] + '</label></div>';
  }

  $("#form").html(formHtml);
  $(".options:eq(0)").prop("checked", true);
}

function checkAns() {
  if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
    correctAnswers++;
  }
}

questionnaire();
