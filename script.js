const content = document.querySelectorAll(".content");
const list = document.querySelectorAll("nav ul li");

list.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hideAllContents();
    hideAllItems();

    item.classList.add("active");
    content[idx].classList.add("active");
  });
});
function hideAllContents() {
  content.forEach((content) => content.classList.remove("show"));
}
function hideAllItems() {
  list.forEach((item) => item.classList.remove("active"));
}
