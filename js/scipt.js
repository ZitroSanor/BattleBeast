// JSON con los elementos del menú
const menuData = [
  { name: "Inicio", link: "index.html" }
/*  { name: "Servicios", link: "servicios.html" },
  { name: "Acerca de", link: "acerca.html" },
  { name: "Contacto", link: "contacto.html" }*/
];

// Insertar dinámicamente en el nav
const navbar = document.getElementById("navbar");

menuData.forEach(item => {
  const link = document.createElement("a");
  link.textContent = item.name;
  link.href = item.link;
  navbar.appendChild(link);
});