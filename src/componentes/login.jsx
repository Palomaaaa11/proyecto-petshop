
export default function login () {
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
