let loginCardButtonTypeLogin = document.querySelector('.login-card__button_type_login');
let popupBg = document.querySelector('.popup-bg');
let loginPopup = document.querySelector('.login-popup');
let popupBgCloseButt = document.querySelector('.popup-bg__close-butt');
let loginPopupButton = document.querySelector('.login-popup__button');
let loginPopupCloseButt = document.querySelector('.login-popup__close-butt');
let loginPopupRadioButtonTypeGirl = document.getElementById('girl');
let loginPopupHeading = document.querySelector('.login-popup__heading');
let loginPopupRadioButtonTypeBoy = document.getElementById('boy');
let content = document.querySelector('.content');
let button = document.querySelectorAll('.button');
let textInCards = document.querySelectorAll('.text-in-cards');
let leftColumn = document.querySelector('.left-column');
let quantCardNumbers = document.querySelectorAll('.quant-card__numbers');
let serchFormInput = document.querySelector('.search-form__input');
let linkLogoPic = document.querySelector('.link__logo-pic');
let loginCardLink = document.querySelector('.login-card__link');
let linkPopupPlaceLoginCard = document.querySelector('.link-popup_place_login-card');
let popupButtonPlaceLink = document.querySelector('.popup__button_place_link');
let avatarCardButtonGav = document.querySelector('.avatar-card__button_type_gav');
let avatarCardPopupGavgav = document.querySelector('.avatar-card-popup_gavgav');
let popupButtonPlaceAvatarCard = document.querySelector('.popup__button_place_avatar-card');
let avatarCardButtonKus = document.querySelector('.avatar-card__button_type_kus');
let avatarCardVideo = document.querySelector('.avatar-card-video');
let avatarCardVideoContent = document.querySelector('.avatar-card-video__content');
let quantCardNumbersTypeKus = document.querySelector('.quant-card__numbers_type_kus');
let quantCardNumbersTypeGavgav = document.querySelector('.quant-card__numbers_type_gavgav');



loginCardButtonTypeLogin.addEventListener('click',()=>{
  popupBg.classList.add('active');
  loginPopup.classList.add('active');
  popupBgCloseButt.classList.add('invisible');
})

loginPopupButton.addEventListener('click',()=>{
  popupBg.classList.remove('active');
  loginPopup.classList.remove('active');
  popupBgCloseButt.classList.remove('invisible');
})

loginPopupCloseButt.addEventListener('click',()=>{
  popupBg.classList.remove('active');
  loginPopup.classList.remove('active');
  popupBgCloseButt.classList.remove('invisible');
})

loginPopupRadioButtonTypeGirl.addEventListener('click',()=>{
  loginPopupHeading.textContent='Кто хорошая девочка?';
  content.classList.add('girl');
  loginPopup.classList.add('girl');
  serchFormInput.classList.add('girl');
  linkLogoPic.classList.add('girl');
  button.forEach((el)=>{
    el.classList.add('girl');
  })
  textInCards.forEach((el)=>{
    el.classList.add('girl');
  })
  quantCardNumbers.forEach((el)=>{
    el.classList.add('girl');
  })
})

loginPopupRadioButtonTypeBoy.addEventListener('click',()=>{
  loginPopupHeading.textContent='Кто хороший мальчик?';
  content.classList.remove('girl');
  loginPopup.classList.remove('girl');
  serchFormInput.classList.remove('girl');
  linkLogoPic.classList.remove('girl');
  button.forEach((el)=>{
    el.classList.remove('girl');
  })
  textInCards.forEach((el)=>{
    el.classList.remove('girl');
  })
  quantCardNumbers.forEach((el)=>{
    el.classList.remove('girl');
  })
})

loginCardLink.addEventListener('click',()=>{
  popupBg.classList.add('active');
  linkPopupPlaceLoginCard.classList.add('active');
  popupBgCloseButt.classList.add('invisible');
})

popupButtonPlaceLink.addEventListener('click',()=>{
  popupBg.classList.remove('active');
  linkPopupPlaceLoginCard.classList.remove('active');
  popupBgCloseButt.classList.remove('invisible');
})

avatarCardButtonGav.addEventListener('click',()=>{
  popupBg.classList.add('active');
  avatarCardPopupGavgav.classList.add('active');
  popupBgCloseButt.classList.add('invisible');
  quantCardNumbersTypeGavgav.textContent=Number(quantCardNumbersTypeGavgav.textContent)+1;
})

popupButtonPlaceAvatarCard.addEventListener('click',()=>{
  popupBg.classList.remove('active');
  avatarCardPopupGavgav.classList.remove('active');
  popupBgCloseButt.classList.remove('invisible');
})

avatarCardButtonKus.addEventListener('click',()=>{
  popupBg.classList.add('active');
  avatarCardVideo.classList.add('active');
  avatarCardVideoContent.play();
  quantCardNumbersTypeKus.textContent=Number(quantCardNumbersTypeKus.textContent)+1;
})

popupBgCloseButt.addEventListener('click',()=>{
  popupBg.classList.remove('active');
  avatarCardVideo.classList.remove('active');
  avatarCardVideoContent.pause();
})

