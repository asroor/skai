
const vacanciContainers: NodeListOf<HTMLElement> = document.querySelectorAll('.vacanci-container')

const tabBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.tab-btn')

tabBtns.forEach((button: HTMLButtonElement) => {
	button.addEventListener('click', () => {
		tabBtns.forEach((button: HTMLButtonElement) => {
			button.classList.remove('active')
		})
		button.classList.add('active')
	})
})

function toggleVacanci(n: number): void {
	vacanciContainers.forEach((item: HTMLElement) => {
		let itemAttr = item.getAttribute('vacanci-data')
		if (n == Number(itemAttr)) {
			vacanciContainers.forEach((item: HTMLElement) => {
				item.classList.remove('active')
			})
			item.classList.add('active')
		}
	})
}


const header: HTMLDivElement | null = document.querySelector('.header-wrapper')

window.addEventListener('scroll', () => {
	if (window.scrollY >= 10) {
		header!.style.backgroundColor = '#fff'
	} else {
		header!.style.background = 'linear-gradient(90deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.60) 100%)'
	}
})