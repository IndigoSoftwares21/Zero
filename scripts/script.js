

var firebaseConfig = {
    apiKey: "AIzaSyAZmBYsMhbA4tdBaZf7AMamIfPZnj5TC3w",
    authDomain: "zeroacademy-6a04e.firebaseapp.com",
    projectId: "zeroacademy-6a04e",
    storageBucket: "zeroacademy-6a04e.appspot.com",
    messagingSenderId: "221939217353",
    appId: "1:221939217353:web:e1febe7b6d40bff3136e18",
    measurementId: "G-N276MW34EW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("pwd");
   
  

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value)
    //  
    .then(function(result) {
        return result.user.updateProfile({
            displayName: document.getElementById("fname").value
          })
        })
    promise.catch(e=>alert(e.message));
    
    alert("SignUp Successfully");
   
  }

  //signIN function
  function  signIn(){
   var err = document.getElementById("error");
    var email = document.getElementById("email");
    var password  = document.getElementById("pwd");
    if (password.value!='') {
      const promise = auth.signInWithEmailAndPassword(email.value,password.value);
      promise.catch(e=>
      err.style.display = "block"
      );
    }
    else
    {
      password.style.boxShadow = "0 0 10px red";
    }
    
  
    
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    window.location.href = 'index.html';
  }





