import {
    $, 
    trustedEvent
} from './helpers/index.js';
import voli from './voli/index.js';

//instance of voli
const voliInstance = voli($("#voli-container"), $("#fire-container"));

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