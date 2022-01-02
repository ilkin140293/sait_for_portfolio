$(function () {

  const btnCity = document.querySelector('.header__sity'),
    blockCityes = document.querySelector('.header__modal'),
    cityes = document.querySelectorAll('.header__modal-inner > a'),
    close = document.querySelector('.header__modal-close');

  // при клике на название города в меню открывается список городов
  btnCity.addEventListener('click', function () {
    blockCityes.classList.toggle('header__modal--active');
  });

  // заменяем название города в меню на название из списка
  cityes.forEach(function (item, i) {
    item.addEventListener('click', function () {
      btnCity.textContent = cityes[i].textContent;
      blockCityes.classList.remove('header__modal--active');
    });
  });

  //при нажатии крестика закрывается список городов
  close.addEventListener('click', function () {
    blockCityes.classList.remove('header__modal--active');
    
  });


});



