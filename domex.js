function manipulateDOM() {
    var element = document.getElementById("p1");
    //var elementTag = document.getElementsByTagName("p");
    
    element.style.color = "red";
    element.style.backgroundColor = "yellow";
    element.innerHTML = "Changed Paragraph Value";
    
}