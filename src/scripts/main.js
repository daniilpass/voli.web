window.onload = main;


function $(query) {
    if (typeof query != "string" || query.length === 0)
        return null;

    switch(query[0]) {
        case "#": 
            return document.getElementById(query.substring(1));
        case ".": 
            return document.getElementsByClassName(query.substring(1));
        default:
            return document.getElementsByTagName(query);
    }
}

function main() {
    $("#main-title").innerHTML = "Voli channel";
}