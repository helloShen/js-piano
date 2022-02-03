/* event handler: play the note audio binded to this key */
const playNote = function(key) {
    const note = key.dataset.note;
    if (!note) return;
    const noteAudio = document.querySelector(`audio[data-note="${note}"]`);
    if (!noteAudio) return;
    noteAudio.currentTime = 0;
    noteAudio.play();
};

/* event handler: change the appearence of piano key when pressed */
const changeColor = function(key) {
    key.classList.add('pressed');
};

/* event handler: recover the piano key to it's nomal appearence */
const recoverColor = function(key) {
    key.classList.remove('pressed');
};

/* bind listeners to each piano key */
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('mousedown', () => {
        playNote(key);
        changeColor(key);
    });
    key.addEventListener('mouseup', () => {
        recoverColor(key);
    });
});

/* use keyboard to trigger event handler */
const keyboard = ['KeyA','KeyW','KeyS','KeyE','KeyD','KeyF','KeyR','KeyG','KeyT','KeyH','KeyY','KeyJ','KeyK','KeyU','KeyL','KeyI','KeyZ','KeyX','KeyO','KeyC','KeyP','KeyV','BracketLeft','KeyB'];

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    const keyPressed = e.code;
    const idx = keyboard.indexOf(keyPressed);
    if (idx === -1) return; // key not binded
    const pianoKey = keys[idx];
    playNote(pianoKey);
    changeColor(pianoKey);
});
document.addEventListener('keyup', (e) => {
    const keyPressed = e.code;
    const idx = keyboard.indexOf(keyPressed);
    if (idx === -1) return; // key not binded
    const pianoKey = keys[idx];
    recoverColor(pianoKey);
});


    