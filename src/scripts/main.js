import $ from './helpers/selector.js';
import voli from './voli/voli.js';

const voliContainer = $("#voli-container");
const fireContainer = $("#fire-container");
const voliInstance = voli(voliContainer, fireContainer);

function handleBodyClick(event) {
    console.log(event)
    voliInstance.fire(event.pageX, event.pageY);
}

//add events
document.body.addEventListener('click', handleBodyClick);