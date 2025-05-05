document.addEventListener('DOMContentLoaded', function () {
	const menuList = document.querySelector('.menu__list')
	const categoriesFilter = document.querySelector('.categories__filter')

	menuList.querySelectorAll('.menu-link').forEach(link => {
		link.addEventListener('click', () => {
			menuList.querySelectorAll('.menu-link').forEach(link => {
				link.classList.remove('active')
			})
			link.classList.toggle('active')
		})
	})

	categoriesFilter.querySelectorAll('.filter-btn').forEach(link => {
		link.addEventListener('click', () => {
			categoriesFilter.querySelectorAll('.filter-btn').forEach(link => {
				link.classList.remove('active')
			})
			link.classList.toggle('active')
		})
	})
})