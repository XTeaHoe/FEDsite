// JavaScript Document
console.log("hi");

const FooterDropdowns = document.querySelectorAll('details');

FooterDropdowns.forEach((FooterDropdown) => {
  FooterDropdown.addEventListener('click', () => {
    FooterDropdowns.forEach((otherFooterDropdown) => {
      if (otherFooterDropdown !== FooterDropdown) {
        otherFooterDropdown.removeAttribute('open');
      }
    });
  });
});

const checkbox = document.querySelector('input');
const text = document.querySelector('main');

checkbox.addEventListener('change', function () {
  if (this.checked) {
    text.style.fontSize = '110%'; // Increase font size to 1.5 times the original size
  } else {
    text.style.fontSize = ''; // Reset font size to the default
  }
});

/*ik heb chat gpt te danken voor de code om de tekst groter te maken met de checkbox*/





var openButton = document.getElementById("hamOpen");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.onclick = openMenu;

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
  // zoek de nav op
  var Menutje = document.getElementById("menu");
  // voeg class toe aan nav
  Menutje.classList.remove("toonMenu");
}

/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* JOUW CODE HIER - stap 5 */

// stap 1 - zoek sluiten button op
var sluitButton = document.getElementById("hamMod");

// stap 2 - laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {

  var Menutje = document.getElementById("menu");
  Menutje.classList.add("toonMenu");
}

window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var Menutje = document.getElementById("menu");
    Menutje.classList.add("toonMenu");
  }
}