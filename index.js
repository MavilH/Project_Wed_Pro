//chức năng hiện part khi vừa load xong trang
const init = () => {
  const parentParts = document.querySelectorAll(".part-parent");
  const childNodes = document.querySelectorAll(".part-child");
  document.querySelectorAll(".part-parent").forEach((parentPart) => {
    parentPart.classList.remove("actived");
  });
  document.querySelectorAll(".part-child").forEach((childPard) => {
    childPard.classList.remove("actived");
  });
  parentParts.forEach((parentPart) => {
    parentPart.classList.add("actived");
  });
  childNodes.forEach((parentPart) => {
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
      let ulElement = parentPart.parentNode.children[1];
      let listItem = ulElement.querySelectorAll("li");
      [...listItem].forEach((item) => {
        item.classList.add("actived");
      });
    });
    filteredChileParts.forEach((childPart) => {
      childPart.parentNode.parentNode.parentNode.classList.add("actived");
      childPart.parentNode.classList.add("actived");
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

//chức năng hiện đáp án khi click vào câu hỏi
document.querySelector(".toc a").addEventListener("click", async (event) => {
  event.target.preventDefault();
  const data_file = event.target.data_file;
  console.log(data_file);

  const content = document.getElementById("content");
  content.innerHTML = `<p class="loading">Loading...</p>`;
  try {
    let response = await fetch(`./data/content/${data_file}.html`);
    if (response.ok) {
      content.innerHTML = await response.text();
    } else {
      content.innerHTML = `<p class="loading">Answer not found</p>`;
    }
  } catch (error) {
    content.innerHTML = `<p class="loading">Answer is not available</p>`;
  }
});
