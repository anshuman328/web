// Firebase Authentication Guard - Synchronous Version
// Simple localStorage check without async Firebase imports

const SESSION_KEY = "dtLoggedIn";
const currentUrl = window.location.href;
const isLoginPage = currentUrl.includes("loginpage.html");

// Redirect to login if not authenticated
if (!isLoginPage) {
  const isLoggedIn = localStorage.getItem(SESSION_KEY) === "1";
  if (!isLoggedIn) {
    console.log("Not logged in - redirecting to loginpage.html");
    window.location.replace("./loginpage.html");
  }
}
