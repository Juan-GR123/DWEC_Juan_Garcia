export default{
    presets:[
        [
            '@babel/presents-env',{
                targets:'>0.25%, firefox>10, not dead', //navegadores objetivo para los servidores
                useBuiltIns:'usage', //incluya polyfills
                corejs:3
            }
        ]
    ]


};