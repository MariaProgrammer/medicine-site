let selectorQuestion = document.querySelector("#tel2");
console.log(selectorQuestion);

let imaskQuestion = new Inputmask("+7(999) 999-99-99");
imaskQuestion.mask(selectorQuestion);

let validation3 = new JustValidate("#form2");

validation3.addField("#tel2", [
  {
    validator: (value) => {
      const phone = selectorQuestion.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length > 0)
    },
    errorMessage: 'Введите телефон'
  },
  {
    validator: (value) => {
      const phone = selectorQuestion.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length === 10)
    },
    errorMessage: 'Введите телефон полностью'
  }
]).onSuccess(async function () {
  let data = {    
    tel: selectorQuestion.inputmask.unmaskedvalue()   
  }

  let response = await fetch("mail.php", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  });

  let result3 = await response.text()

  const thanksPopup = document.querySelector('.thanks__popup');
  thanksPopup.classList.add('active');
  const thanksButton = document.querySelector('.thanks__popup-button');
  thanksButton.addEventListener('click', () => {
  thanksPopup.classList.remove('active');
  location.reload();
  }); 

  // alert(result2)
});