import { galleryItems } from "./gallery-items.js";
// Change code below this line
// / +++++++++++++++++++++  В А Р И А Н Т - 1 через С Т Р О К У ================
const gallery = document.querySelector(".gallery");
const imageMarkup = createImageCardsMarkup(galleryItems);

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  
    <a class="gallery__link" href = "${original}" >
      <img
        class= "gallery__image"
        src= ${preview}
        alt= ${description}
        title= "Beautiful Image"
      />
    </a>`;
    })
    .join("");
}
gallery.insertAdjacentHTML("beforeend", imageMarkup);

gallery.addEventListener("click", onbrowsesClickCollection);

function onbrowsesClickCollection(evt) {
  evt.preventDefault();
}
new SimpleLightbox(".gallery a", {
  /* options */
  captionPosition: "bottom",
  captionDelay: "250",
  captionsData: "alt",
});
