const dropdownButton = document.querySelectorAll(".drop-btn");
const icon = document.querySelectorAll(".dropdown-icon");
const content = document.querySelectorAll(".dropdown-content");

dropdownButton[0].addEventListener("click", (event) => {
  event.stopPropagation();
  content[0].classList.toggle("show");
  icon[0].classList.toggle("rotate");
  if (content[0].classList.contains("show")) {
    icon[0].src = "images/icon-arrow-up.svg";
  } else {
    icon[0].src = "images/icon-arrow-down.svg";
  }
});

dropdownButton[1].addEventListener("click", (event) => {
  event.stopPropagation();
  content[1].classList.toggle("show");
  icon[1].classList.toggle("rotate");

  if (content[1].classList.contains("show")) {
    icon[1].src = "images/icon-arrow-up.svg";
  } else {
    icon[1].src = "images/icon-arrow-down.svg";
  }
});

dropdownButton[2].addEventListener("click", (event) => {
  event.stopPropagation();
  content[2].classList.toggle("show");
  icon[2].classList.toggle("rotate");

  if (content[2].classList.contains("show")) {
    icon[2].src = "images/icon-arrow-up.svg";
  } else {
    icon[2].src = "images/icon-arrow-down.svg";
  }
});

dropdownButton[3].addEventListener("click", (event) => {
  event.stopPropagation();
  content[3].classList.toggle("show");
  icon[3].classList.toggle("rotate");

  if (content[3].classList.contains("show")) {
    icon[3].src = "images/icon-arrow-up.svg";
  } else {
    icon[3].src = "images/icon-arrow-down.svg";
  }
});

document.addEventListener("click", (event) => {
  if (
    ![...content].some((cont) => {
      cont.contains(event.target);
    })
  ) {
    content.forEach((cont) => {
      cont.classList.remove("show");
    });
    icon.forEach((img) => {
      img.src = "images/icon-arrow-down.svg";
      img.classList.remove("rotate");
    });
  }
});

const menu = document.querySelector(".icon-menu");
const navbar = document.querySelector(".nav-container");

menu.addEventListener("click", (event) => {
  event.stopPropagation()
  navbar.classList.toggle("show");
  menu.classList.toggle("hidden")
})

const closeMenu = document.querySelector(".close-icon")
closeMenu.addEventListener("click", (event) => {
    event.stopPropagation()

  if(navbar.classList.contains("show")){
      navbar.classList.remove("show")
      menu.classList.remove("hidden")
  }
})

document.addEventListener("click", (event) => {
  if(!menu.contains(event.target)){
    navbar.classList.remove("show")
          menu.classList.remove("hidden")
            }
})