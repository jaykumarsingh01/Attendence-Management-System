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
