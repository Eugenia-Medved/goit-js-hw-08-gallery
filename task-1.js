import galleryItems from "./gallery-items.js";

const galleryListEl = document.querySelector(".js-gallery");

const makeImgCard = ({ preview, original, description }) => {
  const galleryCartEl = document.createElement("li");
  galleryCartEl.classList.add("gallery__item");

  const galeryImgEl = document.createElement("img");
  galeryImgEl.classList.add("gallery__image");
  galeryImgEl.src = preview;
  galeryImgEl.dataset.source = original;
  galeryImgEl.alt = description;

  galleryCartEl.append(galeryImgEl);

  return galleryCartEl;
};

const galleryItem = galleryItems.map(makeImgCard);
galleryListEl.append(...galleryItem);

const modalEl = document.querySelector(".js-lightbox");
const imgBigEl = document.querySelector(".lightbox__image");
const modalBtnEl = document.querySelector(".lightbox__button");

galleryListEl.addEventListener("click", onOpenModal);
modalBtnEl.addEventListener("click", onCloseModal);

function onOpenModal(evt) {
  imgBigEl.src = evt.target.dataset.source;
  imgBigEl.alt = evt.target.alt;
  modalEl.classList.add("is-open");
}

function onCloseModal() {
  imgBigEl.removeAttribute("src");
  imgBigEl.removeAttribute("alt");
  modalEl.classList.remove("is-open");
}
