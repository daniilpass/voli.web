import {
    $, 
    trustedEvent
} from './helpers/index.js';
import voli from './voli/index.js';

//instance of voli
const voliContainer = $("#voli-container");
const fireContainer = $("#fire-container");
const voliInstance = voli(voliContainer, fireContainer);

//events handlers
const handleFire = function (e) {
    voliInstance.fire(
        e.pageX, 
        e.pageY, 
        () => {
            e.target.click();
        }
    );
}
const handleBodyClick = trustedEvent(handleFire);

//add events
document.body.addEventListener('click', handleBodyClick, true);