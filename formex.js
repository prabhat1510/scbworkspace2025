function validateForm(){
    let name = document.getElementById("name").value;
    if (!name) {
        alert("Please enter your name.");
        return false; // Prevent form submission
    }else if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return false; // Prevent form submission
    } else {
        console.log("Name is valid: " + name);
        return true; // Allow form submission
    }        
}