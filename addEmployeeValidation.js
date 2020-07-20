
function addEmployeeValidate(event)
{
    event.preventDefault();
    //elements
    var id=document.getElementById('EmpId').value;
    var firstName = document.getElementById('firstNameId').value;
    var lastName = document.getElementById('lastNameId').value;
    var userName = document.getElementById('userNameId').value;
    var email=document.getElementById('emailId').value;
    var mobileNumber=document.getElementById('mobileNumberId').value;
    var isValidated=false;

    var idcheck=/[1-9]{1}[0-9]{0,}/;
    var firstcheck=/[A-Z][a-z]*/;
    var lastcheck=/[A-Z][a-z]*/;
    var usercheck=/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/ ;
    var emailcheck=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mobilecheck=/^[789]{1}[0-9]{9}$/;
    var passcheck=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,20}$/ ;
    var repasscheck=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,20}$/ ;

    if(idcheck.test(id))
    {
        document.getElementById('IdError').innerHTML=" ";
        isValidated=true;
    }
     if(!idcheck.test(id)) 
    {
        document.getElementById('IdError').innerHTML="** FirstName is invalid" ;
        //isValidated=false;
        return false;
    }
    if(firstcheck.test(firstName))
    {
        document.getElementById('firstNameError').innerHTML=" ";
        isValidated=true;
    }
     if(!firstcheck.test(firstName)) 
    {
        document.getElementById('firstNameError').innerHTML="** FirstName is invalid" ;
        //isValidated=false;
        return false;
    }
     if(lastcheck.test(lastName))
    {
        document.getElementById('lastNameError').innerHTML=" ";
    }
     if(!lastcheck.test(lastName))
    {
        document.getElementById('lastNameError').innerHTML="** LastName is invalid" ;
        return false;
    }

    if(usercheck.test(userName))
    {
        document.getElementById('usererror').innerHTML=" ";
    }
    if(!usercheck.test(userName))
    {
        document.getElementById('usererror').innerHTML="** UserName is invalid" ;
        return false;
    }

    if(emailcheck.test(email))
    {
        document.getElementById('emailError').innerHTML=" ";
    }
    if(!emailcheck.test(email))
    {
        document.getElementById('emailError').innerHTML="** email id is invalid" ;
        return false;
    }

    if(mobilecheck.test(mobileNumber))
    {
        document.getElementById('mobileerror').innerHTML=" ";
    }
    else
    {
        document.getElementById('mobileerror').innerHTML="** mobile number is invalid" ;
        return false;
    }
    if(isValidated===true)
    {
        callRegApi(event)
    }    
}
