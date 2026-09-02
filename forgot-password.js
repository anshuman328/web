// Forgot Password Page - Firebase Password Reset

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// FIREBASE CONFIGURATION


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


// FORGOT PASSWORD HANDLER


window.handleForgotPassword = async function () {
  console.log("Forgot password clicked");
  
  const email = document.getElementById('email').value.trim();
  const messageDiv = document.getElementById('message');
  
  // Clear previous messages
  messageDiv.textContent = '';
  messageDiv.className = 'message';
  
  if (!email) {
    messageDiv.textContent = 'Please enter your email address';
    messageDiv.classList.add('error');
    return;
  }

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    messageDiv.textContent = 'Please enter a valid email address';
    messageDiv.classList.add('error');
    return;
  }

  try {
    console.log("Sending password reset email to:", email);
    
    // Send password reset email via Firebase
    await sendPasswordResetEmail(auth, email);
    
    console.log("Password reset email sent successfully!");
    messageDiv.textContent = 'Password reset link sent! Check your email inbox.';
    messageDiv.classList.add('success');
    
    // Clear the input field
    document.getElementById('email').value = '';
    
    // Redirect to login page after 3 seconds
    setTimeout(() => {
      window.location.href = './loginpage.html';
    }, 3000);
    
  } catch (error) {
    console.error("Error sending password reset email:", error.message);
    
    // Handle specific error messages
    if (error.code === 'auth/user-not-found') {
      messageDiv.textContent = 'No account found with this email address';
    } else if (error.code === 'auth/invalid-email') {
      messageDiv.textContent = 'Invalid email address';
    } else if (error.code === 'auth/too-many-requests') {
      messageDiv.textContent = 'Too many requests. Please try again later.';
    } else {
      messageDiv.textContent = 'Error: ' + error.message;
    }
    
    messageDiv.classList.add('error');
  }
};


// PARTICLE ANIMATION BACKGROUND

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
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 150)})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(dots[i].x, dots[i].y);
        ctx.lineTo(dots[j].x, dots[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw and animate particles
  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i];

    dot.x += dot.dx;
    dot.y += dot.dy;

    if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
    if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;

    ctx.fillStyle = `rgba(255, 255, 255, ${dot.a})`;
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
