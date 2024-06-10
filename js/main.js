const swiper = new Swiper('.swiper', {
	spaceBetween: 50,
	slidesPerView: 1,
	autoplay: {
		delay: 5000,
	},
	breakpoints: {
		767: {
			slidesPerView: 2,
		}
	},

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});