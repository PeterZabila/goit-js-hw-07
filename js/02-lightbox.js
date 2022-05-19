import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function addGalleryItems (galleryItems) {
   const pictures = galleryItems.map(({preview, original, description}) => {
        return`
        <li class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`


    }).join('');

    gallery.insertAdjacentHTML('afterbegin', pictures);
};

addGalleryItems(galleryItems);

gallery.addEventListener('click', onClickModal);

function onClickModal(e) {
    e.preventDefault();
    if(e.target.nodeName !== "IMG") {
        return;
    }

   new SimpleLightbox('.gallery a', {  captionDelay: 250, captionsData: "alt",});

};
