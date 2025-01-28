import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'; // Importamos el plugin
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

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
    plugins: [
        new HtmlWebpackPlugin({
          template: './fuente/index.html', // Ruta al archivo HTML de entrada
          filename: 'index.html', // Nombre del archivo HTML generado
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css', // Nombre del archivo CSS generado
          chunkFilename: '[id].css', // id del archivo CSS
        }),
      ],
      module: { 
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader, // Extrae el CSS en un archivo separado
              'css-loader', // Convierte CSS en módulos que Webpack puede entender
            ],
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            type: 'asset/resource',
          },
        ],
      },
}
