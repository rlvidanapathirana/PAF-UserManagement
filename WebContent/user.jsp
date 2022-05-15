<%@page import="com.User"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
	
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="Views/css/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src=Components/user.js></script>
<title>User Management</title>
<style>
</style>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-6">
				<h2 style="text-align:center">User Management</h2>
				<br>
				<form id="formUser" name="formUser" method="post" action="user.jsp">
				  	AccountId ID:
				  	<input readonly id="accountId" name="accountId" type="text" 
				 	         class="form-control form-control-sm">
				  	
				  	<br> Is Admin:
				  	<input id="isAdmin" name="isAdmin" type="text"
				         	 class="form-control form-control-sm">
				   	
				   	<br> First Name:
				   	<input id="firstName" name="firstName" type="text"
				           		class="form-control form-control-sm">
				           		
				    <br> Last Name:
				   	<input id="lastName" name="lastName" type="text"
				           		class="form-control form-control-sm">
				    
				    <br> NIC:
				   	<input id="nic" name="nic" type="text"
				           		class="form-control form-control-sm"> 
				           		
				     <br> Permanant Address:
				   	<input id="permanantAddress" name="permanantAddress" type="text"
				           		class="form-control form-control-sm">
				    
				    <br> Mobile Number:
				   	<input id="mobileNumber" name="mobileNumber" type="tel"
				           		class="form-control form-control-sm">     
				           		
				    <br> Land Number:
				   	<input id="landNumber" name="landNumber" type="tel"
				           		class="form-control form-control-sm"> 
				           		
				    <br> Email:
				   	<input id="email" name="email" type="text"
				           		class="form-control form-control-sm">    		   		
				           		
				   	<br> User Password:
				   	<input id="userPassword" name="userPassword" type="text"
				           	  class="form-control form-control-sm">
				    <br> Area Office:
				   	<input id="areaoffice" name="areaoffice" type="text"
				           		class="form-control form-control-sm">
				           		
				     <br>  Join Date:
				   	<input id="joinDate" name="joinDate" type="date"
				           		class="form-control form-control-sm">
					<br>
				  
					<br> 
				    <input id="btnSave" name="btnSave" type="button" value="Save"
				          class="btn btn-primary">
				    <input type="hidden" id="hidAppIDSave" name="hidAppIDSave" value="">
				  </form>
				  
				  <div id="alertSuccess" class="alert alert-success"></div>
				  <div id="alertError" class="alert alert-danger"></div>
				  
				  <br>
				  <div id = "divAppGrid">
				  <%
				  	User appObj = new User();
				    out.print(appObj.readUsers());
				  %>
				  </div>
			  </div>
		  </div>
	  </div>
</body>
</html>