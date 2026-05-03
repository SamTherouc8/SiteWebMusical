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


var keysDictVeryHard = {
    "E3": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "E-left-key", "F-right-key"],
    "E3-alt": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "E-right-key"],
    "F3": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "F-right-key"],
    "F3-alt": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "F-left-key"],
    "F3-sharp": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6",  "F-sharp-left-key", "F-right-key"],
    "F3-sharp-alt": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "F-sharp-right-key"],
    "G3": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6"],
    "G3-sharp": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "G-sharp-right-key"],
    "A3": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5"],
    "A3-sharp": ["thumb-key", "key-1", "key-2", "key-3", "key-4"],
    "B3": ["thumb-key", "key-1", "key-2", "key-3", "key-5"],
    "B3-alt": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "B-key"],
    "C4": ["thumb-key", "key-1", "key-2", "key-3"],
    "C4-sharp": ["thumb-key", "key-1", "key-2", "key-3", "C-sharp-key"],
    "D4": ["thumb-key", "key-1", "key-2"],
    "D4-sharp": ["thumb-key", "key-1", "key-2", "side-1"],
    "D4-sharp-alt": ["thumb-key", "key-1", "key-2", "D-sharp-key"],
    "E4": ["thumb-key", "key-1"],
    "F4": ["thumb-key"],
    "F4-sharp": ["key-1"],
    "F4-sharp-alt": ["thumb-key", "side-1", "side-2"],
    "G4": [],
    "G4-sharp": ["G-sharp-key"],
    "A4": ["A-key"],
    "A4-sharp": ["octave-key", "A-key"],
    "A4-sharp-alt": ["A-key", "side-3"],

    "B4": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "E-left-key", "F-right-key"],
    "B4-alt": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "E-right-key"],
    "C5": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "F-right-key"],
    "C5-alt": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "F-left-key"],
    "C5-sharp": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6",  "F-sharp-left-key", "F-right-key"],
    "C5-sharp-alt": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "F-sharp-right-key"],
    "D5": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6"],
    "D5-sharp": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "G-sharp-right-key"],
    "E5": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5"],
    "F5": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4"],
    "F5-sharp": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-5"],
    "F5-sharp-alt": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "B-key"],
    "G5": ["octave-key", "thumb-key", "key-1", "key-2", "key-3"],
    "G5-sharp": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "C-sharp-key"],
    "A5": ["octave-key", "thumb-key", "key-1", "key-2"],
    "A5-sharp": ["octave-key", "thumb-key", "key-1", "key-2", "side-1"],
    "A5-sharp-alt": ["octave-key", "thumb-key", "key-1", "key-2", "D-sharp-key"],
    "B5": ["octave-key", "thumb-key", "key-1"],
    "C6": ["octave-key", "thumb-key"],

    "C6-sharp": ["octave-key", "thumb-key", "key-2", "key-3", "key-4", "key-5"],
    "C6-sharp-alt": ["octave-key", "thumb-key", "side-1", "side-2"],
    "D6": ["octave-key", "thumb-key", "key-2", "key-3", "key-4", "G-sharp-right-key"],
    "D6-alt": ["octave-key", "thumb-key", "side-3"],
    "D6-sharp": ["octave-key", "thumb-key", "key-2", "key-3", "key-4", "B-key", "G-sharp-right-key"],
    "D6-sharp-alt": ["octave-key", "thumb-key", "key-2", "key-3", "key-5", "G-sharp-right-key"],
    "E6": ["octave-key", "thumb-key", "key-2", "key-3", "G-sharp-right-key"],
    "F6": ["octave-key", "thumb-key", "key-2", "key-3", "G-sharp-right-key"],
    "F6-alt": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "C-sharp-key", "key-4", "key-5", "key-6"],
    "F6-sharp": ["octave-key", "thumb-key", "key-2", "G-sharp-right-key"],
    "F6-sharp-alt": ["octave-key", "thumb-key", "key-1", "key-2", "key-4", "key-5", "key-6", "G-sharp-right-key"],
    "G6": ["octave-key", "thumb-key", "key-2", "key-4", "key-5", "G-sharp-right-key"],
};

var keyDictHard = {
    "E3": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "E-left-key", "F-right-key"],
    "E3-alt": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "E-right-key"],
    "F3": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "F-right-key"],
    "F3-alt": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "F-left-key"],
    "F3-sharp": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6",  "F-sharp-left-key", "F-right-key"],
    "F3-sharp-alt": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "F-sharp-right-key"],
    "G3": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6"],
    "G3-sharp": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "G-sharp-right-key"],
    "A3": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5"],
    "A3-sharp": ["thumb-key", "key-1", "key-2", "key-3", "key-4"],
    "B3": ["thumb-key", "key-1", "key-2", "key-3", "key-5"],
    "B3-alt": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "B-key"],
    "C4": ["thumb-key", "key-1", "key-2", "key-3"],
    "C4-sharp": ["thumb-key", "key-1", "key-2", "key-3", "C-sharp-key"],
    "D4": ["thumb-key", "key-1", "key-2"],
    "D4-sharp": ["thumb-key", "key-1", "key-2", "side-1"],
    "D4-sharp-alt": ["thumb-key", "key-1", "key-2", "D-sharp-key"],
    "E4": ["thumb-key", "key-1"],
    "F4": ["thumb-key"],
    "F4-sharp": ["key-1"],
    "F4-sharp-alt": ["thumb-key", "side-1", "side-2"],
    "G4": [],
    "G4-sharp": ["G-sharp-key"],
    "A4": ["A-key"],
    "A4-sharp": ["octave-key", "A-key"],
    "A4-sharp-alt": ["A-key", "side-3"],

    "B4": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "E-left-key", "F-right-key"],
    "B4-alt": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "E-right-key"],
    "C5": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "F-right-key"],
    "C5-alt": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "F-left-key"],
    "C5-sharp": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6",  "F-sharp-left-key", "F-right-key"],
    "C5-sharp-alt": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "F-sharp-right-key"],
    "D5": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6"],
    "D5-sharp": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "G-sharp-right-key"],
    "E5": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5"],
    "F5": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4"],
    "F5-sharp": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-5"],
    "F5-sharp-alt": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "B-key"],
    "G5": ["octave-key", "thumb-key", "key-1", "key-2", "key-3"],
    "G5-sharp": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "C-sharp-key"],
    "A5": ["octave-key", "thumb-key", "key-1", "key-2"],
    "A5-sharp": ["octave-key", "thumb-key", "key-1", "key-2", "side-1"],
    "A5-sharp-alt": ["octave-key", "thumb-key", "key-1", "key-2", "D-sharp-key"],
    "B5": ["octave-key", "thumb-key", "key-1"],
    "C6": ["octave-key", "thumb-key"],

    "C6-sharp": ["octave-key", "thumb-key", "key-2", "key-3", "key-4", "key-5"],
    "D6": ["octave-key", "thumb-key", "key-2", "key-3", "key-4", "G-sharp-right-key"],
}

var keysDictMedium = {
    "E3": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "E-left-key", "F-right-key"],
    "F3": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "F-right-key"],
    "F3-sharp": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6",  "F-sharp-left-key", "F-right-key"],
    "G3": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6"],
    "G3-sharp": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "G-sharp-right-key"],
    "A3": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5"],
    "A3-sharp": ["thumb-key", "key-1", "key-2", "key-3", "key-4"],
    "B3": ["thumb-key", "key-1", "key-2", "key-3", "key-5"],
    "C4": ["thumb-key", "key-1", "key-2", "key-3"],
    "C4-sharp": ["thumb-key", "key-1", "key-2", "key-3", "C-sharp-key"],
    "D4": ["thumb-key", "key-1", "key-2"],
    "D4-sharp": ["thumb-key", "key-1", "key-2", "side-1"],
    "E4": ["thumb-key", "key-1"],
    "F4": ["thumb-key"],
    "F4-sharp": ["key-1"],
    "G4": [],
    "G4-sharp": ["G-sharp-key"],
    "A4": ["A-key"],
    "A4-sharp": ["octave-key", "A-key"],

    "B4": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "E-left-key", "F-right-key"],
    "C5": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "F-right-key"],
    "C5-sharp": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6",  "F-sharp-left-key", "F-right-key"],
    "D5": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6"],
    "D5-sharp": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "G-sharp-right-key"],
    "E5": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5"],
    "F5": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4"]
};

var keysDictEasy = {
    "G3": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6"],
    "A3": ["thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5"],
    "A3-sharp": ["thumb-key", "key-1", "key-2", "key-3", "key-4"],
    "B3": ["thumb-key", "key-1", "key-2", "key-3", "key-5"],
    "C4": ["thumb-key", "key-1", "key-2", "key-3"],
    "D4": ["thumb-key", "key-1", "key-2"],
    "E4": ["thumb-key", "key-1"],
    "F4": ["thumb-key"],
    "F4-sharp": ["key-1"],
    "G4": [],
    "G4-sharp": ["G-sharp-key"],
    "A4": ["A-key"],
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

