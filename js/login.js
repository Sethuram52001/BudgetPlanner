function switchTab(event, formName) {
    let els = document.getElementsByClassName("tabContents");
    for (let el = 0; el < els.length; el++) {
        els[el].style.display = none;
    }
    console.log(formName)
    document.getElementById(formName).style.display = "block";
}