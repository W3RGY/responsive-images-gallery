"use strick";

let pageSlider = new Swiper('.slider', {
	speed: 1000,
	scrollbar: {
		el: ".slider__scrollbar",
		draggable: true
	},
	breakpoints: {
		"320": {
			slidesPerView: 1,
			centeredSlides: false
		},
		"992": {
			slidesPerView: 2,
			centeredSlides: true
		}
	}
});

const page = document.querySelector('.page');
const images = document.querySelectorAll('.slide__picture');

if (images.length) {
	let backgroundSlides = ``;
	let textSlides = ``;

	images.forEach(image => {
		backgroundSlides += `
			<div class="background__slide swiper-slide">
				<div class="background__image">
					<img src="${image.getAttribute('src')}" alt="${image.alt}">
				</div>
			</div>
		`;
		textSlides += `
			<div class="text__slide swiper-slide">
				<span>${image.dataset.title ? image.dataset.title : ''}</span>
			</div>
		`;
	});
}