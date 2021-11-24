let textarea = document.querySelector('textarea');
let button = document.querySelector('.btn');

function textToSpeech(text) {
	let utterance = new SpeechSynthesisUtterance(text);
	speechSynthesis.speak(utterance);
}

button.addEventListener('click', e => {
	e.preventDefault();
	if(textarea.value !== '') {
		textToSpeech(textarea.value);
	}
});