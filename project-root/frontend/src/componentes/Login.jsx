
import { useState } from "react";
import axios from "axios";

export default function LogIn () {
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");

  const handeLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("", {
        email,
        password,
      });

      if (response.data.seccess) {
        alert("Inicio de sesion exitoso");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error al iniciar Sesion", error);
      alert("Usuario o contrasela incorrectos");
    }
  };
    return (
      <div className="container">
        <div className="card">
         
          <div className="form-section">
            <h2 className="logologin">Bella Patita</h2>
            <h1 className="title">Iniciar Sesion</h1>
            <p className="subtitle">
            Volvé a entrar y seguí cuidando a tu mascota con nosotros 
            </p>
  
            <input type="text" placeholder="Ingrese su nombre de usuario" />
            <input type="password" placeholder="Ingrese la contraseña" />
  
            <button className="btn">Acceder</button>
  
            <p className="login-text">
              ¿No tenes una cuenta?{" "}
              <a href="#" className="link">
                Registrate
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
