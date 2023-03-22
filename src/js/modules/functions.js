/* Check if browser supports webp */
export function isWebp() {
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Add class _webp or _no-webp for HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

export function showPopup() {

	let popup = document.getElementById('projectsPopup');
	let popupButton = document.querySelector('.projectsPopupButton');

	if(popupButton) {

		popupButton.addEventListener( 'click', () => {
			popup.classList.add('active');
			popup.classList.remove('hide');
		}, false );

		let closeButton = document.querySelector('[data-popup-close]');

		closeButton.addEventListener('click',  () => {
			popup.classList.remove('active');
			popup.classList.add('hide');
		});
	}
}