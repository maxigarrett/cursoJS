<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>



	<%
		String nombre = request.getParameter("n");
		String pass = request.getParameter("p");
	
		if(nombre != null && pass != null){
			
			if( nombre.equalsIgnoreCase("pedrito") && pass.equals("1234") || nombre.equalsIgnoreCase("pedrito") && pass.equals("1234")){
				session.setMaxInactiveInterval(3600);
				session.setAttribute("NombreUsuario", nombre);
				%>
				
				<h1 style="color: green;">Inicio exitoso</h1>
				<a href="datos.jsp">Cargar datos.</a>
				
				<!--  <script type="text/javascript">
					location.href = "carga_datos.jsp";
				</script> -->
				
				<%
			}
			else{
				out.print("<h1 style='color: red'>Nombre de usuario o contraseñas incorrectos</h1>");
				location.href = "inicio.jsp";
			}
			
			
		}
		else{
			out.print("Parametros incorrectos");
		}
	
	
	%>

</body>
</html>