// Danh sách truyện (bạn có thể sửa/tự thêm)
const truyenList = [
  {
    ten: "Manhwa1",
    folder: "Manhwa1",
    cover: "Manhwa1/bg.jpg",
    soChap: 97
  }
];

// Render ra index.html
const listEl = document.getElementById("truyen-list");

truyenList.forEach(truyen => {
  const card = document.createElement("div");
  card.className = "truyen-card";
  card.innerHTML = `
    <img src="${truyen.cover}" alt="${truyen.ten}">
    <h3>${truyen.ten}</h3>
    <a href="${truyen.folder}/chap1.html">Đọc ngay</a>
  `;
  listEl.appendChild(card);
});