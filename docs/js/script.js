/*
Hello Person of technical knowledge. Admire my spaggheti code lol. :V
I should probally add more comments but too late I guess
*/
//const poem1id = document.getElementById("poem-1");
const password1 = "I understand the risk to my eyes";
const password2 = "I understand the fact that this webstie will crash and I will lose all of my saved work";
const username = "zBlade";
const pass_user = "wcwiacatsicabmmsablmoitl"; //<---- Ignore
let devMode = false;
function button() {
    //poem1id.innerHTML = "WIP";
    if (prompt("Type  '" + password1 +  "'  to activate light mode.") == password1) {
        alert("True");
        document.getElementById("poem-1").innerHTML = "WIP";
    } else {
        alert("Ok aborted.");
    }
}
function crash() {
    if (prompt("Type  '" + password2 +  "'  to crash the browser.") == password2) {
        while(true) {
            i++;
        }
    } else {
        alert("Ok aborted.");
    }
}
function login() {
    if (prompt("Enter Username:") == username && prompt("Enter Password:") == pass_user) {
        alert("Success, Access granted.")
        devMode = true;
    } else {
        alert("Access Denied.");
    }
}
function coinflip() {
    let pre_flip = Math.random()
    let flip = Math.round(pre_flip);
    if (flip == 1) {
        if (devMode == true) {
            alert("Heads; " + pre_flip.toString());
        } else {
            alert("Heads ");
        }
    } else {
        if (devMode == true) {
            alert("Tails; " + pre_flip.toString());
        } else {
            alert("Tails ");
        }
    }
}
function roll(n1) {
    let rollNumber = Math.random();
    if (devMode == true) {
        alert((Math.round(rollNumber*(n1-1))+1).toString() + "; " + ((rollNumber*(n1-1))+1).toString());
    } else {
        alert(Math.round(Math.random()*(n1-1))+1);
    }
}