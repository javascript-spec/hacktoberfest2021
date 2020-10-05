const frame = document.querySelector('.container');
const dialog = document.querySelector('dialog');
frame.classList.add('resizing');

const ticker = setInterval(function (e) {
  frame.classList.remove('processing');
  frame.classList.add('grouping');
  clearInterval(ticker);
},2500);

const secondticker = setInterval(function (e) {
  frame.classList.add('resizing');
  dialog.classList.add('visible');
  clearInterval(secondticker);
},3300);