let chapterOne = 'Once upon a time, there was a little girl named Goldilocks. She  went for a walk in the forest. ' +
                 'Pretty soon, she came upon a house. She knocked and, no one answered. ' +
                 'Will she enter the house?';

let chapterTwo = 'She walked right in. At the table in the kitchen, there were three bowls of porridge.  Goldilocks was hungry. ' +
                 ' Which bowl did she try first?';
let chapterTwoFirstBowl = '"This porridge is too hot!" she exclaimed.';
let chapterTwoSecondBowl = '"This porridge is too cold," she said';

let chapterThree = '"Ahhh, this porridge is just right," she said happily and she ate it all up.' +
                    " After she'd eaten the three bears' breakfasts she decided she was feeling a little tired." +
                    " So, she walked into the living room where she saw three chairs. Which chair did she try first?";
let chapterThreeFirstChair = '"This chair is too big!" she exclaimed.';
let chapterThreeSecondChair = '"This chair is too big, too!"  she whined.';

let chapterFour = 'Goldilocks was very tired by this time, so she went upstairs to the bedroom. Which bed did she try first?';
let chapterFourFirstBed = '"This bed is too hard!" she exclaimed.';
let chapterFourSecondBed = '"This bed is too soft!" she said.';

let chapterFive = "Then she lay down in the third bed and it was just right. Goldilocks fell asleep. As she was sleeping, the three bears came home.\n" +
                  "Someone's been eating my porridge, growled the Papa bear. Someone's been eating my porridge, said the Mama bear.\n" +
                  "Someone's been eating my porridge and they ate it all up! cried the Baby bear.\n" +
                  "Someone's been sitting in my chair, growled the Papa bear.\n" +
                  "Someone's been sitting in my chair, said the Mama bear.\n" +
                  "Someone's been sitting in my chair and they've broken it all to pieces, cried the Baby bear.\n" +
                  "They decided to look around some more and when they got upstairs to the bedroom, Papa bear growled, Someone's been sleeping in my bed,\n" +
                  "Someone's been sleeping in my bed, too said the Mama bear\n" +
                  "Someone's been sleeping in my bed and she's still there! exclaimed Baby bear.\n" +
                  "Just then, Goldilocks woke up and saw the three bears.  She screamed, Help!  And she jumped up and ran out of the room.\n" +
                  "Goldilocks ran down the stairs, opened the door, and ran away into the forest.  And she never returned to the home of the three bears.\n";
let story = document.querySelector('#story');
story.innerHTML = chapterOne;

/** Chapter 1 */
document.querySelector('#yes-chapter1').addEventListener('click', function() {
    story.innerHTML = chapterTwo;
    document.querySelector('#chapter-one').classList.toggle('hide');
    document.querySelector('#chapter-two').classList.toggle('hide');
});

document.querySelector('#no-chapter1').addEventListener('click', function() {
    story.innerHTML = 'She ditched the house and kept walking';
    document.querySelector('#chapter-one').classList.toggle('hide');
});


/** Chapter 2 */
document.querySelector('#first-bowl').addEventListener('click', function() {
    story.innerHTML = chapterTwoFirstBowl;
});

document.querySelector('#second-bowl').addEventListener('click', function() {
    story.innerHTML = chapterTwoSecondBowl;
});

document.querySelector('#third-bowl').addEventListener('click', function() {
    story.innerHTML = chapterThree;
    document.querySelector('#chapter-two').classList.toggle('hide');
    document.querySelector('#chapter-three').classList.toggle('hide');
});

/** Chapter 3 */
document.querySelector('#first-chair').addEventListener('click', function() {
    story.innerHTML = chapterThreeFirstChair;
});

document.querySelector('#second-chair').addEventListener('click', function() {
    story.innerHTML = chapterThreeSecondChair;
});

document.querySelector('#third-chair').addEventListener('click', function() {
    story.innerHTML = chapterFour;
    document.querySelector('#chapter-three').classList.toggle('hide');
    document.querySelector('#chapter-four').classList.toggle('hide');
});

/** Chapter 4 */
document.querySelector('#first-bed').addEventListener('click', function() {
    story.innerHTML = chapterFourFirstBed;
});

document.querySelector('#second-bed').addEventListener('click', function() {
    story.innerHTML =  chapterFourSecondBed;
});

document.querySelector('#third-bed').addEventListener('click', function() {
    story.innerHTML = chapterFive;
    document.querySelector('#chapter-four').classList.toggle('hide');
});



