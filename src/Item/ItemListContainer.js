import { useEffect } from "react"
import { useState } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../asyncmock"
import { useParams } from "react-router-dom"
import { firestoreDb } from "../services/firebase"
import { getDocs, collection, query, where, addDoc } from 'firebase/firestore'
import './ItemListContainer.css' 

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [show, setShow] = useState(false)

    const { categoryId } = useParams()

    
        const cargarDatos = () => {
            getProducts().then(prods => {
                console.log('Volvio');
                console.log(prods);
    
                prods.map(({ nombre, precio, img, category, stock, info}) => {
    
                    addDoc(collection(firestoreDb, "products"), { nombre, precio, img, category, stock, info }).then(prods => {
                        console.log('Volvio');
                        console.log(prods);
                    }).catch(error => {
                        console.error(error);
                    }).finally(() => {
                        console.log('Finalizó la promesa');
                    });
                });
    
            }).catch(error => {
                console.error(error);
            }).finally(() => {
                console.log('Finalizó la promesa');
            });
        };


    useEffect(() => {

        const collectionRef = categoryId 
        ? query(collection (firestoreDb, 'products'), where('category', '==', categoryId))
        : collection (firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(products)
            setShow(true)
        })
    }, [categoryId])

    const handleClick = () => {
        console.log('click')
    }

    return (
        
        <div onClick={handleClick}>
            {   show ?
                ( products.length > 0 ? 
                    <ItemList products={products}/>
                :   
                <div>
                    <h2>No se encontraron productos</h2>
                </div>
                )
                : 
                <div className='spinContainer'>
                    <p className='spinner'></p>
                </div>

            }
        </div>
        
    )
}

export default ItemListContainer