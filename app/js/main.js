document.addEventListener('DOMContentLoaded', function () {
	const menuList = document.querySelector('.menu__list')

	menuList.querySelectorAll('.menu-link').forEach(link => {
		link.addEventListener('click', () => {
			menuList.querySelectorAll('.menu-link').forEach(link => {
				link.classList.remove('active')
			})
			link.classList.toggle('active')
		})
	})
})