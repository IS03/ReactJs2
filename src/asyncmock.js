const products = [
    {
        id: 1,
        nombre: "Iphone 8 plus",
        precio: 175000,
        img: "https://http2.mlstatic.com/D_NQ_NP_711845-MLA43701553365_102020-O.webp",
        stock: 12,
        info: "El Apple iPhone 8 Plus conserva la misma pantalla de su antecesor, con 5.5 pulgadas a resolución Full HD, con un nuevo diseño que combina aluminio con vidrio adelante y atrás. Por dentro, el iPhone 8 Plus está potenciado por el nuevo procesador A11 Bionic. El iPhone 8 Plus vuelve a contar con una cámara dual de 12 MP, con zoom óptico 2X, y aperturas combinables para efectos de fotografía y slow motion en 1080p y agrega soporte para carga inalámbrica en su batería con el mismo rendimiento que en el iPhone 7 Plus."
    },
    {
        id: 2,
        nombre: "Iphone XS",
        precio: 235000,
        img: "https://http2.mlstatic.com/D_NQ_NP_888921-MLA31002298922_062019-O.webp",
        stock: 10,
        info:"El Apple iPhone XS es el sucesor del iPhone X que debutara el pasado año. Con una pantalla Super Retina OLED de 5.8 pulgadas, el iPhone XS está potenciado por el nuevo chip A12 Bionic de Apple, con opciones de almacenamiento interno de 64GB, 256GB o 512GB. La cámara del iPhone XS es dual de 12 MP, con zoom óptico 2X y estabilización de imagen, mientras que al frente cuenta con una cámara de 7 MP para selfies. Con sonido stereo, el iPhone Xs mejora su resistencia al agua con certificación IP68, y soporta carga inalámbrica, Apple Pay y Siri en iOS 12."
        
    },
    {
        id: 3,
        nombre: "Iphone 11",
        precio: 189000,
        img: "https://http2.mlstatic.com/D_NQ_NP_724631-MLA46114990506_052021-O.webp",
        stock: 7,
        info:"El Apple iPhone 11 es el sucesor del iPhone Xr para el 2019. Este año el iPhone 11 llega con una pantalla de 6.1 pulgadas con resolución Liquid Retina y potenciado por un procesador Apple A13 Bionic con 64GB, 128GB o 256GB de almacenamiento interno. La cámara posterior del iPhone 11 ahora es dual, con un lente regular de 12 MP y otro gran angular de 12 MP, mientras que su cámara frontal es de 12 MP. El iPhone 11 cuenta con una batería de 3110 mAh con carga rápida, parlantes stereo con sonido Dolby Atmos, carga inalámbrica y utiliza reconocimiento de rostro Face ID para seguridad."
    },
    {
        id: 4,
        nombre: "Iphone 13 Pro Max",
        precio: 475000,
        img: "https://http2.mlstatic.com/D_NQ_NP_803693-MLA47776072534_102021-O.webp",
        stock: 24,
        info:"El Apple iPhone 13 Pro Max mejora a su predecesor con una tasa de refresco de pantalla de 120Hz, el nuevo procesador Apple A15 Bionic y mejoras en sus cámaras. Con una pantalla OLED de 6.7 pulgadas a resolución FHD+, el iPhone 13 Pro Max está disponible con opciones de almacenamiento de 128GB, 256GB, 512GB y 1TB. La cámara cuádruple llega con tres lentes de 12MP y un sensor ToF 3D que integra estabilización óptica de imagen y zoom 3x, y su cámara selfie es de 12MP. El iPhone 13 Pro Max cuenta con parlantes stereo, Face ID para seguridad, resistencia IP68 al polvo y agua, y carga rápida e inalámbrica."
    }
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout (() => {
            resolve (products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout (() => {
            resolve (products.find(prod => prod.id === id))
        }, 2000)
    })
}