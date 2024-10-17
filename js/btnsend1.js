const btnSend1 = document.querySelector('.btn1');
const input1 = document.getElementById('tel1');

btnSend1.addEventListener('click', ()=> {
	input1.focus();
		setTimeout(() => {
			input1.classList.remove('just-validate-error-field')
			
			input1.blur();
		}, 10000)
	});