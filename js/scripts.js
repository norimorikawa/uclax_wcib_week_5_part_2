console.log('Hello from js/scripts.js!');

const customNameA = document.getElementById('customNameA');
const customNameB = document.getElementById('customNameB');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob and Karen saw the whole thing.  After a short pause Karen said, :insertw: and they continued jump-roping away — :insertx: weighs 300 pounds, and it was a hot day.';
let insertW = ['"Saw that yesterday"','"I saw a leprechaun riding an unicorn"','"Just a typical Saturday"'];
let insertX = ['Sunny the Unicorn','Billy the Buffalo','Danny the Dinosaur'];
let insertY = ['Jupiter','Disneyland','the White House'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let wItem = randomValueFromArray(insertW);
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertw:',wItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customNameA.value !== '') {
    const name = customNameA.value;
    newStory = newStory.replace('Bob',name);
  }

  if(customNameB.value !== '') {
    const name = customNameB.value;
    newStory = newStory.replace('Karen',name);
  }

  if(customNameB.value !== '') {
    const name = customNameB.value;
    newStory = newStory.replace('Karen',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  if(document.getElementById("lalaland").checked) {
    const weight = Math.round(300*8) + ' sprinkles';
    const temperature =  Math.round((300-32) * 5 / 1) + ' fairy dusts';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
