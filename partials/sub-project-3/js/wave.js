const waveElm=document.getElementById('waveElm');
let x=0;
let direction=true;
setInterval(()=>{
    if (x>=innerWidth-waveElm.offsetWidth) direction=false;
    if (x<=0) direction=true;
    (direction)?x+=2:x-=2;
    waveElm.style.left=`${x}px`;
    waveElm.style.top=`${Math.sin(x/90)*200+400}px`;
},5);