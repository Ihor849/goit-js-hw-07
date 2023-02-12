import { galleryItems } from "./gallery-items.js";

// +++++++++++++++++++++  В А Р И А Н Т - 1 через С Т Р О К У ================
const gallery = document.querySelector(".gallery");
const imgMarkup = createImgCardsMarkup(galleryItems);

gallery.addEventListener("click", onbrowsesClickCollection);

function createImgCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
    <a class="gallery__link href = ${original} onclick="evt.preventDefault()" >
      <img
        class="gallery__image"
        src= "${preview}"
        data-source= "${original}"
        alt= "${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}
gallery.insertAdjacentHTML("beforeend", imgMarkup);

function onbrowsesClickCollection(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const srcOriginal = evt.target.dataset.source;

  const viewedImg = basicLightbox.create(`
    <img src = "${srcOriginal}">
`);
  viewedImg.show();

  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      viewedImg.close();
    }
  });
}
