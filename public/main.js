const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const email = document.querySelector('#signup-email').value;
	const password = document.querySelector('#signup-password').value;

	auth
		.createUserWithEmailAndPassword(email,password)
		.then(userCredential => {
			console.log('sing up')
		})
		.catch((error) => {	
		    var errorCode = error.code;
		    var errorMessage = error.message;
		    console.log(errorCode, errorMessage)
  		});
})