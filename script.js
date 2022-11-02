let completeBtns = document.querySelectorAll(".complete")
let deleteBtns = document.querySelectorAll(".delete")
let history = document.querySelector("#history")
let textInputField = document.querySelector("input")
let taskList = document.querySelector("#task-list")
const theButton = document.querySelector("#overlaybutton")
// completeBtns.map((btn) => {
//     btn.addEventListener("click", onCompleteClick)
// })

let onCompleteClick = (e) => {
    e.preventDefault()
    console.log(e.target.parentElement)
    let date = new Date()
    let dateformat = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    history.innerHTML+= `<br>${dateformat}<br>${e.target.parentElement.childNodes[0].innerHTML}<br><br>`
    e.target.parentElement.remove()
}
let onDeleteClick = (that) => {
    that.parentElement.remove()
}

let showHidden = (ok) =>{
    ok.childNodes[2].style.visibility = "visible";
    ok.childNodes[1].style.visibility = "visible";
    
}

let hideHidden = (li) =>{
    li.childNodes[1].style.visibility = "hidden";
    li.childNodes[2].style.visibility = "hidden";

}
let createTask = (e) =>{
    e.preventDefault()
    console.log("hello")
    let li = document.createElement('li');
    li.innerHTML = `<li class="task" onmouseover="showHidden(this)" onmouseout="hideHidden(this)"><p>${textInputField.value}</p><span class="complete hidden" onclick="onCompleteClick(event)">&#10003;</span><span class="delete hidden" onclick="onDeleteClick(this)">&#x2715;</span></li>`
    taskList.appendChild(li);
    textInputField.value = '';
    
}

// 
// 
// 

function openNav(overlay) {
    overlay.style.width = '400px';
    // overlay.style.height = overlayheigth;
    overlay.style.display = "block"
    overlay.style.visibility = "visible";
}
  
function closeNav(overlay) {
    overlay.style.width = 0;
    // overlay.style.height = initialOverlayHeigth;
    overlay.style.visibility = "hidden";
    // await new Promise(r => setTimeout(r, 2000));
    // overlay.style.display = "none"
}

buttonHandler = () => {
    const overlay = document.querySelector("#history")
    let toggled = theButton.getAttribute("aria-pressed") === "true"
    if(toggled){
      closeNav(overlay)
    }
    else{
      openNav(overlay)
    }
    theButton.setAttribute("aria-pressed", !toggled)
  
  }