function domRendered(){
    console.log('The DOM-tree is ready');
}

document.addEventListener('DOMContentLoaded', domRendered);



function everythingIsRendered(){
    console.log('The DOM-tree and all and all external resources are ready');
}

document.addEventListener('load', everythingIsRendered);