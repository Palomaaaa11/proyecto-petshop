import React from "react";

export default function PagCatalogo(){
    const productosDestacados = [
        {
            id: 1,
            nombre: "Bolso de Transporte Para mascotas",
            precio: "20,750 ARS",
            imagen: "./img/bolso.jpg",
           
        },
        {
            id: 2,
            nombre: "Peine de A utolimpieza para Gatos y Perros",
            precio: "13,473 ARS",
            imagen: "./img/peine.jpg",
        },
        {
            id: 3,
            nombre: "Colchoón para Perros Simmons",
            precio: "86,600 ARS0",
            imagen: "./img/colchon.jpg",
        },
    ];

    const productoMascotas = [
        {
            id: 4,
            nombre: "Contenedor de Baño para hamster",
            precio: "$21,900 ARS",
            imagen: "./img/baño-hamster.jpg",
        },
        {
            id: 5,
            nombre: "Jaula Hmaster 3 pisos",
            precio: "$56,590 ARS",
            imagen: "./img/jaula.jpg",
        },
        {
            id: 6,
            nombre: "Juguetes para Gallinero",
            precio: "$21,300 ARS",
            imagen: "./img/juguete-gallina.jpg",
        },
    ];
    return(
        <div className="catalogo_container">
            <div className="header_catalogo">
                
            </div>
            
        </div>
    )
}