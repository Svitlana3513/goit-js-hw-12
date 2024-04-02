import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const inputForm = document.querySelector('.form');
export const imageGallery = document.querySelector('.gallery');
const imagePreload = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});

inputForm.addEventListener('submit', async event => {
    event.preventDefault();
    const query = event.target.elements.image.value.trim();
    const data = await getImages(query, 1);
    renderGallery(data.hits);
})





