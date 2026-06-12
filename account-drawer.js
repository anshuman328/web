function openAccountDrawer() {
  const drawer = document.getElementById('accountDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const accountEmail = document.getElementById('accountEmail');

  if (!drawer || !overlay) {
    return;
  }

  if (accountEmail) {
    accountEmail.textContent = sessionStorage.getItem('dtUserEmail') || 'Your account';
  }

  document.body.classList.add('drawer-open');
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
  document.body.classList.remove('drawer-open');

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

function openAddressSection() {
  const addressSection = document.getElementById('accountAddressPanel');
  const drawer = document.getElementById('accountDrawer');

  if (!addressSection) {
    return;
  }

  // Toggle: if already visible, hide it
  if (addressSection.classList.contains('is-visible')) {
    addressSection.classList.remove('is-visible');
    if (drawer) {
      drawer.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return;
  }

  // Show the address section
  addressSection.classList.add('is-visible');

  // Wait for expand animation then scroll drawer to show the section
  window.setTimeout(function () {
    if (drawer) {
      const drawerRect = drawer.getBoundingClientRect();
      const sectionRect = addressSection.getBoundingClientRect();
      const scrollTarget = drawer.scrollTop + (sectionRect.top - drawerRect.top) - 16;
      drawer.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    }

    // Focus first field after scroll settles
    window.setTimeout(function () {
      const firstField = addressSection.querySelector('input, textarea, select');
      if (firstField) {
        firstField.focus({ preventScroll: true });
      }
    }, 300);
  }, 360);
}

function saveAddress() {
  const addressForm = document.getElementById('addressForm');

  if (!addressForm) {
    return;
  }

  const formData = new FormData(addressForm);
  const addressData = Object.fromEntries(formData);

  sessionStorage.setItem('dtUserAddress', JSON.stringify(addressData));
  alert('Address saved successfully!');
}

function handleLogout() {
  sessionStorage.removeItem('dtLoggedIn');
  sessionStorage.removeItem('dtUserEmail');
  window.location.href = './loginpage.html';
}

document.addEventListener('click', function (event) {
  const addressTrigger = event.target.closest('[data-drawer-target="address"]');

  if (addressTrigger) {
    event.preventDefault();
    openAddressSection();
    return;
  }

  const saveTrigger = event.target.closest('.account-drawer__address-save');

  if (saveTrigger) {
    event.preventDefault();
    saveAddress();
    return;
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeAccountDrawer();
  }
});