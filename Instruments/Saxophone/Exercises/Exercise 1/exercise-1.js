var score = 0;
var tries = 0;
var exerciseDifficulty = `medium`;
var timerStatus = true;
var noteCompleted = false;
var noteText = ``;
var noteArray = [];
var keysDict = {}

const display = document.getElementById("timer");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


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

var keysDictMedium={
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

var keysDictEasy={
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

var keysName={
    "C": "Si♯/Do",
    "Db": "Do♯/Ré♭",
    "D": "Ré",
    "Eb": "Ré♯/Mi♭",
    "E": "Mi/Fa♭",
    "F": "Mi♯/Fa",
    "Gb": "Fa♯/Sol♭",
    "G": "Sol",
    "Ab": "Sol♯/La♭",
    "A": "La",
    "Bb": "La♯/Si♭",
    "B": "Si/Do♭",
}



function showDifficulties() {
    document.getElementById(`start-button-container`).style.display = `none`;
    document.getElementById(`difficulties`).style.display = `inline`;
};

function setDifficulty(specifiedDifficulty){
    console.log(specifiedDifficulty)
    if (specifiedDifficulty == `easy`) {
        exerciseDifficulty = `easy`
    } else if(specifiedDifficulty == `medium`) {
        exerciseDifficulty = `medium`
    } else if (specifiedDifficulty == `hard`) {
        exerciseDifficulty = `hard`
    }

    if(exerciseDifficulty == `easy`) {
        keysDict = keysDictEasy;
    } else if (exerciseDifficulty == `medium`) {
        keysDict = keysDictMedium;
    } else if (exerciseDifficulty == `hard`) {
        keysDict = keysDictHard;
    };
}

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

function addNoteToList(id){
    noteArray.push(id)
};

function removeNoteFromList(id){
    noteArray.splice(id, 1)
};

// This function generates a random note, gets its array and returns its name as well as its array.
function generateNote(){
    //Generate a random number, get the key and then access the value of that key
    randomNumber = Math.floor(Math.random() * Object.keys(keysDict).length); // generate the random number
    var randomKey = Object.keys(keysDict)[randomNumber]; // get the note name (key)
    randomKeyValue = keysDict[randomKey] // get the note array (value)

    return [randomKey, randomKeyValue]
}

// This function deactivates all of the notes and clears the noteArray
function reset(){
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

    noteArray = []
}

//This function verifies if the user's noteArray is the same as the desired noteArray.
function noteVerify(note){
    /**
     * For each fingering of a note, it checks if the noteArray includes that element.
     * If it does, it removes the element out of the noteArray.
     * If it doesn't, it adds a ­fail element to the noteArray, which makes it fail.
     */
    for (const element of note){
        if (noteArray.includes(element)){
            var index = noteArray.indexOf(element);
            removeNoteFromList(index)
        }
        else{
            noteArray.push("fail")
            break;
        }
    }


    //if noteArray is empty, it succeeds and increases the score
    if (!Array.isArray(noteArray) || !noteArray.length){
        increaseScore();
    }
    else{
        increaseTries();
    }
    reset();
}

// this function sets the note guess as completed. It gets called by the html once the user verifies their answer.
function noteCompletedFunction(){
    noteCompleted = true;
}

// Sleep is needed to wait for the user to be done.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// This function creates the next to be displayed when a random note is automatically picked for the user to know what to enter.
function createNoteText(noteName){
    originalNoteName = noteName
    if(noteName.includes('alt')){
        noteName = noteName.replace(`alt`, ``)
        noteText = `Note à inscrire: le doigté alternatif de`
    }
    else{
        noteText = `Note à inscrire: le doigté habituel de`
    }

    if(noteName.includes('3')){
        noteText = noteText + ` ${noteName} (très grave)`
    }

    else if(noteName.includes('4')){
        noteText = noteText + ` ${noteName} (grave)`
    }

    else if(noteName.includes('5')){
        noteText = noteText + ` ${noteName} (aigu)`
    }

    else if(noteName.includes('6')){
        noteText = noteText + ` ${noteName} (très aigu)`
    }

    originalNoteName = originalNoteName.replace(`alt`, ``).replace(/[0-9]/g, '')
    noteText = noteText.replace(`${originalNoteName}`, `${keysName[originalNoteName]} `)
    return noteText
}


function displayNoteText(noteText){
    const noteTextId = document.getElementById("note-text");
    noteTextId.textContent = noteText;
}


function increaseScore(){
    const scoreTextId = document.getElementById("score-text");
    score += 1;
    tries += 1;
    scoreTextId.textContent = `score: ${score}/${tries}`;
}

function increaseTries(){
    const scoreTextId = document.getElementById("score-text");
    tries += 1;
    scoreTextId.textContent = `score: ${score}/${tries}`;
}


function startTimer(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTimer, 10);
        isRunning = true;
    }
}


function resetTimer(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;    
    display.textContent = "00:00:00";
}

function updateTimer(){
    if(timerStatus == true){
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





function finish(){
    
    //finish
    //show image with difficulty, score, tries, name, ...

    //actualize page

    document.getElementById(`main-container`).style.display = `none`;
    document.getElementById(`saxophone-container`).style.display = `none`;
    document.getElementById(`finish-button-container`).style.display = `none`;

    document.getElementById(`finish-screen`).style.display = `block`;
    buildResults()





}

function buildResults(){
    timerStatus = false;

    if(exerciseDifficulty == `easy`){
        difficultyName = `Façile`;
    }
    else if(exerciseDifficulty == `medium`){
        difficultyName = `Moyen`;
    }
    else if(exerciseDifficulty == `hard`){
        difficultyName = `Difficile`;
    }

    resultsDifficulty = `difficulté : ${difficultyName}`;
    resultsScore = `score : ${score}/${tries}`;

    if(tries == 0){
        percentage = 0
    }
    else{
        percentage = Math.round((score/tries)*100)
    }


    const difficultyText = document.getElementById("finish-screen-difficulty");
    difficultyText.textContent = resultsDifficulty;

    const percentageText = document.getElementById("finish-screen-percentage");
    percentageText.textContent = `${percentage}%`;

    const scoreText = document.getElementById("finish-screen-score");
    scoreText.textContent = resultsScore;
}




async function startProgram(){
    document.getElementById(`difficulties`).style.display = `none`;

    document.getElementById(`main-container`).style.display = `inline`;
    document.getElementById(`saxophone-container`).style.display = `inline`;
    document.getElementById(`finish-button-container`).style.display = `inline`;

    document.getElementById(`timer`).style.display = `block`;

    
    startTimer();

    while (true) {
        let [noteName, randomKeyArray] = generateNote(exerciseDifficulty);
        noteText = createNoteText(noteName);
        displayNoteText(noteText);

        while (true){
            if (noteCompleted == true) {
                noteCompleted = false
                break
            } else {
                await sleep(300)
            }
        }
    
        noteVerify(randomKeyArray)
    };
}

