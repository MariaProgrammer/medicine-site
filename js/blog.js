//button more

const articleButton = document.querySelector('.article__button')
const articleCardMore = document.querySelectorAll('.article__card--more')

articleButton.addEventListener('click', ()=> {
	articleCardMore.forEach((item)=> {
		item.classList.toggle('active');
	});
		
});

// Функция фильтрации

const list = document.querySelector('.article__ramka-links');
const items = document.querySelectorAll('.article__card');
const listItems = document.querySelectorAll('.service-item');
const directions__list = document.querySelector('.article__cards');


function filter() {
	list.addEventListener('click', event => {
		const targetFilter = event.target.dataset.id;

		const target= event.target;
		
		// items.forEach(item => {
		// 	if(!item.classList.contains(`${targetFilter}`)) item.style.display='none';
		// 	else  item.style.display='block';
		// })

		
	if(target.classList.contains('service-item')) {
		listItems.forEach(listItem => listItem.classList.remove('active'));
		
		target.classList.add('show-block');			
		target.classList.add('active');
		
		

	}

		switch(targetFilter) {
			case 'all':
				getItems('article__card');
			
				break
			case 'implantacia':
				getItems(targetFilter);
				break
			case 'protezirovanie':
				getItems(targetFilter);
				break
			case 'restavracia':
				getItems(targetFilter);
				break
			case 'lechenie':
				getItems(targetFilter);
				break
			case 'gigiena':
				getItems(targetFilter);
				break				
		}

		
	})
}

filter();

function getItems(className) {
items.forEach(item => {
	if(item.classList.contains(className)) {
		item.style.display = "none";
		setTimeout(() => {
			item.style.display = "block";

		}, "200");		
	
		
	} else {
		item.style.display = "none";			
	}
	
})
}