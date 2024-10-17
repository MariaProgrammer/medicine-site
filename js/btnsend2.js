const btnSend2 = document.querySelector('.btn2');
const input2 = document.getElementById('tel2');

btnSend2.addEventListener('click', ()=> {
	input2.focus();
		setTimeout(() => {
			input2.classList.remove('just-validate-error-field')
			
			input2.blur();
		}, 10000)
	});