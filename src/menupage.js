    import biryani from './images/biryani.jpg';
    import rice from './images/rice.jpg';
    import pbm from './images/pbm.jpg';
    import pokora from './images/pokora.jpg';
    import shrimp from './images/shrimp.jpg';

 let image = [
    biryani,
    rice,
    pbm,
    pokora,
    biryani,
    rice,
    shrimp,
    pokora,
    biryani,
    rice,
    pbm,
    pokora
    
 ]
    export const content = document.querySelector("#content")

    export function menuload() {
        content.innerHTML = "";
        const newdiv =document.createElement('div');
        newdiv.classList.add('menu-div')
        for (let i = 1; i <= 7; i++) {
            const div = document.createElement('div');
            div.className = 'grid-item grid-' + i; // Add class based on index
            newdiv.appendChild(div);    
        }


        

        content.appendChild(newdiv);

        let h_element = document.createElement('h1');
        let grid1 = document.querySelector(".grid-1")
        let txt = document.createTextNode("India");
        grid1.appendChild(h_element);
        h_element.appendChild(txt);

        h_element = document.createElement('h2');
        txt = document.createTextNode("ON YOUR PLATE");
        grid1.appendChild(h_element);
        h_element.appendChild(txt);

        

        
      

        for (let i = 0; i < 10; i++) {
            if ([2, 3, 6,7].includes(i)) {
             
                let grid2 = document.querySelector(".grid-"+i)
                let imgdiv1 = document.createElement('div');
           
                let imgdiv2 = document.createElement('div');
                imgdiv1.className = 'image-container image-' + i;
                imgdiv2.className = 'content-container content' + i;

                // imgdiv1.classList.add(`image-container image-${i}` );
                // imgdiv2.classList.add(`content-container content`);
        
                
                h_element = document.createElement('img');
                // h_element.src = biryani;
                
                h_element.src = image[i];
                imgdiv1.appendChild(h_element);
            
                grid2.appendChild(imgdiv1);
                grid2.appendChild(imgdiv2);
        
            } 

            if ([4,5].includes(i)) {
             
                let grid2 = document.querySelector(".grid-"+i)
                let imgdiv1 = document.createElement('div');
           
                let imgdiv2 = document.createElement('div');
                imgdiv1.className = 'image-container image-' + i;
                imgdiv2.className = 'content-container content' + i;

                // imgdiv1.classList.add(`image-container image-${i}` );
                // imgdiv2.classList.add(`content-container content`);
        
                
                h_element = document.createElement('img');
                // h_element.src = biryani;
                
                h_element.src = image[i];
                imgdiv1.appendChild(h_element);
                grid2.appendChild(imgdiv2);
                grid2.appendChild(imgdiv1);
                
        
            } 
          }


          //adding menu names n price in grid
          content


    }
    