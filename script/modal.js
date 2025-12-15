// 모달 열기
function openModal() {
  document.getElementById("modal").classList.add("active");
  document.body.classList.add("modal-open"); // body 스크롤 막기
}

// 모달 닫기
function closeModal() {
  document.getElementById("modal").classList.remove("active");
  document.body.classList.remove("modal-open"); // body 스크롤 복구
}

// 배경 클릭 시 모달 닫기
function closeModalOnBackground(e) {
  if (e.target.id === "modal") {
    closeModal();
  }
}
