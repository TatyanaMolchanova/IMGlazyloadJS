const img = document.createElement('img');
document.body.appendChild(img);
img.src = 'spinner.gif';

const tempImg = document.createElement('img');
tempImg.addEventListener('load', () => {
    console.log('Image loaded');
    img.src = tempImg.src;
});

tempImg.src = 'big-rose.jpg';
