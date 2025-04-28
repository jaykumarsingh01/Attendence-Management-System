let generatedOTP = "";

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

  alert("Login successful! (mock message)");
}

function showForgotPassword() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('forgotPassword').style.display = 'block';
  document.getElementById('otpVerification').style.display = 'none';
  document.getElementById('passwordReset').style.display = 'none';
  document.getElementById('otpEmail').value = "";
  document.getElementById('enteredOTP').value = "";
}

function sendOTP() {
  const email = document.getElementById('otpEmail').value;
  if (!email) {
    alert("Please enter your registered email.");
    return;
  }

  // Generate and "send" OTP
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  console.log(`OTP sent to ${email}: ${generatedOTP}`); // For dev/testing

  alert("OTP has been sent to your registered email (simulated).");
  document.getElementById('otpVerification').style.display = 'block';
}

function verifyOTP() {
  const entered = document.getElementById('enteredOTP').value;
  if (entered === generatedOTP) {
    alert("OTP verified successfully!");
    document.getElementById('forgotPassword').style.display = 'none';
    document.getElementById('passwordReset').style.display = 'block';
  } else {
    alert("Incorrect OTP. Please try again.");
  }
}

function resetPassword() {
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (newPassword === confirmPassword) {
    alert("Password reset successful!");
    showLoginPage();
  } else {
    alert("Passwords do not match!");
  }
}

function showLoginPage() {
  document.getElementById('forgotPassword').style.display = 'none';
  document.getElementById('passwordReset').style.display = 'none';
  document.getElementById('loginPage').style.display = 'block';
}



// Sign Up function
function signIn() {
  const role = document.getElementById('role').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    // Save signup details temporarily (localStorage)
    const userData = {
      role: role,
      email: email,
      password: password
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Sign Up successful! Now, please log in.');
    // After signup, clear fields and go back to login
    document.getElementById('signInForm').reset();
  } else {
    alert('Please fill all the fields.');
  }
}

// Login Validation function
function validateAndLogin() {
  const loginRole = document.getElementById('role').value;
  const loginEmail = document.getElementById('email').value;
  const loginPassword = document.getElementById('password').value;

  const savedData = JSON.parse(localStorage.getItem('userData'));

  if (savedData) {
    if (loginEmail === savedData.email && loginPassword === savedData.password && loginRole === savedData.role) {
      alert('Login successful!');
      redirectToDashboard(loginRole);
    } else {
      alert('Invalid login credentials or role!');
    }
  } else {
    alert('No user found! Please Sign Up first.');
  }
}

// Redirect to dashboard based on role
function redirectToDashboard(role) {
  switch (role) {
    case 'student':
      window.location.href = 'student_dashboard.html';
      break;
    case 'teacher':
      window.location.href = 'teacher_dashboard.html';
      break;
    case 'admin':
      window.location.href = 'admin_dashboard.html';
      break;
    case 'parent':
      window.location.href = 'parent_dashboard.html';
      break;
    default:
      alert('Invalid role!');
  }
}

// Forgot Password - Dummy Functions (you can enhance later)
function showForgotPassword() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('forgotPassword').style.display = 'block';
}

function showLoginPage() {
  document.getElementById('forgotPassword').style.display = 'none';
  document.getElementById('passwordReset').style.display = 'none';
  document.getElementById('loginPage').style.display = 'block';
}

function sendOTP() {
  alert('OTP sent to your email (dummy)');
  document.getElementById('otpVerification').style.display = 'block';
}

function verifyOTP() {
  const enteredOTP = document.getElementById('enteredOTP').value;
  if (enteredOTP === '1234') { // dummy OTP
    alert('OTP verified!');
    document.getElementById('forgotPassword').style.display = 'none';
    document.getElementById('passwordReset').style.display = 'block';
  } else {
    alert('Invalid OTP!');
  }
}

function resetPassword() {
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (newPassword === confirmPassword && newPassword !== '') {
    const savedData = JSON.parse(localStorage.getItem('userData'));
    savedData.password = newPassword;
    localStorage.setItem('userData', JSON.stringify(savedData));
    alert('Password reset successful! Please login again.');
    showLoginPage();
  } else {
    alert('Passwords do not match!');
  }
}
