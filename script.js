document.querySelectorAll('.skills button')
  .forEach( el => el.addEventListener('click', switchTab))

  function switchTab(e) {
    const clickedButton = e.target;
    const tabNum = clickedButton.dataset.tab;

    document.querySelectorAll('.skills button, .profile')
      .forEach( el => {
        if (el.dataset.tab === tabNum) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      })

  }

// слайдер

const comment = document.querySelectorAll('.slider .comment_wrapper .comment ');
const sliderLine = document.querySelector('.comment_wrapper');
let count = 0;
let width;
function init(){
  console.log('relize');
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * comment.length + 'px';
  comment.forEach(item => {
    item.style.width = width + 'px';
  });
  rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.fa-arrow-right').addEventListener('click', function() {
  count++;
  if (count >= comment.length) {
    count = 0;
  }
  rollSlider();
});

document.querySelector('.fa-arrow-left').addEventListener('click', function() {
  count--;
  if (count < 0) {
    count = comment.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}


//неадаптивний слайдер
// let offset = 0; //переміщення від лівого краю
// const sliderLine = document.querySelector('.comment_wrapper');

// document.querySelector('.fa-arrow-left').addEventListener('click', function() {
//   offset = offset - 1000;
//   if (offset < 0) {
//     offset = 2000;
//   }
//   sliderLine.style.left = -offset + 'px';
// })
// document.querySelector('.fa-arrow-right').addEventListener('click', function() {
//   offset = offset + 1000;
//   if (offset >= 3000) {
//     offset = 0;
//   }
  
//   sliderLine.style.left = -offset + 'px';
// })
