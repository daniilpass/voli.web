import $ from './helpers/selector.js';
import voli from './voli/voli.js';

const voliContainer = $("#voli-container");
const fireContainer = $("#fire-container");
const voliInstance = voli(voliContainer, fireContainer);

function handleBodyClick(event) {
    voliInstance.fire(event.offsetX, event.offsetY);
}

//add events
document.body.addEventListener('click', handleBodyClick);


