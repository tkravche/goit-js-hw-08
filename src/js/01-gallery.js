import SimpleLightBox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
  

const galleryEl = document.querySelector('.gallery');

let galleryList = '';
galleryItems.forEach(item => {
  galleryList += `<div class="gallery__item">
  <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></div>`;
});

galleryEl.insertAdjacentHTML('afterbegin', galleryList);


  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

