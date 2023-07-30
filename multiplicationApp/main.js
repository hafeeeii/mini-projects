const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const questionEl = document.querySelector("#question")
const inputEl = document.querySelector("#input")
const formEl = document.querySelector("#form")
const scoreEl = document.querySelector("#score")

let score = JSON.parse(localStorage.getItem("score"))
if(score<0){
    score = 0
}

scoreEl.textContent = `score: ${score}`
questionEl.textContent = `What is ${num1} multiply by ${num2}`
const correctAns = num1 * num2


formEl.addEventListener("submit",()=>{
    const usrAns = +inputEl.value
    if(correctAns === usrAns){
        score++
        updateLocalStorsge()
    }else{
        score--
        updateLocalStorsge()
    }
})

function updateLocalStorsge(){
    localStorage.setItem("score",JSON.stringify(score))
}
