import {
    keysDictHard,
    keysDictMedium,
    keysDictEasy,
    keysName
} from '../../common.js';

var noteCompleted = false;
var score = 0;
var tries = 0;
var noteText = ``;
var exerciseDifficulty = `medium`;
var timerStatus = true;


function showDifficulties(){
    document.getElementById(`start-button-div`).style.display = `none`;
    document.getElementById(`difficulties`).style.display = `inline`;

}

async function startProgram(){
    document.getElementById(`main-container`).style.display = `inline`;
    document.getElementById(`saxophone-container`).style.display = `inline`;
    document.getElementById(`my-timer`).style.display = `block`;
    document.getElementById(`finishButtonContainer`).style.display = `inline`;
    document.getElementById(`start-button-div`).style.display = `none`;
    document.getElementById(`difficulties`).style.display = `none`;

    
    startTimer();

    while(true){
        noteName = generateNote(exerciseDifficulty);
        noteArray = keysDictHard[noteName];
        showNote(noteArray)
        setList()

        while (true){
            if(noteCompleted == true){
                noteCompleted = false
                break
            }
            else{
                await sleep(300)
            }
        }

        noteVerify(noteName)
    };
};
    

function noteCompletedFunction(){
    noteCompleted = true;
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function createNoteText(noteName){
    originalNoteName = noteName
    if(noteName.includes('alt')){
        noteName = noteName.replace(`alt`, ``)
        noteText = `doigté alternatif de`
    }
    else{
        noteText = `doigté habituel de`
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
    noteText = noteText.replace(`${originalNoteName}`, `${keysName[originalNoteName]}`)
    return noteText
}

function setList(){
    var notesList = document.getElementById(`noteChoice`)
    notesList.innerHTML = "";

    var optionArray = ["|"]
    for (const note of Object.keys(keysDictHard)){
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

}

function generateNote(exerciseDifficulty){
    if(exerciseDifficulty == `easy`){
        keysDictHard = keysDictEasy
    }
    else if(exerciseDifficulty == `medium`){
        keysDictHard = keysDictMedium
    }
    else if(exerciseDifficulty == `hard`){
        keysDictHard = keysDictHard
    }

    randomNumber = Math.floor(Math.random() * Object.keys(keysDictHard).length);
    var randomKey = Object.keys(keysDictHard)[randomNumber];
    randomKeyValue = keysDictHard[randomKey]
    console.log(randomKey)

    return randomKey
}

function changeImage(id) {
   //Get the checkbox
    document.getElementById(`${id}-image`).style.display = `inline`;
}

function showNote(noteArray){
    for (const note of noteArray){
        changeImage(note)
    }
}

function noteVerify(note){
    var notesList = document.getElementById(`noteChoice`)
    if(notesList.value == note){
        increaseScore()
    }
    else{
        increaseTries()
    }
    reset()
}


function increaseScore(){
    const scoreTextId = document.getElementById("scoreText");
    score += 1;
    tries += 1;
    scoreTextId.textContent = `score: ${score}/${tries}`;
}

function increaseTries(){
    const scoreTextId = document.getElementById("scoreText");
    tries += 1;
    scoreTextId.textContent = `score: ${score}/${tries}`;
}


function setDifficulty(specifiedDifficulty){
    if(specifiedDifficulty == `easy`){
        exerciseDifficulty = `easy`
    }
    else if(specifiedDifficulty == `medium`){
        exerciseDifficulty = `medium`
    }
    else if(specifiedDifficulty == `hard`){
        exerciseDifficulty = `hard`
    }
}


function reset(){
    const elements = document.getElementsByClassName("input-key");
    for (let element of elements) {
        element.checked = false;
    }

    const elements2 = document.getElementsByClassName("key-image");
    for (let element2 of elements2) {
        element2.style.display = `none`;
    }

    noteArray = []
}


const display = document.getElementById("my-timer");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

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
    document.getElementById(`finishButtonContainer`).style.display = `none`;

    document.getElementById(`finishScreen`).style.display = `block`;
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


    const difficultyText = document.getElementById("finishScreenDifficulty");
    difficultyText.textContent = resultsDifficulty;

    const percentageText = document.getElementById("finishScreenPercentage");
    percentageText.textContent = `${percentage}%`;

    const scoreText = document.getElementById("finishScreenScore");
    scoreText.textContent = resultsScore;
}