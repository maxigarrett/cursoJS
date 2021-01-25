<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Tiket</title>
</head>
<body>

	<%@ include file="sup.jsp" %>
	<h2>Ticket con datos</h2>
	
	<%
		String nombre = (String) session.getAttribute("NombreUsuario");
		String dir = (String) session.getAttribute("direccion");
		String tel = (String) session.getAttribute("tel");
		
		if (nombre != null){
			out.print("<p>Nombre: "+nombre+ "</p>");
		}
		
		if (dir != null){
			out.print("<p>Direccion: "+dir+ "</p>");
		}
		
		if (tel != null){
			out.print("<p>Telefono: "+tel+ "</p>");
		}
		
		
		
		if (nombre != null){
			%>
				<a href="guardarArchivo.jsp">Guardar en txt</a>
			<% 
		}
	%>
	
	

</body>
</html>