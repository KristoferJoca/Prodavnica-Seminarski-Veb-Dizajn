
//Checkbox nestajanje

function checkme() {
   let cb = document.getElementById("chk");
   let text = document.getElementById("kup");
    

    if (cb.checked == true) {
        text.style.display = "block";


    } else {
        text.style.display = "none";
    }
}
function checkme1() {
    let cb = document.getElementById("chk");
    let text = document.getElementById("B");


    if (cb.checked == true) {
        text.style.display = "block";


    } else {
        text.style.display = "none";
    }
}


  

function popust1() {
    let b = document.getElementById("B");
    let kup = document.getElementById("kup").value;

    const h2 = document.querySelector("#header2");

    if (kup == "ASDASF") {

        h2.innerText = "7.600,00 RSD";
    }
    else {
        h2.innerText = "8.999,00 RSD";
    }
}

function popust() {
    let b = document.getElementById("B");
    let kup = document.getElementById("kup").value;

    const h2 = document.querySelector("#header2");

    if (kup == "ASDASF") {
        
        h2.innerText = "7.600,00 RSD";
    }
    else {
        h2.innerText = "9.499,00 RSD";
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


//dugme naruci
function dugmenaruci() {
    alert('Igra uspešno naručena');
}

