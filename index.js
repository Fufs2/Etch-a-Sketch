let destDiv = document.querySelector('.container');
for (let i = 0; i < 256; i++) {
   let newDiv = document.createElement('div');
    newDiv.className = 'box';
    newDiv.style.width = 'auto';
    newDiv.style.height = 'auto';
    
    newDiv.addEventListener('mouseover', function(){
    newDiv.style.backgroundColor = randomColor();
  })

    destDiv.appendChild(newDiv);
    
}

function randomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
 