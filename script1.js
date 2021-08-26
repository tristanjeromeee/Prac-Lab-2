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
        return false;
    }
    else if( Password1 !== Password2){
        alert("Password Does not Match Retry Again");
        return false;
    }
    else if (Password1.length < 8) {
        alert("Password must contain at least 8 characters");
        return false;
    }
    else if (isThereUpperCase(Password1) === false) {
        alert("Password must include at least one(1) Capital letter.");
        return false;
    }
    else if (containsSpecialChar(Password1) === false) {
        alert("Password must include at least one(1) Special character.");
        return false;
    }
    else {
        alert( UserName1 + "" + " Account is registered Successfully");  
        
    }
    
}




function UserJS(){
    let UserName = document.getElementById("UserName").value ="jerjer ";

}


function isUpperCase(char) {
    if (char >= 'A' && char <= 'Z') {
        return true;
    } else {
        return false;
    }
}

function isThereUpperCase(str) {
    let thereIsUpperCase = false;
    for (let i = 0; i < str.length; i++) {
        if (isUpperCase(str.charAt(i)) === true) thereIsUpperCase = true;
    }
    return thereIsUpperCase;
}

function containsSpecialChar(str) {
    let specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}