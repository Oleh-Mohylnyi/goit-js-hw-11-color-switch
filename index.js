const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];


const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');


startBtnRef.addEventListener('click', onStart);
stopBtnRef.addEventListener('click', onStop);


let setIntervalID = null;

function onStart() {
    setIntervalID = setInterval(changeBcgrColor, 1000, colors);
    startBtnRef.disabled = true;
}

function onStop() {
    clearInterval(setIntervalID);
    startBtnRef.disabled = false;
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBcgrColor(colors) {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
}
