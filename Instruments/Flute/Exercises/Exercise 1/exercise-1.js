var Score = 0;
var Tries = 0;
var ExerciseDifficulty = `medium`;
var NoteCompleted = false;
var NoteArray = [];
var notesDict = {}

// timer variables
const display = document.getElementById("timer");
var TimerStatus = true;
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


var notesDictVeryHard = {
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

var notesDictHard = {
    "C4": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "C-sharp-key", "C-key"], 
    "C4-sharp": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "C-sharp-key"], 
    "D4": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6"],
    "D4-sharp": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "D-sharp-key"],
    "E4": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "key-5", "D-sharp-key"],
    "F4": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "D-sharp-key"],
    "F4-sharp": ["thumb-1", "key-1", "key-2", "key-3", "key-6", "D-sharp-key"],
    "F4-sharp-alt": ["thumb-1", "key-1", "key-2", "key-3", "key-5", "D-sharp-key"],
    "F4-sharp-trill": ["thumb-1", "key-1", "key-2", "key-3", "key-5", "D-sharp-key"],
    "G4": ["thumb-1", "key-1", "key-2", "key-3", "D-sharp-key"],
    "G4-sharp": ["thumb-1", "key-1", "key-2", "key-3", "G-sharp-key", "D-sharp-key"],
    "A4": ["thumb-1", "key-1", "key-2", "D-sharp-key"],
    "A4-sharp": ["thumb-1", "key-1", "key-4", "D-sharp-key"],
    "A4-sharp-alt": ["thumb-2", "key-1", "D-sharp-key"],
    "A4-sharp-trill": ["thumb-1", "key-1", "A-sharp-trill-key", "D-sharp-key"],
    "B4": ["thumb-1", "key-1", "D-sharp-key"],

    "C5": ["key-1", "D-sharp-key"],
    "C5-sharp": ["D-sharp-key"],
    "D5": ["thumb-1", "key-2", "key-3", "key-4", "key-5", "key-6"],
    "D5-sharp": ["thumb-1", "key-2", "key-3", "key-4", "key-5", "key-6", "D-sharp-key"],
    "E5": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "key-5", "D-sharp-key"],
    "F5": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "D-sharp-key"],
    "F5-sharp": ["thumb-1", "key-1", "key-2", "key-3", "key-6", "D-sharp-key"],
    "F5-sharp-alt": ["thumb-1", "key-1", "key-2", "key-3", "key-5", "D-sharp-key"],
    "F5-sharp-trill": ["thumb-1", "key-1", "key-2", "key-3", "key-5", "D-sharp-key"],
    "G5": ["thumb-1", "key-1", "key-2", "key-3", "D-sharp-key"],
    "G5-sharp": ["thumb-1", "key-1", "key-2", "key-3", "G-sharp-key", "D-sharp-key"],
    "A5": ["thumb-1", "key-1", "key-2", "D-sharp-key"],
    "A5-sharp": ["thumb-1", "key-1", "key-4", "D-sharp-key"],
    "A5-sharp-alt": ["thumb-2", "key-1", "D-sharp-key"],
    "A5-sharp-trill": ["thumb-1", "key-1", "A-sharp-trill-key", "D-sharp-key"],
    "B5": ["thumb-1", "key-1", "D-sharp-key"],

    "C6": ["key-1", "D-sharp-key"],
    "C6-sharp": ["D-sharp-key"],
    "D6": ["thumb-1", "key-2", "key-3", "D-sharp-key"],
    "D6-sharp": ["thumb-1", "key-1", "key-2", "key-3", "G-sharp-key", "key-4", "key-5", "key-6", "D-sharp-key"],
    "E6": ["thumb-1", "key-1", "key-2", "key-4", "key-5", "D-sharp-key"],
    "F6": ["thumb-1", "key-1", "key-3", "key-4", "D-sharp-key"],
    "F6-sharp": ["thumb-1", "key-1", "key-3", "key-6", "D-sharp-key"],
    "G6": ["key-1", "key-2", "key-3", "D-sharp-key"],
    "G6-sharp": ["key-2", "key-3", "G-sharp-key", "D-sharp-key"],
    "A6": ["thumb-1", "key-2", "key-4", "D-sharp-key"],
    "A6-sharp": ["thumb-1", "key-4", "trill-1"],
    "B6": ["thumb-1", "key-1", "key-3", "trill-2"],

    "C7": ["key-1", "key-2", "key-3", "G-sharp-key", "key-4"]
}

var notesDictMedium = {
    "C4": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "C-sharp-key", "C-key"],
    "C4-sharp": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "C-sharp-key"], 
    "D4": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6"],
    "D4-sharp": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "D-sharp-key"],
    "E4": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "key-5", "D-sharp-key"],
    "F4": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "D-sharp-key"],
    "F4-sharp": ["thumb-1", "key-1", "key-2", "key-3", "key-6", "D-sharp-key"],
    "F4-sharp-alt": ["thumb-1", "key-1", "key-2", "key-3", "key-5", "D-sharp-key"],
    "F4-sharp-trill": ["thumb-1", "key-1", "key-2", "key-3", "key-5", "D-sharp-key"],
    "G4": ["thumb-1", "key-1", "key-2", "key-3", "D-sharp-key"],
    "G4-sharp": ["thumb-1", "key-1", "key-2", "key-3", "G-sharp-key", "D-sharp-key"],
    "A4": ["thumb-1", "key-1", "key-2", "D-sharp-key"],
    "A4-sharp": ["thumb-1", "key-1", "key-4", "D-sharp-key"],
    "A4-sharp-alt": ["thumb-2", "key-1", "D-sharp-key"],
    "A4-sharp-trill": ["thumb-1", "key-1", "A-sharp-trill-key", "D-sharp-key"],
    "B4": ["thumb-1", "key-1", "D-sharp-key"],

    "C5": ["key-1", "D-sharp-key"],
    "C5-sharp": ["D-sharp-key"],
    "D5": ["thumb-1", "key-2", "key-3", "key-4", "key-5", "key-6"],
    "D5-sharp": ["thumb-1", "key-2", "key-3", "key-4", "key-5", "key-6", "D-sharp-key"],
    "E5": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "key-5", "D-sharp-key"],
    "F5": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "D-sharp-key"],
    "F5-sharp": ["thumb-1", "key-1", "key-2", "key-3", "key-6", "D-sharp-key"],
    "F5-sharp-alt": ["thumb-1", "key-1", "key-2", "key-3", "key-5", "D-sharp-key"],
    "F5-sharp-trill": ["thumb-1", "key-1", "key-2", "key-3", "key-5", "D-sharp-key"],
    "G5": ["thumb-1", "key-1", "key-2", "key-3", "D-sharp-key"],
    "G5-sharp": ["thumb-1", "key-1", "key-2", "key-3", "G-sharp-key", "D-sharp-key"],
    "A5": ["thumb-1", "key-1", "key-2", "D-sharp-key"],
    "A5-sharp": ["thumb-1", "key-1", "key-4", "D-sharp-key"],
    "A5-sharp-alt": ["thumb-2", "key-1", "D-sharp-key"],
    "A5-sharp-trill": ["thumb-1", "key-1", "A-sharp-trill-key", "D-sharp-key"],
    "B5": ["thumb-1", "key-1", "D-sharp-key"],
};

var notesDictEasy = {
    "A4-sharp": ["thumb-1", "key-1", "key-4", "D-sharp-key"],
    "C5-sharp": ["D-sharp-key"],
    "D5": ["thumb-1", "key-2", "key-3", "key-4", "key-5", "key-6"],
    "D5-sharp": ["thumb-1", "key-2", "key-3", "key-4", "key-5", "key-6", "D-sharp-key"],
    "E4": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "key-5", "D-sharp-key"],
    "F5": ["thumb-1", "key-1", "key-2", "key-3", "key-4", "D-sharp-key"],
    "G5": ["thumb-1", "key-1", "key-2", "key-3", "D-sharp-key"],
    "G4-sharp": ["thumb-1", "key-1", "key-2", "key-3", "G-sharp-key", "D-sharp-key"],
    "A5": ["thumb-1", "key-1", "key-2", "D-sharp-key"],
    "A5-sharp": ["thumb-1", "key-1", "key-4", "D-sharp-key"],
};

const notesName = {
    "C": "Do/(Si♯)",
    "C-sharp": "Do♯/Ré♭",
    "D": "Ré",
    "D-sharp": "Ré♯/Mi♭",
    "E": "Mi/(Fa♭)",
    "F": "(Mi♯)/Fa",
    "F-sharp": "Fa♯/Sol♭",
    "G": "Sol",
    "G-sharp": "Sol♯/La♭",
    "A": "La",
    "A-sharp": "La♯/Si♭",
    "B": "(Do♭)/Si",
};

var keysList = ["thumb-1", "thumb-2", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "G-sharp-key", "A-sharp-trill-key", "trill-1", "trill-2", "D-sharp-key", "C-sharp-key", "C-key", "B-key"]



// This function is called by html input to show the difficulties after the start button is clicked.
function showDifficulties() {
    document.getElementById(`start-button-container`).style.display = `none`;
    document.getElementById(`difficulties`).style.display = `inline`;
};

// This function converts the exercise button input into setting the global exercise difficulty in the code, as well as the correct keysDict.
function setDifficulty(specifiedDifficulty) {
    if (specifiedDifficulty == `easy`) {
        ExerciseDifficulty = `easy`
    } else if(specifiedDifficulty == `medium`) {
        ExerciseDifficulty = `medium`
    } else if (specifiedDifficulty == `hard`) {
        ExerciseDifficulty = `hard`
    }

    if(specifiedDifficulty == `easy`) {
        notesDict = notesDictEasy;
    } else if (specifiedDifficulty == `medium`) {
        notesDict = notesDictMedium;
    } else if (specifiedDifficulty == `hard`) {
        notesDict = notesDictHard;
    }
};

// This function activates the button when clicked and calls the function to add it to the NoteArray. It also does the opposite.
function changeNoteImage(id) {
    if (document.getElementById(`${id}-image`).src.includes(`/activated/`)) {
        document.getElementById(`${id}-image`).src=`../../Images/Flute Keys/${id}.png`;
        removeNoteFromList(id)
    } else {
        document.getElementById(`${id}-image`).src=`../../Images/Flute Keys/activated/${id}.png`;
        addNoteToList(id)
    }
};

// This function converts html input to adding the selected note to the global NoteArray.
function addNoteToList(id) {
    NoteArray.push(id)
};

// This function converts html input to removing the selected note to the global NoteArray.
function removeNoteFromList(id) {
    const index = NoteArray.indexOf(id);
    if (index > -1) { //only remove it if it's found
        NoteArray.splice(index, 1);
        }
};

// This function generates a random note, gets its array and returns its name as well as its array.
function generateNote() {
    //Generate a random number, get the key and then access the value of that key
    randomNumber = Math.floor(Math.random() * Object.keys(notesDict).length); // generate the random number
    var randomKey = Object.keys(notesDict)[randomNumber]; // get the note name (key)
    randomKeyValue = notesDict[randomKey] // get the note array (value)

    return [randomKey, randomKeyValue]
}

// This function deactivates all of the notes and clears the NoteArray.
function reset() {
    for (const note of keysList) {
        document.getElementById(`${note}-image`).src=`../../Images/Flute Keys/${note}.png`;
    }
    NoteArray = []
};

//This function verifies if the user's NoteArray is the same as the desired NoteArray.
function noteVerify(note) {
    /*
     * For each fingering of a note, it checks if the NoteArray includes that element.
     * If it does, it removes the element out of the NoteArray.
     * If it doesn't, it adds a ­fail element to the NoteArray, which makes it fail.
     */
    console.log(`needed : ` + note)
    console.log(`selected : ` + NoteArray)
    for (const element of note) {
        if (NoteArray.includes(element)) {
            removeNoteFromList(element)
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
    originalNoteName = noteName 
    if(noteName.includes('-alt')) {
        noteName = noteName.replace(`-alt`, ``) 
        originalNoteName = originalNoteName.replace(`-alt`, ``) 
        noteText = `doigté alternatif de` 
    } else if(noteName.includes('-trill')) {
        noteName = noteName.replace(`-trill`, ``) 
        originalNoteName = originalNoteName.replace(`-trill`, ``) 
        noteText = `doigté trille de` 
    } else{
        noteText = `doigté habituel de`
    }

    if(noteName.includes('3')) {
        noteText = noteText + ` ${noteName} 3 (très grave)`
    } else if(noteName.includes('4')) {
        noteText = noteText + ` ${noteName} 4 (grave)`
    } else if(noteName.includes('5')) {
        noteText = noteText + ` ${noteName} 5` 
    } else if(noteName.includes('6')) {
        noteText = noteText + ` ${noteName} 6 (très aigu)`
    } else if(noteName.includes('7')) {
        noteText = noteText + ` ${noteName} 7 (extrêmement aigu)`
    }

    noteName = notesName[noteName.replace(/[0-9]/, ``)] 
    noteText = noteText.replace(`${originalNoteName}`, `${noteName}`)
    return noteText
};

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
    } else if(ExerciseDifficulty == `medium`) {
        difficultyName = `Moyen`;
    } else if(ExerciseDifficulty == `hard`) {
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


