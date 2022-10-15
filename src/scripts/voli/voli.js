import explodeFactory from '../explode/index.js';
import beamFactory from '../beam/index.js';

export default function voli(voliContainer, fireContainer) {
    //explode
    const explodeMaker = explodeFactory(fireContainer, './src/assets/anim/explode.gif', 50, 50);
    const explodeAnimationTime = 500;

    //beam 
    const beamMaker = beamFactory(fireContainer, './src/assets/anim/beam.gif', 10, 10);
    const beamAnimationTime = 200;

    //eyes
    const leftEyeOffset = {
        x: 25,
        y: 60
    };
    const rightEyeOffset = {
        x: 50,
        y: 50
    };

    function fire(toX, toY) {        
        const rec = voliContainer.getBoundingClientRect();        
    
        beamMaker.make(
            rec.x + leftEyeOffset.x,
            rec.y + leftEyeOffset.y, 
            toX, 
            toY, 
            beamAnimationTime, 
            beamAnimationTime
        );
    
        beamMaker.make(
            rec.x + rightEyeOffset.x,
            rec.y + rightEyeOffset.y, 
            toX, 
            toY, 
            beamAnimationTime, 
            beamAnimationTime,
            () => {
                explodeMaker.make(
                    toX, 
                    toY, 
                    explodeAnimationTime
                );
            }
        );
    }

    return {
        fire
    }
}
