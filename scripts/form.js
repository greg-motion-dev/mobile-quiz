
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {

//prevet default
  event.preventDefault(); 

//read form 
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);


  const submittedUserQuestion = data.userQuestion;
  const submittedUserAnswer = data.userAnswer;
  const submittedUserTag = data.userTag;
   console.log(submittedUserQuestion);
    console.log(submittedUserAnswer);
       console.log(submittedUserTag);




  const newQuestion = document.createElement('section');
  newQuestion.classList.add('card');
  newQuestion.innerHTML = `
   <div class="bookmark-container">
          <button
            type="button"
            class="bookmark bookmark-saved"
            aria-label="Remove bookmark"
            data-js="bookmark-heart"
          ></button>
        </div>
        <div class="question">
          <h2>
            ${submittedUserQuestion}
          </h2>
        </div>
        <div>
          <h3 class="answer" data-js="answer">${submittedUserAnswer}</h3>
            <button type="button" class="btn toggle-btn" data-js="btn-answer">Show Answer</button>
        </div>
        <div>
          <ul class="tags" aria-label="Tags">
            <li>${submittedUserTag}</li>
            <li>${submittedUserTag}</li>
            <li>${submittedUserTag}</li>
          </ul>
        </div>`


        //append below form
    form.append(newQuestion);
  
});


       
    