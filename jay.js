function showForgotPassword() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('forgotPassword').style.display = 'block';
  }
  
  function showLoginPage() {
    document.getElementById('forgotPassword').style.display = 'none';
    document.getElementById('passwordReset').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
  }
  
// Sign In logic – just redirects by role
function signIn() {
  const role = document.getElementById("role").value;

  switch(role) {
    case "student":
      window.location.href = "studentregistration.html";
      break;
    case "teacher":
      window.location.href = "teacher_registration.html";
      break;
    case "parent":
      window.location.href = "parent_registration.html";
      break;
    case "admin":
      window.location.href = "admin_registration.html";
      break;
    default:
      alert("Please select a valid role.");
  }
}

// Login logic – checks if email/password are filled
function validateAndLogin() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (!email.value) {
    email.reportValidity();
    return;
  }
  if (!password.value) {
    password.reportValidity();
    return;
  }

  // Do your login authentication here (e.g., check credentials)
  alert("Login successful! (mock message)");
}

// Dummy function for forgot password
function showForgotPassword() {
  alert("Password recovery process goes here.");
}

    
  function mfaVerification() {
    const email = document.getElementById('email').value;
    alert(`Verification code sent to ${email}`);
    document.getElementById('forgotPassword').style.display = 'none';
    document.getElementById('passwordReset').style.display = 'block';
  }
  
  function resetPassword() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (newPassword === confirmPassword) {
      alert('Password reset successful!');
      showLoginPage();
    } else {
      alert('Passwords do not match!');
    }
  }
  