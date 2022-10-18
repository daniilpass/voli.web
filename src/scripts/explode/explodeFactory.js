import { fetchBase64 } from "../helpers/index.js";

export default function explodeFactory (parent, imgUrl, imgWidth, imgHeight) {
    let imageBase64;    
    fetchBase64(imgUrl)
        .then((result) => { imageBase64 = result});

    function make(posX, posY, lifespan, onremove) {
        if (!imageBase64)
            return;
            
        const image = document.createElement('img');
        
        image.setAttribute('src', imageBase64);
        image.setAttribute('height', imgHeight);
        image.setAttribute('width', imgWidth);

        image.style.position = 'absolute';
        image.style.zIndex = '999';
        image.style.left = posX - imgWidth/2 + 'px';
        image.style.top = posY - imgHeight/2 + 'px';

        parent.appendChild(image);

        if (lifespan) {
            setTimeout(function () {
                    image.remove();
                    onremove && onremove();
                }, 
                lifespan
            );
        }        
    }

    return {
        make
    };
}