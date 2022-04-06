const products = [
    {
        id: 1,
        nombre: "Iphone 8 plus",
        precio: 175000,
        img: "https://http2.mlstatic.com/D_NQ_NP_711845-MLA43701553365_102020-O.webp"
    },
    {
        id: 2,
        nombre: "Iphone XS",
        precio: 235000,
        img: "https://http2.mlstatic.com/D_NQ_NP_888921-MLA31002298922_062019-O.webp"
        
    },
    {
        id: 3,
        nombre: "Iphone 11",
        precio: 189000,
        img: "https://http2.mlstatic.com/D_NQ_NP_724631-MLA46114990506_052021-O.webp"
    },
    {
        id: 4,
        nombre: "Iphone 13 Pro Max",
        precio: 475000,
        img: "https://http2.mlstatic.com/D_NQ_NP_803693-MLA47776072534_102021-O.webp"
    }
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout (() => {
            resolve (products)
        }, 2000)
    })
}