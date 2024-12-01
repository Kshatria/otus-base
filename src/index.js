function component() {
	const element = document.createElement('main');
	element.innerHTML = 'Работает';
	return element;
}

document.body.appendChild(component());