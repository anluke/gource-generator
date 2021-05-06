function copyElementText(id) {
    let text = document.getElementById(id).innerText;
    let elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);

    const message = prompt("Copied!")
}


