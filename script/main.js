// 기술스택 네비게이션 조작작
const navItem = document.querySelectorAll(".nav_item");
const indicator = document.querySelector(".nav_indicator");

function updateIndicator(item) {
  const { offsetLeft, offsetWidth } = item;
  indicator.style.left = `${offsetLeft}px`;
  indicator.style.width = `${offsetWidth}px`;
}

const onItem = document.querySelector(".nav_item.on");
updateIndicator(onItem);

// 클릭 이벤트
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    // 기존 active 제거
    document.querySelector(".nav_item.on")?.classList.remove("on");

    // 새로운 active 추가
    item.classList.add("on");

    // indicator 이동
    updateIndicator(item);
  });
});

// 네비게이션탭 시 스킬 활성화/비활성화 이벤트
const allTab = document.querySelector(".nav_item.all");
const devTab = document.querySelector(".nav_item.dev");
const designTab = document.querySelector(".nav_item.design");
const collabTab = document.querySelector(".nav_item.collab");

const devItems = document.querySelectorAll(".item.dev");
const disignItems = document.querySelectorAll(".item.disign");
const collabItems = document.querySelectorAll(".item.collab");

function activeSkill(tab) {
  const allItems = document.querySelectorAll(".skill_list .item");

  allItems.forEach((item) => {
    if (tab === "all") {
      item.classList.add("on");
    } else {
      if (item.contains(tab)) {
        item.classList.add("on");
      } else {
        item.classList.remove("on");
      }
    }
  });
}
