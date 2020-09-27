
window.noZensmooth = true;

document.querySelector('.toggle-btn').addEventListener('click',()=>{
    document.querySelector('.header--main-nav').classList.toggle('show-links');
})

// document.addEventListener('scroll',(event)=>{
// 	var navbar = document.querySelector('nav');
// 	navbar.classList.toggle("sticky",document.body.scrollTop > 670 || document.documentElement.scrollTop > 670 );
// 	console.log(event.scrollTop);
// })

