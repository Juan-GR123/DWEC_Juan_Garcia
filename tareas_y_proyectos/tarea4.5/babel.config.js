export default{
    presets:[
        [
            '@babel/preset-env',{
                targets:'> 0.1%, firefox 5, safari 7, ie 9, not dead', //navegadores objetivo para los servidores
                useBuiltIns:'usage', //incluya polyfills
                corejs:3
            }
        ]
    ]


};