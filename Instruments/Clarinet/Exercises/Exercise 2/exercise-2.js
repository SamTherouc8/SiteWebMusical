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
    "G6": ["octave-key", "thumb-key", "key-2", "key-4", "key-5", "G-sharp-right-key"]
};

var notesDictHard = {
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
    "D6": ["octave-key", "thumb-key", "key-2", "key-3", "key-4", "G-sharp-right-key"]
}

var notesDictMedium = {
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

var notesDictEasy = {
    "C4": ["thumb-key", "key-1", "key-2", "key-3"],
    "D4": ["thumb-key", "key-1", "key-2"],
    "E4": ["thumb-key", "key-1"],
    "F4": ["thumb-key"],
    "F4-sharp": ["key-1"],
    "G4": [],
    "A4": ["A-key"],
    "A4-sharp": ["octave-key", "A-key"],

    "B4": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "E-left-key", "F-right-key"],
    "C5": ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "F-right-key"],
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
    "B": "(Do♭)/Si"
};

var keysList = ["octave-key", "thumb-key", "key-1", "key-2", "key-3", "key-4", "key-5", "key-6", "A-key", "G-sharp-key", "D-sharp-key", "C-sharp-key", "B-key", "side-1", "side-2", "side-3", "side-4", "F-left-key", "F-sharp-left-key", "E-left-key", "F-right-key", "F-sharp-right-key", "E-right-key", "G-sharp-right-key"]



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
    } else if (specifiedDifficulty == `very-hard`) {
        ExerciseDifficulty = `very-hard`
    }

    if(specifiedDifficulty == `easy`) {
        notesDict = notesDictEasy;
    } else if (specifiedDifficulty == `medium`) {
        notesDict = notesDictMedium;
    } else if (specifiedDifficulty == `hard`) {
        notesDict = notesDictHard;
    } else if (specifiedDifficulty == `very-hard`) {
        notesDict = notesDictVeryHard;
    };
};

// This function activates the button when clicked and calls the function to add it to the NoteArray. It also does the opposite.
function changeNoteImage(note) {
    document.getElementById(`${note}-image`).src=`../../Images/Clarinet Keys/activated/${note}.png`;
};

// This function generates a random note, gets its array and returns its name as well as its array.
function generateNote(notesDict) {
    randomNumber = Math.floor(Math.random() * Object.keys(notesDict).length);
    var randomKey = Object.keys(notesDict)[randomNumber];
    randomKeyValue = notesDict[randomKey]

    return randomKey
};

// This function deactivates all of the notes and clears the NoteArray
function reset() {
    for (const note of keysList) {
        document.getElementById(`${note}-image`).src=`../../Images/Clarinet Keys/${note}.png`;
    }
};

// This function sets the list of notes available to pick.
function setList() {
    var notesList = document.getElementById(`note-choice`)
    notesList.innerHTML = "";

    var optionArray = []
    for (const note of Object.keys(notesDict)) {
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

// This function displays the note on the instrument, activating the required keys
function showNote(selectedArray) {
    for (const note of selectedArray) {
        changeNoteImage(note);
    }
};

//This function verifies if the user's note is the desired note.
function noteVerify(note) {
    var notesList = document.getElementById(`note-choice`)
    if(notesList.value == note) {
        increaseScore()
    }
    else{
        increaseTries()
    }
    reset()
};

// Makes the script go on once the user input is completed.
function noteCompletedFunction() {
    NoteCompleted = true;
};

// Sleep is needed to wait for the user to be done.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
};

// This function creates text for the note options inside of the list.
function createNoteText(noteName) {
    originalNoteName = noteName 
    if(noteName.includes('-alt')) {
        noteName = noteName.replace(`-alt`, ``) 
        originalNoteName = originalNoteName.replace(`-alt`, ``) 
        noteText = `doigté alternatif de` 
    }
    else{
        noteText = `doigté habituel de`
    }

    if(noteName.includes('3')) {
        noteText = noteText + ` ${noteName} 3 (très grave)`
    }

    else if(noteName.includes('4')) {
        noteText = noteText + ` ${noteName} 4 (grave)`
    }

    else if(noteName.includes('5')) {
        noteText = noteText + ` ${noteName} 5 (aigu)` 
    }

    else if(noteName.includes('6')) {
        noteText = noteText + ` ${noteName} 6 (très aigu)`
    }

    noteName = notesName[noteName.replace(/[0-9]/, ``)] 
    noteText = noteText.replace(`${originalNoteName}`, `${noteName}`)
    return noteText
};

// This function increases the user's score and tries (if there was a successful input).
function increaseScore() {
    const scoreTextId = document.getElementById("score-text");
    Score += 1;
    Tries += 1;
    scoreTextId.textContent = `score: ${Score}/${Tries}`;
};

// This function increases the user's tries only (if there was an unsuccessful input).
function increaseTries() {
    const scoreTextId = document.getElementById("score-text");
    Tries += 1;
    scoreTextId.textContent = `score: ${Score}/${Tries}`;
};

// This function starts the timer.
function startTimer() {
    if(!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTimer, 10);
        isRunning = true;
    }
};

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
};

// This function unloads the exercise and calls the function that builds the results.
function finish() {
    document.getElementById(`main-container`).style.display = `none`;
    document.getElementById(`instrument-container`).style.display = `none`;
    document.getElementById(`finish-button-container`).style.display = `none`;

    document.getElementById(`finish-screen`).style.display = `block`;
    buildResults()
};

// This function builds the results to be shown on the finish page, and displays them.
function buildResults() {
    TimerStatus = false;
    let difficultyName = ``

    if(ExerciseDifficulty == `easy`) {
        difficultyName = `Façile`;
    } else if(ExerciseDifficulty == `medium`) {
        difficultyName = `Moyen`;
    } else if(ExerciseDifficulty == `hard`) {
        difficultyName = `Difficile`;
    } else if(ExerciseDifficulty == `very-hard`) {
        difficultyName = `Très Difficile`;
    }

    let resultsDifficulty = `difficulté : ${difficultyName}`;
    let resultsScore = `score : ${Score}/${Tries}`;

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
};

async function main() {
    document.getElementById(`main-container`).style.display = `inline`;
    document.getElementById(`instrument-container`).style.display = `inline`;
    document.getElementById(`timer`).style.display = `block`;
    document.getElementById(`finish-button-container`).style.display = `inline`;
    document.getElementById(`start-button-container`).style.display = `none`;
    document.getElementById(`difficulties`).style.display = `none`;


    startTimer();

    while(true) {
        let noteName = generateNote(notesDict);
        NoteArray = notesDict[noteName];
        showNote(NoteArray)
        setList()

        while (true) {
            if(NoteCompleted == true) {
                NoteCompleted = false
                break
            }
            else{
                await sleep(300)
            }
        }

        noteVerify(noteName)
    };
};




