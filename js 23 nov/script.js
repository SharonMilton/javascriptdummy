function validate (){
    let myname = document.getElementById("name").value;
    let myemail = document.getElementById("email").value;
    let password = document.getElementById("psw").value;
    let confirmpassword = document.getElementById("cnfpsw").value;
    console.log(myname, myemail, passsword, confirmPassword);
    if(myname == "" || myemail=="" || password=="" || confirmPassword==""){
        alert("all fields are required");
        return false;
    }
}