let score = 0;

const holes = document.getElementsByClassName('hole');

//using jQuery method:
// const holes = $('.hole');

setInterval(() => {
  const randomNumber = Math.floor(Math.random() * holes.length + 1);
  for (let index = 0; index < holes.length; index++) {
    $(holes[randomNumber]).toggleClass('mole');
  }
}, 300);
