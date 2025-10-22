const form = document.getElementById("registerForm");
const username =document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");


const usernameErrorIcon = document.getElementById("usernameErrorIcon");
const usernameCheck = document.getElementById("usernameCheck");
const usernameError = document.getElementById("usernameError");

const emailErrorIcon = document.getElementById("emailErrorIcon");
const emailCheck = document.getElementById("emailCheck");
const emailError = document.getElementById("emailError");

const passwordErrorIcon = document.getElementById("passwordErrorIcon");
const passwordCheck = document.getElementById("passwordCheck");
const passwordError = document.getElementById("passwordError");

const confirmErrorIcon = document.getElementById("confirmErrorIcon");
const confirmCheck = document.getElementById("confirmCheck");
const confirmError = document.getElementById("confirmError");

form.addEventListener("submit",(e) =>{
    e.preventDefault();
    validateForm()
});

function showError(input,errorIcon, successIcon, errorText){
    input.classList.add("border-red-500");
    input.classList.remove("border-green-500");
    errorIcon.classList.remove("hidden");
    successIcon.classList.add("hidden");
    errorText.classList.remove("hidden");
};

function showSuccess(input, errorIcon, successIcon, errorText){
    input.classList.remove("border-red-500");
    input.classList.add("border-green-500");
    errorIcon.classList.add("hidden");
    successIcon.classList.remove("hidden");
    errorText.classList.add("hidden");
};

function validateUsername() {
  const value = username.value.trim();
  if (value === "") {
    showError(username, usernameErrorIcon, usernameCheck, usernameError);
    return false;
  } else if (value.length < 3) {
    showError(username, usernameErrorIcon, usernameCheck, usernameError);
    return false;

  } else {
    showSuccess(username, usernameErrorIcon, usernameCheck, usernameError);
    return true;
  }
}

function validateEmail() {
  const value = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (value === "") {
   
    showError(email, emailErrorIcon, emailCheck, emailError);
    return false;
  } else if (!emailRegex.test(value)) {
    showError(email, emailErrorIcon, emailCheck, emailError);
    return false;
  } else {
    showSuccess(email, emailErrorIcon, emailCheck, emailError);
    return true;
  }
}

function validatePassword() {
  const value = password.value.trim();
  if (value === "") {
    showError(password, passwordErrorIcon, passwordCheck, passwordError);
    return false;
  } else if (value.length < 6) {
    showError(password, passwordErrorIcon, passwordCheck, passwordError);
    return false;
  } else {
    showSuccess(password, passwordErrorIcon, passwordCheck, passwordError);
    return true;
  }
}

function validateConfirmPassword() {
  const passwordValue = password.value.trim();
  const confirmValue = confirmPassword.value.trim();

  if (confirmValue === "") {
    showError(confirmPassword, confirmErrorIcon, confirmCheck, confirmError);
    return false;
  } else if (confirmValue !== passwordValue) {
    showError(confirmPassword, confirmErrorIcon, confirmCheck, confirmError);
    return false;
  } else {
    showSuccess(confirmPassword, confirmErrorIcon, confirmCheck, confirmError);
    return true;
  }
}

username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", () => {
  validatePassword();
  validateConfirmPassword(); // cập nhật realtime cho confirm khi đổi password
});
confirmPassword.addEventListener("input", validateConfirmPassword);


function validateForm() {
  const isUsername = validateUsername();  
  const isEmail = validateEmail();
  const isPassword = validatePassword();
  const isConfirm = validateConfirmPassword();

  if (isUsername && isEmail && isPassword && isConfirm) {
    alert("Đăng ký thành công!");  
    form.reset();
    }
}    
