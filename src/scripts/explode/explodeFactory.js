export default function explodeFactory (parent, imgUrl, imgWidth, imgHeight) {
    function make(posX, posY, lifespan, onremove) {
        const image = document.createElement('img');
        image.setAttribute('src', `${imgUrl}?dn=${Date.now()}`);
        image.setAttribute('height', imgHeight);
        image.setAttribute('width', imgWidth);
        image.style.position = 'absolute';
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