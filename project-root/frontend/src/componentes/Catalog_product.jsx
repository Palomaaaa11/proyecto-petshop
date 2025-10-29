import React from "react";

export default function PagCatalogo() {
  const productosDestacados = [
    {
      id: 1,
      nombre: "Bolso De Transporte Para Mascotas",
      precio: "20,750 ARS",
      imagen: "https://i.ibb.co/k22cxn0h/Dise-o-sin-t-tulo-",
    },
    {
      id: 2,
      nombre: "Peine De Autolimpieza para Gatos y Perros",
      precio: "13,473 ARS",
      imagen: "https://i.ibb.co/B7Pq0P8/Dise-o-sin-t-tulo-2.png",
    },
    {
      id: 3,
      nombre: "Colchón para Perros Simmons",
      precio: "86,600 ARS",
      imagen: "https://i.ibb.co/bjnM9Y9V/Dise-o-sin-t-tulo-3.png",
    },
  ];

  const productosMascotas = [
    {
      id: 4,
      nombre: "Contenedor De Baño Para Hámster",
      precio: "21,900 ARS",
      imagen: "https://i.ibb.co/1t3Njmtj/Dise-o-sin-t-tulo-4.png",
    },
    {
      id: 5,
      nombre: "Jaula Hámster 3 Pisos",
      precio: "56,590 ARS",
      imagen: "https://i.ibb.co/MDMN2SMQ/Dise-o-sin-t-tulo-5.png",
    },
    {
      id: 6,
      nombre: "Juguetes Para Gallinero",
      precio: "21,300 ARS",
      imagen: "https://i.ibb.co/LXzJWBwv/Dise-o-sin-t-tulo-6.png",
    },
  ];

  return (
    <div className="catalogo_container">
     
      <div className="header_catalogo">
      
        <img
          src="https://i.ibb.co/sJNHn9HH/IMG-PAG-PRINCIPAL.png"
          alt="Bella Patita"
          className="header_img"
        />
      </div>

      <section className="productos_section">
        <h2>Productos más destacados</h2>
        <div className="productos_grid">
          {productosDestacados.map((p) => (
            <div key={p.id} className="producto_card">
              <img src={p.imagen} alt={p.nombre} />
              <h3>{p.nombre}</h3>
              <p className="precio">${p.precio}</p>
              <button>Comprar</button>
            </div>
          ))}
        </div>
      </section>

      <section className="productos_section tipo_mascota">
        <h2>Productos para todo tipo de mascota</h2>
        <div className="productos_grid">
          {productosMascotas.map((p) => (
            <div key={p.id} className="producto_card">
              <img src={p.imagen} alt={p.nombre} />
              <h3>{p.nombre}</h3>
              <p className="precio">${p.precio}</p>
              <button>Comprar</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer_catalogo">
        <p>Paloma Rodríguez y Lourdes Apaza – 7mo 1ra</p>
      </footer>
    </div>
  );
}
