
function onFormSubmit()
{
    //Calling to readFromData method and getting all form data
    var formData=readFromData();
    //Sending form data to insert it into table
    insertNewRecordData(formData);
}

function readFromData()
{
    //to push values of textBox
    var formData={};
    formData["firstName"]=document.getElementById("firstNameId").Value;
    formData["lastName"]=document.getElementById("lastNameId").Value;
    formData["userName"]=document.getElementById("userNameId").Value;
    formData["email"]=document.getElementById("emailId").Value;
    formData["male"]=document.getElementById("male").Value;
    formData["mobileNumber"]=document.getElementById("mobileNumberId").Value;
    return formData;
}

function insertNewRecordData(data)
{
    var table=document.getElementById("tableId").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.firstName;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.lastName;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.userName;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.email;
    cell5=newRow.insertCell(4);
    cell5.innerHTML=data.male;
    cell6=newRow.insertCell(5);
    cell6.innerHTML=data.mobileNumber;
    cell7=newRow.insertCell(6);
    cell7.innerHTML=<a href="EditTable.html">Edit</a>;
    cell8=newRow.insertCell(7);
    cell8.innerHTML=<a onclick="deleteRow()">Delete</a>;
}

function deleteRow()
{
    document.getElementById("tableId").deleteRow(1);
}

function editRow()
{
    
}