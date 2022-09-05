let score = 0;

const holes = document.getElementsByClassName('hole');
const title = document.getElementById('title');
const image = document.getElementById('image');
const whackMoleElement = document.getElementById('whack-a-mole');
const scoreDisplay = document.getElementById('score');
const buttonPlay = document.getElementsByClassName('play-section');

function addImage() {
  setInterval(() => {
    image.innerHTML = "<img src='./images/title.png' />";
  }, 100);
}

title.addEventListener('mouseover', () => {
  title.style.backgroundColor = 'yellow';
  title.style.color = 'brown';
});

title.addEventListener('mouseout', () => {
  title.style.backgroundColor = '';
  title.style.color = '';
});

buttonPlay[0].addEventListener('click', () => {
  setInterval(() => {
    const randomNumber = Math.floor(Math.random() * holes.length + 1);
    for (let index = 0; index < holes.length; index++) {
      $(holes[randomNumber]).toggleClass('mole');
    }
  }, 500);
});

whackMoleElement.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.matches('.mole')) {
    clickEvent.target.classList.remove('mole');
    score += 1;
    scoreDisplay.innerText = `Score: ${score} !! keep playing!!`;
    scoreDisplay.style.backgroundColor = '#552E00';
  } else {
    console.log('nothing to whack!!');
  }
});
