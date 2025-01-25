import path from 'path';


export default{
    entry: './fuente/js/correccion.js',//entrada
    //es ./fuente/index.js ??
    output:{
        path: path.resolve(process.cwd(), 'compilado',process.env.variable),//donde lo va ha guardar
        //compilado es un directorio que te inventas
        //dos modos de "compilacion": desarrollo y producción
        //desarrollo se interesa que sea rapido y por tanto una serie de optimizaciones que se realizan en produccion no se realizan en desarrollo
        //Ej: minifying, optimizacion de código
    },
    mode:process.env.modo,//de que modo quiero que compile
}
