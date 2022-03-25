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