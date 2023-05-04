
let numero = 0

let loopkierrokset = 0

const n1 = document.getElementById("N1");
const n2 = document.getElementById("N2");
const n3 = document.getElementById("N3");
const n4 = document.getElementById("N4");
const n5 = document.getElementById("N5");

n1.addEventListener("click", add)
n2.addEventListener("click", add)
n3.addEventListener("click", add)
n4.addEventListener("click", add)
n5.addEventListener("click", add)


function add(element) {
    console.log(element)
    if (element.target.id == "N1") {
        numero += 1
    } else if (element.target.id== "N2") {
        numero += 2
    } else if (element.target.id == "N3") {
        numero += 3
    } else if  (element.target.id == "N4") {
        numero += 4
    } else if (element.target.id == "N5") {
        numero += 5
    }
    loopkierrokset += 1
    if (loopkierrokset == 1) {
        document.getElementById("kysymys").innerHTML = "Kuinka usein huomaat muiden käyttävän puhelinta seurassasi?"
    } else if (loopkierrokset == 2) {
        document.getElementById("kysymys").innerHTML = "Kuinka usein pidät ryhmätilanteissa puhelimesi pöydällä ruutu ylöspäin?"
    } else if (loopkierrokset == 3) {
        document.getElementById("kysymys").innerHTML = "Kuinka usein kiinnität huomiota omaan puhelimen käyttöösi muiden seurassa?"
    } else if (loopkierrokset == 4) {
        document.getElementById("kysymys").innerHTML = "Kuinka usein pidät ilmoituksia päällä (myös työskennellessä)?"
    } if (loopkierrokset == 5) {
        if (numero === 0) {document.getElementById("palsu").innerHTML="Yrititkö edes?"}
        else if (numero < 6 ) {document.getElementById("palsu").innerHTML="“Olet oikeilla raiteilla, mutta voisit vielä kiinnittää käytökseesi hieman enemmän huomiota. Ihmissuhteidesi laatu paranee, kun tietoisesti keskityt sosiaalisiin tilanteisiin paremmin."}
        else if (numero < 11) {document.getElementById("palsu").innerHTML="Olet oikeilla raiteilla, mutta voisit vielä kiinnittää käytökseesi hieman enemmän huomiota. Ihmissuhteidesi laatu paranee, kun tietoisesti keskityt sosiaalisiin tilanteisiin paremmin."}
        else if (numero < 16) {document.getElementById("palsu").innerHTML="Toiminnassasi on kehityksen varaa. Oletko huomannut, että sinulta menee joskus muiden asioista osa ohi, kun huomiosi kiinnittyy hetkeksi puhelimeen? Ensimmäinen askel muutokseen on ongelman huomaaminen. Lue vinkkimme tilanteen parantamiseen ja palaa kahden viikon päästä tekemään testi uudelleen!"}
        else if (numero < 21) {document.getElementById("palsu").innerHTML="Et taida kiinnittää hirveästi huomiota omaan käytökseesi. Puhelimen käytölläsi on todennäköisesti negatiivinen vaikutus ihmissuhteisiisi, vaikket olisi sitä itse huomannut. Lue sivuiltamme vinkkejä siitä, miten voisit muuttaa käyttäytymistäsi parempaan suuntaan. Muutos voi vaikuttaa niin elämääsi kuin ihmissuhteisiisi positiivisella tavalla. Palaa kahden viikon päästä tekemään testi uudelleen testataksesi oletko edistynyt."}
        else {document.getElementById("palsu").innerHTML="very bad"}
    }

}


//nappi, jolla lähetetään viesti
const nappula = document.getElementById("sendButton");


nappula.addEventListener("click", myFunktio)
//const n = document.getElementsByClassName("nappis")

function myFunktio() {
    const nimitiedot = document.getElementById("nimi").value
    const viestitiedot = document.getElementById("viesti").value
    const kommentti = document.getElementById("omaKommentti")
    kommentti.innerHTML = "<p>" + "<b>" + nimitiedot + "</b>" + "<br>" + viestitiedot + "</p>"
    kommentti.classList.add("aikasempiKokemus")
    nimi.value = ""
    viesti.value=""
}

n.addEventListener("click",function() {console.log("clikc")}) //tää sanoo errorii
