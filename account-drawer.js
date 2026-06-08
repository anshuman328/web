function openAccountDrawer() {
  const drawer = document.getElementById('accountDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const accountEmail = document.getElementById('accountEmail');

  if (!drawer || !overlay) {
    return;
  }

  if (accountEmail) {
    // Show the logged-in email inside the drawer when available.
    accountEmail.textContent = sessionStorage.getItem('dtUserEmail') || 'Your account';
  }

  drawer.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
  overlay.hidden = false;
  requestAnimationFrame(() => overlay.classList.add('is-visible'));
}

function closeAccountDrawer() {
  const drawer = document.getElementById('accountDrawer');
  const overlay = document.getElementById('drawerOverlay');

  if (!drawer || !overlay) {
    return;
  }

  drawer.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
  overlay.classList.remove('is-visible');

  window.setTimeout(() => {
    if (!drawer.classList.contains('is-open')) {
      overlay.hidden = true;
    }
  }, 220);
}

function toggleAccountDrawer() {
  const drawer = document.getElementById('accountDrawer');

  if (!drawer) {
    return;
  }

  if (drawer.classList.contains('is-open')) {
    closeAccountDrawer();
  } else {
    openAccountDrawer();
  }
}

function handleLogout() {
  // Clear the session flag and user email before sending the user back to login.
  sessionStorage.removeItem('dtLoggedIn');
  sessionStorage.removeItem('dtUserEmail');
  window.location.href = './loginpage.html';
}

// Let the user dismiss the drawer with the Escape key.
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeAccountDrawer();
  }
});