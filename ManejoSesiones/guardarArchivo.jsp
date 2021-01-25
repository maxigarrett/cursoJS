<%@page import="java.io.PrintWriter"%>
<%@page import="java.io.FileWriter"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<%@ include file="sup.jsp" %>

	<%
		String nombre = (String) session.getAttribute("NombreUsuario");
		String dir = (String) session.getAttribute("direccion");
		String tel = (String) session.getAttribute("tel");
		
		if( nombre != null){
			
			try{
				FileWriter archivo = new FileWriter("D:\\ejemplo\\guardado.txt");
				
				PrintWriter escritor = new PrintWriter(archivo);
				
				escritor.println("- - - - USUARIO  - - - ");
				escritor.println("Nombre: "+ nombre);
				escritor.println("Direccion: "+dir);
				escritor.println("Telefono: "+tel);
				
				escritor.println(" - - - - - - - - ");
				
				escritor.close();
				out.print("el txt se genero correctamente en: "
						+ System.getProperty("user.dir"));
				archivo.close();
			}
			catch (Exception e){
				out.print("Error al generar txt" + e.toString());
			}
			
		}
	
	
	%>
	
</body>
</html>