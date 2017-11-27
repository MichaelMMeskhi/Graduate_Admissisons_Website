function setFormFocus() {
document.forms[0].visitor_name.focus();
}

function confirmSubmit(){
    if(document.forms[0].NameInput.value == "" || document.forms[0].NameInput.value == "Your full name"){
        window.alert("Please must enter your name.");
        return false;
    }
    if(document.forms[0].UniversityInput.value == "" || document.forms[0].UniversityInput.value == "unselected"){
        window.alert("Please choose your university.");
        return false;
    }
    if(document.forms[0].EmailInput.value == "" || document.forms[0].EmailInput.value == "you@mailbox.com"){
        window.alert("Please enter your e-mail address.");
        return false;
    }
    if(document.forms[0].PhoneInput.value == "" || document.forms[0].PhoneInput.value == "Your phone number"){
        window.alert("Please enter your phone number.");
        return false;
    }
    if(document.forms[0].GREInput.value == "" || document.forms[0].GREInput.value == "000/340"){
        window.alert("Please enter your GRE score.");
        return false;
    }
    if(document.forms[0].GPAInput.value == "" || document.forms[0].GPAInput.value == "0.0/4.0"){
        window.alert("Please enter your GPA.");
        return false;
    }
    var researchSelected = false;
    for(var i = 0; i < 2; ++i){
        if(document.forms[0].ResearchInput[i].checked == true){
            researchSelected = true;
            break;
        }
    }
    if(researchSelected != true){
        window.alert("Please choose your research status.");
        return false;
    }
    return true;
}

function rankUser(){
    var GREpass = false;
    var GPApass = false;
    var Researchpass = false;
    
    if(document.forms[0].UniversityInput.value == "UH"){
        if(document.forms[0].GREInput.value > "305"){
            GREpass = true;  
        }
        if(document.forms[0].GPAInput.value > "3.75"){
            GPApass = true;   
        }
        if(document.forms[0].ResearchInput[0].checked == true){
            Researchpass = true;
        }
    }
    
    if(document.forms[0].UniversityInput.value == "RU"){
        if(document.forms[0].GREInput.value > "318"){
            GREpass = true;  
        }
        if(document.forms[0].GPAInput.value > "3.80"){
            GPApass = true;   
        }
        if(document.forms[0].ResearchInput[0].checked == true){
            Researchpass = true;
        }
    }
    
    if(document.forms[0].UniversityInput.value == "AM"){
        if(document.forms[0].GREInput.value > "290"){
            GREpass = true;  
        }
        if(document.forms[0].GPAInput.value > "3.5"){
            GPApass = true;   
        }
        if(document.forms[0].ResearchInput[0].checked == true){
            Researchpass = true;
        }
    }
    
    if(document.forms[0].UniversityInput.value == "UTA"){
        if(document.forms[0].GREInput.value > "320"){
            GREpass = true;  
        }
        if(document.forms[0].GPAInput.value > "3.75"){
            GPApass = true;   
        }
        if(document.forms[0].ResearchInput[0].checked == true){
            Researchpass = true;
        }
    }
    
    if(document.forms[0].UniversityInput.value == "UTD"){
        if(document.forms[0].GREInput.value > "305"){
            GREpass = true;  
        }
        if(document.forms[0].GPAInput.value > "3.75"){
            GPApass = true;   
        }
        if(document.forms[0].ResearchInput[0].checked == true){
            Researchpass = true;
        }
    }
    
    if(GREpass && GPApass && Researchpass){
        window.open("accepted.html");
    }
    else{
        window.open("rejected.html");
    }
}