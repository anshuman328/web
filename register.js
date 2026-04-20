// Particle Background Animation
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.2;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    if (this.y < 0) this.y = canvas.height;
  }

  draw() {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Create particles
for (let i = 0; i < 50; i++) {
  particles.push(new Particle());
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Firebase Registration Module
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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

// Registration function
window.handleRegister = async function() {
  const email = document.getElementById('register-email').value.trim();
  const password = document.getElementById('register-password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();

  // Validation
  if (!email || !password || !confirmPassword) {
    alert('Please fill in all fields');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long');
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  try {
    console.log('Creating user account...');
    await createUserWithEmailAndPassword(auth, email, password);
    
    console.log('Account created successfully!');
    alert('Registration successful! Redirecting to login page...');
    
    // Redirect to login page after successful registration
    setTimeout(() => {
      window.location.href = './loginpage.html';
    }, 1500);
    
  } catch (error) {
    console.log('Registration error:', error.message);
    
    // Handle specific Firebase errors
    if (error.code === 'auth/email-already-in-use') {
      alert('This email is already registered. Please use login or try another email.');
    } else if (error.code === 'auth/invalid-email') {
      alert('Invalid email address');
    } else if (error.code === 'auth/weak-password') {
      alert('Password is too weak. Use a stronger password.');
    } else {
      alert('Registration failed: ' + error.message);
    }
  }
};
