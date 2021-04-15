/*my javascript file */

/* Function #1 */
function theme_change(){
    alert('Clicked')
    let t = document.querySelectorAll("[id$='light']");
    let i = 0;
    for (i; i < t.length; i++){
        t[i].classList.toggle("[id$='light']")
    }
}
/* Function #2 */

/* Function #3 */