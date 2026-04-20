import {
    keysDictHard,
    keysName
} from '../../common.js';

    
setList()

function manageInput(){
    reset()
    var selectedNote = document.getElementById(`noteChoice`);
    var noteName = selectedNote.value;
    console.log(noteName);

    var noteArray = keysDictHard[noteName];
    console.log(noteArray);
    
    showNote(noteArray);
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

    var optionArray = []
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


function changeImage(id) {
   //Get the checkbox
    document.getElementById(`${id}-image`).style.display = `inline`;
}

function showNote(noteArray){
    for (const note of noteArray){
        changeImage(note)
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


