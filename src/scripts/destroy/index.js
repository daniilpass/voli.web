export default function destroyTarget(element) {
    
    const rec = element.getBoundingClientRect();
    element.style.transition = 'bottom 2s, transform 2s';
    element.style.position = 'fixed';
    element.style.bottom = `${window.innerHeight - rec.bottom}px`;

    window.requestAnimationFrame(() => {
        element.style.position = 'fixed';
        element.style.bottom = `-${rec.height+rec.width}px`;  
        element.style.transform = 'rotate(360deg)';
    })    
}