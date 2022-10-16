export default function beamFactory (parent, imgUrl, imgWidth, imgHeight) {
    function make(fromX, fromY, toX, toY, animationTime, lifespan, onremove) {
        //img object
        const image = document.createElement('img');

        //attributes
        image.setAttribute('src', `${imgUrl}?dn=${Date.now()}`);
        image.setAttribute('height', imgHeight);
        image.setAttribute('width', imgWidth);

        //start styles
        image.style.position = 'absolute';
        image.style.left = fromX + 'px';
        image.style.top = fromY + 'px';        
        image.style.transition = `height ${animationTime}ms`;
        image.style.borderRadius = `${imgWidth}px`;

        //calculate angle and distance
        let deltaX = toX - fromX;
        let deltaY = toY - fromY;
        let angle = -1 * Math.atan2(deltaX, deltaY) * 180 / Math.PI;
        let distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));        

        //apply angle and height in next step of event loop  
        setTimeout(function() {
            image.style.transformOrigin = 'top';
            image.style.transform = `rotate(${angle}deg)`;        
            image.style.height = distance + 'px';
        }, 0);        

        //add to parent
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