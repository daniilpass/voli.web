import explodeFactory from '../explode/index.js';
import beamFactory from '../beam/index.js';

export default function voli(voliContainer, fireContainer) {
    //explode
    const explodeMaker = explodeFactory(fireContainer, './src/assets/anim/explode.gif', 50, 50);
    const explodeAnimationTime = 400;

    //beam 
    const beamMaker = beamFactory(fireContainer, './src/assets/anim/beam.gif', 10, 10);
    const beamAnimationTime = 200;

    //eyes
    const leftEyeOffset = {
        x: 40,
        y: 75
    };
    const rightEyeOffset = {
        x: 65,
        y: 65
    };

    function fire(toX, toY, onBeamAnimationEnd, onExplodeAnimationEnd) {        
        const rec = voliContainer.getBoundingClientRect();   
        const fromX = rec.x + window.scrollX;   
        const fromY = rec.y + window.scrollY;

        const makeExplode =  () => {
            explodeMaker.make(
                toX, 
                toY, 
                explodeAnimationTime,
                onExplodeAnimationEnd
            );
        }

        //Left eye beam
        beamMaker.make(
            fromX + leftEyeOffset.x,
            fromY + leftEyeOffset.y, 
            toX, 
            toY, 
            beamAnimationTime, 
            beamAnimationTime,
            onBeamAnimationEnd
        );
    
        //Right eye beam with explode
        beamMaker.make(
            fromX + rightEyeOffset.x,
            fromY + rightEyeOffset.y, 
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
