function randomColor(){
    let random = () => {
        return Math.random() * 256 ;
    }
    let color = `rgba(${random()}, ${random()}, ${random()},0.5)`;
    return color
}

const context = document.getElementById('canvas1').getContext('2d');
const getContext = () => {
    return context;
}

export{
    randomColor,
    getContext
} 