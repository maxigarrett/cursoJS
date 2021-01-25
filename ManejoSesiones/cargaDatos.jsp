<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Datos</title>
</head>
<body>

	<%@ include file="sup.jsp" %>
	
	<%
		String dir = request.getParameter("dir");
		String tel = request.getParameter("tel");
		
		if(dir != null && tel != null){
			session.setAttribute("direccion", dir);
			session.setAttribute("tel", tel);
			out.print("<h3>Datos cargados correctamente</h3>");
			
		}
	
	
	
	%>
	
	

</body>
</html>