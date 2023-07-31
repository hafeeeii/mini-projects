const textAreaEl = document.getElementById("textarea")
const totalEl = document.getElementById("total")
const remainingEl = document.getElementById("remaining")

updateCounter()

textAreaEl.addEventListener("keyup",()=>{
    updateCounter()
   
})

function updateCounter(){
    totalEl.textContent = textAreaEl.value.length
    remainingEl.textContent = textAreaEl.getAttribute("maxLength")-textAreaEl.value.length

}