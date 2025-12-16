const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");
const items = document.querySelectorAll(".item");

// 탭 클릭
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // 1. 탭 active 변경
    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");

    // 2. indicator 이동
    indicator.style.left = tab.offsetLeft + "px";
    indicator.style.width = tab.offsetWidth + "px";
    indicator.style.height = tab.offsetHeight + "px";

    // 3. 아이템 필터링
    const filter = tab.dataset.filter;

    items.forEach((item) => {
      if (filter === "all" || item.dataset.category === filter) {
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    });
  });
});

// 초기화
tabs[0].click();
