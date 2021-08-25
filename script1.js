function create(){
    let Password = document.getElementById("Password").value;
    let UserName = document.getElementById("UserName").value;
   
    
    
    if(Password === "" || UserName === "" ){
        alert("Invalid UserName or Password");
    }
    else {
        alert( UserName + "" + " Log in Successfully");  
    }
    
    
    
}

function create1(){
    let Password1 = document.getElementById("Password1").value;
    let Password2 = document.getElementById("Password2").value;
    let UserName1 = document.getElementById("UserName1").value;
    let Age = document.getElementById("Age").value;
    let FirstName = document.getElementById("FirstName").value;
    let LastName = document.getElementById("LastName").value;

    if(Password1 === "" || Password2 === ""|| UserName1 === "" || Age === "" || FirstName ==="" || LastName=== "" ){
        alert("Please Check the Fill up shit there seems a problem");
    }
    else if( Password1 !== Password2){
        alert("Password Does not Match Retry Again")
    }
    else {
        alert( UserName1 + "" + " Account is registered Successfully");  
    }
    
}




function UserJS(){
    let UserName = document.getElementById("UserName").value ="jerjer ";

}
