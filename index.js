let destDiv = document.querySelector('.container');

function createGrid(squarePerSide) {
    destDiv.innerHTML = '';
    let squareSize= 960/squarePerSide;
    for (let i = 0; i < squarePerSide*squarePerSide; i++) {
        let newDiv = document.createElement('div');
         newDiv.className = 'box';
         newDiv.style.width = `${squareSize}px`;
         newDiv.style.height = `${squareSize}px`;
         newDiv.dataset.opacity = 0;
     
         newDiv.addEventListener('mouseover', function(){
             if (newDiv.dataset.opacity <= 1) {
                 newDiv.dataset.opacity = parseFloat(newDiv.dataset.opacity) + 0.1; 
             } 
             newDiv.style.backgroundColor = randomColor();
             newDiv.style.opacity = newDiv.dataset.opacity;
       })
     
         destDiv.appendChild(newDiv);
         
     }
}


function randomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  createGrid(16);
  
  let button = document.querySelector('button');

  button.addEventListener('click', function(){
      let squarePerSide = prompt('How many squares per side?');
      createGrid(squarePerSide); 
  });

  