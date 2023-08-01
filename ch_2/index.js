'use strict';

const emailRegex = /^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,6})/

const input = document.querySelector('input')
const icon = document.querySelector('.material-icons')


input.addEventListener('keyup', (e) => {

    const { value } = e.target
    if(emailRegex.test(value)){
        icon.parentElement.classList.add('valid')
    }else{
        icon.parentElement.classList.remove('valid')
    }
})