const seccionesPaginas = new fullpage('#fullpage',{
		 autoScrolling: true, // Se activa el scroll.
		 fitToSection: true, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
		 fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
		 easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
		 scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
		 css3: true, // Si usara CSS3 o javascript.
		 easingcss3: 'ease-out', // Curva de velocidad del efecto.
		 loopBottom: false, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.
		 navigation: true, // Muesta la barra de navegación.
		 menu: '#menu', // Menu de navegación.
		 anchors: ['home', 'about', 'products', 'contact'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
		 navigationTooltips: ['Inicio', 'obre', 'Productos', 'Contacto'], // Tooltips que mostrara por cada boton.
		 showActiveTooltip: false, // Mostrar tooltip activa.
		 verticalCentered: false,
});

let menu_icon = document.getElementById('menu-icon')

function abrir(){
	let menu = document.querySelector(".menu")
	menu.classList.toggle("disable");
}

menu_icon.addEventListener('click', () => {
	abrir()
});