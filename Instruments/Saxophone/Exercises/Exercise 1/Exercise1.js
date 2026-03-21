var noteArray = [];
var noteCompleted = false;
var note = [];
var score = 0;

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
    "Bb3alt": ["key1", "key2", "alt-bb-key"],
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
    "Gb6": ["octave-key", "palm-d-key", "palm-dsharp-key", "high-e-key", "palm-f-key", "alt-fsharp-key"],
    "Gb6alt": ["octave-key", "front-f-key", "key2", "alt-fsharp-key"]
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


async function startProgram(){
    document.getElementById(`main-container`).style.display = `inline`;
    document.getElementById(`saxophone-container`).style.display = `inline`;
    document.getElementById(`my-timer`).style.display = `block`;
    document.getElementById(`start-button-div`).style.display = `none`;

    startTimer();

    while (true){
        note = generateNote();
        //display_text()

        while (true){
            //console.log(`##########################`)
            if(noteCompleted == true){
                //console.log(`!!!!!!!!!!!!!!!!!!!!!!!!`)
                noteCompleted = false
                break
            }
            else{
                //console.log(`@@@@@@@@@@@@@@@@@@`)
                await sleep(100)
                //console.log(`&&&&&&&&&&&&&&&&&&&&&&&&&&`)
            }
        }
    
        noteVerify(note)
        //do something before reloop?
    };


    





}



function changeImage(id) {
 
   //Get the checkbox
  var checkBox = document.getElementById(`${id}-input`);

   //If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    document.getElementById(`${id}-image`).style.display = `block`;
  }

}


function addToList(id){
    noteArray.push(id)
    console.log(noteArray)
}

function generateNote(){
    randomNumber = Math.floor(Math.random() * 42);
    var randomKey = Object.keys(keysDictHard)[randomNumber];
    randomKeyValue = keysDictHard[randomKey]
    console.log(randomKey)

    return randomKeyValue
}



function noteVerify(note){

    for (const element of note){
        if (noteArray.includes(element)){
            var index = noteArray.indexOf(element);
            noteArray.splice(index, 1);
        }
        else{
            noteArray.push("fail")
            break;
        }
    }

    console.log(noteArray)
    if (!Array.isArray(noteArray) || !noteArray.length){
        console.log("noice");
    }
    else{
        console.log("oof");
    }
    reset()
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

    console.log("Checkboxes resetted.")

    noteArray = []
    console.log(noteArray)
}



function noteCompletedFunction(){
    noteCompleted = true;
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function displayNoteText(){
    
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