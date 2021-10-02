const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnSize = document.createElement('button')
const buttonsContainer = document.querySelector('.buttons')

function creatDivs(col, rows) {
  for (let i = 0; i < (col * rows); i++) {
    const div = document.createElement('div')
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    container.appendChild(div).classList.add('box')
  }
}
creatDivs(16, 16)

function blackColor() {
  const boxs = container.querySelectorAll('.box')
  btnBlack.textContent = 'BLACK';
  btnBlack.addEventListener('click', function () {
    boxs.forEach(box => box.addEventListener('mouseover', function () {
      this.style.background = 'black'
    }))
  })
  buttonsContainer.appendChild(btnBlack).classList.add('btn')
}
blackColor()

function reset() {
  const boxs = container.querySelectorAll('.box')
  boxs.forEach(box => {
    box.remove();
  })
}

function reSize() {
  btnSize.textContent = 'GRID SIZE / RESET'
  btnSize.addEventListener('click', () => {
    let user = prompt('SET THE GRID SIZE')
    if (user === null || user < 1 || isNaN(user)) {
      reset();
      creatDivs(16, 16);
      blackColor;
    } else {
      reset();
      creatDivs(user, user);
      blackColor();
    }
  })
  buttonsContainer.appendChild(btnSize).classList.add('btn');
}
reSize();