import {getContext,randomColor} from './utilFunctions.js';
class particles{ /*fourth movement  */
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.dy = 3 + (Math.random()*2); 
        this.dx = -1 + (Math.random()*2);
        let color = randomColor();
        this.size = 2 + Math.floor(Math.random()*4);
        this.drawCircle = function(){
            getContext().beginPath();
            getContext().arc(this.x,this.y,this.size,0,2*Math.PI)
            getContext().fillStyle = color;
            getContext().fill();
            this.update();
        }
        this.update = function(){
            this.y += this.dy;
            this.x += this.dx;
        }
    }
}

export default particles;