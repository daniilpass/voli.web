import explodeFactory from '../explode/index.js';
import beamFactory from '../beam/index.js';

export default function voli(voliContainer, fireContainer) {
    //explode
    const explodeMaker = explodeFactory(fireContainer, './src/assets/anim/explode.gif', 50, 50);
    const explodeAnimationTime = 200;

    //beam 
    const beamMaker = beamFactory(fireContainer, './src/assets/anim/beam.gif', 10, 10);
    const beamAnimationTime = 200;

    //eyes
    const leftEyeOffset = {
        x: 30,
        y: 65
    };
    const rightEyeOffset = {
        x: 55,
        y: 55
    };

    function fire(toX, toY, onAnimationEnd) {        
        const rec = voliContainer.getBoundingClientRect();                
        const makeExplode =  () => {
            explodeMaker.make(
                toX, 
                toY, 
                explodeAnimationTime,
                onAnimationEnd
            );
        }

        //Left eye beam
        beamMaker.make(
            rec.x + leftEyeOffset.x,
            rec.y + leftEyeOffset.y, 
            toX, 
            toY, 
            beamAnimationTime, 
            beamAnimationTime
        );
    
        //Right eye beam with explode
        beamMaker.make(
            rec.x + rightEyeOffset.x,
            rec.y + rightEyeOffset.y, 
            toX, 
            toY, 
            beamAnimationTime, 
            beamAnimationTime,
            makeExplode
        );
    }

    return {
        fire
    }
}
