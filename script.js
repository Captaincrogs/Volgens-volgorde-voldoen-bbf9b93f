let antwoord = ['parijs', '8', 'ijselmeer'];
let automerk = ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"];
let waddeneiland = ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"]
let goed;

function controleerantwoord() { 
     goed = 0;
let input1 = document.getElementById("vraag1").value;
console.log(input1);

if (input1 == antwoord[0]) {
    document.getElementById("vraag1");
    goed += 1;
} else {
    document.getElementById(vraag1);
}
let input2 = document.getElementById("vraag2").value;
    if (input2 == antwoord[1]) {
        document.getElementById("vraag2");
        goed += 1;
    } else {
        document.getElementById("vraag2");
    }
    let input3 = document.getElementById("vraag3").value;
    if (input3 == antwoord[2]) {
        document.getElementById("vraag3");
        goed += 1;
    } else {
        document.getElementById("vraag3");
    }
    console.log(goed);
if (goed ==3) {
    document.getElementById("goedeantwoorden").innerHTML = "Alle vragen zijn goed";
} else {
    document.getElementById("goedeantwoorden").innerHTML = goed + " van de antwoorden zijn goed";

}
}
