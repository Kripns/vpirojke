
//                              открываем модалку регистрации
//                              прячем крестик бэкграунда

const loginCardButtonTypeLogin = document.querySelector('.login-card__button_type_login');
const popupBg = document.querySelector('.popup-bg');
const loginPopup = document.querySelector('.login-popup');
const popupBgCloseButt = document.querySelector('.popup-bg__close-butt');

loginCardButtonTypeLogin.addEventListener('click',()=>{
  popupBg.classList.add('active');
  loginPopup.classList.add('active');
  popupBgCloseButt.classList.add('invisible');
})

//                              закрываем на кнопку Я

const loginPopupButton = document.querySelector('.login-popup__button');

loginPopupButton.addEventListener('click',()=>{
  popupBg.classList.remove('active');
  loginPopup.classList.remove('active');
  popupBgCloseButt.classList.remove('invisible');
})

//                             закрываем на крестик

const loginPopupCloseButt = document.querySelector('.login-popup__close-butt');

loginPopupCloseButt.addEventListener('click',()=>{
  popupBg.classList.remove('active');
  loginPopup.classList.remove('active');
  popupBgCloseButt.classList.remove('invisible');
})

//                              меняем тему на девчачую

const loginPopupRadioButtonTypeGirl = document.getElementById('girl');
const loginPopupHeading = document.querySelector('.login-popup__heading');
const page = document.querySelector('.page');
const button = document.querySelectorAll('.button');
const cardText = document.querySelectorAll('.card-text');
const counterNumbers = document.querySelectorAll('.counter__numbers');
const header = document.querySelector('.header');
const userPostUsername = document.querySelector('.user-post__username');

loginPopupRadioButtonTypeGirl.addEventListener('click',()=>{
  loginPopupHeading.textContent='Кто хорошая девочка?';
  page.classList.add('girl');
  loginPopup.classList.add('girl');
  header.classList.add('girl');
  userPostUsername.classList.add('girl');
  button.forEach((el)=>{
    el.classList.add('girl');
  })
  cardText.forEach((el)=>{
    el.classList.add('girl');
  })
  counterNumbers.forEach((el)=>{
    el.classList.add('girl');
  })
})

//                                меняем тему на пацанячую

const loginPopupRadioButtonTypeBoy = document.getElementById('boy');

loginPopupRadioButtonTypeBoy.addEventListener('click',()=>{
  loginPopupHeading.textContent='Кто хороший мальчик?';
  page.classList.remove('girl');
  loginPopup.classList.remove('girl');
  header.classList.remove('girl');
  userPostUsername.classList.remove('girl');
  button.forEach((el)=>{
    el.classList.remove('girl');
  })
  cardText.forEach((el)=>{
    el.classList.remove('girl');
  })
  counterNumbers.forEach((el)=>{
    el.classList.remove('girl');
  })
})

//                    открываем модалку по ссылке "забыли куда нажимать"
//                    прячем крестик бэкграунда

const loginCardLink = document.querySelector('.login-card__link');
const linkPopup = document.querySelector('.link-popup');

loginCardLink.addEventListener('click',()=>{
  popupBg.classList.add('active');
  linkPopup.classList.add('active');
  popupBgCloseButt.classList.add('invisible');
})

//                    закрываем модалку на кнопку ниняю

const linkPopupButton = document.querySelector('.link-popup__button');

linkPopupButton.addEventListener('click',()=>{
  popupBg.classList.remove('active');
  linkPopup.classList.remove('active');
  popupBgCloseButt.classList.remove('invisible');
})

//                      открываем модалку на кнопку гавгав
//                      добавляем счетчик
//                      прячем крестик бэкграунда

const avatarCardButtonGav = document.querySelector('.avatar-card__button_type_gav');
const gavgavPopup = document.querySelector('.gavgav-popup');
const counterNumbersTypeGavgav = document.querySelector('.counter__numbers_type_gavgav');

avatarCardButtonGav.addEventListener('click',()=>{
  popupBg.classList.add('active');
  gavgavPopup.classList.add('active');
  popupBgCloseButt.classList.add('invisible');
  counterNumbersTypeGavgav.textContent=Number(counterNumbersTypeGavgav.textContent)+1;
})

//                        закрываем на кнопку дя

const gavgavPopupButton = document.querySelector('.gavgav-popup__button');

gavgavPopupButton.addEventListener('click',()=>{
  popupBg.classList.remove('active');
  gavgavPopup.classList.remove('active');
  popupBgCloseButt.classList.remove('invisible');
})

//                          открываем видео на кнопку кусь
//                          добавляем счетчик

const avatarCardButtonKus = document.querySelector('.avatar-card__button_type_kus');
const kusVideo = document.querySelector('.kus-video');
const kusVideoContent = document.querySelector('.kus-video__content');
const counterNumbersTypeKus = document.querySelector('.counter__numbers_type_kus');

avatarCardButtonKus.addEventListener('click',()=>{
  popupBg.classList.add('active');
  kusVideo.classList.add('active');
  kusVideoContent.play();
  counterNumbersTypeKus.textContent=Number(counterNumbersTypeKus.textContent)+1;
})

//                        закрываем на крестик бэкграунда
//                        также прячем сайдбар логин-кард на этот крестик,
//                        когда он активен

const loginCard = document.querySelector('.login-card');
const sidebar = document.querySelector('.sidebar');

popupBgCloseButt.addEventListener('click',()=>{
  popupBg.classList.remove('active');
  kusVideo.classList.remove('active');
  kusVideoContent.pause();
  if(popupBg.classList.contains('sidebar-active')){
    popupBg.classList.remove('sidebar-active');
  }
  if(loginCard.classList.contains('active')){
    loginCard.classList.remove('active');
  }
  if(sidebar.classList.contains('active')){
    sidebar.classList.remove('active');
  }
})

//                          нажимаем на кнопку с лапкой(sidebar) и
//                          выдвигаем сайдбар логин-кард

sidebar.addEventListener('click',()=>{
  sidebar.classList.toggle('active');
  popupBg.classList.toggle('sidebar-active');
  loginCard.classList.toggle('active');
})

//                          прячем гипнотические карточки по клику на них

const animationCard = document.querySelectorAll('.animation-card');

animationCard.forEach((el)=>{
  el.addEventListener('click',()=>{
    el.classList.add('hidden');
  })
})

//                          "публикуем" пост нажав на кнопку Да

const postsCardButton = document.querySelector('.posts-card__button');
const userPost = document.querySelector('.user-post');

postsCardButton.addEventListener('click',()=>{
  userPost.classList.add('active');
})


