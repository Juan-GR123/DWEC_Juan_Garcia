//Todas las salidas serán por consola y todas las entradas por teclado
//promt y console.log

//Criterios de evaluacion
/*Los siguientes criterios son obligatorios. Si alguno no se cumple, no se puede obtener una
calificación de aprobado
• Código que, evidentemente, resuelva el problema.
• Uso de clases, herencia, encapsulación y sobrecarga.
• Uso de Objetos y métodos predefinidos del lenguaje, siempre que existan.
• Código limpio, nomenclatura coherente, nombres de variables y métodos intuitivos y bien
elegidos, eficiente y comentado.
• Inclusión de un conjunto de pruebas que demuestren el funcionamiento de la funcionalidad.
• Defensa del código, sin duda ni vacilación. Posible modificación de código en la defensa
para realizar alguna tarea sencilla. */



//Estudiantes
/*Cada estudiante debe tener un id, nombre, edad y dirección, compuesta de calle, número,
piso, código postal, provincia y localidad. El nombre debe contener sólo letras y espacios.
• Se debe permitir agregar y eliminar estudiantes de la lista. No debe haber duplicados
• Se debe permitir matricular y desmatricular estudiantes en una o varias asignaturas.
• Se debe registrar la fecha de matrícula o desmatriculación y se debe poder mostrar en
formato español.
• Cada estudiante puede recibir varias calificaciones por asignatura. Éstas deben ser números
enteros entre 0 y 10.
• Se debe calcular el promedio de todas las calificaciones del estudiante.
• Se debe permitir la búsqueda de asignaturas cuyo nombre coincida parcialmente con un
patrón de texto. */

class Estudiantes{
  id;
  nombre;
  edad;
  direccion;//Tendra {calle,numero,posp,codigo postal,provincia y localidad}

  constructor(N_id,N_nombre,N_edad,N_direc){
    let patron=/^[a-zA-Z\s]+$/;//que contenga letras y espacios 1 o mas veces
      if(!patron.test(N_nombre)){
        throw new Error("Error solo pueden mostrase espacios o letras");
      }else{
        this.nombre=N_nombre;
      }
    this.id=N_id;
    this.edad=N_edad;
    this.direccion=N_direc;

  }
}

let arrayPers=[];//array de personas

//funcion para agregar gente al array
function aniadir(Estu){
  // Validar que el nombre solo contenga letras y espacios
  if (!/^[a-zA-Z\s]+$/.test(Estu.nombre)) {
      console.log("El nombre solo debe contener letras y espacios.");
  }

  // Validar que no existan duplicados
  //compruebo que no haya ninguna id igual en el array de personas
  let Existe = false;
  arrayPers.forEach(estudiante => {
      if (estudiante.id === Estu.id) {
          Existe = true;
      }
  });

  if (Existe) {//true
     return `Ya existe un estudiante con el ID ${Estu.id}.`;
  }

  // agregarmos al array un nuevo estudiantes
  arrayPers.push(Estu);
  console.log(`Estudiante ${Estu.nombre} agregado correctamente.`);
}

function eliminar(Estu){
let Existe = false;
let indice=0;
  arrayPers.forEach(estudiante => {
      if (estudiante.id === Estu.id) {
          Existe = true;
            
        //delete estudiante;
      }
  });

  if (Existe) {//true
    return "El estudiante ha sido eliminado";
  }else{
    return "El estudiante no existe en el array";
  }
}



let miEstu= new Estudiantes("123","Pepe",12,{
calle:"Calle Falsa",
numero:12,
piso:10,
codigo_postal:18000,
provincia:"Granada",
localidad:"Guadix"
});
let miEstu2= new Estudiantes("123","Jose",32,{
calle:"Calle Falsa",
numero:20,
piso:100,
codigo_postal:18000,
provincia:"Granada",
localidad:"Guadix"
});

console.log(miEstu);
console.log(aniadir(miEstu));
console.log(eliminar(miEstu));
console.log(aniadir(miEstu2));
console.log(arrayPers);


