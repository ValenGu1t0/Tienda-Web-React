
import { useState, useEffect, useCallback } from 'react';
import fetchData from '../../assets/fetchData'
import SeccionItems from '../SeccionItems/SeccionItems';

// Componente que updatea la data y la renderiza por cada cambio (lugar donde se invoque el handleUpdate)
function MainListaItems() { 

    // Productos va a tener la lista de items en todo momento
    const [productos, setProductos] = useState([]);

    // Función que actualiza la lista de items
    const handleUpdate = useCallback(() => {

        fetchData()
        .then((res) => {  setProductos(res);  })

    }, [])

    useEffect(() => {

        handleUpdate();

    }, [handleUpdate])

    console.log(productos);

    return (

        /* Esta es la seccion de items del inicio, despues por cada categoria armar una distinta -> router?  */
        <div>   
        <SeccionItems productos={productos} handleUpdate={handleUpdate} />   
        </div>
    )

}

export default MainListaItems;