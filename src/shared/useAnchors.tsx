
export default (history: any, timeout: number = 1000, mainSelector: string = 'right-side') => {
	let observer: any
	let timeoutId: any

	if (!(window as any).MutationObserver) {
		return
	}

	const reset = () => {
		if (timeoutId) {
			clearTimeout(timeoutId)

			timeoutId = null
		}

		if (observer) {
			observer.disconnect()
		}
	}

	const createScrollToElement = (id: string) => {
		return () => {
			const element = document.getElementById(id)

			if (element) {

				const y = element.getBoundingClientRect().top + window.pageYOffset - 60;

				window.scrollTo({top: y})

				reset()

				return true
			}

			return false
		}
	}

	function scroll(location: any) {

		if (typeof location.hash !== 'string') {
			return
		}

		const elementId = location.hash.slice(1)
		
		if (!elementId) {
			const contentArea = document.getElementById(mainSelector)
			if (contentArea) {
				contentArea.scrollTop = 0
			}
			return
		}

		const scrollToElement = createScrollToElement(elementId)

		setTimeout(() => {
			if (scrollToElement()) {
				return
			}

			observer = new MutationObserver(scrollToElement)

			observer.observe(document, {
				attributes: true,
				childList: true,
				subtree: true,
			})

			timeoutId = setTimeout(reset, timeout)
		})
	}

	history.listen((location: any) => {

		if (timeoutId) {
			reset()
		}
		
		scroll(location)
	})

	if (history) {
		if (timeoutId) {
			reset()
		}
		scroll(history.location);
	}

}


