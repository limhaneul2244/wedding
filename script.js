const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800, //슬라이드 전환 속도
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})



document.getElementById('intro-player').addEventListener('loadeddata', function() {
  this.style.backgroundColor = 'transparent'; // 비디오 로딩 후 배경색 변경
});