// Login Page - Firebase Authentication & Particle Animation

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ========================================
// FIREBASE CONFIGURATION & LOGIN HANDLER
// ========================================

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

// Login function - called when Login button is clicked
window.handleLogin = async function () {
  console.log("Login button clicked");
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  
  console.log("Email:", email, "Password:", password);
  
  if (!email || !password) {
    console.log('Login blocked: missing email or password');
    return;
  }

  try {
    console.log("Attempting Firebase login...");
    // Sign in with Firebase
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Firebase login successful!");
    sessionStorage.setItem('dtLoggedIn', '1');
    sessionStorage.setItem('dtUserEmail', email);
    console.log("dtLoggedIn flag set. Stored value:", sessionStorage.getItem('dtLoggedIn'));
    console.log("Redirecting to code.html");
    window.location.href = 'code.html';
  } catch (error) {
    console.log("Firebase login failed:", error.message);
    sessionStorage.removeItem('dtLoggedIn');
    sessionStorage.removeItem('dtUserEmail');
    console.error('Login failed:', error.message);
  }
};

// Logout function - called when user clicks logout button
window.handleLogout = function () {
  console.log("Logout button clicked");
  sessionStorage.removeItem('dtLoggedIn');
  sessionStorage.removeItem('dtUserEmail');
  window.location.href = './loginpage.html';
};


// ========================================
// PARTICLE ANIMATION BACKGROUND
// ========================================

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas size to match window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Handle window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Create particle objects
const dots = [];
for (let i = 0; i < 70; i++) {
  dots.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.8,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4,
    a: Math.random() * 0.4 + 0.15
  });
}

// Draw animation function
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw lines between nearby particles
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const dx = dots[i].x - dots[j].x;
      const dy = dots[i].y - dots[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 110) {
        ctx.beginPath();
        ctx.moveTo(dots[i].x, dots[i].y);
        ctx.lineTo(dots[j].x, dots[j].y);
        ctx.strokeStyle = `rgba(200,190,255,${ 0.12 * (1 - dist / 110) })`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }

  // Update and draw particles
  dots.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
    
    // Bounce particles off edges
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    
    // Draw particle
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(220,215,255,${p.a})`;
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

// Start animation
draw();
