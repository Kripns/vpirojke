let loginCardButtonTypeLogin = document.querySelector('.login-card__button_type_login');
let popupBg = document.querySelector('.popup-bg');
let loginPopup = document.querySelector('.login-popup');
let popupBgCloseButt = document.querySelector('.popup-bg__close-butt');
let loginPopupButton = document.querySelector('.login-popup__button');
let loginPopupCloseButt = document.querySelector('.login-popup__close-butt');
let loginPopupRadioButtonTypeGirl = document.getElementById('girl');
let loginPopupHeading = document.querySelector('.login-popup__heading');
let loginPopupRadioButtonTypeBoy = document.getElementById('boy');
let page = document.querySelector('.page');
let button = document.querySelectorAll('.button');
let cardText = document.querySelectorAll('.card-text');
let counterNumbers = document.querySelectorAll('.counter__numbers');
let header = document.querySelector('.header');
let loginCardLink = document.querySelector('.login-card__link');
let linkPopup = document.querySelector('.link-popup');
let linkPopupButton = document.querySelector('.link-popup__button');
let avatarCardButtonGav = document.querySelector('.avatar-card__button_type_gav');
let gavgavPopup = document.querySelector('.gavgav-popup');
let gavgavPopupButton = document.querySelector('.gavgav-popup__button');
let avatarCardButtonKus = document.querySelector('.avatar-card__button_type_kus');
let kusVideo = document.querySelector('.kus-video');
let kusVideoContent = document.querySelector('.kus-video__content');
let counterNumbersTypeKus = document.querySelector('.counter__numbers_type_kus');
let counterNumbersTypeGavgav = document.querySelector('.counter__numbers_type_gavgav');
let animationCard = document.querySelectorAll('.animation-card');
let postsCardButton = document.querySelector('.posts-card__button');
let userPost = document.querySelector('.user-post');
let userPostUsername = document.querySelector('.user-post__username');
let sidebar = document.querySelector('.sidebar');
let sidebarActive = document.querySelector('.sidebar.active');
let loginCard = document.querySelector('.login-card');




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

loginCardLink.addEventListener('click',()=>{
  popupBg.classList.add('active');
  linkPopup.classList.add('active');
  popupBgCloseButt.classList.add('invisible');
})

linkPopupButton.addEventListener('click',()=>{
  popupBg.classList.remove('active');
  linkPopup.classList.remove('active');
  popupBgCloseButt.classList.remove('invisible');
})

avatarCardButtonGav.addEventListener('click',()=>{
  popupBg.classList.add('active');
  gavgavPopup.classList.add('active');
  popupBgCloseButt.classList.add('invisible');
  counterNumbersTypeGavgav.textContent=Number(counterNumbersTypeGavgav.textContent)+1;
})

gavgavPopupButton.addEventListener('click',()=>{
  popupBg.classList.remove('active');
  gavgavPopup.classList.remove('active');
  popupBgCloseButt.classList.remove('invisible');
})

avatarCardButtonKus.addEventListener('click',()=>{
  popupBg.classList.add('active');
  kusVideo.classList.add('active');
  kusVideoContent.play();
  counterNumbersTypeKus.textContent=Number(counterNumbersTypeKus.textContent)+1;
})

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

animationCard.forEach((el)=>{
  el.addEventListener('click',()=>{
    el.classList.add('hidden');
  })
})

postsCardButton.addEventListener('click',()=>{
  userPost.classList.add('active');
})

sidebar.addEventListener('click',()=>{
  sidebar.classList.toggle('active');
  popupBg.classList.toggle('sidebar-active');
  loginCard.classList.toggle('active');
})

