const buttonNode = document.querySelector('.js-button');
const contentNode = document.querySelector('.js-burger-content');
const burgerLinkNode = document.querySelector(".js-burger-link");
const bodyNode = document.querySelector('body');
const burgerNode = document.querySelector('.js-burger');

const BURGER_OPENED_CLASSNAME ='burger__open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn__open';
const BODY_FIXED_CLASSNAME = 'body__fixed';

buttonNode.addEventListener('click',toggleBurger);
burgerLinkNode.addEventListener('click',toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(contentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger(){
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    buttonNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}