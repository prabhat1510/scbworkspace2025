function validateForm() {
    var name = document.getElementById("name").value;


    if (name == "") {
        document.getElementById("errorMessage").innerHTML = "Name must be filled out";
        return false;
    }
    
}