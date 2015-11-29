function askQuestions () {

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');

var fullName = firstName+' ' + lastName;
console.log('User is: ' + fullName);
$('h2').text('Hello ' + fullName);

// starts here //


if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly')  {

console.log('User is a general but not assembly');
alert('Greetings general');

}

// ends here//

var age = prompt('How old are you?');
age = parseInt(age);

if (age >=18) {

	console.log('User is an adult.');
	alert('Hello, adult');

} else if (age >=13) {

	console.log('User is a child.');
	alert('Come back in a few years.');

} else {

	console.log('User is a child.');
	alert('Go away child!');
}


var faveColour = prompt('What is your favorite colour?').toLowerCase();


if  (faveColour === 'red' ||
	faveColour === 'green' ||
	faveColour === 'blue' ||
	faveColour === 'yellow') {

	$('h3').not('.intro').css('color', faveColour);

}


}

// When the page has loaded //
$(function() {

	//When the user clicks the image, run askQuestions;
	$('img').on('click',askQuestions);

	//Hide all the things
	$('h3').next().hide();

	// When the user clicks on an h3
	$('h3').on('click', function() {

		//slideToggle the next element
		$(this).next().slideToggle(150);
	
	});

});
