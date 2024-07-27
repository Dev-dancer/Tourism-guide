var question=document.getElementById("questions")
var answers=document.getElementById("answers")
var startbutton=document.getElementById("startquiz")
var ans=document.querySelectorAll(".ans")
var nextquestionbutton=document.getElementById('nextquestion')
var quizinstructions=document.getElementById("quizinstructions")

const questionarray = [
    {
        question: " 1. What is the capital of Indonesia?",
        options: ["Jakarta", "Kuala Lumpur", "Manila", "Bangkok"],
        answer: "0"
    },
    {
        question: "2. Name one of the main airports in East Timor.",
        options: [ "Suvarnabhumi Airport", "Changi Airport","Presidente Nicolau Lobato International Airport (DIL)", "Tan Son Nhat International Airport"],
        answer: "2"
    },
    {
        question: "3. Who was the first President of East Timor?",
        options: [ "Ho Chi Minh","Xanana Gusmão", "Aung San Suu Kyi", "Nguyen Phu Trong"],
        answer: "1"
    },
    {
        question: "4. Which country colonized East Timor in the 16th century?",
        options: [ "Spain", "Netherlands", "United Kingdom","Portugal"],
        answer: "3"
    },
    {
        question: "5. What is the primary mode of transportation in Indonesia?",
        options: [ "Railway Network", "Waterways", "Air Transport","Road Transport"],
        answer: "3"
    },
];

answers.style.visibility="hidden"
question.style.visibility='hidden'
nextquestionbutton.style.visibility='hidden'
// startbutton.style.display="block"

var start=0
function startquiz(){
    if (start==0){
        start=1
        quizinstructions.style.display='none'
    // resultdiv.style.display="none"
    startbutton.style.display="none"
    answers.style.visibility="visible"
    question.style.visibility="visible"
    nextquestionbutton.style.visibility='visible'
    // start=0
    nextquestion()
}

// else if (start==1){
    // j=0
    // nextquestionbutton.style.display="block"
        // startbutton.style.display="none"
        // nextquestion()
        // start=0

// }


}
// function nextquestion(){
    
//             ans.innerHTML=questionarray[i].options[j]
//             i++
    
//     }


    
var j=0
var points=0,pointsindicator=0
function nextquestion(){
        if (j >= questionarray.length) {
         answers.style.visibility="hidden"
        question.style.visibility="hidden"
        resultdiv=document.getElementById('resultdiv')
        const para=document.createElement("p")
        para.style['fontSize']='40px'
        para.style['padding']='10px'
        const node =document.createTextNode("Your score: "+points+"/"+ questionarray.length)
        para.appendChild(node)
        resultdiv.appendChild(para)
        nextquestionbutton.style.display="none"


        // RETAKEQUIZ

        // startbutton.innerHTML="Retake quiz"
        // startbutton.style.display="block"
        // startquiz()
    }
        question.innerHTML=questionarray[j].question
    // for(var j=0;j<ans.length;j++){
    //     ans[j].textContent=questionarray[i].options[j]
    // }
    // i++

    for (var i = 0; i < ans.length; i++) {
    var buttonId = (i + 1); 
    var button = document.getElementById(buttonId); 
    
    if (button) {
        button.innerHTML = questionarray[j].options[i]; 
    }

}


 ans.forEach(bt =>{
    bt.addEventListener('click', (e) =>{
        
        val=e.target.value
        // alert(val)
        // alert(ans[1].value)

        if (val==questionarray[j-1].answer){
                // alert(questionarray[j].answer)
                ans[questionarray[j-1].answer].style.backgroundColor="green"
                pointsindicator=1
                enableDisable()

               
            }
            else if (val!=questionarray[j-1].answer){
                // alert(j-1)
                ans[val].style.backgroundColor="red"
                ans[questionarray[j-1].answer].style.backgroundColor="green"
                // alert(ans[questionarray[j].answer].value)
                
                enableDisable()
            }
        })
    })
    if (pointsindicator==1){
        points++
        pointsindicator=0
    }
    
    
    j++
    for (var z = 0; z < ans.length; z++) {
        ans[z].style.backgroundColor ="";
        ans[z].disabled =false;
        ans[z].style.cursor="pointer"

    }

    function enableDisable(){
 for (var z = 0; z < ans.length; z++) {
        ans[z].disabled =true;
         ans[z].style.cursor="not-allowed"
                }
}




    //RESULT
    // if(j>questionarray.length-1){

    //     answers.style.visibility="hidden"
    //     question.style.visibility="hidden"
    //     resultdiv=document.getElementById('resultdiv')
    //     const para=document.createElement("p")
    //     para.style['fontSize']='40px'
    //     para.style['padding']='10px'
    //     const node =document.createTextNode("Your score: "+points+"/"+ questionarray.length)
    //     para.appendChild(node)
    //     resultdiv.appendChild(para)
    // }
    
}

// function result(){
    
//         answers.style.visibility="hidden"
//         question.style.visibility="hidden"
//         resultdiv=document.getElementById('resultdiv')
//         const para=document.createElement("p")
//         para.style['fontSize']='40px'
//         para.style['padding']='10px'
//         const node =document.createTextNode("Your score: "+points+"/"+ questionarray.length)
//         para.appendChild(node)
//         resultdiv.appendChild(para)

      // RETAKEQUIZ

        // nextquestionbutton.style.display="none"
        // startbutton.innerHTML="Retake quiz"
        // startbutton.style.display="block"
        // j=0
        // startquiz()

    
// }










// for (var z = 0; z < ans.length; z++) {
//             ans[z].disabled =true;
//         }

// var answerindex=0
// // function checkanswer(){
//     ans.forEach(bt =>{
//     bt.addEventListener('click', (e) =>{
//         val=e.target.value

        
//             if (val==questionarray[answerindex].answer){
//                 ans[answerindex].style.backgroundColor="green"
//             }

//             // else if (val!=questionarray[answerindex].answer){
//             //     ans[val].style.backgroundColor="red"
//             //     ans[questionarray[answerindex].answer].style.backgroundColor="green"
//             // }
    

//         })
//         // ans[answerindex].style.backgroundColor="none"
//     })
//     answerindex++
// // }


