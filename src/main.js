// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const imagesGallery = document.querySelector('.gallery');
// const url = new URL("https://pixabay.com/api/");
// url.searchParams.append("key", "41564235-b9b3b0b401bd21d391a887255");
// url.searchParams.append("q", "41564235-b9b3b0b401bd21d391a887255");
// url.searchParams.append("image_type", "foto");
// url.searchParams.append("orientation", "horizontal");
// url.searchParams.append("safesearch", "true");


fetch("https://pixabay.com/api/?key=41564235-b9b3b0b401bd21d391a887255")
    .then(resp => resp.json())
    .then((hits) => {
    console.log(hits);
 hits.reduce((img, hit) =>img +
    `
// <li class="gallery-item">

<img class="gallery-image"
src = '${hit.pageURL}' 
alt = '${hit.tags}'/>

// </li>
`,'')

    })
    .catch(error => {
    console.log(error);
})

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });


//  imagesGallery.innerHTML = images.reduce(
//   (img, element) =>
//     img +
//     `
// <li class="gallery-item">

// <img class="gallery-image"
// src = '${element.preview}' 
// alt = '${element.description}'/>

// </li>
// `,
//   ''
// );