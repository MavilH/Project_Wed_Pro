//chức năng hiện part khi vừa load xong trang
const init = () => {
  const parentParts = document.querySelectorAll(".part-parent");
  document.querySelectorAll(".part-parent").forEach((parentPart) => {
    parentPart.classList.remove("actived");
  });
  document.querySelectorAll(".part-child").forEach((childPard) => {
    childPard.classList.remove("actived");
  });
  parentParts.forEach((parentPart) => {
    parentPart.classList.add("actived");
  });
};
document.addEventListener("DOMContentLoaded", init());

document.querySelector("#filter").addEventListener("keyup", (event) => {
  let inputValue = event.target.value;
  searchFunction(inputValue);
});

document.querySelector("#btnSearch").addEventListener("click", (event) => {
  let inputValue = document.querySelector("#filter").value;
  searchFunction(inputValue);
});

const parts = document.querySelectorAll(".part-child-a");
let a = [...parts];
a.forEach((e) => {
  if (e.innerHTML.includes("eee")) {
    e.parentNode.parentNode.parentNode.classList.remove("actived");
  }
});
