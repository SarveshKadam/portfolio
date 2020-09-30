
window.noZensmooth = true;

document.querySelector('.toggle-btn').addEventListener('click',()=>{
    document.querySelector('.header--main-nav').classList.toggle('show-links');
})

document.addEventListener('scroll',(event)=>{
	var navbar = document.querySelector('nav');
	navbar.classList.toggle("sticky",document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 );
	console.log(event.scrollTop);
})


document.querySelector('.nav-opt').addEventListener('click',()=>{
    document.querySelector('.toggle-btn').click()
})
