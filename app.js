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

//collapse content
const collapse = document.querySelectorAll('.resume-card-content')
const activebg = document.querySelectorAll('.resume-card')

// collapse[0].nextElementSibling.style.maxHeight = collapse[0].nextElementSibling.scrollHeight + "px";
// activebg[0].classList.add('active')

// for(let i = 0; i < collapse.length; i++){
//     collapse[i].addEventListener('click', function(){
//         if(window.innerWidth < 600){/*網頁寬度小於600px才作用*/
//             activebg[i].classList.toggle('active')
//             collapse[i].children[3].classList.toggle('click')
//             let content = this.nextElementSibling;
//             if(content.style.maxHeight){/*由於是直接作用於內聯，css的max-height:0;不會影響*/
//                 content.style.maxHeight = null;
//             }else{
//                 content.style.maxHeight = content.scrollHeight + "px";
//             }
//         }   
//     })
// }

for(let i = 0; i < collapse.length; i++){
    activebg[i].addEventListener('click', function(){
        activebg[i].classList.toggle('active')
        collapse[i].nextElementSibling.classList.toggle('resume-card-content3');
        collapse[i].children[3].classList.toggle('click')
    })
}