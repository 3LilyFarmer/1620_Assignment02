document.body.addEventListener("click", handleClick);

function handleClick(event) {
  
  if (event.target.innerText === "New Note") {
    console.log("New Note clicked");
  } else if (event.target.innerText === "Dark Theme" || event.target.innerText === "Light Theme") {
    console.log("Theme clicked");
    btn_change();
  } else if (event.target.innerText === "Save") {
    console.log("Save clicked");
  } else if (event.target.innerText === "Cancel") {
    console.log("Cancel clicked");
    btn_display();
  }
}

function btn_change(){
    if(document.querySelector(".themeB").textContent=='Dark Theme'){
        document.querySelector(".themeB").textContent='Light Theme'
    } else if(document.querySelector(".themeB").textContent=='Light Theme'){
        document.querySelector(".themeB").textContent='Dark Theme'
    }
}

function btn_display(){
    document.getElementsByClassName(".cancelB").style.display='none'
}