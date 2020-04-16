"use strict";

let images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
let imgIndex = 0;
let galleryList = document.querySelector(".gallery");
let lightBoxImg = document.querySelector(".lightbox__image");
let lightBox = document.querySelector(".lightbox");
let closeBtn = lightBox.querySelector("button");
let lightboxOverlay = lightBox.querySelector(".lightbox__overlay");

let itemsHTML = "";
images.forEach((el) => {
  itemsHTML += `
    <li class="gallery__item">
  <!--<a
    class="gallery__link"
    href="${el.original}"
  > -->
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
      data-index="${imgIndex++}"
    />
  </a>
</li>
    `;
});
let maxIndex = --imgIndex;
imgIndex = 0;

galleryList.insertAdjacentHTML("afterbegin", itemsHTML);

galleryList.addEventListener("click", () => {
  const target = event.target;
  imgIndex = +target.getAttribute("data-index");
  let largeImgUrl = target.getAttribute("data-source");

  lightBoxImg.setAttribute("src", largeImgUrl);

  lightBox.classList.add("is-open");
});

const close = function () {
  lightBoxImg.removeAttribute("src");
  lightBox.classList.remove("is-open");
};

closeBtn.addEventListener("click", close);

window.addEventListener("keydown", () => {
  if (!lightBox.classList.contains("is-open")) return;
  if (event.keyCode === 27) close();
  else if (event.keyCode === 37) {
    imgIndex--;
    if (imgIndex === 0) imgIndex = maxIndex;
    lightBoxImg.setAttribute("src", images[imgIndex].original);
  } else if (event.keyCode === 39) {
    imgIndex++;
    if (imgIndex > maxIndex) imgIndex = 0;
    lightBoxImg.setAttribute("src", images[imgIndex].original);
  }
});

lightboxOverlay.addEventListener("click", close);
