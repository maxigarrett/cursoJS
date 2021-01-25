<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Carga de datos</title>
</head>
<body>

	<%@ include file="sup.jsp" %>
	
	<% if (session.getAttribute("NombreUsuario") != null){ %>
	<h1>Carga de datos de envío</h1>
	
	<form action="cargaDatos.jsp" method="post">
	
		<p>Dirección: <input type="text" name="dir">  </p>
		<p>Telefono: <input type="text" name="tel">  </p>
		
		<input type="submit">
	
	</form>
	
	<% } %>

</body>
</html>