var keysDictHard={
    "Bb3": ["key1", "key2", "key3", "key4", "key5", "key6", "low-c-key", "low-bb-key"],
    "B3": ["key1", "key2", "key3", "key4", "key5", "key6", "low-c-key", "low-b-key"],
    "C4": ["key1", "key2", "key3", "key4", "key5", "key6", "low-c-key"],
    "Db4": ["key1", "key2", "key3", "key4", "key5", "key6", "low-c-key", "low-csharp-key"],
    "D4": ["key1", "key2", "key3", "key4", "key5", "key6"],
    "Eb4": ["key1", "key2", "key3", "key4", "key5", "key6", "eb-key"],
    "E4": ["key1", "key2", "key3", "key4", "key5"],
    "F4": ["key1", "key2", "key3", "key4"],
    "Gb4": ["key1", "key2", "key3", "key5"],
    "Gb4alt": ["key1", "key2", "key3", "key4", "alt-fsharp-key"],
    "G4": ["key1", "key2", "key3"],
    "Ab4": ["key1", "key2", "key3", "gsharp-key"],
    "A4": ["key1", "key2"],
    "Bb4": ["key1", "bb-key"],
    "Bb4alt": ["key1", "key2", "alt-bb-key"],
    "B4": ["key1"],
    "C5": ["key2"],
    "C5alt": ["key1", "alt-c-key"],
    "Db5": [],

    "D5": ["octave-key", "key1", "key2", "key3", "key4", "key5", "key6"],
    "D5alt": ["palm-d-key"],
    "Eb5": ["octave-key", "key1", "key2", "key3", "key4", "key5", "key6", "eb-key"],
    "E5": ["octave-key", "key1", "key2", "key3", "key4", "key5"],
    "F5": ["octave-key", "key1", "key2", "key3", "key4"],
    "Gb5": ["octave-key", "key1", "key2", "key3", "key5"],
    "Gb5alt": ["octave-key", "key1", "key2", "key3", "key4", "alt-fsharp-key"],
    "G5": ["octave-key", "key1", "key2", "key3"],
    "Ab5": ["octave-key", "key1", "key2", "key3", "gsharp-key"],
    "A5": ["octave-key", "key1", "key2"],
    "Bb5": ["octave-key", "key1", "bb-key"],
    "Bb5alt": ["octave-key", "key1", "key2", "alt-bb-key"],
    "B5": ["octave-key", "key1"],
    "C6": ["octave-key", "key2"],
    "C6alt": ["octave-key", "key1", "alt-c-key"],
    "Db6": ["octave-key"],
    "D6": ["octave-key", "palm-d-key"],
    "Eb6": ["octave-key", "palm-d-key", "palm-dsharp-key"],
    "E6": ["octave-key", "palm-d-key", "palm-dsharp-key", "high-e-key"],
    "F6": ["octave-key", "palm-d-key", "palm-dsharp-key", "high-e-key", "palm-f-key"],
    "F6alt": ["octave-key", "front-f-key", "key2"],
    "Gb6": ["octave-key", "palm-d-key", "palm-dsharp-key", "high-e-key", "palm-f-key", "high-fsharp-key"],
    "Gb6alt": ["octave-key", "front-f-key", "key2", "high-fsharp-key"]
};

var keysName = {
    "C": "Do/(Si♯)",
    "Db": "Do♯/Ré♭",
    "D": "Ré",
    "Eb": "Ré♯/Mi♭",
    "E": "Mi/(Fa♭)",
    "F": "(Mi♯)/Fa",
    "Gb": "Fa♯/Sol♭",
    "G": "Sol",
    "Ab": "Sol♯/La♭",
    "A": "La",
    "Bb": "La♯/Si♭",
    "B": "(Do♭)/Si",
};

// This function creates text for the note options inside of the list.
function createNoteText(noteName) {
    originalNoteName = noteName
    if(noteName.includes('alt')) {
        noteName = noteName.replace(`alt`, ``)
        noteText = `doigté alternatif de`
    }
    else{
        noteText = `doigté habituel de`
    }

    if(noteName.includes('3')) {
        noteText = noteText + ` ${noteName} (très grave)`
    }

    else if(noteName.includes('4')) {
        noteText = noteText + ` ${noteName} (grave)`
    }

    else if(noteName.includes('5')) {
        noteText = noteText + ` ${noteName} (aigu)`
    }

    else if(noteName.includes('6')) {
        noteText = noteText + ` ${noteName} (très aigu)`
    }

    originalNoteName = originalNoteName.replace(`alt`, ``).replace(/[0-9]/g, '')
    noteText = noteText.replace(`${originalNoteName}`, `${keysName[originalNoteName]}`)
    return noteText
};

// This function sets the list of notes available to pick.
function setList() {
    var notesList = document.getElementById(`note-choice`)
    notesList.innerHTML = "";

    var optionArray = []
    for (const note of Object.keys(keysDictHard)) {
        var option = `${note}|${createNoteText(note)}`
        optionArray.push(option)
    }

    for(var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        notesList.options.add(newOption);
    }

};

// This function takes the note the user selected, and calls the function to display it.
function manageInput() {
    reset()
    var selectedNote = document.getElementById(`note-choice`);
    var noteName = selectedNote.value;
    var noteArray = keysDictHard[noteName];
    
    changeImage(noteArray);
};

// This function activates the keys needing to be activated to display the fingering.
function changeImage(noteArray) {
    for (const note of noteArray) {
        document.getElementById(`${note}-image`).style.display = `inline`;
    }
};

// This function deactivates all of the activated keys.
function reset() {
    const elements = document.getElementsByClassName("input-key");
    for (let element of elements) {
        element.checked = false;
    }

    const elements2 = document.getElementsByClassName("key-image");
    for (let element2 of elements2) {
        element2.style.display = `none`;
    }

    noteArray = []
};

function main() {
    setList()
};

main()