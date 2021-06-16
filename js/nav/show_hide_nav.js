// EL VALOR LA POSICIÓN ACTUAL DEL  DOCUMENTO SERÁ DE CERO Y OBTENEMOS ESE NÚMERO MEDIANTE LA PROPIEDAD pageYOffset APLICADO AL OBJETO window. EL VALOR CERO DEL SCROLL EN EL EJE Y LO GUARDAMOS EN UNA VARIABLE
let principalUbication = window.pageYOffset;
//Los const debe tener valor, por eso es un let
let currentUbication;
const navTop = document.querySelector(".nav");
export const showHideNav = () => {
  //CUANDO SE REALICE EL EVENTO onscroll SE LLAMARÁ A UNA FUNCIÓN QUE LE DARÁ UN VALOR AL SCROLL EN SU EJE Y SEGÚN SU UBICACIÓN ACTUAL Y SERÁ ALMACENADO EN UNA VARIABLE.
  window.onscroll = function () {
    currentUbication = window.pageYOffset;
    //SEGÚN EL  VALOR DE LA UBICACIÓN ACTUAL DEL SCROLL EN EL Y SE MODIFICARÁ LA VISIBILIDAD DEL NAV
    if (principalUbication >= currentUbication) {
      navTop.style.top = "0";
    } else {
      navTop.style.top = "-100px";
    }
    //lA UBICACIÓN PRINCIPAL TENDRÁ EL MISMO VALOR DE LA UBICACIÓN ACTUAL Y EN CASO DE REALIZARSE UN NUEVO SCROLL QUE ALTERE EL VALOR DE LA UBICACIÓN ACTUAL SE REALIZARÁ DE NUEVO LA CONDICIÓN.
    principalUbication = currentUbication;
  };
};
