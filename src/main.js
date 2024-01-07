
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form');
const imagesGallery = document.querySelector('.gallery');

// const searchParamsDefaults = {
//   key: '41564235-b9b3b0b401bd21d391a887255',
//   q: 'black',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
// };

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "41564235-b9b3b0b401bd21d391a887255";

const url = new URL(BASE_URL);
url.searchParams.append("key", API_KEY);
// url.searchParams.append("q", "query");
url.searchParams.append("image_type", "foto");
url.searchParams.append("orientation", "horizontal");
url.searchParams.append("safesearch", "true");

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements.search.value;
   
  renderImages(query);
   event.currentTarget.reset();    
});

const getImages = (query) => {
    return fetch(url + query)
        .then((response) => {
        if (!response.ok) {
        throw new Error("Somthing wrong")
        }
        return response.json();
})    
}

const getHtml = ({hits}) => {
     imagesGallery.innerHTML = hits.reduce((html, image) => html + `
        <li class="gallery-item">
         <a href=${image.largeImageURL}> 
          <img class="gallery-img" src =${image.webformatURL} alt=${image.tags}/>
        </a>
        <div class="gallery-text-box">
          <p>Likes: <span class="text-value">${image.likes}</span></p>
          <p>views: <span class="text-value">${image.views}</span></p>
          <p>comments: <span class="text-value">${image.comments}</span></p>
          <p>downloads: <span class="text-value">${image.downloads}</span></p>
      </div>
       </li>
    `, "")  
    lightbox.refresh();  
}

function renderImages(query) {
    getImages(query)
        .then(po => {
            getHtml(po);
        })
        .catch(error => console.log(error))
 }
       




                
    // imagesGallery.innerHTML = query.reduce((html, image) => html + `
    //     <li class="gallery-item">
    //      <a href=${image.largeImageURL}> 
    //       <img class="gallery-img" src =${image.webformatURL} alt=${image.tags}/>
    //     </a>
    //     <div class="gallery-text-box">
    //       <p>Likes: <span class="text-value">${image.likes}</span></p>
    //       <p>views: <span class="text-value">${image.views}</span></p>
    //       <p>comments: <span class="text-value">${image.comments}</span></p>
    //       <p>downloads: <span class="text-value">${image.downloads}</span></p>
    //   </div>
    //    </li>
    // `, "")  
    // lightbox.refresh();  
  
         



    



















