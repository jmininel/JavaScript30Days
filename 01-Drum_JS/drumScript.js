const keyboard = document.querySelector('.keyboard');

window.addEventListener('keydown', logkey ) 

function logkey(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if (!audio) return //stop the function
  audio.play();
}
