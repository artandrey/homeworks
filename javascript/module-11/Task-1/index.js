'use strcit';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  let interval;
  
  const body = document.querySelector("body");
  
  const buttonsArray = document.querySelectorAll("button");
  
  const startBtn = buttonsArray[0];
  const stopBtn =
        buttonsArray[1];
  startBtn.addEventListener("click", () => {
    
    if(interval) return;
    interval = setInterval( ()=> {
      body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)]
      }, 1000)
  });
  
  stopBtn.addEventListener("click", ()=> { clearInterval(interval); interval = null;});