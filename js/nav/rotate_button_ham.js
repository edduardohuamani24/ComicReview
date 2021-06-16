//Creamos una constante que contendrá todos los span del botón hamburger
const button_rods = document.querySelectorAll(".nav__hamburger span");

const rotateRods = () => {
  //Usamos el método forEach para que recorra los 3 elementos span del botón hamburger
  button_rods.forEach((child) => {
    //Pondremos el parámetro child a está función anónima.
    // MEdiante el parámetro child accedemos al listado de clases de las barras y usamos el método toggle para agregar o quitar la clase animation
    child.classList.toggle("animation");
  });
};

export { rotateRods };
