const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
	"Message One",
	"Message Two",
	"Message Three",
	"Message Four",
];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
	const nofit = document.createElement('div');
	nofit.classList.add('toast');
	nofit.classList.add(type ? type : getRandomType());

	nofit.innerHTML = message ? message : getRandomMessage();
	toasts.appendChild(nofit);
	setTimeout(() => {
		nofit.remove();
	}, 3000);
}


function getRandomMessage() {
	return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
	return types[Math.floor(Math.random() * types.length)];
}