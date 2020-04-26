function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;


	if (question1 == "isPresent") {
		correct++;
}
	if (question2 == "Takes care of the data inside your website, also called an 'active record'") {
		correct++;
}	
	if (question3 == "What is seen on the website, includes html and css files") {
		correct++;
}
	if (question4 == "mkdir") {
		correct++;
}
	if (question5 == "const food = [apple, pizza, pear] Console.log(food[1])") {
		correct++;
}
	if (question6 == "defines a division or a section in an HTML document, often used for style or display elements") {
		correct++;
}
	if (question7 == "puts name.length") {
		correct++;
}
	if (question8 == "example = [w, x, y, z]") {
		correct++;
}
	if (question9 == "ls") {
		correct++;
}
	if (question10 == "variable declaration") {
		correct++;
}
	
	var messages = ["Great job!", "SO close", "Keep studying", "Consider re-taking WRA410"];
	var range;

	if (correct >= 0 && correct < 5) {
		range = 3;
	}

	if (correct >= 5 && correct < 7) {
		range = 2;
	}

	if (correct >= 7 && correct < 10) {
		range = 1;
	}

	if (correct == 10) {
		range = 0;
    }

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	}