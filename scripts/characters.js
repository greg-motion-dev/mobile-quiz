const questionCharacters = document.querySelector('#user-question');
const answerCharacters = document.querySelector('#user-answer');
const leftCharactersQuestions = document.querySelector('[data-js="characters-left-questions"]')
const leftCharactersAnswers = document.querySelector('[data-js="characters-left-answers"]')


function updateCharacterCount(inputElement, leftCharacters){
    const currentLength = inputElement.value.length;
   const maxLength = inputElement.maxLength;
   const remainingLength = maxLength - currentLength;
   leftCharacters.textContent = remainingLength;
}


questionCharacters.addEventListener("input", (event)=>{
    updateCharacterCount(questionCharacters, leftCharactersQuestions);
})

answerCharacters.addEventListener("input", (event)=>{
    updateCharacterCount(answerCharacters, leftCharactersAnswers);
})
