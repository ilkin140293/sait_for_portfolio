$(function () {

  //------------------------------------------------------------------------------
  // Блок кода для списка городов 
  //------------------------------------------------------------------------------

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

  //------------------------------------------------------------------------------
  // Блок кода для табов
  //------------------------------------------------------------------------------

/* 
      // Вариант номер 1: когда колтчество кнопок соответствует количеству модулей контента и порядок  кнопок и контента будет параллельно соответствовать друг другу
      const tabChoice = document.querySelectorAll('.modules__choice-item'),
        tabModules = document.querySelectorAll('.modules__tabs-items');

      // Функция для скрытия контента в блоке модули и убирания активного состояния с табов
      function hideTabContent() {
        tabModules.forEach(function (item) {
          item.classList.remove('modules__tabs-items--active');
        });
        tabChoice.forEach(function (item) {
          item.classList.remove('modules__choice-item--active');
        });
      };

      //Функция добавления контента в блоке и добавления активного состояния на табы
      function showTabContrnt(i = 0) {
        tabChoice[i].classList.add('modules__choice-item--active');
        tabModules[i].classList.add('modules__tabs-items--active');
      };

      hideTabContent();
      showTabContrnt();

      // Делаем обработчик при нажатии на определенный таб открывается контент 
      tabChoice.forEach(function (item, i) {
        item.addEventListener('click', function (event) {
          const target = event.currentTarget;
          if (target == item) {
            hideTabContent();
            showTabContrnt(i);
          }
        });
      }); */



  // Вариант номер 2: когда кнопки табов и контента будут реализованы с помощью дата атрибутов и айдишников, тем самым можно будет произвольно настраивать табы

  const tabChoice = document.querySelectorAll('.modules__choice-item'),
        tabModules = document.querySelectorAll('.modules__tabs-items');

  tabChoice.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener('click', function() {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (! currentBtn.classList.contains('modules__choice-item--active')) {
       
        tabChoice.forEach(function(item) {
          item.classList.remove('modules__choice-item--active');
        });

        tabModules.forEach(function(item) {
          item.classList.remove('modules__tabs-items--active');
        });

        currentBtn.classList.add('modules__choice-item--active');
        currentTab.classList.add('modules__tabs-items--active');
      }
    });
  }

  //------------------------------------------------------------------------------
  // Блок кода для кнопки меню 
  //------------------------------------------------------------------------------

  const btnMenu = document.querySelector('.header__button');
  const blockMenu = document.querySelector('.menu');

  btnMenu.addEventListener('click', function() {
    blockMenu.classList.toggle('menu--active');
    if (blockMenu.classList.contains('menu--active')) {
      btnMenu.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L11 11" stroke="#00093C" stroke-width="2" stroke-linecap="round"/>
      <path d="M11 1L1 11" stroke="#00093C" stroke-width="2" stroke-linecap="round"/>
      </svg>`;
    } else {
      btnMenu.innerHTML = `<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.1406 1H0.999512" stroke="#00093C" stroke-width="2" stroke-linecap="round" />
      <path d="M19.1406 7.05469H6.13096" stroke="#00093C" stroke-width="2" stroke-linecap="round" />
      <path d="M19.1406 13.0508H0.999512" stroke="#00093C" stroke-width="2" stroke-linecap="round" />
    </svg>`;
    }
  });



});



