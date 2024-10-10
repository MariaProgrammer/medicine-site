document.addEventListener('DOMContentLoaded', function () {
  const specialistWindow = document.querySelector('.vrachi-window__wrap');
const specialistWindowCross = document.querySelector('.vrachi-window__cross');
const elem = document.querySelector('.vrachi-window__inner');

const buttonKrainov1 = document.querySelector('.krainov-btn1')
const buttonKrainov2 = document.querySelector('.krainov-btn2')
const buttonKrainov3 = document.querySelector('.krainov-btn3')
const buttonKrainov4 = document.querySelector('.krainov-btn4')
const buttonKrainov5 = document.querySelector('.krainov-btn5')
const buttonKrainov6 = document.querySelector('.krainov-btn6')
const buttonKrainov7 = document.querySelector('.krainov-btn7')
const buttonKrainov8 = document.querySelector('.krainov-btn8')
const buttonKrainov9 = document.querySelector('.krainov-btn9')
const buttonKrainov10 = document.querySelector('.krainov-btn10')
const buttonKrainov11 = document.querySelector('.krainov-btn11')
const buttonKrainov12 = document.querySelector('.krainov-btn12')
const buttonKrainov13 = document.querySelector('.krainov-btn13')
const buttonKrainov14 = document.querySelector('.krainov-btn14')
const buttonKrainov15 = document.querySelector('.krainov-btn15')
const buttonKrainov16 = document.querySelector('.krainov-btn16')
const buttonKrainov17 = document.querySelector('.krainov-btn17')
const buttonKrainov18 = document.querySelector('.krainov-btn18')
const buttonKrainov19 = document.querySelector('.krainov-btn19')

const buttonKrainov1s = document.querySelector('.krainov-btn1s')
const buttonKrainov2s = document.querySelector('.krainov-btn2s')
const buttonKrainov3s = document.querySelector('.krainov-btn3s')
const buttonKrainov4s = document.querySelector('.krainov-btn4s')
const buttonKrainov5s = document.querySelector('.krainov-btn5s')
const buttonKrainov6s = document.querySelector('.krainov-btn6s')
const buttonKrainov7s = document.querySelector('.krainov-btn7s')
const buttonKrainov8s = document.querySelector('.krainov-btn8s')
const buttonKrainov9s = document.querySelector('.krainov-btn9s')
const buttonKrainov10s = document.querySelector('.krainov-btn10s')
const buttonKrainov11s = document.querySelector('.krainov-btn11s')
const buttonKrainov12s = document.querySelector('.krainov-btn12s')
const buttonKrainov13s = document.querySelector('.krainov-btn13s')
const buttonKrainov14s = document.querySelector('.krainov-btn14s')
const buttonKrainov15s = document.querySelector('.krainov-btn15s')
const buttonKrainov16s = document.querySelector('.krainov-btn16s')
const buttonKrainov17s = document.querySelector('.krainov-btn17s')
const buttonKrainov18s = document.querySelector('.krainov-btn18s')
const buttonKrainov19s = document.querySelector('.krainov-btn19s')

const buttonKaracheva1 = document.querySelector('.karacheva-btn1')
const buttonKaracheva2 = document.querySelector('.karacheva-btn2')
const buttonKaracheva3 = document.querySelector('.karacheva-btn3')
const buttonKaracheva4 = document.querySelector('.karacheva-btn4')
const buttonKaracheva5 = document.querySelector('.karacheva-btn5')
const buttonKaracheva6 = document.querySelector('.karacheva-btn6')
const buttonKaracheva7 = document.querySelector('.karacheva-btn7')
const buttonKaracheva8 = document.querySelector('.karacheva-btn8')
const buttonKaracheva9 = document.querySelector('.karacheva-btn9')
const buttonKaracheva10 = document.querySelector('.karacheva-btn10')
const buttonKaracheva11 = document.querySelector('.karacheva-btn11')
const buttonKaracheva12 = document.querySelector('.karacheva-btn12')
const buttonKaracheva13 = document.querySelector('.karacheva-btn13')
const buttonKaracheva14 = document.querySelector('.karacheva-btn14')

const buttonKaracheva1s = document.querySelector('.karacheva-btn1s')
const buttonKaracheva2s = document.querySelector('.karacheva-btn2s')
const buttonKaracheva3s = document.querySelector('.karacheva-btn3s')
const buttonKaracheva4s = document.querySelector('.karacheva-btn4s')
const buttonKaracheva5s = document.querySelector('.karacheva-btn5s')
const buttonKaracheva6s = document.querySelector('.karacheva-btn6s')
const buttonKaracheva7s = document.querySelector('.karacheva-btn7s')
const buttonKaracheva8s = document.querySelector('.karacheva-btn8s')
const buttonKaracheva9s = document.querySelector('.karacheva-btn9s')
const buttonKaracheva10s = document.querySelector('.karacheva-btn10s')
const buttonKaracheva11s = document.querySelector('.karacheva-btn11s')
const buttonKaracheva12s = document.querySelector('.karacheva-btn12s')
const buttonKaracheva13s = document.querySelector('.karacheva-btn13s')
const buttonKaracheva14s = document.querySelector('.karacheva-btn14s')

const buttonNikolaeva1 = document.querySelector('.nikolaeva-btn1')
const buttonNikolaeva2 = document.querySelector('.nikolaeva-btn2')
const buttonNikolaeva3 = document.querySelector('.nikolaeva-btn3')
const buttonNikolaeva4 = document.querySelector('.nikolaeva-btn4')
const buttonNikolaeva5 = document.querySelector('.nikolaeva-btn5')
const buttonNikolaeva6 = document.querySelector('.nikolaeva-btn6')
const buttonNikolaeva7 = document.querySelector('.nikolaeva-btn7')
const buttonNikolaeva8 = document.querySelector('.nikolaeva-btn8')
const buttonNikolaeva9 = document.querySelector('.nikolaeva-btn9')

const buttonNikolaeva1s = document.querySelector('.nikolaeva-btn1s')
const buttonNikolaeva2s = document.querySelector('.nikolaeva-btn2s')
const buttonNikolaeva3s = document.querySelector('.nikolaeva-btn3s')
const buttonNikolaeva4s = document.querySelector('.nikolaeva-btn4s')
const buttonNikolaeva5s = document.querySelector('.nikolaeva-btn5s')
const buttonNikolaeva6s = document.querySelector('.nikolaeva-btn6s')
const buttonNikolaeva7s = document.querySelector('.nikolaeva-btn7s')
const buttonNikolaeva8s = document.querySelector('.nikolaeva-btn8s')
const buttonNikolaeva9s = document.querySelector('.nikolaeva-btn9s')





specialistWindowCross.addEventListener('click', () => {
  
	specialistWindow.classList.remove('active');
  location.reload()
});




function openGramota(buttonSelector, name, n, file='png'){
  let gramota = `.krainov-btn${n}`
  const lupa = document.querySelector('.window-button--lupa');
  buttonSelector.addEventListener('click', ()=> {
    specialistWindow.classList.add('active');
    let img = `<img src="img/doctors/gramoty_${name}/${n}.${file}" class="card-certificate-img" width="500" height="auto">`;
    elem.innerHTML= img;
    lupa.addEventListener('click', ()=> {      
      elem.classList.toggle('active');
    });
    
      
  });
}

// function getName (n) {
  
//   let gramota = `.krainov-btn${n}`;
//   openGramota(gramota, 'ilya', n);
  
// }

// function openGramotaIlya() {
  
//   for (i=1; i<20; i++) {
//     getName(i);     

//   }  
// }
// openGramotaIlya()

openGramota(buttonKrainov1, 'ilya', 1);
openGramota(buttonKrainov2,'ilya', 2);
openGramota(buttonKrainov3,'ilya', 3);
openGramota(buttonKrainov4,'ilya', 4);
openGramota(buttonKrainov5,'ilya', 5);
openGramota(buttonKrainov6,'ilya', 6);
openGramota(buttonKrainov7,'ilya', 7);
openGramota(buttonKrainov8,'ilya', 8);
openGramota(buttonKrainov9,'ilya', 9);
openGramota(buttonKrainov10,'ilya', 10);
openGramota(buttonKrainov11,'ilya', 11);
openGramota(buttonKrainov12,'ilya', 12);
openGramota(buttonKrainov13,'ilya', 13);
openGramota(buttonKrainov14,'ilya', 14);
openGramota(buttonKrainov15,'ilya', 15);
openGramota(buttonKrainov16,'ilya', 16);
openGramota(buttonKrainov17,'ilya', 17);
openGramota(buttonKrainov18,'ilya', 18);
openGramota(buttonKrainov19,'ilya', 19);

openGramota(buttonKrainov1s,'ilya', 1);
openGramota(buttonKrainov2s,'ilya', 2);
openGramota(buttonKrainov3s,'ilya', 3);
openGramota(buttonKrainov4s,'ilya', 4);
openGramota(buttonKrainov5s,'ilya', 5);
openGramota(buttonKrainov6s,'ilya', 6);
openGramota(buttonKrainov7s,'ilya', 7);
openGramota(buttonKrainov8s,'ilya', 8);
openGramota(buttonKrainov9s,'ilya', 9);
openGramota(buttonKrainov10s,'ilya', 10);
openGramota(buttonKrainov11s,'ilya', 11);
openGramota(buttonKrainov12s,'ilya', 12);
openGramota(buttonKrainov13s,'ilya', 13);
openGramota(buttonKrainov14s,'ilya', 14);
openGramota(buttonKrainov15s,'ilya', 15);
openGramota(buttonKrainov16s,'ilya', 16);
openGramota(buttonKrainov17s,'ilya', 17);
openGramota(buttonKrainov18s,'ilya', 18);
openGramota(buttonKrainov19s,'ilya', 19);

openGramota(buttonKaracheva1,'ekaterina', 3, 'jpeg');
openGramota(buttonKaracheva2,'ekaterina', 4, 'jpeg');
openGramota(buttonKaracheva3,'ekaterina', 5, 'jpeg');
openGramota(buttonKaracheva4,'ekaterina', 6, 'jpeg');
openGramota(buttonKaracheva5,'ekaterina', 7, 'jpeg');
openGramota(buttonKaracheva6,'ekaterina', 8, 'jpeg');
openGramota(buttonKaracheva7,'ekaterina', 9, 'jpeg');
openGramota(buttonKaracheva8,'ekaterina', 10, 'jpeg');
openGramota(buttonKaracheva9,'ekaterina', 11, 'jpeg');
openGramota(buttonKaracheva10,'ekaterina', 12, 'jpeg');
openGramota(buttonKaracheva11,'ekaterina', 13, 'jpeg');
openGramota(buttonKaracheva12,'ekaterina', 14, 'jpeg');
openGramota(buttonKaracheva13,'ekaterina', 15, 'jpeg');
openGramota(buttonKaracheva14,'ekaterina', 16, 'jpeg');

openGramota(buttonKaracheva1s,'ekaterina', 3, 'jpeg');
openGramota(buttonKaracheva2s,'ekaterina', 4, 'jpeg');
openGramota(buttonKaracheva3s,'ekaterina', 5, 'jpeg');
openGramota(buttonKaracheva4s,'ekaterina', 6, 'jpeg');
openGramota(buttonKaracheva5s,'ekaterina', 7, 'jpeg');
openGramota(buttonKaracheva6s,'ekaterina', 8, 'jpeg');
openGramota(buttonKaracheva7s,'ekaterina', 9, 'jpeg');
openGramota(buttonKaracheva8s,'ekaterina', 10, 'jpeg');
openGramota(buttonKaracheva9s,'ekaterina', 11, 'jpeg');
openGramota(buttonKaracheva10s,'ekaterina', 12, 'jpeg');
openGramota(buttonKaracheva11s,'ekaterina', 13, 'jpeg');
openGramota(buttonKaracheva12s,'ekaterina', 14, 'jpeg');
openGramota(buttonKaracheva13s,'ekaterina', 15, 'jpeg');
openGramota(buttonKaracheva14s,'ekaterina', 16, 'jpeg');

openGramota(buttonNikolaeva1,'nastya', 1);
openGramota(buttonNikolaeva2,'nastya', 2);
openGramota(buttonNikolaeva3,'nastya', 3);
openGramota(buttonNikolaeva4,'nastya', 4);
openGramota(buttonNikolaeva5,'nastya', 5);
openGramota(buttonNikolaeva6,'nastya', 6);
openGramota(buttonNikolaeva7,'nastya', 7);
openGramota(buttonNikolaeva8,'nastya', 8);
openGramota(buttonNikolaeva9,'nastya', 9);

openGramota(buttonNikolaeva1s,'nastya', 1);
openGramota(buttonNikolaeva2s,'nastya', 2);
openGramota(buttonNikolaeva3s,'nastya', 3);
openGramota(buttonNikolaeva4s,'nastya', 4);
openGramota(buttonNikolaeva5s,'nastya', 5);
openGramota(buttonNikolaeva6s,'nastya', 6);
openGramota(buttonNikolaeva7s,'nastya', 7);
openGramota(buttonNikolaeva8s,'nastya', 8);
openGramota(buttonNikolaeva9s,'nastya', 9);

})







// const openModal = (triggerSelector, modalDataSelector) => {
//   // const trigger = document.querySelectorAll(triggerSelector)
//   // console.log(trigger);
  
//   // const modal = document.querySelector(modalDataSelector)
//   if (!triggerSelector || !modalDataSelector) return
//   triggerSelector.forEach(b => b.addEventListener('click', closeParentBlock));
  
  
//   function closeParentBlock(e) {
//     e.preventDefault()
//     modalDataSelector.classList.add('active')
//   }
// }
// openModal(specialistButtons, specialistWindow);
// openModal(specialistButtons2, specialistWindow2);
// openModal(specialistButtons3, specialistWindow3);


// specialistWindowCross2.addEventListener('click', () => {
// 	specialistWindow2.classList.remove('active');
// });
// specialistWindowCross3.addEventListener('click', () => {
// 	specialistWindow3.classList.remove('active');
// });


// const swiper5 = new Swiper('.swiper5', {
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 15,	
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
  
  // pagination:	{
  // 	el: '.swiper-pagination',
  // 	clickable: true,
  // },
//   mousewhell: true,
//   keyboard: true,
//   });
// const swiper6 = new Swiper('.swiper6', {
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 15,	
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
  
  // pagination:	{
  // 	el: '.swiper-pagination',
  // 	clickable: true,
  // },
//   mousewhell: true,
//   keyboard: true,
//   });
// const swiper7 = new Swiper('.swiper7', {
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 15,	
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
  
  // pagination:	{
  // 	el: '.swiper-pagination',
  // 	clickable: true,
  // },
  // mousewhell: true,
  // keyboard: true,
  // });
