
// PROCESS :

// 1. Make a function of name ramdumnumber in which take the inputof randum numbers

// 2. Make another function named as geaneratequestion in which funst inisiate two randumnumber by calling the first randumnumber function with the max and min value. Then make another variable of name question in which inistiate the question with value of randumnumber by the dollar symbol and also inisiate in back ticks. Then make another variable named as answer in which perform the operation between both the randum numbers. Then make the return object in which first put question variable and then answer variable.

// 3 . Make another function named as showquestion in which on place of const {questions,answer} we put the function which  is genreatquestion and then by the help of document .getElementBy ID WE USE TO TAKE THE QUESTION OF QUESTIONS ID IN THE VARIABLE CALLED AS Questionele.Then make another variable storedanswer and then put the value of answer in storedanswer. Then call the showquestion function.

// 4 . In html on the form we use to put the event listner which is onsubmit we use to run the function named as cheakanswer and pas the element called event.

// 5 . Then make the function in javascript named as cheakanswer(event) in which first event.preventDefault() due to which on submit the reloading does not done.

// 6 . By the help of document .getelementby id we use to get the data of form in js by id questionform.Then make a variable clled as formdata in which by the ne FormData(questionformele) we use to get form data

// 7 . Then make another variable called as useranswer in which we use to get the input value of formdata by name answer in input with addition sing due to which we get the numeric value,

//  Make the global variable name as score which is equal to 0.


// 8 . if username value is equal to storedanswer then score is incread by 1 and else score is decrese by 1

// 9 .Then by the document we get the value of span by id score2 in the variable scoreEle . this is a global variable/

// 10. Then store the value of score in scoreEle.innertext. Then  to reset the input after every question we use to do event.target.reset(). Then call shoequestion(). Then console.log("answer",useranswer).









const questionele = document.getElementById('question');
const questionformele = document.getElementById('questionform');
const scoreEle = document.getElementById('score2');
let storedanswer;
let score = 0;

const randumnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};



const genreatequestion = () => {
    const randumnumber1 = randumnumber(1, 50);
    const randumnumber2 = randumnumber(1, 50);
    const questiontype = randumnumber(1, 50);
    let questions;
    let answer;
    let firstnumber;
    let secondnumber;

    if(randumnumber1> randumnumber2){
        firstnumber=randumnumber1;
        secondnumber=randumnumber2;
    }
    else{
        firstnumber=randumnumber2;
        secondnumber=randumnumber1;
    }

    // const questions=`Q . What is ${randumnumber1} multiply by ${randumnumber2}`;
    // const answer=randumnumber1*randumnumber2;

    switch (questiontype) {
        case 1:
            questions = `Q . What is ${firstnumber} multiply by ${secondnumber}`;
            answer = firstnumber * secondnumber;
            break;
        case 2:
            questions = `Q . What is the sum of ${firstnumber} and ${secondnumber}`;
            answer = firstnumber + secondnumber;
            break;
        case 3:
            questions = `Q . What is the difference between ${firstnumber} and ${secondnumber}`;
            answer = firstnumber - secondnumber;
            break;
        case 4:
            questions = `Q . What is ${firstnumber} divided by ${secondnumber}`;
            answer =firstnumber / secondnumber;
            break;

        default:
            questions = `Q . What is ${firstnumber} divided by ${secondnumber}`;
            answer = firstnumber * secondnumber;
            break;
    }
    return { questions, answer };
}

const showQuestion = () => {
    const { questions, answer } = genreatequestion();
    questionele.innerText = questions;
    storedanswer = answer;

}
showQuestion();

const cheakanswer = (event) => {
    event.preventDefault();
    const formdata = new FormData(questionformele);

    const useranswer = +formdata.get("answer");
    if (useranswer == storedanswer) {
        score += 1;
    }
    else {
        score -= 1;
    }
    scoreEle.innerText = score;
    event.target.reset();
    showQuestion();
    console.log("answer", useranswer);



}


