'use strict';
//lesson-5.1: модальное окно.

const modal=document.querySelector('.wrap');
const closeBtn=document.querySelector('span');
const showBtn=document.querySelector('button');

closeBtn.addEventListener('click', function(){modal.classList.add('hidden');})
showBtn.addEventListener('click', function(){modal.classList.remove('hidden');})


const buttons=document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', function(event){
        handleClick(event);
    });
});

function handleClick(clickedButtonEvent) {
    const cardNode=clickedButtonEvent.target.parentNode;

    const card={
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button'),
    }

    const textOnButton=card.button.innerText;
    if(textOnButton==='Подробнее') {
        showMoreText(card);
    } else if(textOnButton==='Отмена') {
        hideMoreText(card);
    }
}
function hideMoreText(card) {
    card.img.style.display='block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText='Подробнее';
}

function showMoreText(card) {
    card.img.style.display='none';
    const text='lorem ipsum ipsumm';
    card.productName.insertAdjacentHTML('afterend',`<div class="desc">${text}</div>`);
    card.button.innerText='Отмена';
}