const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

//Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
let interval = null;
const bodyColor = document.querySelector('body');
const btnStartColor = document.querySelector('[data-action="start"]');
const btnStopColor = document.querySelector('[data-action="stop"]');

btnStartColor.addEventListener('click', start);
btnStopColor.addEventListener('click', stop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



function start() {
  interval = setInterval(() => {
    
    bodyColor.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
     
  }, 1000)
 btnStartColor.disabled = true;
 }
 

function stop() {
  clearInterval(interval);

  btnStartColor.disabled = false;
}