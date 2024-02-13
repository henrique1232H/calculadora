import * as action from "./action.js"


document.querySelector(".buttons").addEventListener("click", (e) => {

    const eTarget = e.target.dataset.action;
    
    if(typeof action[eTarget] !== "function") {
        return;
    }
    const valueButton = e.target.value
    
    action[eTarget](valueButton)

})