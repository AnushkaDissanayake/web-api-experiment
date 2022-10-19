let textArray = ['ANUSHKA MADUSANKA DISSANAYAKE', 'THIS IS WEB-API EXPERIMENT'];

const output = document.getElementById('output');
const cursor = document.getElementById('cursor-elm');
const textArea = document.getElementById('text');
const textField = document.getElementById('text-field');



let erace =false;
let index = 1;
let text = textArray[0];
let i=1;
let eindex=text.length-1;
const typing = () => {
    if(!erace){
        if(index<=text.length){
            textField.innerText=text.substring(0,index++);
        }else{
            index=0;
            erace=true;
        }
    }
}


const eracing = () => {
    if(erace){
        if(eindex>0){
            textField.innerText=text.substring(0,eindex--);
        }else{
            erace=false;
            if(i>textArray.length-1) i=0;
            text=textArray[i++];
            eindex=text.length-1;
        }
    }
}


let t1 = 0;
let t2 = 0;
const interval = 1;
function timer(timestamp) {
    if (!t1) t1 = timestamp;
    if (!t2) t2 = timestamp;

    if (timestamp - t1 > 80) {
        typing();
        t1 = timestamp;
    }

    if (timestamp - t2 > 40) {
        eracing();
        t2 = timestamp;
    }

    requestAnimationFrame(timer);
}
requestAnimationFrame(timer);