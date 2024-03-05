const board = document.querySelector('#board');
const colors = [
	'#082567',
	'#4169E1',
	'#7851A9',
	'#9966CC',
	'#CA2C92',
	'#CA0147',
	'#9B2D30',
	'#E32636',
	'#F34723',
	'#E52B50',
	'#E4717A',
	'#E6E6FA',
	'#FFF0F5',
	'#E6D690',
	'#EAE0C8',
	'#FDF4E3',
	'#3EB489',
	'#50C878',
	'#ACE5EE',
	'#BD33A4',
	'#FFD700',
	'#4B0082',
	'#1CD3A2',
	'#00A86B',
	'#7442C8',
	'#800080',
	'#F8173E',
	'#660066',
	'#0ABAB5',
];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => setColor(square));

	square.addEventListener('mouseleave', () => removeColor(square));

	board.append(square);
}

function setColor(element) {
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d';
	element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}
