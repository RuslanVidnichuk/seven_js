import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createImgCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createImgCardsMarkup(galleryItems) {
   return  galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a> 
        </div>
        `
    }).join("");
};

function onGalleryContainerClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return
    };

    const originalImgUrl = event.target.dataset.source;
    const createModalWindow = basicLightbox.create(`
    <img src="${originalImgUrl}" width="800" height="600">`)

    createModalWindow.show()
};
