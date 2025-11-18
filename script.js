// script.js — small interactions
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('waitlist-form');
form && form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.email.value;
  if (!email) return alert('Please enter an email.');
  // For the starter, we simulate a success response.
  form.reset();
  alert('Thanks! You joined the waitlist (demo).');
});
