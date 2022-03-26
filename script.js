let loginPopupBg = document.querySelector('.login-popup-bg');
let loginPopup = document.querySelector('.login-popup');
let openPopupButton = document.querySelector('.create');
let closePopupButton = document.querySelector('.closepu');
let loginQuestPopupBg = document.querySelector('.login-quest-popup-bg');
let loginQuest = document.querySelector('.login-quest');
let loginQuestPopup = document.querySelector('.login-quest-popup');
let loginQuestPopupButton = document.querySelector('.login-quest-popup-button');
let avatarButtonKus = document.querySelector('.kus');
let kusNumbers = document.querySelector('.kus-numbers');
let kusVideoBg = document.querySelector('.kus-video-bg');
let kusVideo = document.querySelector('.kus-video');
let gavPopupBg = document.querySelector('.gav-popup-bg');
let gavPopup = document.querySelector('.gav-popup');
let gavPopupButton = document.querySelector('.gav-popup-button');
let avatarButtonGav = document.querySelector('.gav');
let gavNumbers = document.querySelector('.gav-numbers');


openPopupButton.addEventListener('click',()=>{
    loginPopupBg.classList.add('activ');
    loginPopup.classList.add('activ');
})

closePopupButton.addEventListener('click', ()=>{
    loginPopupBg.classList.remove('activ');
    loginPopup.classList.remove('activ');
})

loginQuest.addEventListener('click', ()=>{
  loginQuestPopupBg.classList.add('activ');
  loginQuestPopup.classList.add('activ');
})

loginQuestPopupButton.addEventListener('click', ()=>{
  loginQuestPopupBg.classList.remove('activ');
  loginQuestPopup.classList.remove('activ');
})

avatarButtonKus.addEventListener('click', ()=>{
  kusVideoBg.hidden=false;
  kusNumbers.textContent=Number(kusNumbers.textContent)+1;
  kusVideoBg.classList.add('activ');
  kusVideo.play();
  setTimeout(()=>kusVideoBg.hidden=true, 19000);
})

avatarButtonGav.addEventListener('click', ()=>{
  gavNumbers.textContent=Number(gavNumbers.textContent)+1;
  gavPopupBg.classList.add('activ');
  gavPopup.classList.add('activ');
})

gavPopupButton.addEventListener('click', ()=>{
  gavPopupBg.classList.remove('activ');
  gavPopup.classList.remove('activ');
})