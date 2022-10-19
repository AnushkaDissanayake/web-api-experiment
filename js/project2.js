// const vW = innerWidth - 50;
// const vH = innerHeight - 50;


class Box{
    #width;
    #height;
    #dx;
    #dy;
    #elm;
    #cursorElm;
    #diameter;
    #cursorDiameter=75;
    #length;
    #midX=0;
    #midY=0;
    #midCursorX=0;
    #midCursorY=0;
    #count=0;
    #k=1;

    
    constructor(){
        this.#cursorElm=document.getElementById('cursor');
        this.#elm = document.createElement('div');
        this.#elm.classList.add('box');
        this.#width = 20 + (Math.random() * 10);
        this.#height =  this.#width;
        this.#dx = Math.random() * 8 * (Math.random() < 0.5? -1: 1);
        this.#dy = Math.random() * 8 * (Math.random() < 0.5? -1: 1);
        this.#elm.style.left = `${Math.random() * (innerWidth - this.#width)}px`;
        this.#elm.style.top = `${Math.random() * (innerHeight - this.#height)}px`;
        this.#elm.style.width = `${this.#width}px`;
        this.#elm.style.height = `${this.#height}px`;
        document.body.append(this.#elm);
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const alpha = 0.4 + Math.random();
        this.#elm.style.backgroundColor = `rgba(${red},${green}, ${blue}, ${alpha})`;
        this.#elm.style.borderRadius = `${Math.random() * 101}%`;
        this.#elm.style.transform = `rotate(${Math.random() * 361}deg)`;
        this.#diameter=Math.sqrt(Math.pow(this.#width,2)+Math.pow(this.#height,2));
        this.#length=this.#diameter/2+this.#cursorDiameter/2;
    
    }

    move(){
        
        this.#midX= this.#elm.offsetLeft;
        this.#midY=this.#elm.offsetTop;
        this.#midCursorX=this.#cursorElm.offsetLeft;
        this.#midCursorY=this.#cursorElm.offsetTop;
 
        let distance= Math.sqrt(Math.pow((this.#midCursorX-this.#midX),2)+Math.pow((this.#midCursorY-this.#midY),2));
        let nextDistance= Math.sqrt(Math.pow((this.#midCursorX-(this.#midX+this.#dx)),2)+Math.pow((this.#midCursorY-(this.#midY+this.#dy)),2));
        let nextDistance2= Math.sqrt(Math.pow((this.#midCursorX-(this.#midX-this.#dx)),2)+Math.pow((this.#midCursorY-(this.#midY-this.#dy)),2));



        if (this.#elm.offsetTop >= (innerHeight - this.#height) || this.#elm.offsetTop <= 0){
            this.#dy = -this.#dy;
        }
        if (this.#elm.offsetLeft >= (innerWidth - this.#width) || this.#elm.offsetLeft <= 0){      
            this.#dx = -this.#dx;
        }

               
        if(distance<=this.#length){
            if(nextDistance>nextDistance2){
                this.#dx = this.#dx;
                this.#dy = this.#dy;
                this.#k=4;

            }else{
                if(this.#count==0){
                    this.#dx = -this.#dx;
                    this.#dy = -this.#dy;
                    this.#count=1;
                }

            }
            
        }else{
            this.#count=0;
        }

    
        this.#elm.style.left = `${this.#elm.offsetLeft + this.#dx*this.#k}px`;
        this.#elm.style.top = `${this.#elm.offsetTop + this.#dy*this.#k}px`;  
        this.#k=1;

    }
}

const boxes = [];
for(let i = 0; i < 60; i++){
    boxes.push(new Box());
}

setInterval(()=>{
    boxes.forEach(box => box.move());
}, 20);


