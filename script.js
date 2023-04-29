//Global variables
const media = document.querySelector('video') // this just gets the video element
let playbackSpeed = 1 // Global variable to hold the playbackSpeed

function getModifier() {
  let valueElement = O("valueText")
  // get value of input element
  let valueText = valueElement.value
  // casting to a number - even though we set our input element to be a number, it still comes out as a string in JavaScript
  let value = Number(valueText)
  return value
}

    /* This function reads the value from the valueText element
       and adds it to the global playback speed value */
function addToModifier() {
  let value = 2;
  playbackSpeed = playbackSpeed * value // update the global playback speed value
  //or we can shorthand this to an assignment operator
  //playbackSpeed += value
  // Set the playback speed
  media.playbackRate = playbackSpeed
  // Display the updated playback speed
  let resultElement = O("playbackSpeed")
  let resultString = "Playback speed is " + playbackSpeed
  resultElement.innerText = resultString
}
function subtractModifier() {
  let value = 0.5;
  playbackSpeed = playbackSpeed * value // update the global playback speed value
  //or we can shorthand this
  //playbackSpeed -= value
  // Set the playback speed
  media.playbackRate = playbackSpeed
  // Display the updated playback Speed
  let resultElement = O("playbackSpeed")
  let resultString = "Playback speed is " + playbackSpeed
  resultElement.innerText = resultString
}

  /* This function clears the modifier value and updates the display
  */
function zeroModifier() {
  playbackSpeed = 1; // set the global modifier to 0
  // Set the playback speed
  media.playbackRate = playbackSpeed

  // update the display
  let resultElement = O("playbackSpeed")
  resultElement.innerText = "Playback speed is 1"
}

function playPauseMedia() {
  if(media.paused) {
    media.play();
  } else {
    media.pause();
  }
}

function goWackyMode() {
  let input = O('wackyMode')
  let answer = input.value
  if (answer.toLowerCase() == 'yes') {
    media.playbackRate = 1.5
  } else if (answer.toLowerCase() == 'no') {
    media.playbackRate = 1
  } else {
    let wrongAnswer = O('wronganswer')
    wrongAnswer.innerText = "I'm gonna need a yes or no answer, pal"
  }
  input.value = ''
}

function selectVideo() {
  let selectVideo = O('video-select')
  let preference = selectVideo.value

  switch(preference) {
    case ("elemental"):
      media.src = "videos/elemental.mp4"
      break;

    case ("joyRide"):
      media.src = "videos/joyRide.mp4"
      break;

    case ("doctorWho"):
      media.src = "videos/doctorWho.mp4"
      break;

    case ("extraction"):
      media.src = "videos/Extraction.mp4"
      break;

    case ("secretInvasion"):
      media.src = "videos/secretInvasion.mp4"
      break;

    case ("succession"):
      media.src = "videos/succession.mp4"
      break;

    case ("theFlash"):
      media.src = "videos/theFlash.mp4"
      break;

    case ("theLittleMermaid"):
      media.src = "videos/theLittleMermaid.mp4"
      break;

    default:
      break;
  }
 
}

