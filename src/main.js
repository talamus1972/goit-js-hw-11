// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const url = new URL("https://pixabay.com/api");
url.searchParams.append("key", "41564235-b9b3b0b401bd21d391a887255");
url.searchParams.append("q", "41564235-b9b3b0b401bd21d391a887255");
url.searchParams.append("image_type", "foto");
url.searchParams.append("orientation", "horizontal");
url.searchParams.append("safesearch", "true");


fetch(url)
    .then(resp => resp.json())
    .then(images => {
        document.body.insertAdjacentHTML("beforeend", `
        <img src="${images.hits[0].largeImageURL}"/> 
    `)
    });