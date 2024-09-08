



//Dugme za kupon
function kuponPoruka() {
    alert('Šifra vašeg kupona je ASDASF');
}

//Dugme za Kontakt





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
//slider
const proizvodKontejner = [...document.querySelectorAll('.proizvod-kontejner-klizac')];
const sledeceDugme = [...document.querySelectorAll('.sledece-dugme')];
const prosloDugme = [...document.querySelectorAll('.proslo-dugme')];

proizvodKontejner.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    sledeceDugme[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prosloDugme[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})