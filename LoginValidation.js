function userValidation()
{
    //elements
    var userName = document.getElementById('userName').value;
    var passWord=document.getElementById('passWord').value;
    // Regx patterns
    var usercheck=/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/ ;
    var passcheck=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,20}$/ ;

    if(usercheck.test(userName))
    {
        document.getElementById('usererror').innerHTML=" ";
    }
    else
    {
        document.getElementById('usererror').innerHTML="** UserName is invalid" ;
        return false;
    }

    if(passcheck.test(passWord))
    {
        document.getElementById('passworderror').innerHTML=" ";
    }
    else
    {
        document.getElementById('passworderror').innerHTML="** password is not matching" ;
        return false;
    }
}