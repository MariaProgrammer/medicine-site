// Burger
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerCross = document.querySelector('.burger-menu__cross');
const services = document.getElementById('services');
const hoverMenu = document.querySelector('.hover-menu');
const hoverMenuCross = document.querySelector('.hover-menu__cross');
const burgerButton = document.querySelector('.burger__button');

const footerPopup = document.querySelector('.footer__popup');
const footerPopupButton = document.querySelector('.footer__popup-button');
const aboutClinica = document.querySelector('.about__clinica');

const footerMenuCross = document.querySelector('.footer-menu__cross');
const footerBurgerMenu = document.querySelector('.footer__burger-menu');
const footerBurger = document.querySelector('.footer-burger__button');







burger.addEventListener("click", () => {
	burgerMenu.classList.toggle('active');
	burgerButton.classList.toggle('active');    
	burger.classList.toggle('active');    
  // document.body.classList.toggle("stop-scroll");    
});

footerBurger.addEventListener("click", () => {
	console.log('done');
	
	footerBurgerMenu.classList.toggle('active');
	footerBurger.classList.toggle('active');
	footerBurger.classList.toggle('hover');
	    
	// burger.classList.toggle('active');    
  // document.body.classList.toggle("stop-scroll");    
});
footerMenuCross.addEventListener("click", () => {
	footerBurgerMenu.classList.remove('active');
	footerBurger.classList.remove('active');
	footerBurger.classList.remove('hover'); 
});

burgerCross.addEventListener("click", () => {
	burgerMenu.classList.remove('active');
	burger.classList.remove('active');  
	burgerButton.classList.remove('active');  
});
hoverMenuCross.addEventListener("click", () => {
	hoverMenu.classList.remove('active'); 
});
services.addEventListener("mouseover", () => {
	hoverMenu.classList.add('active');    
  // document.body.classList.toggle("stop-scroll");    
});


hoverMenu.addEventListener("mouseover", () => {
	hoverMenu.classList.add('active');    
  // document.body.classList.toggle("stop-scroll");    
});
hoverMenuCross.addEventListener("click", () => {	
	hoverMenu.classList.remove('active');
	    
  // document.body.classList.toggle("stop-scroll");    
});



//Popup
footerPopupButton.addEventListener('click', () => {
	footerPopup.remove('active');
	location.reload()
})

	footerPopup.addEventListener("mouseover", () => {	
		footerPopup.classList.add('active');		
	});	

	aboutClinica.addEventListener("mouseover", () => {	
		footerPopup.classList.add('active');
		
});

	const swiperArticle = new Swiper('.swiper-article', {
			direction: 'horizontal',
			loop: true,
      
			// effect: 'coverflow',
      
      // centeredSlides: true,      
			slidesPerView: 3,
			spaceBetween: 30,	
			// navigation: {	
			// 	nextEl: '.swiper-button-next3',			
			// 	prevEl: '.swiper-button-prev3',
				
			// },
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				480: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				// when window width is >= 480px
				768: {
					slidesPerView: 2,
					spaceBetween: 30
				},
				// when window width is >= 640px
				960: {
					slidesPerView: 3,
					spaceBetween: 30
				},
				
				
			},
			// pagination:	{
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			mousewhell: true,
			keyboard: true,
			});

			

			
		const swiperFooter = new Swiper('.swiper-footer', {
			direction: 'horizontal',
			loop: true,
			// effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
			slidesPerView: 1,
			spaceBetween: 54,	
			navigation: {	
				nextEl: '.swiper-button-nextfoot',			
				prevEl: '.swiper-button-prevfoot',
				
			},
			// breakpoints: {
				// when window width is >= 320px
				// 320: {
				// 	slidesPerView: 1,
				// 	spaceBetween: 0
				// },
				// when window width is >= 480px
				// 768: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 30
				// },
				// when window width is >= 640px
			// 	960: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 30
			// 	},
				
			// },
			// pagination:	{
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			mousewhell: true,
			keyboard: true,
			});

			// const swiperAbout = new Swiper('.swiper-about', {
			// 	direction: 'horizontal',
			// 	loop: true,
			// 	slidesPerView: 1,
			// 	spaceBetween: 0,	
			// 	navigation: {
			// 		nextEl: '.swiper-button-next-about',
			// 		prevEl: '.swiper-button-prev-about',
			// 	},
				
			// 	mousewhell: true,
			// 	keyboard: true,
			// 	});

			const swiperFooterWindow = document.querySelector('.swiper-footer--inner')
			const swiperFooterbtns = document.querySelectorAll('.footer-lisense')
			const footerWindowCross = document.querySelector('.swiper-button--cross')
			const footerBtnLupa = document.querySelector('.swiper-button--lupa')			
			// const footerSwiperImg = document.querySelector('.footer__swiper--img')
			const swiperImg1 = document.querySelector('.swiper--img1')
			const swiperImg2 = document.querySelector('.swiper--img2')
			const swiperImg3 = document.querySelector('.swiper--img3')
			

			const openModal = (triggerSelector, modalDataSelector) => {
				// const trigger = document.querySelectorAll(triggerSelector)
				// console.log(trigger);
				
				// const modal = document.querySelector(modalDataSelector)
				if (!triggerSelector || !modalDataSelector) return
				triggerSelector.forEach(b => b.addEventListener('click', closeParentBlock));
				
				
				function closeParentBlock(e) {
					e.preventDefault()
					modalDataSelector.classList.add('active')
				}
			}
			openModal(swiperFooterbtns, swiperFooterWindow);
			
			
			footerWindowCross.addEventListener('click', () => {
				swiperFooterWindow.classList.remove('active');
				location.reload()
			});

			footerBtnLupa.addEventListener('click', () => {
				swiperImg1.classList.toggle('active');
				swiperImg2.classList.toggle('active');
				swiperImg3.classList.toggle('active');
			});

			swiperImg1.addEventListener('click', () => {
				swiperImg1.classList.toggle('active');
			})
			swiperImg2.addEventListener('click', () => {
				swiperImg2.classList.toggle('active');
			})
			swiperImg3.addEventListener('click', () => {
				swiperImg3.classList.toggle('active');
			})
			
			
			
			
			
			
			