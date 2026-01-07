/* Combined site script: quotes, header auth, menu toggle, job click redirect */

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Work" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "Success" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "Business" },
  { text: "You learn more from failure than from success.", author: "Unknown", category: "Business" },
  { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi", category: "Success" }
];

let quoteIndex = 0;
function rotateQuote() {
  const quoteEl = document.getElementById('quote');
  if (!quoteEl) return;
  quoteEl.classList.remove('active');
  setTimeout(() => {
    const current = quotes[quoteIndex];
    quoteEl.innerHTML = `"${current.text}"<br><br><small style="font-size:0.9rem;opacity:0.8">— ${current.author}</small>`;
    quoteEl.classList.add('active');
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }, 400);
}
if (document.getElementById('quote')) {
  setInterval(rotateQuote, 15000);
  rotateQuote();
}

function toggleMenu(){
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('active');
}

/* header auth display */
function updateHeaderAuth() {
  const headerButtons = document.getElementById('headerButtons');
  if (!headerButtons) return;
  const username = localStorage.getItem('currentUsername');
  const email = localStorage.getItem('currentUser');

  if (username || email) {
    const displayName = username || email;
    headerButtons.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px">
        <span style="color:var(--muted)">Welcome, <strong>${displayName}</strong></span>
        <button onclick="logout()" class="btn btn-ghost" style="padding:8px 12px">Logout</button>
      </div>
    `;
  } else {
    headerButtons.innerHTML = `
      <a href="auth.html" class="btn btn-ghost">Login</a>
      <a href="auth.html" class="btn btn-primary">Get Started</a>
    `;
  }
}

function logout(){
  localStorage.removeItem('currentUsername');
  localStorage.removeItem('currentUser');
  updateHeaderAuth();
  location.href = 'index.html';
}

/* require login helper - if not logged in, redirect to auth.html, else continue */
function requireLogin(nextUrl){
  const email = localStorage.getItem('currentUser');
  if (!email) {
    // redirect to login and store intent
    localStorage.setItem('postAuthRedirect', nextUrl);
    location.href = 'auth.html';
  } else {
    location.href = nextUrl;
  }
}

/* job item click behavior: navigate to portfolio page */
document.addEventListener('DOMContentLoaded', () => {
  updateHeaderAuth();

  // Make any .job-item elements clickable and navigate to their data-target (defaults to /portfolio/)
  const jobItems = document.querySelectorAll('.job-item');
  jobItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      const target = item.dataset.target || '/portfolio/';
      // If browser is serving from root, keep relative link
      location.href = target;
    });
  });

  // if we have a stored redirect after auth, navigate there
  const postAuth = localStorage.getItem('postAuthRedirect');
  if (postAuth && window.location.pathname.endsWith('/auth.html')) {
    // after successful login this script in auth.html will clear and redirect
  }

  // Smooth scroll for internal nav links
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});