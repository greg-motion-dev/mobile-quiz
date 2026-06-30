const questionCharacters = document.querySelector('#user-question');
const answersCharacters = document.querySelector('#user-answer');
const leftCharactersQuestions = document.querySelector('[data-js="characters-left-questions"]')
const leftCharactersAnswers = document.querySelector('[data-js="characters-left-answers"]')


questionCharacters.addEventListener("input", (event)=>{
   const currentLength = event.target.value.length;
   const maxLength = event.target.maxLength;
   const remainingLength = maxLength - currentLength;
   leftCharactersAnswers.textContent = remainingLength;
})


// function updateCharacterCount(inputElement, Displayelement){
//     // 1. Read the max length from the inputElement
//     questionCharacters
//   // 2. Read the current length from the inputElement
//   // 3. Do the math
//   // 4. Update the textContent of the displayElement
// }