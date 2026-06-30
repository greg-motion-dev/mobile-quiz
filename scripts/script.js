const bookmarkHeart = document.querySelector('[data-js="bookmark-heart"]');
const btnAnswer = document.querySelector('[data-js="btn-answer"]');
const answer = document.querySelector('[data-js="answer"]');

bookmarkHeart.addEventListener("click", ()=>{
        bookmarkHeart.classList.toggle("bookmark-saved");
        // bookmarkHeart.classList.add("bookmark-unsaved");
        // // bookmarkHeart.classList.
})


btnAnswer.addEventListener("click", ()=>{
        answer.classList.toggle("reveal");
        if ( answer.classList.contains("reveal")){
           btnAnswer.textContent = "Hide Answer";
        } else { btnAnswer.textContent = "Show Answer"}
})

