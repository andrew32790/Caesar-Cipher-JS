var abc = "abcdefghijklmnopqrstuvwxyz";
var fAbc = abc + abc + abc;



function btnEncrypt() {
    var inputText = document.getElementById('inputField').value;
    var ckey = document.getElementById('kInput').value;
    ckey = (ckey % abc.length);
    var result = '';
    for (i = 0; i < inputText.length; i++) {
        var letter = inputText[i];
        var upper = (letter == letter.toUpperCase());
        letter = letter.toLowerCase();
        var index = abc.indexOf(letter);
        if (index == -1) {
            result += letter;
        } else {
            index = ((index + ckey) + abc.length);
            var nextLetter = fAbc[index];
            if (upper) nextLetter = nextLetter.toUpperCase();
            result += nextLetter;
        }
        document.getElementById('outputField').value = result;
    }
}

function btnDecrypt() {
    var inputText = document.getElementById('inputField').value;
    var ckey = document.getElementById('kInput').value;
    ckey = (ckey % abc.length);
    var result = '';
    for (i = 0; i < inputText.length; i++) {
        var letter = inputText[i];
        var upper = (letter == letter.toUpperCase());
        letter = letter.toLowerCase();
        var index = abc.indexOf(letter);
        if (index == -1) {
            result += letter;
        } else {
            index = (abc.length + (index - ckey));
            var nextLetter = fAbc[index];
            if (upper) nextLetter = nextLetter.toUpperCase();
            result += nextLetter;
        }
        document.getElementById('outputField').value = result;
    }
}

function btnResetKey() {
    document.getElementById('kInput').value = 0;
}
function btnFieldReset() {
    document.getElementById('inputField').value = "";
    document.getElementById('outputField').value = "";
}
function btnResetAll() {
    document.getElementById('kInput').value = 0;
    document.getElementById('inputField').value = "";
    document.getElementById('outputField').value = "";
}