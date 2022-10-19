const cursorElm = document.getElementById('cursor');

let tmrId = null;


addEventListener('mousemove', (eventData)=>{
    if (tmrId){
        clearTimeout(tmrId);
        tmrId = null;
    }
    cursorElm.style.opacity = 1;
    cursorElm.style.display='block';
    cursorElm.style.left = `${eventData.pageX}px`;
    cursorElm.style.top = `${eventData.pageY}px`;
    tmrId = setTimeout(()=>{
        cursorElm.style.opacity = 0;
        cursorElm.style.display='none';
        
    }, 3500);
});

document.body.addEventListener('mouseleave', ()=>{
    cursorElm.style.opacity = 0;
    cursorElm.style.display='none';
    
});

document.body.addEventListener('mouseenter', ()=>{
    cursorElm.style.opacity = 1;
    cursorElm.style.display='block';

});
