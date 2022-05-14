$(document).ready(function()
{
	if ($("#alertSuccess").text().trim() == "")
	{
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
}
);

// SAVE ============================================
   
$(document).on("click", "#btnSave", function(event)
    {
        
        // Clear alerts---------------------
        
         $("#alertSuccess").text("");
         $("#alertSuccess").hide();
         $("#alertError").text("");
         $("#alertError").hide();
         
        // Form validation-------------------
    
        var status = validationUserForm();
        if (status != true)
      {
         $("#alertError").text(status);
         $("#alertError").show();
         return;
       }
    
        
    var type = ($("#hidAppIDSave").val().trim() == "") ? "POST" : "PUT";
    console.log(`\n\n\n>>>> FORM SUBMIT METHOD = ${type}\n\n\n`);
    $.ajax( 
            { 
                 url : "UserAPI", 
                 type : type, 
                 data : $("#formUser").serialize(), 
                 dataType : "text",
                 complete : function(response, status)
                 { 
                     console.log(`>>>> RES ${response}`);
                     onUserSaveComplete(response.responseText, status); 
                 } 
            }
        );
        
    });
    
    
    
    //Usersavecomplefunction
    

 


    function onUserSaveComplete(response, status) 
    { 
      if (status == "success") 
       { 
                 var resultSet = JSON.parse(response); 
                 
                 if (resultSet.status.trim() == "success") 
                 
                 { 
                     $("#alertSuccess").text("Successfully saved."); 
                     $("#alertSuccess").show(); 
                     $("#divItemsGrid").html(resultSet.data); 
                     
                 } else if (resultSet.status.trim() == "error") 
                 
                 { 
                     $("#alertError").text(resultSet.data); 
                     $("#alertError").show();
                      
                 } 
         
         } else if (status == "error") 
         
         { 
             $("#alertError").text("Error while saving."); 
             $("#alertError").show(); 
             
         } else
         
         { 
             $("#alertError").text("Unknown error while saving.."); 
             $("#alertError").show(); 
             
         } 
        
    
         $("#hidAppIDSave").val(""); 
         $("#formUser")[0].reset(); 
    }
    
    

//onUserDeleteComplete function
function onUserDeleteComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response); 

		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show(); 

			$("#divAppGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error")
		{ 
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		} 

	} else if (status == "error")
	{
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else
	{
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}

//CLIENT-MODEL============================================
function validationUserForm()
{
	//accountId
	//if($("#accountId").val().trim() == "")
	//{
		//return "Insert User accountId.";
	//}
	
	
	//isAdmin
	if($("#isAdmin").val().trim() == "")
	{
		return "Insert isAdmin.";
	}
	
	//firstName
	if($("#firstName").val().trim() == "")
	{
		return "Insert firstName.";
	}
	
	//lastName
	if($("#lastName").val().trim() == "")
	{
		return "Insert lastName.";
	}
	
	//nic
	if($("#nic").val().trim() == "")
	{
		return "Insert nic.";
	}

	//permanantAddress
	if($("#permanantAddress").val().trim() == "")
	{
		return "Insert permanantAddress.";
	}
	
	//mobileNumber
	if($("#mobileNumber").val().trim() == "")
	{
		return "Insert mobileNumber.";
	}
	
	//landNumber
	if($("#landNumber").val().trim() == "")
	{
		return "Insert landNumber.";
	}
	
	//email
	if($("#email").val().trim() == "")
	{
		return "Insert nic.";
	}
	
	//userPassword
	if($("#userPassword").val().trim() == "")
	{
		return "Insert userPassword.";
	}
	
	//areaoffice
	if($("#areaoffice").val().trim() == "")
	{
		return "Insert areaoffice.";
	}
	
	//joinDate
	if($("#joinDate").val().trim() == "")
	{
		return "Insert joinDate.";
	}
	
	
	return true;
}