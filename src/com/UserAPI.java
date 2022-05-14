package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class UserAPI
 */
@WebServlet("/UserAPI")
public class UserAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	//create new object
	User appObj = new User();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
	
		//boolean value for insertion
		boolean status= Boolean.parseBoolean(request.getParameter("status"));
		
		String output = appObj.registerUser(
												Boolean.valueOf(request.getParameter("isAdmin")),
												request.getParameter("firstName"),
												request.getParameter("lastName"),
												request.getParameter("nic"),
												request.getParameter("permanantAddress"),
												request.getParameter("mobileNumber"),
												request.getParameter("landNumber"),
												request.getParameter("email"),
												request.getParameter("userPassword"),
												request.getParameter("areaoffice"),
												request.getParameter("joinDate")
												);
		
		response.getWriter().write(output);				
		
//		doGet(request, response);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		
		Map paras = getParasMap(request);
		
		
		String output = appObj.updateUser(
				paras.get("accountId").toString(),
				paras.get("isAdmin").toString(),
				paras.get("firstName").toString(),
				paras.get("lastName").toString(),
				paras.get("nic").toString(),
				paras.get("permanantAddress").toString(),
				paras.get("mobileNumber").toString(),
				paras.get("landNumber").toString(),
				paras.get("email").toString(),
				paras.get("userPassword").toString(),
				paras.get("areaoffice").toString(),
				paras.get("joinDate").toString()
				
				);
		
		
		response.getWriter().write(output);
	}
	

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		// TODO Auto-generated method stub
		Map paras = getParasMap(request);
		
		String output = appObj.deleteUser(paras.get("id").toString());
		
		response.getWriter().write(output);

	}
	
	// Convert request parameters to a Map 
	private static Map getParasMap(HttpServletRequest request)
	{
		Map<String, String> map = new HashMap<String, String>();
		try
		{ 
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ?
								scanner.useDelimiter("\\A").next() : "";
			scanner.close(); 
	 
			String[] params = queryString.split("&");
			for (String param : params)   { 
					String[] p = param.split("=");
					map.put(p[0], p[1]);
			} 
		}
		catch (Exception e)
		{
			
		}  return map;
	} 

}