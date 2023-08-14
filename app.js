const navEvent = document.querySelector('#navEvent')
const nav = document.querySelector('#nav')

navEvent.children[0].addEventListener('click',function(){
    navEvent.classList.toggle('item2s')//change svg style
    nav.classList.toggle('nav2')
})