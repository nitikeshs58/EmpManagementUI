var submitEntry=document.getElementById("sub");
submitEntry.addEventListener("click",displayDetails);

var row=1;

function displayDetails()
{
    var FristName =document.getElementById('firstNameId').value;
    var LastName=document.getElementById('lastNameId').value;
    var UserName=document.getElementById('userNameId').value;
    var EmailId=document.getElementById('emailId').value;
    var MobileNumber=document.getElementById('mobileNumberId').value;
    var Password=document.getElementById('passWord').value;
    var RePassword=document.getElementById('rePassWord').value;

    var display=document.getElementById("sub");
    var newRow=display.insertRow(row);

    var cellOne=newRow.insertCell(0);
    var cellTwo=newRow.insertCell(1);
    var cellThree=newRow.insertCell(2);
    var cellFour=newRow.insertCell(3);
    var cellFive=newRow.insertCell(4);
    var cellSix=newRow.insertCell(5);
    var cellSeven=newRow.insertCell(6);
    row++;

}