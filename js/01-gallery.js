import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const markup = createGalleryItem(galleryItems);

galleryRef.innerHTML = markup;

function createGalleryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join("");
}

galleryRef.addEventListener('click', onImgClick);

function onImgClick(e){
    e.preventDefault();
    if(!e.target.classList.contains('gallery__image')){
        return;
    }
    const urlOfLargeImg = e.target.dataset.source;
    modalOpener(urlOfLargeImg);
}

function modalOpener(largeUrl){
    instance = basicLightbox.create(`<img src="${largeUrl}">`);
    instance.show();
    addEventListenerToModalWindow();
}
function addEventListenerToModalWindow(){
    document.addEventListener('keydown', onEscapePressToCloseModalWindow, {once: true})
}
function onEscapePressToCloseModalWindow(e){
    if(e.code === "Escape"){
        instance.close();
    }
}
let instance = "";