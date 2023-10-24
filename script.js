'use strict';
{

    const open = document.querySelectorAll('.open');
    const answer = document.querySelectorAll('.answer');
    const close = document.querySelectorAll('.close');

        open.forEach(function(dt, index){
            dt.addEventListener('click', e => {
                answer[index].classList.toggle('show');
                close[index].classList.toggle('view');
                dt.classList.toggle('delete');
            })

        })
}   
