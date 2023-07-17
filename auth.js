// auth.js

// Google Login
function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            // Handle successful login
            var user = result.user;
            console.log("Logged in user: ", user);
        })
        .catch(function(error) {
            // Handle errors
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
}


// Facebook Login
function facebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            // Handle successful login
            var user = result.user;
            console.log("Logged in user: ", user);
        })
        .catch(function(error) {
            // Handle errors
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
}


// GitHub Login
function githubLogin() {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            // Handle successful login
            var user = result.user;
            console.log("Logged in user: ", user);
        })
        .catch(function(error) {
            // Handle errors
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
}

// OTP Login
function otpLogin() {
    var phoneNumber = prompt("Enter your phone number (with country code):");
    var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function(confirmationResult) {
            // OTP sent successfully
            var verificationCode = prompt("Enter OTP:");
            confirmationResult.confirm(verificationCode)
                .then(function(result) {
                    // Handle successful login
                    var user = result.user;
                    console.log("Logged in user: ", user);
                })
                .catch(function(error) {
                    // Handle verification error
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.error(errorCode, errorMessage);
                });
        })
        .catch(function(error) {
            // Handle phone number authentication error
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
}

document.getElementById('otp-login-btn').addEventListener('click', function() {
    firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
      .then(function(verificationId) {
        // Store the verification ID
        window.verificationId = verificationId;
      })
      .catch(function(error) {
        // Handle errors
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });