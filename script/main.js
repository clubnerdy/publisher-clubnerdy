// 스킬 탭 클릭 이벤트트
const tabs = document.querySelectorAll(".skill_item");
const indicator = document.querySelector(".nav_indicator");
const items = document.querySelectorAll(".skill_list .item");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".skill_item.on").classList.remove("on");
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

// 경력 자세히보기 토글 이벤트
const projectToggles = document.querySelectorAll(".project_toggle");

projectToggles.forEach((content) => {
  if (content.classList.contains("on")) {
    const fullHeight = content.scrollHeight;
    content.style.height = fullHeight + "px";
  }
  content.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "height") return;
    if (content.classList.contains("on")) {
      content.style.height = "auto";
    }
  });
});

document.querySelectorAll(".toggle_btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const isOpen = content.classList.contains("on");

    if (isOpen) {
      const fullHeight = content.scrollHeight;
      content.style.height = fullHeight + "px";

      requestAnimationFrame(() => {
        content.style.height = "0px";
      });

      btn.classList.remove("on");
      content.classList.remove("on");
    } else {
      const fullHeight = content.scrollHeight;
      content.style.height = "0px";
      content.classList.add("on");
      btn.classList.add("on");

      requestAnimationFrame(() => {
        content.style.height = fullHeight + "px";
      });
    }
  });
});
