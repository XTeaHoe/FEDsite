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

openButton.onclick = openMenu;

function openMenu() {

  var Menutje = document.getElementById("menu");

  Menutje.classList.remove("schuilMenu");
}

var sluitButton = document.getElementById("hamMod");

sluitButton.onclick = sluitMenu;

function sluitMenu() {

  var Menutje = document.getElementById("menu");
  Menutje.classList.add("schuilMenu");
}

/*de vriend van mijn zus is ex CMD'er en die heeft mij ontzettend geholpen met het maken van het hamburger menu*/

window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var Menutje = document.getElementById("menu");
    Menutje.classList.add("schuilMenu");
  }
}