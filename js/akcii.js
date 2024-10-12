const articleButton = document.querySelector('.article__button-mobile')
const articleCardMore = document.querySelectorAll('.article__card--more')

articleButton.addEventListener('click', ()=> {
	articleCardMore.forEach((item)=> {
		item.classList.toggle('active');
	});
		
});
const articleButtonDesctop = document.querySelector('.article__button-desctop')
const cardMore = document.querySelectorAll('.card--more')

articleButtonDesctop.addEventListener('click', ()=> {	
	cardMore.forEach((item)=> {
		item.classList.toggle('active');
	});
		
});