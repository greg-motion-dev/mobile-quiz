const questionCharacters = document.querySelector('#user-question');
const answersCharacters = document.querySelector('#user-answer');
const leftCharactersQuestions = document.querySelector('[data-js="characters-left-questions"]')
const leftCharactersAnswers = document.querySelector('[data-js="characters-left-answers"]')


function updateCharacterCount(inputLength,leftCharacters ){
    const currentLength = inputLength.value.length;
    const maxLength = inputLength.maxLength;
    const remainingLength = maxLength - currentLength;
    leftCharacters.textContent = remainingLength;
}


questionCharacters.addEventListener("input", (event)=>{
    updateCharacterCount(questionCharacters, leftCharactersQuestions);
})

answersCharacters.addEventListener("input", (event)=>{
    updateCharacterCount(answersCharacters, leftCharactersAnswers);
})