
//КОНСТАНТЫ

//Элементы попапа регистрации
const signInButtons = document.querySelectorAll('.login-card__button_type_signin');
const signInPopup = document.querySelector('.popup_type_signin');
const signInPopupNameInput = document.getElementById('name');
const profileCardUserName = document.querySelector('.profile-card__user-name');
const birthdayInput = document.getElementById('birthday');
const userBirhday = document.querySelector('.info-card__item_type_birhday');
const earsTypeInput = document.getElementById('ears');
const userEarsType = document.querySelector('.info-card__item_type_ears');
const tailTypeInput = document.getElementById('tail');
const userTailType = document.querySelector('.info-card__item_type_tail');
const signInPopupForm = document.querySelector('.popup__form_type_signin');
const popupCloseButton = document.querySelector('.popup__close-button');

//Элементы попапа "Забыли куда нажимать"
const loginCardLinks = document.querySelectorAll('.login-card__link');
const forgetPopup = document.querySelector('.popup_type_forget');
const forgetPopupButton = document.querySelector('.button_place_forget-popup');

//Элементы попапа "Написать гавгав"
const gavgavButton = document.querySelector('.button_type_gavgav');
const gavgavPopup = document.querySelector('.popup_type_gavgav');
const gavgavCounter = document.querySelector('.counter__numbers_type_gavgav');
const gavgavPopupButton = document.querySelector('.button_place_gavgav-popup');

//Элементы попапа с видео
const kusButton = document.querySelector('.button_type_kus');
const kusPopup = document.querySelector('.popup_type_kus');
const kusVideo = document.querySelector('.popup__video');
const kusCounter = document.querySelector('.counter__numbers_type_kus');
const kusPopupCloseButton = kusPopup.querySelector('.popup__close-button');

//Элементы сайдбара
const loginCard = document.querySelector('.login-card');
const sidebarOpenButton = document.querySelector('.sidebar__button');
const sidebarContainer = document.querySelector('.sidebar__container');
const sidebar = document.querySelector('.sidebar');

//Элементы добавления постов
const postTemplate = document
.querySelector('.post-template')
.content
.querySelector('.user-post');
const postsAddingForm = document.querySelector('.posts-card__form');
const postsCardTextarea = document.querySelector('.posts-card__textarea');
const postsList = document.querySelector('.posts-list');

//Гипнотические карточки
const animationCards = document.querySelectorAll('.animation-card');

//Элементы изменения цветовой темы
const themeGirlButton = document.getElementById('girl');
const themeBoyButton = document.getElementById('boy');
const signInPopupHeading = document.querySelector('.popup__heading_type_signin');
const header = document.querySelector('.header');
const buttons = document.querySelectorAll('.button');
const textElements = document.querySelectorAll('.card-text');
const counterNumbers = document.querySelectorAll('.counter__numbers');
const page = document.querySelector('.page');
let theme = 'boy';//Дефолтная тема



//ФУНКЦИИ


// Функция меняет формат даты рождения со страницы
// для дальнейшего заполнения ей инпута в логин-попап
function convertDateForInput (dateFromPage) {
  return dateFromPage.slice(0, dateFromPage.length - 5).split('.').reverse().join('-');
};

// Функция меняет формат даты рождения для отображения на странице
function convertDateOnPage (dateFromPopup) {
  return dateFromPopup.split('-').reverse().join('.') + ' года';
};

// Фн открывает попап
function openPopup(popup) {
  popup.classList.add('popup_type_opened');
};

//Фн закрывает попап
function closePopup(popup) {
  popup.classList.remove('popup_type_opened');
};

//Фн отменяет отправку формы и заполняет
//профайл из соответствующих инпутов попапа
//закрывает попап
function handleSignInPopupSubmit(event) {
  event.preventDefault();
  profileCardUserName.textContent = signInPopupNameInput.value;
  userBirhday.textContent = convertDateOnPage(birthdayInput.value);
  userEarsType.textContent = earsTypeInput.value;
  userTailType.textContent = tailTypeInput.value;
  closePopup(signInPopup);
};

//Фн увеличивает счетчики на странице
function addCounter (counter) {
  counter.textContent = Number(counter.textContent) + 1;
};

//Фн добавляет или удаляет класс с девчачей темой (пацанячая дефолтная)
function updateTheme() {
  //Находим посты, если он есть
  document.querySelectorAll('.user-post__username')
  .forEach(username =>{
    username.classList.toggle('girl-theme')
  });

  [signInPopup, header].forEach(el => el.classList.toggle('girl-theme'));

  buttons.forEach((el)=>{
    el.classList.toggle('girl-theme');
  });

  textElements.forEach((el)=>{
    el.classList.toggle('girl-theme');
  });

  counterNumbers.forEach((el)=>{
    el.classList.toggle('girl-theme');
  });

  page.classList.toggle('girl');
};


// ОБРАБОТЧИКИ


//Отслеживаем клик по кнопке регистрация
//Заполняем инпуты данными со страницы
//Конвертируем дату со страницы в нужный для инпута формат
//Открываем попап регистрации
signInButtons.forEach(button => {
  button.addEventListener('click', () => {
  signInPopupNameInput.value = profileCardUserName.textContent;
  earsTypeInput.value = userEarsType.textContent;
  tailTypeInput.value = userTailType.textContent;
  birthdayInput.value = convertDateForInput(userBirhday.textContent);
  openPopup(signInPopup);
  });
});

//Закрываем попап регистрации на кнопку Я
signInPopupForm.addEventListener('submit', handleSignInPopupSubmit);

//Закрываем попап регистрации на крестик
popupCloseButton.addEventListener('click', () => closePopup(signInPopup));

//Открываем попап по ссылке "забыли куда нажимать"
loginCardLinks.forEach(link => link.addEventListener('click', () => openPopup(forgetPopup)));

//Закрываем попап на кнопку Ниняю
forgetPopupButton.addEventListener('click', () => closePopup(forgetPopup));

//Открываем попап на кнопку "написать гавгав"
//добавляем счетчик
gavgavButton.addEventListener('click', () => {
  addCounter(gavgavCounter);
  openPopup(gavgavPopup);
});

//Закрываем попап на кнопку Дя
gavgavPopupButton.addEventListener('click', () => closePopup(gavgavPopup));

//Открываем видео на кнопку "сделать кусь"
//добавляем счетчик
kusButton.addEventListener('click', () => {
  addCounter(kusCounter);
  kusVideo.play();
  openPopup(kusPopup);
});

//Закрываемна крестик и останавливаем видео
kusPopupCloseButton.addEventListener('click', () => {
  kusVideo.pause();
  closePopup(kusPopup)
});

//Выдвигаем/прячем сайдбар по нажатию на лапку
sidebarOpenButton.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar_type_opened');
  sidebarOpenButton.classList.toggle('sidebar__button_type_active');
  sidebarContainer.classList.toggle('sidebar__container_type_opened');
});

//Прячем гипнотические карточки по клику на них
animationCards.forEach((el)=>{
  el.addEventListener('click',()=>{
    el.classList.add('hidden');
  });
});

//Меняем цветовую тему и заголовок в сайн ин попапе
//по нажатию на радиокнопки в попапе (мальчик/девочка)
themeGirlButton.addEventListener('click', () => {
  theme = 'girl';
  signInPopupHeading.textContent = 'Кто хорошая девочка?';
  updateTheme();
});

themeBoyButton.addEventListener('click', () => {
  theme = 'boy';
  signInPopupHeading.textContent = 'Кто хороший мальчик?';
  updateTheme();
});

//Обработчик публикации постов
//Отменяем отправку формы
//Клонируем содержимое темплейта
//Добавляем девчачую тему в имя отправителя,
//если она выбрана
//Вставляем текст из формы в сообщение
//Вставляем всю карточку с постом на страницу
//Очищием форму
postsAddingForm.addEventListener('submit', event => {
  event.preventDefault();
  const userPost =  postTemplate.cloneNode(true);
  const userPostText = userPost.querySelector('.user-post__text');
  const userPostUsername = userPost.querySelector('.user-post__username');

  if (theme === 'girl') {
    userPostUsername.classList.add('girl-theme');
  };

  userPostText.textContent = postsCardTextarea.value;
  postsList.prepend(userPost);
  postsAddingForm.reset();
});
