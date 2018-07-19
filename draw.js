const { createCanvas } = require('canvas')
const arr = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]
function getRandomColor(){
    return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
}

module.exports = function createCode(length){
    const width = 15 * length ; 
    const height = 40;
    let canvas = createCanvas(width, height)
    let ctx = canvas.getContext('2d');

    var gradient = ctx.createLinearGradient(0, 0, 0, height); 
    console.log(getRandomColor())
    gradient.addColorStop(0, getRandomColor()); //红 
    gradient.addColorStop(1, getRandomColor()); //蓝

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    ctx.save();
    ctx.font = '20px "Arial SimHei"';

    let drawLine = () => {
        const num = Math.floor(Math.random() * 3 + 5);

        for(let i = 0 ; i < num ; i++){
            const color = getRandomColor();
            const x = Math.random() * width;
            const y = Math.random() * height;

            const x2 = Math.random() * width;
            const y2 = Math.random() * height;

            ctx.strokeStyle = color;
            
            ctx.beginPath();
            // ctx.lineWidth = Math.floor(Math.random() * 1 + 1)
            ctx.lineTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
    }

    let drawText = (text, x) => {
        ctx.save();
        ctx.fillStyle = '#000'
        let angle = Math.random() / 10;

        let y = 20;
        ctx.rotate(angle);
        ctx.fillText(text, x, y);
        ctx.restore();
    }
    let texts = []
    for(let i = 0 ; i < length ; i++){
        let text = arr[Math.floor(Math.random() * (arr.length))]
        texts.push(text);
        drawText(text, 13 * i + 2);
    }

    drawLine();

    let data = canvas.toDataURL();
    canvas = null;
    ctx = null;
    return {
        data,
        captcha: texts.join('').toLowerCase()
    };
}