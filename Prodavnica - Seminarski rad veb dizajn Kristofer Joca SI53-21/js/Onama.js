let klizacIndex = 1;
prikaziKlizac(klizacIndex);

function plusSlides(n) {
  prikaziKlizac(klizacIndex += n);
}

function currentSlide(n) {
  prikaziKlizac(klizacIndex = n);
}

function prikaziKlizac(n) {
  let i;
  let klizaci= document.getElementsByClassName("klizaci1");
  let tacke = document.getElementsByClassName("klizacTacka");
  if (n > klizaci.length) {klizacIndex = 1}    
  if (n < 1) {klizacIndex = klizaci.length}
  for (i = 0; i < klizaci.length; i++) {
    klizaci[i].style.display = "none";  
  }
  for (i = 0; i < tacke.length; i++) {
    tacke[i].className = tacke[i].className.replace(" aktivnoKlizac", "");
  }
  klizaci[klizacIndex-1].style.display = "block";  
  tacke[klizacIndex-1].className += " aktivnoKlizac";
}


//Dugme za Email validacija
function nijeprazno1() {
  let emaill = document.getElementById('emaill').value
 

  if (emaill.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      alert("Hvala vam na prijavi, Obavestićemo vas o našim novim proizvodima");
     
  }
  else  {
      alert("Niste upisali sve podatke");
      
  }


}