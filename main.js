let handshake = document.querySelector("#handshake");

handshake.addEventListener("click", async () => {
	await Tone.start();
	handshake.style.display = "none";
});

let synth = new Tone.Synth().toDestination();

let notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

let buttons = document.querySelectorAll(".playButton");

buttons.forEach(button => {
	let randomNote = notes[Math.floor(Math.random() * notes.length)];
	let randomOctave = Math.floor(Math.random() * 3) + 3;
	button.dataset.note = randomNote + randomOctave;
});

buttons.forEach(button => {
	button.addEventListener("click", () => {

		let column = button.dataset.column;

		let columnButtons = document.querySelectorAll(
			`.playButton[data-column="${column}"]`
		);

		columnButtons = Array.from(columnButtons);

		columnButtons.forEach((btn, index) => {
			setTimeout(() => {

				let note = btn.dataset.note;
				synth.triggerAttackRelease(note, "8n");

				btn.classList.add("active");
				setTimeout(() => {
					btn.classList.remove("active");
				}, 200);

			}, index * 120);
		});

	});
});