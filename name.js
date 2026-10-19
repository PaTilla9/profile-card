// @ts-nocheck

// document.getElementById('name').innerHTML = '<em>Gipsz Jakab</em>';
// document.querySelector('#name').textContent = '<em>Gipsz Jakab</em>';

const nameHU = 'Pados Attila Botond';
const nameEN = 'Attila Botond Pados';
const professionHU = 'Szoftverfejlesztő';
const professionEN = 'Software Developer';
const addressHU = 'Magyarország, Nagyvenyim';
const addressEN = 'Nagyvenyim, Hungary';
const aboutHU = 'aboutHU';
const aboutEN = 'aboutEN';
const contactHU = 'Lépj velem kapcsolatba:';
const contactEN = 'Contact me via:';
const githubHU = '<a href="https://github.com/PaTilla9" target=_blank title=""><i class="fa-brands fa-2x fa-github"></i></a>';
const githubEN = '<a href="https://github.com/PaTilla9" target=_blank title=""<i class="fa-brands fa-2x fa-github"></i></a>';
const linkedInHU = '<a href="" target=_blank title="Látogass meg a LinkedInen"><i class="fa-brand fa-2x fa-linkedin-in"></i></a>';
const linkedInEN = '<a href="" target=_blank title="Visit me on Linked In"><i class="fa-brand fa-2x fa-linkedin-in"></i></a>';

initLanguageDefault();

function initLanguageDefault() {
  languageChangeEN();
}

function languageChangeHU() {
  document.getElementById('name').textContent = nameHU;
  document.getElementById('profession').textContent = professionHU;
  document.getElementById('address').textContent = addressHU;
  document.getElementById('about').textContent = aboutHU;
  document.getElementById('contact').textContent = contactHU;
  document.getElementById('github').innerHTML = githubHU;
  document.getElementById('linkedIn').innerHTML = linkedInHU;
}

function languageChangeEN() {
  document.getElementById('name').textContent = nameEN;
  document.getElementById('profession').textContent = professionEN;
  document.getElementById('address').textContent = addressEN;
  document.getElementById('about').textContent = aboutEN;
  document.getElementById('contact').textContent = contactEN;
  document.getElementById('github').innerHTML = githubEN;
  document.getElementById('linkedIn').innerHTML = linkedInEN;
}