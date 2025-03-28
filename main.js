
for (let i=0; i<5; i++) {
  const slider = Array.from(document.querySelectorAll('.slider'));
const nextButton = Array.from(document.querySelectorAll('.next-button'));
// const slides = Array.from(slider.querySelectorAll('img'));
// const slideCount = slides.length;
nextButton.forEach(button => {
  button.addEventListener('click', showNextSlide)
});
let slideIndex = 0;
  let slides = Array.from(slider[i].querySelectorAll('img'))
  let slideslength = Array.from(slider[i].querySelectorAll('img')).length
  console.log(slides);
  console.log(slideslength);
  function showNextSlide() {

    slideIndex = (slideIndex + 1) % slideslength;
    updateSlider();
  }
  function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }
  updateSlider();

   }

// const slider1 = slider[0]
// const slides1 = Array.from(slider1.querySelectorAll('img'))
// const slideCount1 = slides1.length





// Устанавливаем обработчики событий для кнопок




// Функция для показа следующего слайда
// function showNextSlide() {

//   slideIndex = (slideIndex + 1) % slideCount1;
//   updateSlider();
// }


// Функция для обновления отображения слайдера
// function updateSlider() {
//   slides1.forEach((slide, index) => {
//     if (index === slideIndex) {
//       slide.style.display = 'block';
//     } else {
//       slide.style.display = 'none';
//     }
//   });
// }

// Инициализация слайдера
// updateSlider();