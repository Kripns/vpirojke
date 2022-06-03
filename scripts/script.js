
//                          Открываем модалку регистрации
//                          Прячем крестик бэкграунда
//                          Заполняем инпуты данными со страницы
//                          Конвертируем дату в нужный для инпута формат

const loginCardButtonTypeLogin = document.querySelector('.login-card__button_type_login');
const popupBg = document.querySelector('.popup-bg');
const loginPopup = document.querySelector('.login-popup');
const popupBgCloseButt = document.querySelector('.popup-bg__close-butt');

const loginPopupUserName = document.getElementById('name');
const profileCardUserName = document.querySelector('.profile-card__user-name');

const loginPopupBirthday = document.getElementById('birthday');
const infoCardItemTypeBirhday = document.querySelector('.info-card__item_type_birhday');

const loginPopupEars = document.getElementById('ears');
const infoCardItemTypeEars = document.querySelector('.info-card__item_type_ears');

const loginPopupTail = document.getElementById('tail');
const infoCardItemTypeTail = document.querySelector('.info-card__item_type_tail');

// Функция меняет формат даты рождения со страницы
// для дальнейшего заполнения ей инпута в логин-попап
function dateFormatChangerForPopup (dateFromPage) {
  return dateFromPage.slice(0, dateFromPage.length - 5).split('.').reverse().join('-');
};


function openLoginPopup() {
  loginPopupUserName.value = profileCardUserName.textContent;
  loginPopupBirthday.value = dateFormatChangerForPopup(infoCardItemTypeBirhday.textContent);
  loginPopupEars.value = infoCardItemTypeEars.textContent;
  loginPopupTail.value = infoCardItemTypeTail.textContent;

  [popupBg, loginPopup].forEach(el => el.classList.add('active'));
  popupBgCloseButt.classList.add('invisible');
};

//отслеживаем клик по кнопке регистрация

loginCardButtonTypeLogin.addEventListener('click',openLoginPopup);


//                           Закрываем на кнопку Я
//                           Заполняем профиль данными из формы
//                           Меняем формат отображения даты на странице

const loginPopupButton = document.querySelector('.login-popup__button');

// Функция меняет формат даты рождения для отображения на странице
function dateFormatChangerForPage (dateFromPopup) {
  return dateFromPopup.split('-').reverse().join('.') + ' года';
};



function closeLoginPopup() {
  profileCardUserName.textContent = loginPopupUserName.value;
  infoCardItemTypeBirhday.textContent = dateFormatChangerForPage(loginPopupBirthday.value);
  infoCardItemTypeEars.textContent = loginPopupEars.value;
  infoCardItemTypeTail.textContent = loginPopupTail.value;

  [popupBg, loginPopup].forEach(el => el.classList.remove('active'));
  popupBgCloseButt.classList.remove('invisible');
};

//отслеживаем клик по кнопке Я
loginPopupButton.addEventListener('click', closeLoginPopup);


//                             Закрываем на крестик

const loginPopupCloseButt = document.querySelector('.login-popup__close-butt');

//отслеживаем клик по крестику
loginPopupCloseButt.addEventListener('click',()=>{
  [popupBg, loginPopup].forEach(el => el.classList.remove('active'));
  popupBgCloseButt.classList.remove('invisible');
});


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

//                    Открываем модалку по ссылке "забыли куда нажимать"
//                    Прячем крестик бэкграунда

const loginCardLink = document.querySelector('.login-card__link');
const linkPopup = document.querySelector('.link-popup');

loginCardLink.addEventListener('click',()=>{
  [popupBg, linkPopup].forEach(el => el.classList.add('active'));
  popupBgCloseButt.classList.add('invisible');
});

//                    Закрываем модалку на кнопку ниняю

const linkPopupButton = document.querySelector('.link-popup__button');

linkPopupButton.addEventListener('click',()=>{
  [popupBg, linkPopup].forEach(el => el.classList.remove('active'));
  popupBgCloseButt.classList.remove('invisible');
});

//                      Открываем модалку на кнопку гавгав
//                      Добавляем счетчик
//                      Прячем крестик бэкграунда

const avatarCardButtonGav = document.querySelector('.avatar-card__button_type_gav');
const gavgavPopup = document.querySelector('.gavgav-popup');
const counterNumbersTypeGavgav = document.querySelector('.counter__numbers_type_gavgav');

avatarCardButtonGav.addEventListener('click',()=>{
  [popupBg, gavgavPopup].forEach(el => el.classList.add('active'));
  popupBgCloseButt.classList.add('invisible');
  counterNumbersTypeGavgav.textContent=Number(counterNumbersTypeGavgav.textContent)+1;
});

//                        Закрываем на кнопку дя

const gavgavPopupButton = document.querySelector('.gavgav-popup__button');

gavgavPopupButton.addEventListener('click',()=>{
  [popupBg, gavgavPopup].forEach(el => el.classList.remove('active'));
  popupBgCloseButt.classList.remove('invisible');
});

//                          Открываем видео на кнопку кусь
//                          Добавляем счетчик

const avatarCardButtonKus = document.querySelector('.avatar-card__button_type_kus');
const kusVideo = document.querySelector('.kus-video');
const kusVideoContent = document.querySelector('.kus-video__content');
const counterNumbersTypeKus = document.querySelector('.counter__numbers_type_kus');

avatarCardButtonKus.addEventListener('click',()=>{
  [popupBg, kusVideo].forEach(el => el.classList.add('active'));
  kusVideoContent.play();
  counterNumbersTypeKus.textContent = Number(counterNumbersTypeKus.textContent)+1;
});

//                        Закрываем на крестик бэкграунда
//                        Также прячем сайдбар логин-кард на этот крестик,
//                        Когда он активен

const loginCard = document.querySelector('.login-card');
const sidebar = document.querySelector('.sidebar');

popupBgCloseButt.addEventListener('click',()=>{
  [popupBg, kusVideo].forEach(el => el.classList.remove('active'));
  kusVideoContent.pause();
  if(popupBg.classList.contains('sidebar-active')) {
    popupBg.classList.remove('sidebar-active');
  };
  if(loginCard.classList.contains('active')) {
    loginCard.classList.remove('active');
  };
  if(sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
  };
});

//                          Нажимаем на кнопку с лапкой(sidebar) и
//                          выдвигаем сайдбар логин-кард

sidebar.addEventListener('click',()=>{
  sidebar.classList.toggle('active');
  popupBg.classList.toggle('sidebar-active');
  loginCard.classList.toggle('active');
})

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
