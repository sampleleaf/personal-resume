//mobile nav button
const navEvent = document.querySelector('#navEvent')
const nav = document.querySelector('#nav')

navEvent.children[0].addEventListener('click',function(){
    navEvent.classList.toggle('item2s')//change svg style
    nav.classList.toggle('nav2')
    document.body.classList.toggle('scroll')
})

//go top button
const toTop = document.querySelector('#toTop')

window.onscroll = function(){ scrollFunction() }

function scrollFunction(){
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        toTop.style.visibility = "visible";
        toTop.style.opacity = "1"
    } else {
        toTop.style.visibility = "hidden";
        toTop.style.opacity = "0"
    }
}

toTop.addEventListener('click', function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})