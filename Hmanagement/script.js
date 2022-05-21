var fname_Error =document.getElementById("namerror");
var email_Error =document.getElementById("emailerror");
var mobile_Error =document.getElementById("phonerror");
var app_Error=document.getElementById("apperror");
var uname_Error=document.getElementById("unamerror");
var pass_Error=document.getElementById("passerror");

function validatename(){
    var name=document.getElementById('name').value;
    if(name.length==0){
        fname_Error.innerHTML='Name is required';
        return false;
    }

    if(!name.match(/^[a-zA-Z]+(\s{1}[a-zA-Z]+)?$/)){
        fname_Error.innerHTML='Only alphabet';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        fname_Error.innerHTML='Write ful name';
        return false;
    }
    fname_Error.innerHTML='<img src="img/ok.gif" width="30px" height="30">';
    return true;
   
}

function validatephone(){
    var phone=document.getElementById('phon').value;
    if(phone.length==0){
        mobile_Error.innerHTML='Phone is required';
        return false;
    }

    if(phone.length!==10){
        mobile_Error.innerHTML='Phone no should be 10 digits';
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        mobile_Error.innerHTML='Only digits';
        return false;
    }
    
    if(!phone.match(/^[6-9][0-9]{9}$/)){
        mobile_Error.innerHTML='Phone no is not valid';
        return false;
    }
    mobile_Error.innerHTML='<img src="img/ok.gif" width="30px" height="30">';
    return true;

}

function validatemail(){
    var mail=document.getElementById("email").value;
    if(mail.length==0){
        email_Error.innerHTML='Email is required';
        return false;
    } 
    if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email_Error.innerHTML='Email Invalid';
        return false;
    }

    email_Error.innerHTML='<img src="img/ok.gif" width="30px" height="30">';
    return true;
}


function isFutureDate(idate){

    var today=new Date();
    var seldate = document.getElementById("appointment").value;

    if ((Date.parse(seldate) <= today)) {
        alert("Enter Future date");
        app_Error.innerHTML='Date Invalid';
        return false;
    }
    app_Error.innerHTML='<img src="img/ok.gif" width="30px" height="30">';
    return true;
}


function validateuname(){
    
    var name=document.getElementById('uname').value;
    if(name.length==0){
        uname_Error.innerHTML='Uname is required';
        return false;
    }
     uname_Error.innerHTML='<img src="img/ok.gif" width="30px" height="30">';
    return true;

}

function validatepass(){
    var pass=document.getElementById('pass').value;
    if(pass.length==0){
        pass_Error.innerHTML='Password is required';
        return false;
    }

    pass_Error.innerHTML='<img src="img/ok.gif" width="30px" height="30">';
    return true;
    
}

function showpass(){
    var x = document.getElementById("pass");
    var pass=document.getElementById('pass').value;
    if(pass.length==0){
                pass_Error.innerHTML='Password is required';
                return false;
    }


    if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
    }
      
      
}