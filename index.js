console.log('Привет, Мир!')
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50', 
    '#FF9800',
    '#009688',
    '#795548',
];

const buttonStart = document.querySelector('button[data-action="start"]');
//console.log(buttonStart);
buttonStart.addEventListener('click', onButtonStartClick);
const buttonStop = document.querySelector('button[data-action="stop"]');
//console.log(buttonStop);
buttonStop.addEventListener('click', onButtonStopClick);

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


  const interval = { 
      intervalColorId: null,
      isActive: false,
      start() {
          if (this.isActive) {
              return;
          }

          this.isActive = true;
          this.intervalColorId = setInterval(() => {
   const bodyColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
     console.log(bodyColor);
    document.body.style.background = bodyColor;
    
}, 1000);
      },
      stop() {
          clearInterval(this.intervalColorId);
          this.isActive = false;
      }
           
};    

 function onButtonStartClick() {
     interval.start();
};

                       c
function onButtonStopClick() {
    interval.stop();
};



/*Робочий вариант с активной кнопкой старт
function onButtonStartClick(e) {

    const intervalColorId = setInterval(() => {
        const bodyColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        console.log(bodyColor);
        document.body.style.background = bodyColor;
        return
    }, 1000);



    const buttonStop = document.querySelector('button[data-action="stop"]');
    console.log(buttonStop);
    buttonStop.addEventListener('click', onButtonStopClick);

    function onButtonStopClick() {
        clearInterval(intervalColorId)
    };

};*/



    






