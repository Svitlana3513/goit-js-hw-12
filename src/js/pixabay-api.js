import axios from 'axios';

export async function getImages(query, currentPage) {
    const BASE_URL = 'https://pixabay.com/api/';
    const url = 'https://pixabay.com/api/';
    const params = {
        key: "43044208-9f5714c3237b37b2f1db9f248",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: currentPage,
        per_page: 15,
    };

    const res = await axios.get(url, { params });
    return res.data;
    }