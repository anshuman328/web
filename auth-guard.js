import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const SESSION_KEY = "dtLoggedIn";
const hasSessionFlag = localStorage.getItem(SESSION_KEY) === "1";

if (!hasSessionFlag) {
	window.location.replace("./loginpage.html");
}

const firebaseConfig = {
	apiKey: "AIzaSyASlqnPSK0zcv4rjcxGvVU4kOAgpZDRNPY",
	authDomain: "design-thread-92e99.firebaseapp.com",
	projectId: "design-thread-92e99",
	storageBucket: "design-thread-92e99.firebasestorage.app",
	messagingSenderId: "910872335448",
	appId: "1:910872335448:web:b7de29e63d508853c7262d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
	if (!user) {
		localStorage.removeItem(SESSION_KEY);
		window.location.replace("./loginpage.html");
		return;
	}

	localStorage.setItem(SESSION_KEY, "1");
});
