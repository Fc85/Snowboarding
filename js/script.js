//////////////////////////////////////////////////// SLIDER

// Définition de la variable pour le slide par défaut
var slideIndex = 1;

// Controle des bouton suivant/précédent
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controle des cercles
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Controle du changement de slide
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("snow_slide"); //Récupération des éléments avec la classe "snow_slide"
  var dots = document.getElementsByClassName("cercle"); //Récupération des éléments avec la classe "cercle"
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; //Disparition de l'image
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); //Remplacement de la classe par active
  }
  slides[slideIndex-1].style.display = "block"; //Apparition de l'image
  dots[slideIndex-1].className += " active"; //Changement du cercle actif sous les slides
}

//////////////////////////////////////////////////// MODAL

// Zoomer l'image
function zoomIn(i){
  document.getElementById(i).style.display='block'; //Change le style de la balise en display: block;
}

// Dezoomer l'image
function zoomOut(j){
  document.getElementById(j).style.display='none'; //Change le style de la balise en display: none;
}

//////////////////////////////////////////////////// MENU BURGER

// Afficher le menu
function afficherMenu(){

  document.getElementById('burger').style.display = "none"; //Change le style de la balise en display: none;
  document.getElementById('close').style.display = "block"; //Change le style de la balise en display: block;
  document.getElementById('nav_liste').style.display = "block"; //Change le style de la balise en display: block;
  document.getElementById('nav_icons').style.display = "block"; //Change le style de la balise en display: block;
}

//Cacher le menu
function cacherMenu(){

  document.getElementById('burger').style.display = "block"; //Change le style de la balise en display: block;
  document.getElementById('close').style.display = "none"; //Change le style de la balise en display: none;
  document.getElementById('nav_liste').style.display = "none"; //Change le style de la balise en display: none;
  document.getElementById('nav_icons').style.display = "none"; //Change le style de la balise en display: none;
}