const slider1 = document.querySelector('.slider1');

const nextButton1 = document.querySelector('.next-button1');
const slides1 = Array.from(slider1.querySelectorAll('img'));
const slideCount1 = slides1.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
nextButton1.addEventListener('click', showNextSlide1);


// Функция для показа следующего слайда
function showNextSlide1() {
  slideIndex = (slideIndex + 1) % slideCount1;
  updateSlider1();
}

// Функция для обновления отображения слайдера
function updateSlider1() {
  slides1.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider1() 


const slider2 = document.querySelector('.slider2');

const nextButton2 = document.querySelector('.next-button2');
const slides2 = Array.from(slider2.querySelectorAll('img'));
const slideCount2 = slides2.length;

// Устанавливаем обработчики событий для кнопок
nextButton2.addEventListener('click', showNextSlide2);


// Функция для показа следующего слайда
function showNextSlide2() {
  slideIndex = (slideIndex + 1) % slideCount2;
  updateSlider2();
}

// Функция для обновления отображения слайдера
function updateSlider2() {
  slides2.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
updateSlider2()

const slider3 = document.querySelector('.slider3');

const nextButton3 = document.querySelector('.next-button3');
const slides3 = Array.from(slider3.querySelectorAll('img'));
const slideCount3 = slides3.length;

// Устанавливаем обработчики событий для кнопок
nextButton3.addEventListener('click', showNextSlide3);


// Функция для показа следующего слайда
function showNextSlide3() {
  slideIndex = (slideIndex + 1) % slideCount3;
  updateSlider3();
}

// Функция для обновления отображения слайдера
function updateSlider3() {
  slides3.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
updateSlider3()


const slider4 = document.querySelector('.slider4');

const nextButton4 = document.querySelector('.next-button4');
const slides4 = Array.from(slider4.querySelectorAll('img'));
const slideCount4 = slides4.length;

// Устанавливаем обработчики событий для кнопок
nextButton4.addEventListener('click', showNextSlide4);


// Функция для показа следующего слайда
function showNextSlide4() {
  slideIndex = (slideIndex + 1) % slideCount4;
  updateSlider4();
}

// Функция для обновления отображения слайдера
function updateSlider4() {
  slides4.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
updateSlider4()


const slider5 = document.querySelector('.slider5');

const nextButton5 = document.querySelector('.next-button5');
const slides5 = Array.from(slider5.querySelectorAll('img'));
const slideCount5 = slides5.length;


// Устанавливаем обработчики событий для кнопок
nextButton5.addEventListener('click', showNextSlide5);


// Функция для показа следующего слайда
function showNextSlide5() {
  slideIndex = (slideIndex + 1) % slideCount5;
  updateSlider5();
}

// Функция для обновления отображения слайдера
function updateSlider5() {
  slides5.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider5();