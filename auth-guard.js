// Firebase Authentication Guard - sessionStorage Version
// Checks if user is logged in using sessionStorage

const SESSION_KEY = "dtLoggedIn";
const currentUrl = window.location.href;
const isLoginPage = currentUrl.includes("loginpage.html");
const isRegisterPage = currentUrl.includes("register.html");
const isForgotPasswordPage = currentUrl.includes("forgot-password.html");

// Redirect to login if not authenticated (except on login/register/forgot-password pages)
if (!isLoginPage && !isRegisterPage && !isForgotPasswordPage) {
  const isLoggedIn = sessionStorage.getItem(SESSION_KEY) === "1";
  if (!isLoggedIn) {
    console.log("Not logged in - redirecting to loginpage.html");
    window.location.replace("./loginpage.html");
  }
}
