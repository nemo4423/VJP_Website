
const nappi = document.getElementById("laheta");

const seura = document.getElementById("seuraava")

nappi.addEventListener("click",funkkari)

seura.addEventListener("click",tekstivaihto)

kysy = document.getElementById("kysymys")

let number = 0

let laskekierrokset = 0

function checks(input) {
    let trueArray = []
    for (var i=0; i<input.length; i++) {
        if (input[i].type === "checkbox" && input[i].checked === true){
            trueArray.push(true)}
        else {false}}
    console.log(trueArray)
    return trueArray 
        }
    

function tekstivaihto() {
    var inputElems = document.getElementsByTagName("input")
    if (checks(inputElems).length === 1) {
        laskekierrokset += 1
        for (var i=0; i<inputElems.length; i++) {
            if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
                if (inputElems[i].id == "N1") {number+=1}
                else if (inputElems[i].id == "N2") {number+=2}
                else if (inputElems[i].id == "N3") {number+=3}
                else if (inputElems[i].id == "N4") {number+=4}
                else if (inputElems[i].id == "N5") {number+=5}
                else {number}
                inputElems[i].checked = false
        }}
        if (laskekierrokset === 1) {
            kysy.innerHTML ="Käytätkö puhelinta kaverin seurassa?"
        } else if (laskekierrokset === 2){
            kysy.innerHTML = "Käytätkö plaaplaa?" 
        } else if (laskekierrokset === 3) {
            kysy.innerHTML = "Käytätkö plaaplaa?";
        } else  {
            kysy.innerHTML = "Vika kyssäri" 
            seura.remove();}}
    else {
        alert("Choose one option.")}    
}

function funkkari() {
    if (laskekierrokset>=4) {
        
    var inputElems = document.getElementsByTagName("input")
    if (checks(inputElems).length === 1) {
    for (var i=0; i<inputElems.length; i++) {
        if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
            if (inputElems[i].id == "N1") {number+=1}
            else if (inputElems[i].id == "N2") {number+=2}
            else if (inputElems[i].id == "N3") {number+=3}
            else if (inputElems[i].id == "N4") {number+=4}
            else if (inputElems[i].id == "N5") {number+=5}
            else {number}
            inputElems[i].checked = false
        }}


    if (number === 0) {document.getElementById("palsu").innerHTML="Did you even try?"}
    else if (number < 6 ) {document.getElementById("palsu").innerHTML="Good"}
     else if (number<11) {document.getElementById("palsu").innerHTML="alright"}
     else if (number<16) {document.getElementById("palsu").innerHTML="Could be better"}
     else if ((number<21)) {document.getElementById("palsu").innerHTML="bad"}
     else {document.getElementById("palsu").innerHTML="very bad"}
      //jos ei valittu mitään palauttaa myös bad
    nappi.remove();
    seura.remove();
    laskekierrokset = 0}
        else {alert("Choose one option.")}}    
    else {alert("vastaa toisiin kysymyksiin")}
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