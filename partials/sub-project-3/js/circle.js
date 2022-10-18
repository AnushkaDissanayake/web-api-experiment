//0-360
const circleElm1=document.getElementById('circle-1');
const circleElm2=document.getElementById('circle-2');
const circleElm3=document.getElementById('circle-3');
const sunElm=document.getElementById('sun');
let theta=0;
let theta2=0;
let theta3=0;
setInterval(()=>{
    if(theta==360||theta>360) theta=0;
    theta+=4;
    circleElm1.style.top=`${200*Math.sin(3.14*theta/180)+innerHeight/2-20}px`;
    circleElm1.style.left=`${200*Math.cos(3.14*theta/180)+innerWidth/2-20}px`;
    
    if(theta2==360||theta2>360) theta2=0;
    theta2-=1;
    circleElm2.style.top=`${350*Math.sin(3.14*theta2/180)+innerHeight/2-25}px`;
    circleElm2.style.left=`${350*Math.cos(3.14*theta2/180)+innerWidth/2-25}px`;
    

    if(theta3==360||theta3>360) theta3=0;
    theta3+=6;
    circleElm3.style.top=`${80*Math.sin(3.14*theta3/180)+15}px`;
    circleElm3.style.left=`${80*Math.cos(3.14*theta3/180)+15}px`;
    

    sunElm.style.top=`${innerHeight/2-50}px`;
    sunElm.style.left=`${innerWidth/2-50}px`;
},20);


// setInterval(()=>{
//     if(theta2==360||theta2>360) theta2=0;
//     theta2-=1;

//     circleElm2.style.top=`${200*Math.sin(3.14*theta2/180)+innerHeight/2}px`;
//     circleElm2.style.left=`${200*Math.cos(3.14*theta2/180)+innerWidth/2}px`;

//     if(theta3==360||theta3>360) theta3=0;
//     theta3+=10;

//     circleElm3.style.top=`${100*Math.sin(3.14*theta2/180)+15}px`;
//     circleElm3.style.left=`${100*Math.cos(3.14*theta2/180)+15}px`;
// },10);
// setInterval(()=>{
//     if(theta3==360||theta3>360) theta3=0;
//     theta3+=1;

//     circleElm3.style.top=`${100*Math.sin(3.14*theta2/180)+15}px`;
//     circleElm3.style.left=`${100*Math.cos(3.14*theta2/180)+15}px`;
// },1);