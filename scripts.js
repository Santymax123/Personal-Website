
// Nav buttons
document.getElementById('nav-button').addEventListener('mouseover', function () {
    this.style.backgroundColor = '#6d6f1b';
});

document.getElementById('nav-button').addEventListener('mouseout', function () {
    this.style.backgroundColor = '#babf65';
});

//Expanding cards
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        console.log("1")
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        console.log("2")
        panel.classList.remove('active')
    })
}
