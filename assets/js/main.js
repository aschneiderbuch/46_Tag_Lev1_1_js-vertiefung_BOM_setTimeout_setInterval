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
    const varZumStopen = setTimeout(() =>{
        antwortFunction();
        counter = counter +1;
        console.log(counter);
    }, 5000);


};

function antwortFunction() {
    const text = "danke das du 5 Sekunden gewartet hast"
    console.log(text)
    document.querySelector("body").innerHTML += text;
};

// console.log + ins html