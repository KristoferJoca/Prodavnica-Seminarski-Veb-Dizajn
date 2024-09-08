//Pretraga
function pretragafunkcija() {
    // Deklarisanje promenljivih
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('pretraga');
    filter = input.value.toUpperCase();
    ul = document.getElementById("lista-pretazivaca");
    li = ul.getElementsByTagName('li');

    // Loop kroz sve na listi, i sakri ono sto se ne poklapa u pretrazi
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h2")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
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