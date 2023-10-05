import { CRUD } from "./CRUD.js";

function app() {
	let crud = new CRUD("Ejemplo");
	crud.create([1, 2, 3]);
	crud.create({ message: "Hola Mundo"});

	let crud2 = new CRUD("Ejemplo");
	console.log(crud2.readAll());
}
app();