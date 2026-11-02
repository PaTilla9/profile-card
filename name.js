// @ts-nocheck

// document.getElementById('name').innerHTML = '<em>Gipsz Jakab</em>';
// document.querySelector('#name').textContent = '<em>Gipsz Jakab</em>';

const nameHU = 'Pados Attila Botond';
const nameEN = 'Attila Botond Pados';
const professionHU = 'Szoftverfejlesztő';
const professionEN = 'Software Developer';
const addressHU = 'Magyarország, Nagyvenyim';
const addressEN = 'Nagyvenyim, Hungary';
const aboutHU = '<p class="paragraph">Szoftverfejlesztő tudások alapját <strong><em>Java, spring Boot, JPA, HTML, CSS, SQL, Git, Maven</em></strong> technológiák ismeretei alkotják' + 
  '<br>Szoftverfejlesztői képességemet a <a href="https://github.com/PaTilla9" target=_blank title="Tekintsd meg Github repository-mat."><strong>Github</strong></a>' + 
  ' repository-mban található kisebb-nagyobb projekteken keresztül mutatom be.</p><p class="paragraph">Önéletrajzomat megnézheted a <a href="https://www.linkedin.com/in/attila-botond-pados/"' + 
  ' target="_blank" title="Látogass meg a LinkedIn-en."><strong><em>LinkedIn</em></strong></a>-en.</p>';
const aboutEN = '<p class="paragraph">My software developement knowledge based on the next technologies: <strong><em>Java, spring Boot, JPA, HTML, CSS, SQL, Git, Maven</em></strong>' + 
  '<br>You can find out more about my ability as a software developer through smaller and larger projects in my<a href="https://github.com/PaTilla9" target=_blank' + 
  'title="Take a look at my Github repository."><strong>Github</strong></a>repository</p><p class="paragraph">You can see my professional CV on <a href="https://www.linkedin.com/in/attila-botond-pados/"' + 
  ' target="_blank" title="Látogass meg a LinkedIn-en."><strong><em>LinkedIn</em></strong></a>.</p>';
const contactHU = 'Lépj velem kapcsolatba:';
const contactEN = 'Contact me via:';
const githubHU = '<a href="https://github.com/PaTilla9" target=_blank title="Tekintsd meg Github repository-mat."><i class="fa-brands fa-2x fa-github"></i></a>';
const githubEN = '<a href="https://github.com/PaTilla9" target=_blank title="Take a look at my Github repository."<i class="fa-brands fa-2x fa-github"></i></a>';
const linkedInHU = '<a href="https://www.linkedin.com/in/attila-botond-pados/" target="_blank" title="Látogass meg a LinkedIn-en."><i class="fa-brands fa-2x fa-linkedin-in"></i></a>';
const linkedInEN = '<a href="https://www.linkedin.com/in/attila-botond-pados/" target="_blank" title="Visit me on LinkedIn."><i class="fa-brands fa-2x fa-linkedin-in"></i></a>';
const emailHU = '<a href="mailto:pados.a.b@gmail.com" target="_blank" title="Küldj emailt: pados.a.b@gmail.com"><i class="fa-regular fa-envelope fa-2x"></i></a>';
const emailEN = '<a href="mailto:pados.a.b@gmail.com" target="_blank" title="Send me email: pados.a.b@gmail.com"><i class="fa-regular fa-envelope fa-2x"></i></a>';;
const mobileHU = '<a href="tel:+36204929059" target=_blank title="Hívj fel: +36 20 492 9059"<i class="fa-solid fa-mobile-screen-button fa-2x"></i></a>';
const mobileEN = '<a href="tel:+36204929059" target=_blank title="Call me on: +36 20 492 9059"<i class="fa-solid fa-mobile-screen-button fa-2x"></i></a>';



initLanguageDefault();

function initLanguageDefault() {
  languageChangeEN();
}

function languageChangeHU() {
  document.getElementById('name').textContent = nameHU;
  document.getElementById('profession').textContent = professionHU;
  document.getElementById('address').textContent = addressHU;
  document.getElementById('about').innerHTML = aboutHU;
  document.getElementById('contact').textContent = contactHU;
  document.getElementById('github').innerHTML = githubHU;
  document.getElementById('linkedin').innerHTML = linkedInHU;
  document.getElementById('email').innerHTML = emailHU;
  document.getElementById('mobile').innerHTML = mobileHU;
}

function languageChangeEN() {
  document.getElementById('name').textContent = nameEN;
  document.getElementById('profession').textContent = professionEN;
  document.getElementById('address').textContent = addressEN;
  document.getElementById('about').innerHTML = aboutEN;
  document.getElementById('contact').textContent = contactEN;
  document.getElementById('github').innerHTML = githubEN;
  document.getElementById('linkedin').innerHTML = linkedInEN;
  document.getElementById('email').innerHTML = emailHU;
  document.getElementById('mobile').innerHTML = mobileHU;
}