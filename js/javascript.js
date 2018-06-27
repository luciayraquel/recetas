var imagenActual = "cereales";



function cambiarImagen(){
		if(imagenActual == "cereales")
    {
			document.getElementsByTagName("header")[0].style.backgroundImage = "url('img/cereales2.jpg')";
			imagenActual = "cereales2";
    }
		else
		{//cereales2
			document.getElementsByTagName("header")[0].style.backgroundImage = "url('img/cereales.jpg')";
			imagenActual = "cereales";
    }
		setTimeout(function(){
			//Cada 2000 milesimas ejecuta esto
			cambiarImagen();
		}, 2000);
}

window.onload = function(){
  cambiarImagen();
}
