
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
        document.getElementById("kysymys").innerHTML = "toka kyssäri"
    } else if (loopkierrokset == 2) {
        document.getElementById("kysymys").innerHTML = "kolmas kyssäri"
    } else if (loopkierrokset == 3) {
        document.getElementById("kysymys").innerHTML = "neljäs kyssäri"
    } else if (loopkierrokset == 4) {
        document.getElementById("kysymys").innerHTML = "viides kyssäri"
    } if (loopkierrokset == 5) {
        if (numero === 0) {document.getElementById("palsu").innerHTML="Did you even try?"}
        else if (numero < 6 ) {document.getElementById("palsu").innerHTML="Good"}
        else if (numero < 11) {document.getElementById("palsu").innerHTML="alright"}
        else if (numero < 16) {document.getElementById("palsu").innerHTML="Could be better"}
        else if (numero < 21) {document.getElementById("palsu").innerHTML="bad"}
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
    nappula.remove()
}

n.addEventListener("click",function() {console.log("clikc")})