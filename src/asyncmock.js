const products = [
    {
        id: "1",
        nombre: "Iphone XS",
        category: "iphone",
        precio: 235000,
        img: "https://http2.mlstatic.com/D_NQ_NP_999350-MLA46545234984_062021-O.webp",
        stock: 9,
        info: "El Apple iPhone XS es el sucesor del iPhone X que debutara el pasado año. Con una pantalla Super Retina OLED de 5.8 pulgadas, el iPhone XS está potenciado por el nuevo chip A12 Bionic de Apple, con opciones de almacenamiento interno de 64GB, 256GB o 512GB. La cámara del iPhone XS es dual de 12 MP, con zoom óptico 2X y estabilización de imagen, mientras que al frente cuenta con una cámara de 7 MP para selfies. Con sonido stereo, el iPhone Xs mejora su resistencia al agua con certificación IP68, y soporta carga inalámbrica, Apple Pay y Siri en iOS 12."
    },
    {
        id: "2",
        nombre: "Iphone 11",
        category: "iphone",
        precio: 189000,
        img: "https://http2.mlstatic.com/D_NQ_NP_724631-MLA46114990506_052021-O.webp",
        stock: 7,
        info:"El Apple iPhone 11 es el sucesor del iPhone Xr para el 2019. Este año el iPhone 11 llega con una pantalla de 6.1 pulgadas con resolución Liquid Retina y potenciado por un procesador Apple A13 Bionic con 64GB, 128GB o 256GB de almacenamiento interno. La cámara posterior del iPhone 11 ahora es dual, con un lente regular de 12 MP y otro gran angular de 12 MP, mientras que su cámara frontal es de 12 MP. El iPhone 11 cuenta con una batería de 3110 mAh con carga rápida, parlantes stereo con sonido Dolby Atmos, carga inalámbrica y utiliza reconocimiento de rostro Face ID para seguridad."
    },
    {
        id: "3",
        nombre: "Iphone 12 Pro",
        category: "iphone",
        precio: 320000,
        img: "https://http2.mlstatic.com/D_NQ_NP_834378-MLA46078159682_052021-O.webp",
        stock: 14,
        info:"El Apple iPhone 12 Pro representa a los iPhone más avanzados de la serie 12. Con una pantalla de 6.1 pulgadas de tecnología OLED, el iPhone 12 Pro está potenciado por el procesador A14 Bionic de Apple, junto con opciones de 128GB, 256 o 512GB de almacenamiento interno no expandible. El sistema de cámaras trasero del iPhone 12 Pro consta de tres lentes de 12 megapixels más un lente de tecnología LiDAR TOF 3D, mientras que la cámara frontal también es de 12 megapixels. Completando las características del iPhone 12 Pro encontramos parlantes stereo, Apple Pay, sistema de reconocimiento Face ID, batería de carga rápida e inalámbrica y corre iOS 14."
        
    },
    {
        id: "4",
        nombre: "Iphone 13 Pro Max",
        category: "iphone",
        precio: 475000,
        img: "https://http2.mlstatic.com/D_NQ_NP_803693-MLA47776072534_102021-O.webp",
        stock: 24,
        info:"El Apple iPhone 13 Pro Max mejora a su predecesor con una tasa de refresco de pantalla de 120Hz, el nuevo procesador Apple A15 Bionic y mejoras en sus cámaras. Con una pantalla OLED de 6.7 pulgadas a resolución FHD+, el iPhone 13 Pro Max está disponible con opciones de almacenamiento de 128GB, 256GB, 512GB y 1TB. La cámara cuádruple llega con tres lentes de 12MP y un sensor ToF 3D que integra estabilización óptica de imagen y zoom 3x, y su cámara selfie es de 12MP. El iPhone 13 Pro Max cuenta con parlantes stereo, Face ID para seguridad, resistencia IP68 al polvo y agua, y carga rápida e inalámbrica."
    },
    {
        id: "5",
        nombre: "Samsung Galaxy S20 Fe",
        category: "samsung",
        precio: 150000,
        img: "https://http2.mlstatic.com/D_NQ_NP_702098-MLA49622814306_042022-O.webp",
        stock: 19,
        info:"El Samsung Galaxy S20 FE es un nuevo miembro de la serie Galaxy S20, disponible en versiones 5G o LTE. El Galaxy S20 FE llega con una pantalla Super AMOLED de 6.5 pulgadas a resolución Full HD+ y potenciado por un procesador Exynos 990 con 6GB de memoria RAM y 128GB de almacenamiento interno expandible en el caso de la variante LTE mientras que la variante con conectividad 5G utiliza un procesador Snapdragon 865 con 8GB de RAM y 128GB o 256GB de almacenamiento. La cámara principal del Galaxy S20 FE es triple, con lentes de 12 MP, 8 MP y 12 MP, y la cámara frontal para selfies es de 32 megapixels. Completando las características del Galaxy S20 FE encontramos una batería de 4500 mAh de carga rápida, lector de huellas bajo pantalla, refresco de pantalla de 120 Hz, sonido de alta fidelidad, y corre Android 10 con la interfaz One UI 2.5."
        
    },
    {
        id: "6",
        nombre: "Samsung Galaxy S20 Ultra",
        category: "samsung",
        precio: 180000,
        img: "https://http2.mlstatic.com/D_NQ_NP_849550-MLA49502113393_032022-O.webp",
        stock: 17,
        info:"El Samsung Galaxy S20 Ultra es el miembro más poderoso de la nueva serie Galaxy S20. Con una enorme pantalla QHD+ Dynamic AMOLED 2X de 6.9 pulgadas, el Galaxy S20 Ultra utiliza un procesador Snapdragon 865 en su variante para USA y un Exynos 990 para la variante del resto del mundo, acompañados de 12GB de memoria RAM con 128GB o 256GB de almacenamiento o bien 16GB de memoria RAM con 512GB de almacenamiento. La cámara principal del Galaxy S20 Ultra consta de tres lentes de 108 MP + 48 MP + 12 MP más un sensor TOF 3D, y la cámara frontal es de 40 megapixels. El Galaxy S20 Ultra completa sus características con parlantes stereo optimizados por AKG, batería de 5000 mAh con soporte para carga ultra rápida, carga inalámbrica, conectividad 5G y corre One UI 2 basado en Android 10."
        
    },
    {
        id: "7",
        nombre: "Samsung Galaxy S21 Fe",
        category: "samsung",
        precio: 130000,
        img: "https://http2.mlstatic.com/D_NQ_NP_879603-MLA49171604463_022022-O.webp",
        stock: 12,
        info:"El Samsung Galaxy S21 FE 5G es la edición para fanáticos de la serie Galaxy S21. Se trata de un smartphone Android con una pantalla AMOLED FHD+ de 6.4 pulgadas con tasa de refresco de 120Hz. El Galaxy S21 FE llega en dos variantes: una con procesador Snapdragon 888 - para USA y Europa - y otra con chip Exynos 2100 - para mercados asiáticos - con 6GB o 8GB de RAM y 128GB o 256GB de almacenamiento interno. El conjunto de cámaras dorsal del Galaxy S21 FE consta de un sensor de 12MP con OIS, una cámara ultrawide de 12MP, y una cámara telefoto de 8MP con OIS, mientras que la cámara selfie es de 32MP. Alimentado por una batería de 4500 mAh de carga rápida, el Galaxy S21 FE 5G admite carga inalámbrica, cuenta con lector de huellas debajo de la pantalla, y llega con One UI 4 basado en Android 12 de fábrica."
    },
    {
        id: "8",
        nombre: "Samsung Galaxy S21 Ultra",
        category: "samsung",
        precio: 215000,
        img: "https://http2.mlstatic.com/D_NQ_NP_760975-MLA44850018227_022021-O.webp",
        stock: 8,
        info:"El Samsung Galaxy S21 Ultra es la variante más poderosa de la serie Galaxy S21, mejorando por completo todas las especificaciones de sus pares y el primer Galaxy S en utilizar stylus S Pen fuera de la serie Galaxy Note. El Galaxy S21 Ultra cuenta con una pantalla Dynamic AMOLED de 6.8 pulgadas a resolución QHD+, tasa de refresco de 120 Hz y protección Gorilla Glass Victus y por dentro encontramos el mismo par de procesadores dependientes de región: el Snapdragon 888 para USA y China y el Exynos 2100 para el resto del mundo, esta vez con opciones de 12GB de memoria RAM 128GB o 256GB de almacenamiento o 16GB de RAM con 512GB de almacenamiento. La cámara posterior del Galaxy S21 Ultra es mejorada a una cuádruple, con lente principal de 108MP, un lente periscópico de 10MP, lente telefoto de 10MP y un lente ultrawide de 12MP, mientras que la cámara frontal sube a 40MP. Completando las características del Galaxy S21 Ultra encontramos unos parlantes stereo con sonido HiFi, batería de 5000 mAh con carga rápida, inalámbrica y reversible, lector de huellas integrado en la pantalla, y One UI 3.5 con Android 11 debajo."
    },
    {
        id: "9",
        nombre: "Moto G200",
        category: "motorola",
        precio: 99000,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_909848-MLA49211627387_022022-F.webp",
        stock: 12,
        info:"El Motorola Moto G200 5G es un smartphone Android con una pantalla FHD+ de 6.8 pulgadas y refresco de 144Hz. Potenciado por un procesador Snapdragon 888 Plus, el Moto G200 cuenta con 8GB de RAM con 128GB o 256GB de almacenamiento interno no expandible. La cámara dorsal tiene un sensor principal de 108MP y el resto del conjunto triple de cámara se completa con sensores de 8MP y 2MP, siendo la cámara selfie de 16MP. Alimentado por una batería de 5000 mAh de carga rápida, el Moto G71 completa sus especificaciones con un lector de huellas lateral, certificación IP52 y Android 11."
    },
    {
        id: "10",
        nombre: "Moto G100",
        category: "motorola",
        precio: 80000,
        img: "https://http2.mlstatic.com/D_NQ_NP_840181-MLA46248119953_062021-O.webp",
        stock: 11,
        info:"El Motorola Moto G100 es la variante occidental del Edge S. Con una pantalla full HD+ de 6.7 pulgadas con tasa de refresco de 90Hz, el Moto G100 utiliza un procesador Snapdragon 870 de Qualcomm junto con 8GB de memoria RAM y 128GB de almacenamiento interno expandible. La cámara trasera del Moto G100 es cuádruple, con lentes de 64MP, 16MP y 2MP y un lente TOF para información de profundidad, mientras que la cámara frontal es dual, en configuración 16MP + 8MP. Con una batería de 5000 mAh de carga rápida, el Motorola Moto G100 cuenta con lector de huellas montado de costado, capa repelente al agua, conectividad 5G y corre Android 11"
    },
    {
        id: "11",
        nombre: "Moto G60s",
        category: "motorola",
        precio: 53000,
        img: "https://http2.mlstatic.com/D_NQ_NP_818442-MLA48112811920_112021-O.webp",
        stock: 26,
        info:"El Motorola Moto G60S es una variante del Moto G60 con una pantalla FHD+ de 6.8 pulgadas y tasa de refresco de 120Hz. Por dentro, encontramos un procesador MediaTek Helio G95, acompañado de 6GB de memoria RAM con 128GB de almacenamiento interno. La cámara principal del Moto G60S es cuádruple, con lentes de 64MP, 8MP, 5MP y 2MP, mientras que la cámara selfie es de 16MP. Completando las características del Moto G60S encontramos una batería de 5000 mAh de carga rápida, lector de huellas, y Android 11."
    },
    {
        id: "12",
        nombre: "Moto G51",
        category: "motorola",
        precio: 65000,
        img: "https://http2.mlstatic.com/D_NQ_NP_607410-MLA49594931287_042022-O.webp",
        stock: 12,
        info:"El Motorola Moto G51 5G es un smartphone Android con una pantalla de 6.8 pulgadas a resolución 1080p y con tasa de refresco de 120Hz. Potenciado por un procesador Snapdragon 480+, el Moto G51 5G cuenta con hasta 8GB de RAM y 128GB de almacenamiento, y está alimentado por una batería de 5000 mAh. La cámara dorsal del Moto G51 5G es un arreglo triple con lentes de 50MP, 8MP y 2MP, y la cámara selfie es de 13MP, completando las características con un lector de huellas lateral y Android 11."
    }
]

const categories = [
    {id: 'iphone', description: 'Iphone'},
    {id: 'samsung', description: 'Samsung'},
    {id: 'motorola', description: 'Motorola'}
]

export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categories)
        },)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 100)
    })
}

export const getProductsbyId = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

