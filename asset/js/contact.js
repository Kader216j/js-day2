document.getElementById("email").addEventListener("input",function(){
    document.getElementById("emailError").textContent = 
    document.getElementById("email").value.includes("@")==false ? "Invalid email" : "valid email";
});