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

class Direccion{
    #calle;
    #numero;
    #piso;
    #codigo_postal;
    #provincia;
    #localidad;
    
    constuctor(calle, numero, piso, codigo, provincia, localidad){
          let patron= /^[0-9]{5}$/;
          let comprobacion=(codigo.test(patron)? codigo : "Error");
      
          this.#calle = calle;
          this.#numero = numero;
          this.#piso = piso;
          this.#codigo_postal = comprobacion;
          this.#provincia = provincia;
          this.#localidad = localidad;
    }
        get calle(){
          return this.#calle;
      }
  
      get numero(){
          return this.#numero;
      }
  
      get piso(){
          return this.#piso;
      }
  
      get codigo_postal(){
          return this.#codigo_postal;
      }
  
      get provincia(){
          return this.#provincia;
      }
  
      get localidad(){
          return this.#localidad;
      }
  
      get toString(){
          return this.#calle + " " + this.#numero + ", " + this.#piso + " - " + this.#codigo_postal + " " + this.#localidad + " (" + this.#provincia + ")";
      }
  
    
  }
  
  
  
  class Estudiantes{
    
    #id;
    #nombre;
    #edad;
    #direccion;//Tendra {calle,numero,posp,codigo postal,provincia y localidad}
    #asignaturas;
    #registros;
    
    static #numeros_ocupados=[];
    
    constructor(N_id,N_nombre,N_edad,N_direc){
      let patron=/^[a-zA-Z\s]+$/;//que contenga letras y espacios 1 o mas veces
        if(!patron.test(N_nombre)){
          throw new Error("Error solo pueden mostrase espacios o letras");
        }else{
          this.#nombre=N_nombre;
        }
      
       let ID = 1;
  
          while (Estudiante.#numeros_ocupados.includes(ID)) {
              ID++;
          }
      Estudiante.#numeros_ocupados.push(ID);
      this.#id = ID;
      this.#edad=N_edad;
      this.#direccion=N_direc;
      this.#asignaturas = [];
      this.#registros = [];
    }
    
       get id(){
          return this.#id;
      }
  
      get nombre(){
          return this.#nombre;
      }
  
      get edad(){
          return this.#edad;
      }
  
      get direccion(){
          return this.#direccion;
      }
  
      get asignaturas(){
          return [...this.#asignaturas];
      }
      
      get registros(){
        
      }
    
      get promedio(){
        
      }
      
      get Listas(){
        
      }
    
      get String(){
         return this.#id + ": " + this.#nombre + ", " + this.#edad;
      }
      matricular(){
        
      }
    
      desmatricular(){
        
      }
  }
  
  
  
  
  
  
  
  
  
  
  
  