class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    saludar(){
        console.log(`yo ${this.nombre} te saludo`);
    }

    async obtenerDatos(){
        const info = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const datos= await info.json();
        return (datos.name);
    }
}

const miPersona = new Persona("procopio",25);
const {nombre,edad}=persona;

const saludoFlecha=()=>{
    console.log(`Soy ${nombre} y te saludo`);
}

console.log(persona.saludo);
console.log(saludoFlecha());
persona.obtenerDatos().then(info=>console.log("información que me ha devuelto la API",info));

