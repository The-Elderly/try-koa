const { createCanvas } = require('canvas')
const arr = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

module.exports = function createCode(length){
    
    let canvas = createCanvas(15*length, 40)
    let ctx = canvas.getContext('2d');

    ctx.font = '20px "Arial SimHei"';

    let drawText = (text, x) => {
        ctx.save();
        let angle = Math.random() / 10;

        let y = 20;
        ctx.rotate(angle);
        ctx.fillText(text, x, y)
        ctx.restore();
    }
    let texts = []
    for(let i = 0 ; i < length ; i++){
        let text = arr[Math.floor(Math.random() * (arr.length))]
        texts.push(text);
        drawText(text, 13 * i + 2);
    }


    let data = canvas.toDataURL();
    canvas = null;
    ctx = null;
    return {
        data,
        captcha: texts.join('').toLowerCase()
    };
}