import particles from './particles.js';
const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d')
let eachCircle = [];
animate();

function animate(){ /*second function */
    ctx.clearRect(0,0,window.innerWidth,window.innerWidth);
    ArrayIterationForCircle();
    window.requestAnimationFrame(animate);
}

function ArrayIterationForCircle(){ /*third  movement  */
    for(let i=0; i<eachCircle.length; i++){
        eachCircle[i].drawCircle(); 
    }
}

canvas.addEventListener('mousemove', function(e) { /*First movement  */
    let mouseX;
    let mouseY;
    if(e.offsetX) { /*Duda de offsetx */
        mouseX = e.offsetX;  /*Me devuelve cuanto scroll se ha realizado de manera horizontal en px  */
        mouseY = e.offsetY; /*Me devuelve cuanto scroll se ha realizado de manera vertical en px  */
    }
    for(let i=0; i<3; i++){
        let p = new particles(mouseX, mouseY);
        eachCircle.push(p);
    }
});

window.addEventListener("resize", function() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});



