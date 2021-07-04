window.addEventListener("scroll",animate)
window.addEventListener("load",animate)
function animate(){
    let elements = document.querySelectorAll("body *")
    let windowHeight = window.innerHeight
    for(let element of elements){
        let elementYPosition = element.getBoundingClientRect().bottom
        if(elementYPosition < windowHeight){
            element.classList.add("appeared")
        }
    }
}