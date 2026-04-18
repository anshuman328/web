// Category Links Handler
// Prevents category pages from being added to back-stack flow
// When user clicks on gender buttons, it replaces the current page instead of adding to history

document.addEventListener('DOMContentLoaded', function () {
  const categoryLinks = document.querySelectorAll('.gender-button');
  
  categoryLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.replace(link.getAttribute('href'));
    });
  });
});
