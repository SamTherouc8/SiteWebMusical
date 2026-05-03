var Score = 0;
var Tries = 0;
var ExerciseDifficulty = `medium`;
var NoteCompleted = false;
var NoteArray = [];
var keysDict = {}

// timer variables
const display = document.getElementById("timer");
var TimerStatus = true;
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


var keysDictHard = {
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

var keysDictMedium = {
    "Bb3": ["key1", "key2", "key3", "key4", "key5", "key6", "low-c-key", "low-bb-key"],
    "B3": ["key1", "key2", "key3", "key4", "key5", "key6", "low-c-key", "low-b-key"],
    "C4": ["key1", "key2", "key3", "key4", "key5", "key6", "low-c-key"],
    "Db4": ["key1", "key2", "key3", "key4", "key5", "key6", "low-c-key", "low-csharp-key"],
    "D4": ["key1", "key2", "key3", "key4", "key5", "key6"],
    "Eb4": ["key1", "key2", "key3", "key4", "key5", "key6", "eb-key"],
    "E4": ["key1", "key2", "key3", "key4", "key5"],
    "F4": ["key1", "key2", "key3", "key4"],
    "Gb4": ["key1", "key2", "key3", "key5"],
    "G4": ["key1", "key2", "key3"],
    "Ab4": ["key1", "key2", "key3", "gsharp-key"],
    "A4": ["key1", "key2"],
    "Bb4": ["key1", "bb-key"],
    "B4": ["key1"],
    "C5": ["key2"],
    
    "Db5": [],
    "D5": ["octave-key", "key1", "key2", "key3", "key4", "key5", "key6"],
    "Eb5": ["octave-key", "key1", "key2", "key3", "key4", "key5", "key6", "eb-key"],
    "E5": ["octave-key", "key1", "key2", "key3", "key4", "key5"],
    "F5": ["octave-key", "key1", "key2", "key3", "key4"],
    "Gb5": ["octave-key", "key1", "key2", "key3", "key5"],
    "G5": ["octave-key", "key1", "key2", "key3"],
    "Ab5": ["octave-key", "key1", "key2", "key3", "gsharp-key"],
    "A5": ["octave-key", "key1", "key2"],
    "Bb5": ["octave-key", "key1", "bb-key"],
    "B5": ["octave-key", "key1"],
    "C6": ["octave-key", "key2"],
    "Db6": ["octave-key"],
    "D6": ["octave-key", "palm-d-key"]
};

var keysDictEasy = {
    "C4": ["key1", "key2", "key3", "key4", "key5", "key6", "low-c-key"],
    "D4": ["key1", "key2", "key3", "key4", "key5", "key6"],
    "E4": ["key1", "key2", "key3", "key4", "key5"],
    "F4": ["key1", "key2", "key3", "key4"],
    "Gb4": ["key1", "key2", "key3", "key5"],
    "G4": ["key1", "key2", "key3"],
    "A4": ["key1", "key2"],
    "B4": ["key1"],
    "C5": ["key2"],
    "D5": ["octave-key", "key1", "key2", "key3", "key4", "key5", "key6"],
    "E5": ["octave-key", "key1", "key2", "key3", "key4", "key5"],
    "F5": ["octave-key", "key1", "key2", "key3", "key4"],
    "Gb5": ["octave-key", "key1", "key2", "key3", "key5"],
    "G5": ["octave-key", "key1", "key2", "key3"]
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



// This function is called by html input to show the difficulties after the start button is clicked.
function showDifficulties() {
    document.getElementById(`start-button-container`).style.display = `none`;
    document.getElementById(`difficulties`).style.display = `inline`;
};

// This function converts the exercise button input into setting the global exercise difficulty in the code, as well as the correct keysDict.
function setDifficulty(specifiedDifficulty) {
    console.log(specifiedDifficulty)
    if (specifiedDifficulty == `easy`) {
        ExerciseDifficulty = `easy`
    } else if(specifiedDifficulty == `medium`) {
        ExerciseDifficulty = `medium`
    } else if (specifiedDifficulty == `hard`) {
        ExerciseDifficulty = `hard`
    }

    if(ExerciseDifficulty == `easy`) {
        keysDict = keysDictEasy;
    } else if (ExerciseDifficulty == `medium`) {
        keysDict = keysDictMedium;
    } else if (ExerciseDifficulty == `hard`) {
        keysDict = keysDictHard;
    };
};

// This function activates the button when clicked and calls the function to add it to the NoteArray. It also does the opposite.
function changeNoteImage(id) {
    const keyImage = document.getElementById(`${id}-image`);
    const keyInput = document.getElementById(`${id}-input`);
    if (keyInput.checked) {
        console.log('now checked')
        keyImage.style.display = `inline`;
        addNoteToList(id)
    } else if (keyInput.checked == false) {
        console.log('now unckecked')
        keyImage.style.display = `none`;
        removeNoteFromList(id)
    }
};

// This function converts html input to adding the selected note to the global NoteArray.
function addNoteToList(id) {
    NoteArray.push(id)
};

// This function converts html input to removing the selected note to the global NoteArray.
function removeNoteFromList(id) {
    NoteArray.splice(id, 1)
};

// This function generates a random note, gets its array and returns its name as well as its array.
function generateNote() {
    //Generate a random number, get the key and then access the value of that key
    randomNumber = Math.floor(Math.random() * Object.keys(keysDict).length); // generate the random number
    var randomKey = Object.keys(keysDict)[randomNumber]; // get the note name (key)
    randomKeyValue = keysDict[randomKey] // get the note array (value)

    return [randomKey, randomKeyValue]
}

// This function deactivates all of the notes and clears the NoteArray.
function reset() {
    // Unchecks all of the checkboxes
    const elements = document.getElementsByClassName("input-key");
    for (let element of elements) {
        element.checked = false;
    }

    // Hides all of the images
    const elements2 = document.getElementsByClassName("key-image");
    for (let element2 of elements2) {
        element2.style.display = `none`;
    }

    NoteArray = []
}

//This function verifies if the user's NoteArray is the same as the desired NoteArray.
function noteVerify(note) {
    /**
     * For each fingering of a note, it checks if the NoteArray includes that element.
     * If it does, it removes the element out of the NoteArray.
     * If it doesn't, it adds a ­fail element to the NoteArray, which makes it fail.
     */
    for (const element of note) {
        if (NoteArray.includes(element)) {
            var index = NoteArray.indexOf(element);
            removeNoteFromList(index)
        }
        else{
            NoteArray.push("fail")
            break;
        }
    }


    //if NoteArray is empty, it succeeds and increases the S
    if (!Array.isArray(NoteArray) || !NoteArray.length) {
        increaseScore();
    }
    else{
        increaseTries();
    }
    reset();
}

// Makes the script go on once the user input is completed.
function noteCompletedFunction() {
    NoteCompleted = true;
}

// Sleep is needed to wait for the user to be done.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// This function creates the note to be displayed when a random note is automatically picked for the user to know what to enter.
function createNoteText(noteName) {
    var noteText = ``;
    originalNoteName = noteName
    if(noteName.includes('alt')) {
        noteName = noteName.replace(`alt`, ``)
        noteText = `Note à inscrire: le doigté alternatif de`
    }
    else{
        noteText = `Note à inscrire: le doigté habituel de`
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
    noteText = noteText.replace(`${originalNoteName}`, `${keysName[originalNoteName]} `)
    return noteText
}

// This function displays the created text.
function displayNoteText(noteText) {
    const noteTextId = document.getElementById("note-text");
    noteTextId.textContent = noteText;
}

// This function increases the user's score and tries (if there was a successful input).
function increaseScore() {
    const scoreTextId = document.getElementById("score-text");
    Score += 1;
    Tries += 1;
    scoreTextId.textContent = `score: ${Score}/${Tries}`;
}

// This function increases the user's tries only (if there was an unsuccessful input).
function increaseTries() {
    const scoreTextId = document.getElementById("score-text");
    Tries += 1;
    scoreTextId.textContent = `score: ${Score}/${Tries}`;
}

// This function starts the timer.
function startTimer() {
    if(!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTimer, 10);
        isRunning = true;
    }
}

// This function updates the timer constantly.
function updateTimer() {
    if(TimerStatus == true) {
        const currentTime = Date.now();
        elapsedTime = currentTime - startTime;

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let milliseconds = Math.floor(elapsedTime % 1000 / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        //milliseconds = String(milliseconds).padStart(2, "0");

        display.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// This function unloads the exercise and calls the function that builds the results.
function finish() {

    document.getElementById(`main-container`).style.display = `none`;
    document.getElementById(`instrument-container`).style.display = `none`;
    document.getElementById(`finish-button-container`).style.display = `none`;

    document.getElementById(`finish-screen`).style.display = `block`;
    buildResults()
}

// This function builds the results to be shown on the finish page, and displays them.
function buildResults() {
    TimerStatus = false;

    if(ExerciseDifficulty == `easy`) {
        difficultyName = `Façile`;
    }
    else if(ExerciseDifficulty == `medium`) {
        difficultyName = `Moyen`;
    }
    else if(ExerciseDifficulty == `hard`) {
        difficultyName = `Difficile`;
    }

    resultsDifficulty = `difficulté : ${difficultyName}`;
    resultsScore = `score : ${Score}/${Tries}`;

    if(Tries == 0) {
        percentage = 0
    }
    else{
        percentage = Math.round((Score/Tries)*100)
    }


    const difficultyText = document.getElementById("finish-screen-difficulty");
    difficultyText.textContent = resultsDifficulty;

    const percentageText = document.getElementById("finish-screen-percentage");
    percentageText.textContent = `${percentage}%`;

    const scoreText = document.getElementById("finish-screen-score");
    scoreText.textContent = resultsScore;
}

// This is the main function, that manages visuals and that calls the right functions to keep the loop going.
async function main() {
    document.getElementById(`difficulties`).style.display = `none`;

    document.getElementById(`main-container`).style.display = `inline`;
    document.getElementById(`instrument-container`).style.display = `inline`;
    document.getElementById(`finish-button-container`).style.display = `inline`;

    document.getElementById(`timer`).style.display = `block`;

    
    startTimer();

    // Main loop (everytime there is a different note)
    while (true) {
        let [noteName, randomKeyArray] = generateNote(ExerciseDifficulty);
        var noteText = createNoteText(noteName);
        displayNoteText(noteText);

        // Every 300ms, it checks if the user verified the note.
        while (true) {
            if (NoteCompleted == true) {
                NoteCompleted = false
                break
            } else {
                await sleep(300)
            }
        }
    
        noteVerify(randomKeyArray)
    };
}

