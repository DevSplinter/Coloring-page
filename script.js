let inputsColor = document.querySelectorAll('.inputColor');
let figureBox = document.querySelector('.figure-box');
let red = 0, green = 0, blue = 0;
let colorExample = document.querySelector('.color-example');

//input[type=range]::-webkit-slider-thumb

inputsColor.forEach(input => input.addEventListener('input', function(e){ 
    switch(e.target.id){
        case 'red': red = e.target.value;
//            e.parentNode. querySelector('input[type=range]::-webkit-slider-thumb').style.backgroundColor = `rgb(${red},0,0)`;
            //console.log(window.getComputedStyle(e.target.parentNode.querySelector('input[type=range]'), '::-webkit-slider-thumb').backgroundColor = 'rgb(0,0,0)')
            break;
        case 'green': green = e.target.value;
            break;
        case 'blue': blue = e.target.value;
            break; 
                         }
    colorExample.style.backgroundColor = `rgb(${red},${green},${blue})`;
}));


function makeFigures(){
    let setCounter = document.querySelector('#counter');
    let fragment = document.createDocumentFragment();
    

  setCounter.addEventListener('mousemove', function(){
        let setCounterValue = setCounter.value;
        let figureBoxCounter = figureBox.childElementCount;
        
        let makeElement = setCounterValue - figureBoxCounter;
        
      if(makeElement > 0){
      for(let i=0; i < makeElement; i++){
          let newFigure = document.createElement('div');
            newFigure.classList.add('figure');
            fragment.appendChild(newFigure);
      }
        figureBox.appendChild(fragment);
          }else if(makeElement < 0){
              figureBox.removeChild(figureBox.lastChild);
          }
    });
}
  
function selectFigure(){
    figureBox.addEventListener('click', function(e){
        let figures = document.querySelectorAll('.figure');
        if(e.target.className == 'figure'){
        e.srcElement.style.backgroundColor = `rgb(${red},${green},${blue})`;
            }
    })   
}

makeFigures();
selectFigure();