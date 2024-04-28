


export const content = document.querySelector("#content")
export function pageload() {

  const newdiv =document.createElement('div');
  newdiv.classList.add('home-div')
  const h1 = document.createElement('h1');
  let h1text = document.createTextNode('Savor India');
  h1.appendChild(h1text);


  const h2 = document.createElement('h2');
  let h2text = document.createTextNode('Where Flavor Meets Tradition');
  h2.appendChild(h2text);

  let p = document.createElement('p');
  let ptext = document.createTextNode('Welcome to Savor India, where every dish is a celebration of authentic flavors and time-honored traditions. From the vibrant streets of India to your plate, immerse yourself in a culinary journey like no other. Join us and discover the magic of Indian cuisine at Savor India.')
  p.appendChild(ptext);


  newdiv.appendChild(h1);
  newdiv.appendChild(h2);
  newdiv.appendChild(p);
  content.appendChild(newdiv);
 }



