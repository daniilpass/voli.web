export default function trustedEvent(callback) {
    return function onEvent(e) {
        //If event called by JS then do default action
        if(!e.isTrusted)
            return true;

        //If event called by user then do custom action
        e.preventDefault();
        e.stopPropagation();
        callback(e);
    }
}