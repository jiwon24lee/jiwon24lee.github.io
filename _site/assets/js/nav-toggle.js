document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const sectionNav = document.querySelector('.section-nav');

  navToggle.addEventListener('click', function () {
    sectionNav.classList.toggle('show');
  });
});



// document.addEventListener('DOMContentLoaded', function() {
//     const toggle = document.querySelector('.nav-toggle');
//     const masthead = document.querySelector('.masthead');
//     if (!toggle || !masthead) return;
  
//     toggle.addEventListener('click', function() {
//       masthead.classList.toggle('nav-open');
//     });
//   });