import './style.css';
import { content, pageload,menuload } from "./pageLoad.js";

const menubtn = document.querySelector(".menu")
const logo = document.querySelector(".logo")

// Creating logo
// var img = document.createElement('img');

// img.setAttribute('src', 'logo.png');
// logo.appendChild(img);

 document.addEventListener('DOMContentLoaded',pageload);


 menubtn.addEventListener('click',menuload);