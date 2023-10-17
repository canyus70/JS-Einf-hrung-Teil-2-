document.getElementById("zeigeButton").addEventListener("click", zeigeURL);


function zeigeURL() {
    let aktuelleURL = window.location.href;
    document.write("Die aktuelle URL ist: " + aktuelleURL)
}