function toggleMenu() {
    //console.log(document.getElementById("primaryNav").classList);
    console.log(document.getElementById("primaryNav").classList.toggle("hide"));
}

const currentDate = {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
    year: 'numeric',
}
document.getElementById("copyrightyear").textContent = new Date().toLocaleDateString('en-us', currentDate);