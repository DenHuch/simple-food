document.addEventListener('DOMContentLoaded', function () {
	const menuList = document.querySelector('.menu__list')
	const categoriesFilter = document.querySelector('.filter')

	const mixer = mixitup('.categories__list');

	menuList.querySelectorAll('.menu-link').forEach(link => {
		link.addEventListener('click', () => {
			menuList.querySelectorAll('.menu-link').forEach(link => {
				link.classList.remove('active')
			})
			link.classList.toggle('active')
		})
	})

	categoriesFilter.querySelectorAll('.filter__btn').forEach(link => {
		link.addEventListener('click', () => {
			categoriesFilter.querySelectorAll('.filter__btn').forEach(link => {
				link.classList.remove('active')
			})
			link.classList.toggle('active')
		})
	})
})