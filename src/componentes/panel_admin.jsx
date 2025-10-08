import { useState } from "react"

export default function PanelAdmin(){

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");

    return(
    <div className="panel_container">
        <div className="cabecera">
            <h1>Panel de Administración</h1>
            <button>CERRAR SESIÓN</button>
        </div>

        <div className="subirprod">
            <h1 className="titulo_subir">
                Subir producto
            </h1>

            <div className="poner_datos">
                <div className="subir_foto">

                </div>
                <div>
                    <input type="text" />
                </div>
            </div>
        </div>
    </div>)
}