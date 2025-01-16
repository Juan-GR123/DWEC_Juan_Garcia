import path from 'path';


export default{
    entry: './fuente/js/index.js',//entrada
    //es ./fuente/index.js ??
    output:{
        path: path.resolve(process.cwd(), 'compilado2',process.env.modo),//donde lo va ha guardar
        
        //dos modos de "compilacion": desarrollo y producción
        //desarrollo se interesa que sea rapido y por tanto una serie de optimizaciones que se realizan en produccion no se realizan en desarrollo
        //Ej: minifying, optimizacion de código
    },
    mode:process.env.modo,//de que modo quiero que compile
} 