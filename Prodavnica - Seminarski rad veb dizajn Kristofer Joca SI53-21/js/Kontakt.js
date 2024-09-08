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

//formaa validacija
function nijeprazno() {
    let ime = document.getElementById('ime').value
    let prezime = document.getElementById('prezime').value
    let email = document.getElementById('Email').value
    let poruka = document.getElementById('poruka').value

    if (ime, prezime,email, poruka == "" || !email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) { 
        alert("Pogresno ste upisali podatke");
    
}
else {
        alert("Vaša poruka je uspesno poslata");
}

}