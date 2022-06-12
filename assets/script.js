const toggleNav = document.querySelector('header .toggle-nav')
const headerNav = document.querySelector('header nav')

toggleNav.addEventListener('click', () => {
	toggleNav.classList.toggle('change')
	headerNav.classList.toggle('showing')
})

window.addEventListener('load', () => {
	document.body.classList.remove('preload')
})
