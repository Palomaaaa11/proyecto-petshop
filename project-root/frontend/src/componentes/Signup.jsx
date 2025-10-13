import { useState } from "react";
import axios from "axios";

export default function SignUp () {
  const [nombre, setNombre] = useState ("");
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("", {
        nombre,
        email,
        password,
      });

      if (response.data.seccess) {
        alert ("Usuario registrado correctamente");
      } else {
        alert ("Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Hubo un problema con el registro");
    }
  };

    return (
      <div className="container">
        <div className="card">
          <div className="form-section">

            <h2 className="logosignup">Bella Patita</h2>
            <h1 className="title">Registro</h1>

            <p className="subtitle">
              Registrate para acceder a todos nuestros productos y beneficios
              exclusivos para tu mascota
            </p>

            <form onSubmit={handleSignup}>
              <input type="text" placeholder="Ingrese un nombre de usuario" 
              value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            
            <input type="email" placeholder="Ingrese un nombre correo"
            value={email} onChange={(e) => setEmail(e.target.value)} />

            <input type="password" placeholder="Ingrese una contraseña"
            value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="btn">Registrarse</button>
            </form>
  
            <p className="login-text">
              ¿Ya tenés una cuenta?{" "}
              <a href="/login" className="link">
                Iniciá Sesión
              </a>
            </p>
          </div>
  
          <div className="image-section">
            <img
              src="https://i.ibb.co/Z6CgXQ5q/Studio-dive-pet.jpg"
              alt="perrito"
            />
          </div>
        </div>
      </div>
    );
  }
