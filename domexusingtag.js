function manipulateDOM() {

    var elementTag = document.getElementsByTagName("p");

    for (var i = 0; i < elementTag.length; i++) {
        elementTag[i].style.color = "blue";
        elementTag[i].style.backgroundColor = "lightgray";
        elementTag[i].innerHTML = "Changed Tag Value on request of Sahana Mam";
    }

}