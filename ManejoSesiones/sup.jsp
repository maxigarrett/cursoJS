<html>


	<%
		String atr = (String) session.getAttribute("NombreUsuario");
	
		if(atr != null){
			%>
			<div style="background-color: darkgray; padding: 1em;">
				<label>Bienvenido <%= atr %></label>
				
				<a href="datos.jsp">Cargar datos</a>
				<a href="#">Cargar articulos</a>
				<a href="ticket.jsp">Ver ticket</a>
				<a href="cerrarS.jsp" style="color: red;">Cerrar Sesion</a>
			
			</div>
			
			
			<%
		}
		else{
			%>
			<h1>Sesion no inciada</h1>
			<h3>Inicie sesion para continuar</h3>
			<a href="inicio.jsp">Iniciar sesion</a>
			
			<%
		}
	%>
</html>