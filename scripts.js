const heroBg = document.querySelector('.hero-bg');
const dots = document.querySelectorAll('.dot');
const images = ['img/hero1.jpg', 'img/hero2.jpg', 'img/hero3.jpg'];
let idx = 0;

function updateSlide() {
  heroBg.style.backgroundImage = `url('${images[idx]}')`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[idx].classList.add('active');
}

dots.forEach((dot, i) => {
  dot.onclick = () => {
    idx = i;
    updateSlide();
    resetTimer();
  };
});

let timer = setInterval(nextSlide, 5000);

function nextSlide() {
  idx = (idx + 1) % images.length;
  updateSlide();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 5000);
}

updateSlide();

// Testimonials
let tIndex = 0;
const slides = document.querySelectorAll('#testimonial-slider .slide');
setInterval(() => {
  slides[tIndex].classList.remove('active');
  tIndex = (tIndex + 1) % slides.length;
  slides[tIndex].classList.add('active');
}, 5000);

// Leaflet map
var map = L.map('mapid').setView([0, 20], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OSM contributors'
}).addTo(map);

[
  { lat: 13.0827, lng: 80.2707, label: 'Chennai, India' },
  { lat: 0.3476, lng: 32.5825, label: 'Kampala, Uganda' },
  { lat: 6.5244, lng: 3.3792, label: 'Lagos, Nigeria' },
  { lat: 18.7357, lng: -70.1627, label: 'Dominican Republic' },
  { lat: -1.2921, lng: 36.8219, label: 'Nairobi, Kenya' }
].forEach(({lat, lng, label}) =>
  L.marker([lat, lng]).addTo(map).bindPopup(label)
);
