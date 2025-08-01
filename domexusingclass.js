function manipulateDOM() {

    var elementTag = document.getElementsByClassName("c1");

    for (var i = 0; i < elementTag.length; i++) {
        elementTag[i].style.color = "red";
        elementTag[i].style.backgroundColor = "yellow";
        elementTag[i].innerHTML = "Changed Paragraph Value";
    }
}