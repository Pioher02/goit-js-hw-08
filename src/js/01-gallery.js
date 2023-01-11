// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// inserta imagenes
const galleryList = document.querySelector(".gallery");

const galleryContent = galleryItems
  .map(
    (galleryItem) =>
      `<a class="gallery__item" href=${galleryItem.original}> <img class="gallery__image" src=${galleryItem.preview} alt="" title=${galleryItem.description}/></a>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", galleryContent);

//Crea el evento al dar clic
galleryList.addEventListener("click", bigImage);

function bigImage(event) {
  //Evita que se descargue
  event.preventDefault();

  var lightbox = new SimpleLightbox('.gallery a');
}

console.log(galleryItems);