// 스킬 탭 클릭 이벤트트
const tabs = document.querySelectorAll(".nav_item");
const indicator = document.querySelector(".nav_indicator");
const items = document.querySelectorAll(".skill_list .item");

console.log(tabs);
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".nav_item.on").classList.remove("on");
    tab.classList.add("on");

    indicator.style.left = tab.offsetLeft + "px";
    indicator.style.width = tab.offsetWidth + "px";

    const filter = tab.dataset.filter;

    items.forEach((item) => {
      if (filter === "all" || item.dataset.category === filter) {
        item.classList.add("on");
      } else {
        item.classList.remove("on");
      }
    });
  });
});

// 초기화
tabs[0].click();
