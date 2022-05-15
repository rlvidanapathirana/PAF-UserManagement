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
    
    
//UPDATE=========================================================
$(document).on("click", ".btnUpdate",function(event)
{
	$("#hidAppIDSave").val($(this).closest("tr").find('td:eq(0)').text());	
	$("#accountId").val($(this).closest("tr").find('td:eq(0)').text());
	$("#isAdmin").val($(this).closest("tr").find('td:eq(1)').text());
	$("#firstName").val($(this).closest("tr").find('td:eq(2)').text());
	$("#lastName").val($(this).closest("tr").find('td:eq(3)').text());
	$("#nic").val($(this).closest("tr").find('td:eq(4)').text());
	$("#permanantAddress").val($(this).closest("tr").find('td:eq(5)').text());
	$("#mobileNumber").val($(this).closest("tr").find('td:eq(6)').text());
	$("#landNumber").val($(this).closest("tr").find('td:eq(7)').text());
	$("#email").val($(this).closest("tr").find('td:eq(8)').text());
	$("#userPassword").val($(this).closest("tr").find('td:eq(9)').text());
	$("#areaoffice").val($(this).closest("tr").find('td:eq(10)').text());
	$("#joinDate").val($(this).closest("tr").find('td:eq(11)').text());
	
	
});

//DELETE==========================================================
$(document).on("click", ".btnRemove", function(event)
{
	//AJAX for delete
	$.ajax(
		{
			url : "UserAPI",
			type : "DELETE",
			data : "id=" + $(this).data("id"),
			dataType : "text",
			complete : function(response, status)
			{
				onUserDeleteComplete(response.responseText, status);
			}
	});
}); 

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