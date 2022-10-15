
const cursorElm = document.getElementById('cursor');

let tmrId = null;

addEventListener('mousemove', (eventData)=>{
    if (tmrId){
        clearTimeout(tmrId);
        tmrId = null;
    }
    cursorElm.style.opacity = 1;
    cursorElm.style.left = `${eventData.pageX}px`;
    cursorElm.style.top = `${eventData.pageY}px`;
    tmrId = setTimeout(()=>{
        cursorElm.style.opacity = 0;
    }, 2000);
});

document.body.addEventListener('mouseleave', ()=>{
    cursorElm.style.opacity = 0;
});

document.body.addEventListener('mouseenter', ()=>{
    cursorElm.style.opacity = 1;
});