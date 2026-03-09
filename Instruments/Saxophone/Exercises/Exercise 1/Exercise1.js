



function startProgram(){
    document.getElementById(`main-container`).style.display = `inline`;
    document.getElementById(`saxophone-container`).style.display = `inline`;
    document.getElementById(`testcontainer`).style.display = `inline`;
    document.getElementById(`my-timer`).style.display = `block`;
    document.getElementById(`start-button-div`).style.display = `none`;

    startTimer();





    //let status = true;
    //while(status === true){
    //    
    //}
}


function nameFunction(id) {
 
   //Get the checkbox
  var checkBox = document.getElementById(`${id}-input`);

   //If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    document.getElementById(`${id}-image`).style.display = `block`;
  } else {
    document.getElementById(`${id}-image`).style.display = `none`;
  }
}


function note(){
    //...
}

function changeImage(){
    //...
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