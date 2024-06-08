import { images } from './imagesData.js';
const galleryGrid = document.getElementById('galleryGrid');

//메인 슬라이드 swiper
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


document.getElementById('intro-player').addEventListener('loadeddata', function () {
  this.style.backgroundColor = 'transparent'; // 비디오 로딩 후 배경색 변경
});

// 달력 :: 카운트다운 갱신
function updateCountdown() {
  const eventDate = new Date('2025-01-18T00:00:00').getTime();
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days;
  document.getElementById('hour').innerText = ('0' + hours).slice(-2);
  document.getElementById('min').innerText = ('0' + minutes).slice(-2);
  document.getElementById('sec').innerText = ('0' + seconds).slice(-2);
  document.getElementById('dday').innerText = days;

  // 카운트다운 종료
  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.querySelector('.countDown').innerHTML = "결혼식이 시작되었습니다!";
    document.querySelector('.dday').innerHTML = "";
  }
}

// 1초마다 카운트다운 갱신
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();  // 페이지 로드 시 즉시 업데이트

//갤러리 이미지 반복
for (let i = 0; i < images.length; i++) {
  const img = images[i];
  const gridItem = document.createElement('div');
  gridItem.className = 'grid-item';
  gridItem.style.gridArea = img.gridArea;

  const itemDiv = document.createElement('div');
  itemDiv.className = 'item';
  itemDiv.style.backgroundImage = `url(${img.fileName})`;
  itemDiv.style.width = '100%';

  // 비율에 따라 padding-bottom을 설정
  const aspectRatio = img.aspectRatio.split('/');
  const height = (aspectRatio[1] / aspectRatio[0]) * 100;
  itemDiv.style.paddingBottom = `${height}%`;

  gridItem.appendChild(itemDiv);
  galleryGrid.appendChild(gridItem);
}