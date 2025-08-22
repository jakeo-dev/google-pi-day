window.onload = getFile;

function getFile() {
    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", "/pi.txt", true);
    txtFile.onreadystatechange = function () {
        if (txtFile.readyState === 4) {
            if (txtFile.status === 200) {
                pi = txtFile.responseText;
                doThing();
            }
        }
    }
    txtFile.send(null);
}

function doThing() {
    let img = document.createElement("img");
    img.src = "images/3.png";
    img.width = 75;
    img.height = 150;
    img.id = "0";
    document.getElementById("piDiv").appendChild(img);

    img = document.createElement("img");
    img.src = "images/D.png";
    img.width = 10;
    img.height = 10;
    img.id = "D";
    document.getElementById("piDiv").appendChild(img);

    for (i = 2; i < 10002; i++) {
        let img = document.createElement("img");
        img.id = i;

        img.src = "images/" + pi[i] + ".png";

        /* if (pi[i] == 9) {
            img.src = "images/6.png";
            img.style.rotate = "180deg";
        } else {
            img.src = "images/" + pi[i] + ".png";
        } */

        if (pi[i] == 8) {
            img.width = 83;
            img.height = 150;
        } else {
            img.width = 75;
            img.height = 150;
        }

        document.getElementById("piDiv").appendChild(img);
    }
}