/*my javascript file */
document.body.addEventListener("click", handleClick);

function handleClick(event) {
  
  if (event.target.innerText === "New Note") {
    console.log("New Note clicked");
    field_refresh();
  } else if (event.target.innerText === "Dark Theme" || event.target.innerText === "Light Theme") {
    console.log("Theme clicked");
    theme_change();
  } else if (event.target.innerText === "Save") {
    console.log("Save clicked");
  } else if (event.target.innerText === "Cancel") {
    console.log("Cancel clicked");
    field_hide();
  }
}
/* Function #1 */
let t = document.querySelectorAll("[class*='light']");
function theme_change(){
    const lightBG = ["theme_left_light", "title_light", "navF_light", "theme_right_light", "title_light", "navF_light", "noteB_light", "themeB_light", "note_field_light", "saveB_light", "cancelB_light", "theme_right_light", "textF_light"]
    let i = 0;
    for (i; i < t.length; i++){
        t[i].classList.toggle(lightBG[i])
    }
    if(document.querySelector(".themeB").textContent=='Dark Theme'){
        document.querySelector(".themeB").textContent='Light Theme';
    } else if(document.querySelector(".themeB").textContent=='Light Theme'){
        document.querySelector(".themeB").textContent='Dark Theme';
    }
}
/* Function #2 */
function field_refresh(){
    if(document.querySelector(".note_field").classList.contains("hide")){
        document.querySelector(".themeB").classList.remove("hide");
        document.querySelector(".note_field").classList.remove("hide");
        document.querySelector(".saveB").classList.remove("hide");
        document.querySelector(".cancelB").classList.remove("hide");
    } else {
        document.querySelector("#note_field").value='This is a placeholder test';
    }
}

function field_hide(){
    document.querySelector(".themeB").classList.add("hide");
    document.querySelector(".note_field").classList.add("hide");
    document.querySelector(".saveB").classList.add("hide");
    document.querySelector(".cancelB").classList.add("hide");
}
/* Function #3 */