const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const signupEmail = document.querySelector('#signup-email').value;
	const signupPassword = document.querySelector('#signup-password').value;


	console.log(signupEmail, signupPassword);
})