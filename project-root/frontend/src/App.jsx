import { useState } from 'react'
import SignUp from './componentes/signup'
import LogIn from './componentes/login'
import PanelAdmin from './componentes/panel_admin'
import PagCatalogo from './componentes/catalog_product'
import './App.css'

export default function App() {

  const [productos, setProductos] = useState([]);

  const subir = (producto) =>{
    const url = "";
    const config = {
      headers : {
        authorization: "123456"
      }
    }

    const productoNuevo = {
      ...producto
    }

    axios.post(url, productoNuevo, config)
    .then((resp) =>{
      console.log("Producto subido", resp.data);
      obtenerProductos()
    })
    .catch((error) =>{
      console.error(error);
    })
  }

  const obtenerProductos = () =>{
    const url = "";
    const config = {
      headers: {
        authorization: "123456"
      }
    }

    axios.get(url, config)
    .then((resp) =>{
      console.log(resp.data.productos);
      setProductos(resp.data.productos);
    })
    .catch((error) =>{
      console.error(error);
    })
  }

  return(
    <div>
    <SignUp/>

    <PanelAdmin
        subir ={(producto) => subir(producto)}
    />
    </div>
  )
}
