const hamburger = document.getElementById("hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active")
    }))

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

const vasennappi = document.getElementById("vasennappula")
const oikeanappi = document.getElementById("oikeanappula")

const poista = document.getElementById("delete")
poista.addEventListener("click",poistetaan)

let laskin = 0

vasennappi.addEventListener("click",slide)
oikeanappi.addEventListener("click",slide)

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
        document.getElementById("kysymys").innerHTML = "2. Kuinka usein huomaat muiden käyttävän puhelinta seurassasi?"
    } else if (loopkierrokset == 2) {
        document.getElementById("kysymys").innerHTML = "3. Kuinka usein pidät ryhmätilanteissa puhelimesi pöydällä ruutu ylöspäin?"
    } else if (loopkierrokset == 3) {
        document.getElementById("kysymys").innerHTML = "4. Kuinka usein kiinnität huomiota omaan puhelimen käyttöösi muiden seurassa?"
    } else if (loopkierrokset == 4) {
        document.getElementById("kysymys").innerHTML = "5. Kuinka usein pidät ilmoituksia päällä (myös työskennellessä)?"
    } if (loopkierrokset == 5) {
        if (numero === 0) {document.getElementById("palsu").innerHTML="Yrititkö edes?"}
        else if (numero < 6 ) {document.getElementById("palsu").innerHTML="<div style='overflow:auto'><img src='images/hand.png' alt='Image description' style='float:right;margin-left:10px;height:200px;'>" + "<p style='margin-left:0;'>Puhelimen käyttösi ei vaikuta olevan haitallista sosiaalisissa tilanteissa. <br><br> Hienoa! Kehoita ystäviäsi toimimaan samoin.</p></div>";}
        else if (numero < 11) {document.getElementById("palsu").innerHTML="<div style='overflow:auto'><img src='images/hand2.png' alt='Image description' style='float:right;margin-left:10px;height:200px;'>" + "<p style='margin-left:0;'>Puhelimen käyttösi ei vaikuta olevan haitallista sosiaalisissa tilanteissa, mutta ihmissuhteidesi laatu voisi parantua, jos kiinnittäisit asiaan enemmän huomiota. <br><br> Voit myös keskustella asiasta ystäviesi kanssa.</p></div>";}
        else if (numero < 16) {document.getElementById("palsu").innerHTML="<div style='overflow:auto'><img src='images/hand3.png' alt='Image description' style='float:right;margin-left:10px;height:200px;'>" + "<p style='margin-left:0;'>Olet oikeilla raiteilla, mutta voisit vielä kiinnittää käytökseesi hieman enemmän huomiota. <br><br> Ihmissuhteidesi laatu paranee, kun tietoisesti keskityt sosiaalisiin tilanteisiin paremmin. </p></div>";}
        else if (numero < 21) {document.getElementById("palsu").innerHTML="<div style='overflow:auto'><img src='images/hand4.png' alt='Image description' style='float:right;margin-left:10px;height:200px;'>" + "<p style='margin-left:0;'>Toiminnassasi on kehityksen varaa. <br><br> Oletko huomannut, että sinulta menee joskus muiden asioista osa ohi, kun huomiosi kiinnittyy hetkeksi puhelimeen? <br><br> Ensimmäinen askel muutokseen on ongelman huomaaminen.<br><br> Lue vinkkimme tilanteen parantamiseen ja palaa kahden viikon päästä tekemään testi uudelleen!</p></div>";}
        else {document.getElementById("palsu").innerHTML="<div style='overflow:auto'><img src='images/hand5.png' alt='Image description' style='float:right;margin-left:10px;height:200px;'>" + "<p style='margin-left:0;'>Et taida kiinnittää hirveästi huomiota omaan käytökseesi. <br><br> Puhelimen käytölläsi on todennäköisesti negatiivinen vaikutus ihmissuhteisiisi, vaikket olisi sitä itse huomannut. <br><br> Lue sivuiltamme vinkkejä siitä, miten voisit muuttaa käyttäytymistäsi parempaan suuntaan. Muutos voi vaikuttaa niin elämääsi kuin ihmissuhteisiisi positiivisella tavalla. <br><br> Palaa kahden viikon päästä tekemään testi uudelleen testataksesi oletko edistynyt.</p></div>";}
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
    kommentti.style.display ="inline"
    kommentti.innerHTML = "<p>" + "<b>" + nimitiedot + "</b>" + "<br>" + viestitiedot + "</p>"
    kommentti.classList.add("aikasempiKokemus")
    document.getElementById("delete").style.display= "inline"
    nimi.value = ""
    viesti.value=""
}

n.addEventListener("click",function() {console.log("clikc")}) //tää sanoo errorii



function poistetaan() {
    const kommentti = document.getElementById("omaKommentti")
    kommentti.innerHTML = ""
    kommentti.classList.remove("aikaisempiKokemus")
    kommentti.style.display = "none";
    poista.style.display ="none"
}

function playAudio() {
    var audio = document.getElementById("my-audio");
    audio.play();
}
function pauseAudio() {
    var audio = document.getElementById("my-audio");
    audio.pause();
}
function restartAudio() {
    var audio = document.getElementById("my-audio");
    audio.currentTime = 0;
}




//rakennetaan funktio, jolla somesisältö kohdassa olevilla napeilla voidaan vaihtaa sisältöä, joka näkyy.
//Toimii, kun näyttön leveys on alle 850px. Yli 850px leveydellä pitäisi näkyä kaikki sisällöt kerralla. 

function slide(element) {
        if (element.target.id == "oikeanappula") {
            laskin += 1
            if (laskin === 0) {
                document.getElementById("slide-2").style.display = "inline";
                document.getElementById("slide-1").style.display = "none";
                document.getElementById("slide-3").style.display = "none";
                oikeanappi.style.display = "inline";
                vasennappi.style.display = "inline";
            }
            else if (laskin === 1) {
                document.getElementById("slide-2").style.display = "none";
                document.getElementById("slide-1").style.display = "none";
                document.getElementById("slide-3").style.display = "inline";
                oikeanappi.style.display = "none";
            }
        }
        else if (element.target.id == "vasennappula") {
            laskin -= 1
            if (laskin === 0) {
                document.getElementById("slide-2").style.display = "inline";
                document.getElementById("slide-1").style.display = "none";
                document.getElementById("slide-3").style.display = "none";
                oikeanappi.style.display = "inline";
                vasennappi.style.display = "inline";
            }
            else if (laskin === -1) {
                document.getElementById("slide-2").style.display = "none";
                document.getElementById("slide-1").style.display = "inline";
                document.getElementById("slide-3").style.display = "none";
                vasennappi.style.display = "none";
            }
        }
   
    }
