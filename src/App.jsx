import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function Registro(){
  return (
    <div className="container">
      <div className="izquierda"></div>

      <div className="derecha"></div>
      <h2>Bella Patita</h2>
      <h1>Registrto</h1>
      <form>
        <div className="form-group">
          <input type="text" placeholder="Ingrese un nombre de usuario"/>
        </div>
        <div className="form-group">
          <input type="email" placeholder="Ingrese su correo electronico"/>
        </div>
        <div className="form-group">
          <inpu type="password" placeholder="Ingrese una contraseña"/>
        </div>
        <button type="submit" className="btn">
          Registrarse
        </button>
      </form>
    </div>
  )
}