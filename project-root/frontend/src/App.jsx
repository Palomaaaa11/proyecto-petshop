import { useState } from 'react'
import SignUp from './componentes/signup'
import LogIn from './componentes/login'
import PagCatalogo from './componentes/catalog_product'
import './App.css'
import PanelAdmin from './componentes/Panel_admin'

export default function App() {

  const [productos, setProductos] = useState([]);

  const subir = (formData) =>{
    const url = "http://localhost:3000/api/productos";
    const config = {
      headers : {
        "Content-Type": "multipart/form-data",
        authorization: "123456"
      }
    }

    axios.post(url, formData, config)
    .then((resp) =>{
      console.log("Producto subido", resp.data);
      obtenerProductos()
    })
    .catch((error) =>{
      console.error("Error al subir el producto", error);
    })
  }

  const obtenerProductos = () =>{
    const url = "http://localhost:3000/api/productos";
    const config = {
      headers: {
        authorization: "123456"
      }
    }

    axios.get(url, config)
    .then((resp) =>{
      console.log("Productos obtenidos", resp.data.productos);
      setProductos(resp.data.productos);
    })
    .catch((error) =>{
      console.error("Error al obtener los productos", error);
    })
  }


  useEffect(() => {
    obtenerProductos();
  }, []);

  return(
    <div>
    <SignUp/>

    <PanelAdmin
        subir ={(producto) => subir(producto)}
    />
    </div>
  )
}
