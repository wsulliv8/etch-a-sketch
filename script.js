const log = console.log;
const container = document.querySelector('.container');
const submitBtn = document.querySelector('.submit');
//const numbSquares = document.querySelector('#numbSquares');
let numSquares = 16;

/*
submitBtn.addEventListener('click', () => {
  submitBtn.textContent = 'meow';
  document.body.style.backgroundColor = "red"; 

  for (let i=0; i<numbSquares.value; i++){
    let square = document.createElement('div');
    square.setAttribute('class', 'square');
    container.appendChild(square);
  }

  container.addEventListener('mouseover', (event) => {
    event.target.classList.add('square-activated');
  });
})
*/
submitBtn.addEventListener('click', () => {
  numSquares = prompt('Enter # of squares', 16);
  (numSquares > 100) ? numSquares = 100 : null;
})

let numSquares = prompt('Enter # of squares', 16);
(numSquares > 100) ? numSquares = 100 : null;

for (let i=0; i<numSquares; i++){
  let square = document.createElement('div');
  square.setAttribute('class', 'square');
  let canvasArea = container.offsetWidth ** 2;
  let x = Math.sqrt(canvasArea/numSquares);
  let y = x;
  square.style.width = `${x}px`;
  square.style.height = `${y}px`;
  container.appendChild(square);
}

container.addEventListener('mouseover', (event) => {
  event.target.classList.add('square-activated');
});
