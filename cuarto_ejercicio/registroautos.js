if (!window.indexedDB) {
  alert("Su navegador no soporta indexedDB");
}
var MotorBD = window.indexedDB;
var BD = MotorBD.open("cars", "1");
BD.onupgradeneeded = function (e) {
  //si es la primera vez ejecutamos esto
  var active = BD.result; //recuperamos la conexión
  var carsTable;
  carsTable = active.createObjectStore("cars", {
    KeyPath: "id",
    autoIncrement: true,
  });
};
BD.onsuccess = function (e) {
    console.log("No hay errores");
  //el código cuando conectamos correctamente
};
BD.onerror = function (e) {
    console.log("Hay un error");
  //el código cuando no pudimos acceder
};
