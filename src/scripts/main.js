import explodeFactory from './explode/index.js';
import beamFactory from './beam/index.js';

window.onload = main;

let root;
let explodeMaker;
let explodeAnimationTime = 500;
let beamAnimationTime = 200;
let beamMaker;

function main() {
    root = document.body;
    root.addEventListener('click', handleBodyClick);

    explodeMaker = explodeFactory(root, './src/assets/anim/explode.gif', 50, 50);
    beamMaker = beamFactory(root, './src/assets/anim/beam.gif', 10, 10);
}

function handleBodyClick(event) {
    beamAndBoom(0, 0, event.offsetX, event.offsetY, beamAnimationTime, explodeAnimationTime);
}

function beamAndBoom(fromX, fromY, toX, toY, beamAnimationTime, explodeAnimationTime) {
    beamMaker.make(
        fromX + 400, 
        fromY, 
        toX, 
        toY, 
        beamAnimationTime, 
        beamAnimationTime
    );

    beamMaker.make(
        fromX, 
        fromY, 
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
