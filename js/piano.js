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
const changePiano = function(key) {
    key.classList.add('pressed');
};

/* event handler: recover the piano key to it's nomal appearence */
const recoverPiano = function(key) {
    key.classList.remove('pressed');
};

/* event handler: change the appearence of keycode button */
const changeKeyCode = function(btn) {
    btn.classList.add('pressed');
};

/* event handler: recover the keycode button to it's nomal appearence */
const recoverKeyCode = function(btn) {
    btn.classList.remove('pressed');
};

/* bind listeners to each piano key */
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('mousedown', () => {
        playNote(key);
        changePiano(key);
    });
    key.addEventListener('mouseup', () => {
        recoverPiano(key);
    });
});

/* use keyboard to trigger event handler */
document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    const keyPressed = e.code;
    // piano
    const pianoKey = document.querySelector(`.key[data-keycode="${keyPressed}"]`);
    if (!pianoKey) return;
    playNote(pianoKey);
    changePiano(pianoKey);
    // keycode button
    const keyCodeButton = document.querySelector(`.keyCode[data-keycode="${keyPressed}"] .btn`);
    if (!keyCodeButton) return;
    changeKeyCode(keyCodeButton);
});
document.addEventListener('keyup', (e) => {
    const keyPressed = e.code;
    // piano
    const pianoKey = document.querySelector(`.key[data-keycode="${keyPressed}"]`);
    if (!pianoKey) return;
    recoverPiano(pianoKey);
    // keycode button
    const keyCodeButton = document.querySelector(`.keyCode[data-keycode="${keyPressed}"] .btn`);
    if (!keyCodeButton) return;
    recoverKeyCode(keyCodeButton);
});




// const keyboard = ['KeyA','KeyW','KeyS','KeyE','KeyD','KeyF','KeyR','KeyG','KeyT','KeyH','KeyY','KeyJ','KeyK','KeyU','KeyL','KeyI','KeyZ','KeyX','KeyO','KeyC','KeyP','KeyV','BracketLeft','KeyB'];


    