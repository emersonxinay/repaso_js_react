const persona = {
  nombre: "tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "peruabian",
    zip: 34343434,
    lat: 2323232,
    lng: 2323232,
  },
};
// console.log(persona);
const person2 = { ...persona };

person2.nombre = "Peter";

console.log(persona);
console.log(person2);
