const navItems = document.querySelectorAll(".nav__item");
const sections = document.querySelectorAll(".section");

let lockSpy = false;
let unlockTimer = null;

function setActive(index) {
  navItems.forEach((li) => li.classList.remove("is-active"));
  navItems[index].classList.add("is-active");
}

// 2) 클릭 이동 + 3) 클릭 활성화
navItems.forEach((li, index) => {
  li.addEventListener("click", () => {
    const target = document.getElementById(li.dataset.target);
    if (!target) return;

    clearTimeout(unlockTimer);
    lockSpy = true;

    setActive(index);

    // ✅ 1번만 완전 top=0, 나머지는 해당 섹션 top
    const topValue = index === 0 ? 0 : target.offsetTop;

    window.scrollTo({
      top: topValue,
      behavior: "smooth",
    });

    unlockTimer = setTimeout(() => {
      lockSpy = false;
    }, 600);
  });
});

// 4) 스크롤 스파이
window.addEventListener("scroll", () => {
  if (lockSpy) return;

  const y = window.scrollY + 1;

  for (let i = 0; i < sections.length; i++) {
    const top = sections[i].offsetTop;
    const bottom = top + sections[i].offsetHeight;

    if (y >= top && y < bottom) {
      if (!navItems[i].classList.contains("is-active")) {
        setActive(i);
      }
      break;
    }
  }
});
