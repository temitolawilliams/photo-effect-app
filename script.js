const canvas = document.getElementById('canvas');
const ctx =  canvas.getContext('2d');

const img = new Image();


const reader = new FileReader()

function uploadImage(e) {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
        img.src = reader.result;
        img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0,0);
        
}
    }
}
function greyScale() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4){
        const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.08
        data[i] = grey;
        data[i + 1] = grey;
        data[i + 2] = grey;
    }
    ctx.putImageData(imageData, 0, 0)
}
function sepiaEffect() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4){
        const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.08
        data[i] = grey + 105;
        data[i + 1] = grey + 70;
        data[i + 2] = grey;
    }
    ctx.putImageData(imageData, 0, 0)
}

function invert() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4){
       
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }
    ctx.putImageData(imageData, 0, 0)
}
function rbg() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4){
       let green = data[i + 1];
        data[i] = data[i];
        data[i + 1] = data[i  + 2];
        data[i + 2] = green;
    }
    ctx.putImageData(imageData, 0, 0)
}
function bgr() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4){
       let red = data[i]
        data[i] = data[i+2];
        data[i + 1] = data[i+1];
        data[i + 2] =red;
    }
    ctx.putImageData(imageData, 0, 0)
}
function gbr() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4){
       let red = data[i];
        data[i] =data[i + 1];
        data[i + 1] = data[i + 2];
        data[i + 2] = red;
    }
    ctx.putImageData(imageData, 0, 0)
}

function grb() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4){
       let red =data[i];
        data[i] = data[i + 2];
        data[i + 1] = red;
        data[i + 2] = data[i + 2];
    }
    ctx.putImageData(imageData, 0, 0)
}

const clear = () => {
    img.src = reader.result;
}

const download = () => {
    const image = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = image;
    link.download = 'image.png';
    link.click();
}
document.querySelectorAll('button')[0].addEventListener('click', greyScale);
document.querySelectorAll('button')[1].addEventListener('click', sepiaEffect);
document.querySelectorAll('button')[2].addEventListener('click', invert);
document.querySelectorAll('button')[3].addEventListener('click', rbg);
document.querySelectorAll('button')[4].addEventListener('click', bgr);
document.querySelectorAll('button')[5].addEventListener('click', gbr);
document.querySelectorAll('button')[6].addEventListener('click', grb);
document.querySelectorAll('button')[7].addEventListener('click', clear);
document.querySelectorAll('button')[6].addEventListener('click', download);




const imageLoader = document.getElementById('uploader');
imageLoader.addEventListener('change', uploadImage)