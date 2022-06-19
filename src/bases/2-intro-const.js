const nombre = "Emerson";
const apellido = "Espinoza";
const nombreCompleto = ` Hola mundo
${nombre}
${apellido}
`;
console.log(nombreCompleto);
function getSaludo(nombre) {
  return "hola" + nombre;
}
console.log(` Este es un texto: ${getSaludo(nombreCompleto)}`);
