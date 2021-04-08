var inputContent;
var topText;
var bottomText;
var button;
var outputText;

var songList = ["I LOVE ME", "VIDEO", "ANYWAY", "MOOD 4 EVA" , "ICY"];
var artistList = ["DEMI LOVATO", "INDIA.ARIE", "TORI KELLY", "BEYONCE & CO.", "PINK SWEAT$"];

var hexChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "E" , "F"]
var textCase = ["uppercase" , "lowercase", "capitalize"];

window.addEventListener('DOMContentLoaded', function() {
    inputContent = document.getElementById("inputBox");
    topText = document.getElementById("top");
    bottomText = document.getElementById("bottom");
    button = document.getElementById("selection");
    outputText = document.getElementById("output");

    button.addEventListener("click", function() {
        var userName = inputContent.value;
        outputText.innerText = fortune(userName);
        restyle(outputText);
    });
})



function fortune(name) {
    // chooses the text to change
    listIndex = Math.floor(Math.random() * songList.length);
    var songSelection = name + ", your mood booster song for today is: \r" + songList[listIndex] + " BY " +  artistList[listIndex];
    return songSelection;
}

function restyle(text) {
    // changes the style of the text
    var hexCode = "#";
    for (var i = 0; i < 6; i++){
        hexCode += hexChars[Math.floor(Math.random() * hexChars.length)];
    }
    text.style.color = hexCode;
    text.style.textTransform = textCase[Math.floor(Math.random() * textCase.length)];
    text.style.letterSpacing = toString(Math.floor(Math.random() * 5)) + "rem";
}