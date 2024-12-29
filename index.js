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

//hàm sẽ sẽ hiện các thẻ có nội dung giống với ô search
const searchFunction = (inputValue) => {
  if (inputValue.trim()) {
    let parentParts = document.querySelectorAll(".part-parent-a");
    let childParts = document.querySelectorAll(".part-child-a");

    let filteredParentParts = [...parentParts].filter((parentPart) =>
      parentPart.innerText.toLowerCase().includes(inputValue.toLowerCase())
    );
    let filteredChileParts = [...childParts].filter((childPart) =>
      childPart.innerText.toLowerCase().includes(inputValue.toLowerCase())
    );

    //cho ẩn hết menu
    document.querySelectorAll(".part-parent").forEach((parentPart) => {
      parentPart.classList.remove("actived");
    });
    document.querySelectorAll(".part-child").forEach((childPart) => {
      childPart.classList.remove("actived");
    });

    //hiển thị ParentPart
    filteredParentParts.forEach((parentPart) => {
      parentPart.parentNode.classList.add("actived");
    });
    filteredChileParts.forEach((childPart) => {
      childPart.parentNode.parentNode.parentNode.classList.add("actived");
    });
  } else {
    init();
  }
};

document.querySelector("#filter").addEventListener("keyup", (event) => {
  let inputValue = event.target.value;
  searchFunction(inputValue);
});

document.querySelector(".btn-search").addEventListener("click", (event) => {
  let inputValue = document.querySelector("#filter").value;
  searchFunction(inputValue);
});
