console.log("test");

/* 
function die nach x Sekunden Text anzeigt

*/



const btn = document.querySelector("#button5Sek")

// click
// ??? :-(  geht nur 1x zu clicken
    btn.addEventListener("click", (e) => {
    e.preventDefault();
    soll5SekWarten();
    const text = "<br> <br> bitte warte 5 Sekunden <br>"
    console.log(text)
    document.querySelector("body").innerHTML += text;
});


// function
function soll5SekWarten() {
    // setTimeout
    let counter = 0;
    const varZumStopen = setTimeout(() =>{    // Arrow function damit mehr sachen übergeben
        antwortFunction();
        counter = counter +1;
        console.log(counter);
    }, 5000);


};

// console.log + ins html
function antwortFunction() {
    const text = "danke das du 5 Sekunden gewartet hast"
    console.log(text)

    // Neues Element erstellen 
    const antwortElement_Div = document.createElement("div");

    // text mit div verknüpfe --> zuweißen 
    // bzw. im html erstellen
antwortElement_Div.innerHTML += text;

    // Antwort Element Div zum body hinzufügen bzw. anzeigen lassen
    document.querySelector("body").appendChild(antwortElement_Div);
   
   // zum css style color red     
   // kommt jetzt per js    backgroundColor: green hinzu
    antwortElement_Div.style.backgroundColor = "green";
};

