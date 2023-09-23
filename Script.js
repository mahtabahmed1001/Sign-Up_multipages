const wrapper=document.querySelector('.container');
const btnPopup=document.querySelector('.login-popup');
iconClose=document.querySelector('.icon-close');
const loginLink=document.querySelector('.login');
const registerLink=document.querySelector('.sign-up');

const registration=document.querySelector('.registration');

const firstNext=document.querySelector('.nxt1');
const secNext=document.querySelector('.nxt2');
const thrNext=document.querySelector('.nxt3');
const frNext=document.querySelector('.nxt4');

const firstBack=document.querySelector('.bck1');
const secBack=document.querySelector('.btn_bck');
const thrBack=document.querySelector('.bck3');





btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

// function//

firstNext.addEventListener('click', ()=> {
    registration.style.marginRight = '630px';
});


secNext.addEventListener('click', ()=> {
    registration.style.marginRight = '1260px';
});

thrNext.addEventListener('click', ()=> {
    registration.style.marginRight = '1890px';
});

frNext.addEventListener('click', ()=> {
    registration.style.marginRight = '0';
});


firstBack.addEventListener('click', ()=>{
    registration.style.marginRight ='0';
});

secBack.addEventListener('click', ()=>{
    registration.style.marginRight='630px';
});

thrBack.addEventListener('click', ()=>{
    registration.style.marginRight ='1260px';
});