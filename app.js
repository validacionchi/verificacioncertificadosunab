// ==========================================================
// EDITA SOLO ESTE BLOQUE PARA CAMBIAR LOS DATOS DEL SITIO
// ==========================================================
const datos = {
  tituloPagina: "Verificación de certificado",
  tituloCabecera: "Certificados en línea",
  tituloCertificado: "CERTIFICADO DE TÍTULO Y GRADO",

  fechaEmision: "28-03-2026",
  validoHasta: "No Caduca",

  identificador: "17.469.701-9",
  apellidos: "VALENZUELA MORALES",
  nombre: "JORGE HERNÁN",
  Carrera: "INGENIERÍA CIVIL INDUSTRIAL",

  telefono1: "600 - 228 6262",
  telefono2: "600 - 220 3333",

  archivoPDF: "documento.pdf"
};

// No necesitas modificar nada debajo de esta línea.
document.title = datos.tituloPagina;
document.getElementById("pageTitle").textContent = datos.tituloPagina;
document.getElementById("headerTitle").textContent = datos.tituloCabecera;
document.getElementById("certificateTitle").textContent = datos.tituloCertificado;
document.getElementById("issueDate").textContent = datos.fechaEmision;
document.getElementById("validUntil").textContent = datos.validoHasta;
document.getElementById("identifier").textContent = datos.identificador;
document.getElementById("lastName").textContent = datos.apellidos;
document.getElementById("firstName").textContent = datos.nombre;
document.getElementById("program").textContent = datos.programa;
document.getElementById("phone1").textContent = datos.telefono1;
document.getElementById("phone2").textContent = datos.telefono2;
document.getElementById("pdfLink").setAttribute("href", datos.archivoPDF);
