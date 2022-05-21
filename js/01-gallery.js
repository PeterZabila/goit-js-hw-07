import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function addGalleryItems (galleryItems) {
   const pictures = galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
             </a>
        </div>`
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

    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}">
    `)

    instance.show();
};



