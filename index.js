const startBtn=document.getElementById("startQuiz");
const starterForm=document.getElementById("starterForm");
/*startBtn.addEventListener("focus" ,function(){
    const msg=document.createElement("p");
    msg.textContent="Let's go!"
    starterForm.appendChild(msg);;
});*/

startBtn.addEventListener("click" ,function(){
     console.log("START CLICKED");
     starterForm.style.display="none";
 const array=[{"question":"What geographical line halves the earth in equal way?",
               "options": ["Longitude" ,"Latitude" ,"Equator" ,"Tropical line"],
               "correctAnswer":"Equator"

 },
 { "question":"The longest bone in human body?",
              "options": ["Hip bone" ,"Femur" ,"Neck Bone" ,"Scapula"],
               "correctAnswer":"Femur"
},
 { "question":"The largest planet in the solar system?",
                "options": ["Saturn" ,"Neptune" ,"Venus" ,"Jupiter"],
               "correctAnswer":"Jupiter"
},
 { "question":"How many olympic rings are there?",
              "options": ["Five" ,"Three" ,"Six" ,"Two"],
               "correctAnswer":"Five"
},
 { "question":"'codex' is which company building agent",
            "options": ["Anthropic" ,"XAi" ,"FireFliesAi" ,"OpenAI"],
               "correctAnswer":"OpenAI"
}];
  let questionForm=document.createElement("form");

const questionCards=[];
let score=0;
const progressContainer=document.createElement("div");
const progressBar=document.createElement("div");

const correctness=document.createElement("p");
progressContainer.classList.add("progress-container");
progressBar.classList.add("progress-bar");
questionForm.appendChild(correctness);
progressContainer.appendChild(progressBar);
questionForm.appendChild(progressContainer);
for(let i=0;i<array.length;i++){
   
    const questionCard=document.createElement("div");
        
if(i!==0){
        questionCard.style.display="none";
    }
    questionCards.push(questionCard);
       //questionsForm.push(questionForm);
    const questionCount=document.createElement("p");
    const questionRender=document.createElement("p");
   const questionInfo = document.createElement("div");
questionInfo.classList.add("question-info");



    questionCount.textContent=`question ${i+1} of ${array.length}`;
    const scoreSection=document.createElement("p");
    scoreSection.classList.add("score");
    questionInfo.appendChild(scoreSection);

    scoreSection.textContent=`score:${score}`;
    questionCard.appendChild(questionInfo);
    const optionCard=document.createElement("div")
    optionCard.classList.add("option-buttons");
        questionRender.textContent=array[i].question
    let A=document.createElement("button");
    let B=document.createElement("button");
    let C=document.createElement("button");
    let D=document.createElement("button");
    A.value=array[i].options[0];
    
    B.value=array[i].options[1];
    C.value=array[i].options[2];
    D.value=array[i].options[3];
    A.type="button";
    B.type="button";
    C.type="button";
    D.type="button";

    A.textContent=array[i].options[0];
    B.textContent=array[i].options[1];
    C.textContent=array[i].options[2];
    D.textContent=array[i].options[3];
    const feedBack=document.createElement("div");
    feedBack.appendChild(correctness);
    feedBack.classList.add("feedback");

  
   optionCard.addEventListener("click" ,function(event){

        if(event.target.value==array[i].correctAnswer){
            event.target.style.backgroundColor="hsl(120, 73%, 75%)";
         
                  correctness.textContent=`Correct!`;
                    correctness.style.color = "green";
                
          
          
            
            score++;}
         else if(event.target.value!==array[i].correctAnswer){
            
                  correctness.textContent=`Not quite!`;
                   correctness.style.color = "red";
           
            
               event.target.style.backgroundColor = "hsl(0, 99%, 52%)";}
               const progress=((i+1)/array.length)*100;
               progressBar.style.width=`${progress}%`;
             document.querySelectorAll(".score").forEach(scoreElement=>{
     scoreElement.textContent=`score:${score}`;
  })
            setTimeout(() => {
        questionCards[i].style.display = "none";

        if (i + 1 < array.length) {
            questionCards[i + 1].style.display = "block";
        }
          if(i+1==array.length){
    
  if(score >= 0 && score <= 2){
feedBack.innerHTML = `Score: ${score}<br>Practice makes perfect! Practice slowly again 😊`;}
 else if(score >= 3 && score <= 4){
    feedBack.innerHTML=`Score : ${score}<br>Very Good ! you are smashing it 👌!`
}
else{
 feedBack.innerHTML=`Score : ${score}<br>Genius ! keep Flying 🙌`
}}
},1000);
});

 questionCard.appendChild(questionCount);
questionCard.appendChild(scoreSection);
questionCard.appendChild(questionRender);
 optionCard.appendChild(A);
optionCard.appendChild(B);
optionCard.appendChild(C);
optionCard.appendChild(D);
questionCard.appendChild(optionCard);
questionForm.appendChild(feedBack);


    questionForm.appendChild(questionCard);
}
   





 document.body.appendChild(questionForm);




})