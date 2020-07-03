var firstname=document.forms['regform']['firstname'];

var firstname_error=document.getElementById('firstname_error');

function regvalidated()
{
    if (firstName.value.length <2 )
    {
        firstName.style.border="1px solid red";
        firstname_error.style.display="block";
        firstName.focus();
        return false;
    }
}

function firstname_Verify()
{
    if(firstname.value.length>=2)
    {
        firstname.style.border="1px solid silver";
        firstname_error.style.display="none";
        return true;
    }
}