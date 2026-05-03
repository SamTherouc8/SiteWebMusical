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
   //Get the checkbox
    document.getElementById(`${id}-image`).style.display = `inline`;
};

// This function generates a random note, gets its array and returns its name as well as its array.
function generateNote(ExerciseDifficulty) {
    if(ExerciseDifficulty == `easy`) {
        keysDictHard = keysDictEasy
    }
    else if(ExerciseDifficulty == `medium`) {
        keysDictHard = keysDictMedium
    }
    else if(ExerciseDifficulty == `hard`) {
        keysDictHard = keysDictHard
    }

    randomNumber = Math.floor(Math.random() * Object.keys(keysDictHard).length);
    var randomKey = Object.keys(keysDictHard)[randomNumber];
    randomKeyValue = keysDictHard[randomKey]
    console.log(randomKey)

    return randomKey
};

// This function deactivates all of the notes and clears the NoteArray
function reset() {
    const elements = document.getElementsByClassName("input-key");
    for (var element of elements) {
        element.checked = false;
    }

    const elements2 = document.getElementsByClassName("key-image");
    for (var element2 of elements2) {
        element2.style.display = `none`;
    }

    NoteArray = []
};

// This function sets the list of notes available to pick.
function setList() {
    var notesList = document.getElementById(`note-choice`)
    notesList.innerHTML = "";

    var optionArray = ["|"]
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

// This function displays the note on the instrument, activating the required keys
function showNote(selectedArray) {
    for (const note of selectedArray) {
        console.log(note);
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
        noteName = generateNote(ExerciseDifficulty);
        NoteArray = keysDictHard[noteName];
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




