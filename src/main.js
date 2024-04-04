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
const btnLoadMore = document.querySelector('.btn-load');

let query;
let currentPage = 1;
let maxPage = 0;
const pageSize = 15;

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});

function showLoadMore() {
    btnLoadMore.classList.remove('is-hidden');
}
function hideLoadMore() {
    btnLoadMore.classList.add('is-hidden');
}

function showLoader() {
    imagePreload.classList.remove('is-hidden');
}
function hideLoader() {
    imagePreload.classList.add('is-hidden');
}


inputForm.addEventListener('submit', onFormSubmit)
btnLoadMore.addEventListener('click', onLoadMoreClick)

async function onFormSubmit(event){
    event.preventDefault();
    query = event.target.elements.image.value.trim();
    imageGallery.innerHTML = '';
    currentPage = 1;
    if(!query){
        iziToast.error({
            title: 'Error',
            position: 'topRight',
            color: '#EF4040',
            messageColor: '#FAFAFB',
            maxWidth: '432px',
            height: '88',
            message: 'Please, fill the form!',
        })
        hideLoader();
        return;
    }
    try {
        showLoader();    
        const data = await getImages(query, currentPage);
        maxPage = Math.ceil(data.totalHits / pageSize);
        if (!data.hits.length) {
            iziToast.error({
                        position: 'topRight',
                        color: '#EF4040',
                        messageColor: '#FAFAFB',
                        maxWidth: '432px',
                        height: '88',
                        message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            hideLoadMore();
            hideLoader();
        } else {
           renderGallery(data.hits);
            lightbox.refresh();
            checkBtnStatus();
        } 
    }
    
    catch(err) {
        console.log(error);
    }
    hideLoader();
    event.target.reset();
}

async function onLoadMoreClick() {
    currentPage += 1;
    showLoader();
    try {
        const data = await getImages(query, currentPage);
        renderGallery(data.hits);
     }
    catch(err) {
        console.log(error);
    }
    myScroll();
    checkBtnStatus();
    hideLoader();
}

function checkBtnStatus(){
    if (currentPage >= maxPage) {
        hideLoadMore();
      iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
    } else {
        showLoadMore();
}
}
function myScroll() {
    const height = imageGallery.firstChild.getBoundingClientRect().height;
    scrollBy({
        top: height*2,
        behavior: 'smooth',
    })
}

    





