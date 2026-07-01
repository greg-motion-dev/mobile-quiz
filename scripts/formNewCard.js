const bookmarkHeartNew = document.querySelector('[data-js="bookmark-heart-new"]');
const btnAnswerNew = document.querySelector('[data-js="btn-answer-new"]');
const answerNew = document.querySelector('[data-js="answer-new"]');

bookmarkHeartNew.addEventListener("click", ()=>{
        bookmarkHeartNew.classList.toggle("bookmark-saved");
})

btnAnswerNew.addEventListener("click", ()=>{
        answerNew.classList.toggle("reveal");
        if ( answerNew.classList.contains("reveal")){
           btnAnswerNew.textContent = "Hide Answer";
        } else { btnAnswerNew.textContent = "Show Answer"}
})
