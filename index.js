let newDiv = document.createElement('div');
let destDiv = document.querySelector('.container');
for (let i = 0; i < 256; i++) {
    newDiv = document.createElement('div');
    newDiv.className = 'box';
    newDiv.style.width = 'auto';
    newDiv.style.height = 'auto';
    destDiv.appendChild(newDiv);
}