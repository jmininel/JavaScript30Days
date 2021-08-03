const secondHand = document.querySelector('.second-hand');
const minsdHand = document.querySelector('.min-hand');
const hourdHand = document.querySelector('.hour-hand');

function setDate() {
     const now = new Date()

     const seconds = now.getSeconds();
     const secondsDegrees = ((seconds /60 ) * 360 ) + 90;
     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
     
     const mins = now.getMinutes();
     const minsDegrees = ((mins / 60 ) * 360 ) + 90;
     minsdHand.style.transform = `rotate(${minsDegrees}deg)`;

     const hour = now.getMinutes();
     const hourdHand = ((hour / 60 ) * 360 ) + 90;
     hourdHand.style.transform = `rotate(${hourdHand}deg)`;
}

setInterval(setDate, 1000);