
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
const loginCardLink = document.querySelector('.login-card__link');
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



// Функция меняет формат даты рождения со страницы
// для дальнейшего заполнения ей инпута в логин-попап
function convertDateForInput (dateFromPage) {
  return dateFromPage.slice(0, dateFromPage.length - 5).split('.').reverse().join('-');
};

// Функция меняет формат даты рождения для отображения на странице
function convertDateOnPage (dateFromPopup) {
  return dateFromPopup.split('-').reverse().join('.') + ' года';
};

function openPopup(popup) {
  popup.classList.add('popup_type_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_type_opened');
};

function handleSignInPopup(event) {
  event.preventDefault();
  profileCardUserName.textContent = signInPopupNameInput.value;
  userBirhday.textContent = convertDateOnPage(birthdayInput.value);
  userEarsType.textContent = earsTypeInput.value;
  userTailType.textContent = tailTypeInput.value;
  closePopup(signInPopup);
};

function addCounter (counter) {
  counter.textContent = Number(counter.textContent) + 1;
};


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
  })
});

//Закрываем попап регистрации на кнопку Я
signInPopupForm.addEventListener('submit', handleSignInPopup);

//Закрываем попап регистрации на крестик
popupCloseButton.addEventListener('click', () => closePopup(signInPopup));

//Открываем попап по ссылке "забыли куда нажимать"
loginCardLink.addEventListener('click', () => openPopup(forgetPopup));

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






//TODO сделать сайдбар
// сделать тему


//                        Закрываем на крестик бэкграунда
//                        Также прячем сайдбар логин-кард на этот крестик,
//                        Когда он активен

const loginCard = document.querySelector('.login-card');
const sidebarOpenButton = document.querySelector('.sidebar__button');
const sidebarContainer = document.querySelector('.sidebar__container');
const sidebar = document.querySelector('.sidebar');

sidebarOpenButton.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar_type_opened');
  sidebarOpenButton.classList.toggle('sidebar__button_type_active');
  sidebarContainer.classList.toggle('sidebar__container_type_opened');
});



// popupBgCloseButt.addEventListener('click',()=>{
//   [popupBg, kusVideo].forEach(el => el.classList.remove('active'));
//   kusVideoContent.pause();
//   if(popupBg.classList.contains('sidebar-active')) {
//     popupBg.classList.remove('sidebar-active');
//   };
//   if(loginCard.classList.contains('active')) {
//     loginCard.classList.remove('active');
//   };
//   if(sidebar.classList.contains('active')) {
//     sidebar.classList.remove('active');
//   };
// });







//                             Меняем цветовую тему

// Находим темплейт
// Объявляем переменную, присваиваем ей значение дефолтной темы

const postTemplate = document
.querySelector('.post-template')
.content
.querySelector('.user-post');

let theme = 'boy';

// Объявляем функцию смены тем
// Находим все элементы к которым темы будут применяться
// Добавляем или удаляем класс с девчачей темой (пацанячая дефолтная)
function updateTheme() {
  const userPostUsernames = document.querySelectorAll('.user-post__username');
  userPostUsernames.forEach(userPostUsername =>{
    userPostUsername.classList.toggle('girl')
  });

  const page = document.querySelector('.page');
  const header = document.querySelector('.header');
  [page, loginPopup, header].forEach(el => el.classList.toggle('girl'));

  const button = document.querySelectorAll('.button');
  button.forEach((el)=>{
    el.classList.toggle('girl');
  });

  const cardText = document.querySelectorAll('.card-text');
  cardText.forEach((el)=>{
    el.classList.toggle('girl');
  });

  const counterNumbers = document.querySelectorAll('.counter__numbers');
  counterNumbers.forEach((el)=>{
    el.classList.toggle('girl');
  });
};

//                      Меняем тему на девчачую

// Находим радиокнопку выбора девчачей темы
// и заголовок в логин-попап (он меняется по нажатию на радиокнопки)
const loginPopupRadioButtonTypeGirl = document.getElementById('girl');
const loginPopupHeading = document.querySelector('.login-popup__heading');

// Отслеживаем клик по кнопке
// Меняем значение темы в переменной
// Меняем заголовок в логин-попап
// Вызываем функцию смены темы
loginPopupRadioButtonTypeGirl.addEventListener('click',()=>{
  theme = 'girl';
  loginPopupHeading.textContent='Кто хорошая девочка?';
  updateTheme();
});

//                      Меняем тему на пацанячую

// Находим радиокнопку выбора пацанячей темы
const loginPopupRadioButtonTypeBoy = document.getElementById('boy');

// Отслеживаем клик по кнопке
// Меняем значение темы в переменной
// Меняем заголовок в логин-попап
// Вызываем функцию смены темы
loginPopupRadioButtonTypeBoy.addEventListener('click',()=>{
  theme = 'boy';
  loginPopupHeading.textContent='Кто хороший мальчик?';
  updateTheme();
});






//                          Нажимаем на кнопку с лапкой(sidebar) и
//                          выдвигаем сайдбар логин-кард

// sidebar.addEventListener('click',()=>{
//   sidebar.classList.toggle('active');
//   popupBg.classList.toggle('sidebar-active');
//   loginCard.classList.toggle('active');
// })

//                          Прячем гипнотические карточки по клику на них

const animationCard = document.querySelectorAll('.animation-card');

animationCard.forEach((el)=>{
  el.addEventListener('click',()=>{
    el.classList.add('hidden');
  });
});


//                      Публикуем пост нажав на кнопку Отправить


// Находим кнопку Отправить
const postsCardButton = document.querySelector('.posts-card__button');

// Отслеживаем клик по кнопке
// Клонируем содержимое темплейта
// Добавляем  девчачую тему в имя отправителя,
// если она выбрана
// Вставляем текст из поля ввода в сообщение
// Вставляем всю карточку с постом на страницу
// Очищием поле ввода
postsCardButton.addEventListener('click', () => {
  const userPost =  postTemplate.cloneNode(true);
  const postsCardTextarea = document.querySelector('.posts-card__textarea');
  const userPostText = userPost.querySelector('.user-post__text');
  const userPostUsername = userPost.querySelector('.user-post__username');
  const postsList = document.querySelector('.posts-list');

  if (theme === 'girl') {
    userPostUsername.classList.add('girl');
  };

  userPostText.textContent = postsCardTextarea.value;
  postsList.prepend(userPost);
  postsCardTextarea.value = '';
});
