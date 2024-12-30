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

// Lấy tất cả các thẻ <a> có class "part-child-a"
const links = document.querySelectorAll(".part-child-a");

// Thêm sự kiện click cho mỗi thẻ <a>
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

    // Lấy giá trị của thuộc tính data-part
    const file_Name = event.target.dataset.part;

    // Gửi yêu cầu AJAX để lấy nội dung file (ví dụ: sử dụng Fetch API)
    fetch(`./data/content/${file_Name}.html`) // Thay đổi phần mở rộng file nếu cần
      .then((response) => response.text())
      .then((data) => {
        // Cập nhật nội dung vào một phần tử có id là "content" (ví dụ)
        const contentElement = document.getElementById("content-block");
        contentElement.innerHTML = data;
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  });
});

const linksParent = document.querySelectorAll(".part-parent-a");

// Thêm sự kiện click cho mỗi thẻ <a>
linksParent.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

    // Lấy giá trị của thuộc tính data-part
    const file_Name = event.target.dataset.part;

    // Gửi yêu cầu AJAX để lấy nội dung file (ví dụ: sử dụng Fetch API)
    fetch(`./data/content/${file_Name}.html`) // Thay đổi phần mở rộng file nếu cần
      .then((response) => response.text())
      .then((data) => {
        // Cập nhật nội dung vào một phần tử có id là "content" (ví dụ)
        const contentElement = document.getElementById("content-block");
        contentElement.innerHTML = data;
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  });
});
