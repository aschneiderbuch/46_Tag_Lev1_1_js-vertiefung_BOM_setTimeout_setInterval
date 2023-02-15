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
    const varZumStopen = setTimeout(() => {    // Arrow function damit mehr sachen übergeben
        antwortFunction();
        counter = counter + 1;
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




/* 
Funktion 
ergebnis der Vorschau

setInterval
clearInterval
if, else

*/

const btnCounter = document.querySelector("#countDown");

//click
btnCounter.addEventListener("click", (e) => {
    console.log("in click");

    console.log("in countDownInterval function");


    let counter = 10;           

    // jede Sekunde zählen bzw. ausführen
        // jedes mal anzeigen   in   console  +    html

    const abbruchInterval = setInterval(() => {

       
            console.log("countDownInterval function");
            counter = counter - 1;
            console.log(counter);
document.querySelector("body").innerHTML += `<br></br>  ${counter}   Sekunden`;
            if (counter === 0) {
                clearInterval(abbruchInterval);
                const textOutput = "<br> <br> Endlich Feierabend <br"
                console.log(textOutput);

                    // createElement in innerHTML
                    const neuesPTag = document.createElement("p");

                    // inhalt zuweißen
                    neuesPTag.innerHTML = textOutput;

                    // pTag zu h2 hinzufügen bzw. dort wo es ausgegeben eingefügt werden soll
                    // also wird es zu <h2> test h2  <p> textOutput </p> </h2>
                    // z.B. articel unter h2
                    document.querySelector("h2").appendChild(neuesPTag);

                    // style pTag
                    neuesPTag.style.color = "red";
 
            };

        }, 1000);





    // Element im html anzeigen lassen 
    // wenn er bei 0 dann ausgabe   - Endlich Feierabend - 


});