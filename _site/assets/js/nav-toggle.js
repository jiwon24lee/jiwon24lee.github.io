document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const sectionNav = document.querySelector(".section-nav");
  const navLinks = document.querySelectorAll(".section-nav a");

  // 메뉴 버튼 클릭 시 메뉴 표시/숨김 전환
  navToggle.addEventListener("click", function () {
    sectionNav.classList.toggle("show");
  });

  // 메뉴 링크 클릭 시 메뉴 닫기
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      sectionNav.classList.remove("show");
    });
  });
});