import {
    $, 
    trustedEvent
} from './helpers/index.js';
import destroyTarget from './destroy/index.js';
import voli from './voli/index.js';

//constants
const voliContainerId = "#voli-container";
const fireContainerId = "#fire-container";
const dataDestroyAttrName = "data-destroy"

//instance of voli
const voliInstance = voli($(voliContainerId), $(fireContainerId));

//events handlers
const handleFire = function (e) {
    const target = e.target;
    const isDestroy = target.getAttribute(dataDestroyAttrName) == 'true';

    voliInstance.fire(
        e.pageX, 
        e.pageY, 
        () => {
            isDestroy && destroyTarget(target);
        },
        () => {
            target.click();
        }
    );
}

//add events
document.body.addEventListener('click', trustedEvent(handleFire), true);