		// wait until the user clicks on the screen before showing content
		let handshake = document.querySelector("#handshake");
		handshake.addEventListener('click', function() {
			Tone.start();
			handshake.style.display = 'none';
		});

		// create a synth using tone.js
		let synth = new Tone.Synth().toDestination();

		// target all buttons
		let buttons = document.querySelectorAll('.playButton');

		// the note we’re going to start from
		let notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];

		// do something to all the buttons
		buttons.forEach(function(button) {

			// select a random note per button
			let randomNote = notes[Math.floor(Math.random()*notes.length)];
			let randomOctave = Math.round(Math.random()*4+1);
			let note = randomNote + randomOctave;

			// when the buttons are entered, play that note
			button.addEventListener('mouseenter', function() {
				synth.triggerAttackRelease(note, "8n");
			});

		})