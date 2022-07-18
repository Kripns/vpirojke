
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

//Элементы попапа просмотра фоток
const picsCardItems = Array.from(document.querySelectorAll('.pics-card__item'));
const imagePopup = document.querySelector('.popup-type-image');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');
const imageTemplate = document.querySelector('.image-template').content;
const popupFullsizeImage = imagePopup.querySelector('.popup__fullsize-image');
const popupThumbContainer = imagePopup.querySelector('.popup__thumb-container');

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


// Фн открывает попап
function openPopup(popup) {
  popup.classList.add('popup_type_opened');
  document.addEventListener('keydown', closePopupByEscape);
  popup.addEventListener('mousedown', closePopupByOverlay);
};

//фн закрывает попап на эскейп
function closePopupByEscape(evt) {
  evt.key === 'Escape'
  ?closePopup(document.querySelector('.popup_type_opened'))
  :null;
};

//фн закрывает попап по клику на оверлэй
function closePopupByOverlay(evt) {
  evt.target.classList.contains('popup_type_opened')
  ?closePopup(evt.target)
  :null;
};

//Фн закрывает попап, удаляет слушатель эскейпа
function closePopup(popup) {
  if(imagePopup) { removeThumbs() };
  if(kusPopup) { kusVideo.pause() }
  popup.classList.remove('popup_type_opened');
  document.removeEventListener('keydown', closePopupByEscape);
};

//фн удаляет thumbs в имэйджПопапе
function removeThumbs() {
  imagePopup.querySelectorAll('.popup__thumb-element').forEach(image => image.remove());
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

// Функция меняет формат даты рождения со страницы
// для дальнейшего заполнения ей инпута в логин-попап
function convertDateForInput (dateFromPage) {
  return dateFromPage.slice(0, dateFromPage.length - 5).split('.').reverse().join('-');
};

// Функция меняет формат даты рождения для отображения на странице
function convertDateOnPage (dateFromPopup) {
  return dateFromPopup.split('-').reverse().join('.') + ' года';
};

//Фн увеличивает счетчики на странице
function addCounter (counter) {
  counter.textContent = Number(counter.textContent) + 1;
};

//Фн меняет тему на девчачую и обратно (пацанячая дефолтная)
function updateTheme() {
  document.querySelectorAll('.user-post__username')
  .forEach(userName => toggleGirlTheme(userName));

  [signInPopup, header].forEach(el => toggleGirlTheme(el));

  buttons.forEach((el)=> toggleGirlTheme(el));

  textElements.forEach((el)=> toggleGirlTheme(el));

  counterNumbers.forEach((el)=> toggleGirlTheme(el));

  page.classList.toggle('girl');
};

//фн меняет класс темы
function toggleGirlTheme(element) {
  element.classList.toggle('girl-theme');
};

//фн управляет открытием имэйджПопапа
function handleImagePopupOpening(evt) {
  setFullsizeImageData(evt.target);
  picsCardItems.forEach(image => renderThumbImage(image));
  openPopup(imagePopup);
};

//фн заполняет ссылку и альт картинке в имэйджПопапе
function setFullsizeImageData(image) {
  popupFullsizeImage.src = transformImageUrl(image.src);
  popupFullsizeImage.alt = image.alt;
};

//Фн изменяет ссылку на картинку в имэйдж попапе
//чтоб загружалась большая фотка вместо маленькой
function transformImageUrl(url) {
  const splitedUrl = url.split('/');
  splitedUrl[splitedUrl.length - 1] = `big${splitedUrl[splitedUrl.length - 1]}`;
  return splitedUrl.join('/');
};

//фн рендерит thumbs в имэйджПопапе
function renderThumbImage(image) {
  popupThumbContainer.prepend(createThumbImage(image));
};

//фн создает thumb из темплейта
function createThumbImage(image) {
  const popupThumbImage = imageTemplate.querySelector('.popup__thumb-element').cloneNode(true);
  popupThumbImage.src = image.src;
  popupThumbImage.addEventListener('click', () => setFullsizeImageData(popupThumbImage));
  return popupThumbImage;
};


// ОБРАБОТЧИКИ


//ПОПАПЫ

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

//Закрываем на крестик
kusPopupCloseButton.addEventListener('click', () => {
  closePopup(kusPopup)
});

//Открываем попап с фотками по нажатию на картинку из галереи
picsCardItems.forEach(image => image.addEventListener('click', evt => handleImagePopupOpening(evt)))

//закрываем попап на крестик
imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));


//САЙДБАР

//Выдвигаем/прячем сайдбар по нажатию на лапку
sidebarOpenButton.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar_type_opened');
  sidebarOpenButton.classList.toggle('sidebar__button_type_active');
  sidebarContainer.classList.toggle('sidebar__container_type_opened');
});


//ГИПНОТИЧЕСКИЕ КАРТОЧКИ

//Прячем гипнотические карточки по клику на них
animationCards.forEach((el)=>{
  el.addEventListener('click',()=>{
    el.classList.add('hidden');
  });
});


//ИЗМЕНЕНИЕ ТЕМЫ

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


//ПУБЛИКАЦИЯ ПОСТОВ

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


