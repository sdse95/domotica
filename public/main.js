const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const signupEmail = document.querySelector('#signup-email');
	const signupPassword = document.querySelector('#signup-password');


	console.log(signupEmail, signuppassword);
})