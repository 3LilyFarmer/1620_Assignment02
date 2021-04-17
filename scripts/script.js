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
    saveNote();
  } else if (event.target.innerText === "Cancel") {
    console.log("Cancel clicked");
    field_hide();
  }else{
    console.log("Something else is pressed")
    noteToTextarea();
  }
}

/* Function #1: toggle theme between light and dark */
let t = document.querySelectorAll("[class*='light']");
function theme_change(){
    /* toggle class light, if no class light, default class becomes class dark due to cascading */
    const lightBG = ["theme_left_light", "title_light", "navF_light", "theme_right_light", "title_light", "navF_light", "noteB_light", "themeB_light", "note_field_light", "saveB_light", "cancelB_light", "theme_right_light", "textF_light"]
    let i = 0;
    for (i; i < t.length; i++){
        t[i].classList.toggle(lightBG[i])
    }
    /* changes theme button to reflect Light or Dark Theme option */
    if(document.querySelector(".themeB").textContent=='Dark Theme'){
        document.querySelector(".themeB").textContent='Light Theme';
    } else if(document.querySelector(".themeB").textContent=='Light Theme'){
        document.querySelector(".themeB").textContent='Dark Theme';
    }
}

/* Function #2 show/hide or refresh text area */
function field_refresh(){
    /* show button & textarea if hidden, else refresh text area */
    if(document.querySelector(".note_field").classList.contains("hide")){
        document.querySelector(".themeB").classList.remove("hide");
        document.querySelector(".note_field").classList.remove("hide");
        document.querySelector(".saveB").classList.remove("hide");
        document.querySelector(".cancelB").classList.remove("hide");
    } else {
        document.querySelector(".note_field").value='This is a placeholder';
    }
}

function field_hide(){
    /* hide buttons and textarea */
    document.querySelector(".themeB").classList.add("hide");
    document.querySelector(".note_field").classList.add("hide");
    document.querySelector(".saveB").classList.add("hide");
    document.querySelector(".cancelB").classList.add("hide");
}

/* Function #3: track an array of unique notes */
let notesArray = [{title:"note one", body:"this is my first note"}];
note_number = 1;
function saveNote(){
    /* saves note to an array if note title is unique */
    let titleInput = prompt("Please enter a note title")
    let textInput = document.querySelector(".note_field");
  
    let noteObj = {
        title: titleInput,
        body: textInput.value
    };
    //only update the array if it's a new title
    let exists = check_textExist(noteObj)[0];
    if (!exists) {
      // exists === false
        if(noteObj.title == null || noteObj.title == ""){
            noteObj.title = note_number;
            note_number++;
        }
        notesArray.push(noteObj);
        addNoteToList(noteObj);
        console.log(notesArray);
    } else {
      alert(`Note title: ${noteObj.title} already exist`);
    }
    textInput.value='This is a placeholder';
}
function check_textExist(newNote) {
    let noteExists = false;

    for (let nt of notesArray) {
      if (nt.title == newNote.title){
        newNote = nt;
        noteExists = true;
        break;
      }
    }
    return [noteExists, newNote];
}

/* Function #4: Display list of notes */
function addNoteToList(newNote){
        // 1.create a new <li> with student's first name and last name as its textContent
        let listelement= document.createElement("li");
        let button = document.createElement("button");
        button.textContent = newNote.title;
        listelement.appendChild(button);
        let noteList = document.querySelector(".noteL");
        noteList.appendChild(listelement);
}

/* Function #5: Display saved notes */
function noteToTextarea(){
    console.log(event.target.innerText)
    let noteObj = {
        title: event.target.innerText,
        body: null
    };
    let result = check_textExist(noteObj);
    exists = result[0];
    noteObj = result[1];
    if (exists) {
        // exists === false
        document.querySelector(".note_field").value=noteObj.body;
    }
}