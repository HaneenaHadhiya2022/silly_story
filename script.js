const customName = document.getElementById('customName');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let storyText = "It was a hot day, so :insertx: went to the :inserty:. When they got there, they were shocked to see :insertz:. :name: laughed and said it was the weirdest day ever.";

let insertX = ['a giant robot', 'a talking banana', 'a ninja cat'];
let insertY = ['beach', 'supermarket', 'zoo'];
let insertZ = ['a dancing elephant', 'a flying car', 'a magician juggling pineapples'];

randomize.addEventListener('click', generateStory);

function generateStory() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  const name = customName.value !== '' ? customName.value : 'Bob';
  newStory = newStory.replace(':name:', name);

  story.textContent = newStory;
  story.style.display = 'block';
}
