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

