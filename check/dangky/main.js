function myfunction()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var birth = document.getElementById("birth").value;
    var pass = document.getElementById("pass").value;
    var cfpass = document.getElementById("cfpass").value;

    if(name===""|| email===""|| birth===""|| cfpass===""|| cfpass=="")
    {
        alert("Please fill in all required fields");
        return ;
    }
     else if(pass!==cfpass)
    {
        alert("Passwords do not match!");
        return;
    }
    else{

   

 var userdata ={

    name:name,
    email:email,
    pass:pass,
    birth:birth,
    cfpass:cfpass

 };
 localStorage.setItem("userdata", JSON.stringify(userdata));
 alert("Form submitted successfully");
}


}