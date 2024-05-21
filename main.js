let selectedMenuIcon = document.querySelector('.mobile-menu-icon');
let MobileNav = document.querySelector('.mobile-nav-links');
selectedMenuIcon.addEventListener('click', function () {
  MobileNav.classList.toggle('active');
  console.log(selectedMenuIcon.innerHTML);
});
