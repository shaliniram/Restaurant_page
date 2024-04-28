import './style.css';
import { content, pageload } from "./pageLoad.js";
import { menuload } from "./menupage.js";

const menubtn = document.querySelector(".menu")
const logo = document.querySelector(".logo")

// Creating logo
// var img = document.createElement('img');

// img.setAttribute('src', 'logo.png');
// logo.appendChild(img);
// document.body.style.backgroundImage = `url(${bg_rest2})`;


 document.addEventListener('DOMContentLoaded',pageload);

 
 menubtn.addEventListener('click',menuload);