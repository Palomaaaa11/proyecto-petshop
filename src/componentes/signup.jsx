
export default function signup () {
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
  
            <input type="text" placeholder="Ingrese un nombre de usuario" />
            <input type="email" placeholder="Ingrese un nombre correo" />
            <input type="password" placeholder="Ingrese una contraseña" />
  
            <button className="btn">Registrarse</button>
  
            <p className="login-text">
              ¿Ya tenés una cuenta?{" "}
              <a href="#" className="link">
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
