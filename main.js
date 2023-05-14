// To avoid selecting both boxes
function setBoxes(){
    // getting elements of the boxes
    let member = document.getElementById("member");
    let nomember = document.getElementById("nomember");
    // only one box must be ticked
    if(member.checked){
      nomember.checked = false;
    }else if(nomember.checked){
      member.checked = false;
    }
}

// Checking the user's discount eligibility
function checkEligibility(){
    // getting the HTML Elements
    let age = document.getElementById("age");
    let member = document.getElementById("member");
    let nomember = document.getElementById("nomember");
    const field = document.getElementById("field");
    const membership = document.getElementById("membership");
    const senior = document.getElementById("senior");
    const minor = document.getElementById("minor");
    const nonmember = document.getElementById("nonmember");
    const validage = document.getElementById("validage");
    const error = document.getElementById("error");
    
    // conditions
    if(age.value == '' || (member.checked === false && nomember.checked === false)){
        // setting the time before the values disappear
        setTimeout(() => {
            age.value = '';
            member.checked = false;
            nomember.checked = false;
        }, 2000);
        
        // Displaying the relevant message
        field.style.display = 'block';
    }else if(age.value < 1 || age.value > 150){
        // setting the time before the values disappear
        setTimeout(() => {
            age.value = '';
            member.checked = false;
            nomember.checked = false;
        }, 2000);
        
        // Displaying the relevant message
        validage.style.display = 'block';
    }else if(age.value >= 1 && age.value < 18){
        // setting the time before the values disappear
        setTimeout(() => {
            age.value = '';
            member.checked = false;
            nomember.checked = false;
        }, 2000);
        
        // Displaying the relevant message
        minor.style.display = 'block';
    }else if(age.value >= 18 && age.value < 65 && member.checked === true){
        // setting the time before the values disappear
        setTimeout(() => {
            age.value = '';
            member.checked = false;
            nomember.checked = false;
        }, 2000);
        
        // Displaying the relevant message
        membership.style.display = 'block';
    }else if(age.value >= 18 && age.value < 65 && nomember.checked === true){
        // setting the time before the values disappear
        setTimeout(() => {
            age.value = '';
            member.checked = false;
            nomember.checked = false;
        }, 2000);
        
        // Displaying the relevant message
        nonmember.style.display = 'block';
    }else if(age.value >= 65 && (member.checked === true || nomember.checked === true)){
        // setting the time before the values disappear
        setTimeout(() => {
            age.value = '';
            member.checked = false;
            nomember.checked = false;
        }, 2000);
        
        // Displaying the relevant message
        senior.style.display = 'block';
    }else{
        // setting the time before the values disappear
        setTimeout(() => {
            age.value = '';
            member.checked = false;
            nomember.checked = false;
        }, 2000);
        // Displaying the relevant message
        error.style.display = 'block';
    }
    
    // setting the time before the message disappear
    setTimeout(() => {
        field.style.display = 'none';
        membership.style.display = 'none';
        senior.style.display = 'none';
        minor.style.display = 'none';
        nonmember.style.display = 'none';
        validage.style.display = 'none';
        error.style.display = 'none';
    }, 4000);
}