var firebaseConfig = {
		    apiKey: "AIzaSyCnNjZuL6XJoA4Ed9yXOn26cdEhrJyXxnQ",
		    authDomain: "dotronicdemo-4598f.firebaseapp.com",
		    databaseURL: "https://dotronicdemo-4598f-default-rtdb.firebaseio.com",
		    projectId: "dotronicdemo-4598f",
		    storageBucket: "dotronicdemo-4598f.appspot.com",
		    messagingSenderId: "224565645635",
		    appId: "1:224565645635:web:3c73c635e291c0d36d1ff6",
		    measurementId: "G-WQGZDD28YH"
		  };

		  // Initialize Firebase

		  firebase.initializeApp(firebaseConfig);
		  
		  const auth = firebase.auth();

		  //signup function
		  function signUp(){
		  	var email = document.getElementById("email");
		  	var password = document.getElementById("password");

		  	const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

		  	promise.cath(e=> alert(e.message));
		  	alert("SingUp Succesfully");
		  }


		  //SignIn function
		  function signIn(){
		  	var email = document.getElementById("email");
		  	var password = document.getElementById("password");
		  	const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		  	if(promise){
		  	promise.catch(e=>alert(e.message));
		  	window.location.href="https://dotronicdemo-4598f.firebaseapp.com/home.html"	
		  			}
		  		}
		  		


		  //singOut function

		  function signOut(){
		  	auth.signOut();
		  	alert("signOut Successfully from System");
		  }


		  //activate user to homepage
		  firebase.auth().onAuthStateChanged((user)=>{
		  	if(user){
		  		var email = user.email;

		  		alert("Activate user "+email);
		  	}else{
		  		alert("No Activate User Found")
		  	}

		  })