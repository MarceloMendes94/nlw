const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const closebtn = document.querySelector("#modal .content .header img")
buttonSearch.addEventListener("click", ()=>{
    modal.classList.remove("hide")
    console.log("oi")
})
closebtn.addEventListener("click", ()=>{
    modal.classList.add("hide")
    console.log("tchau")
})