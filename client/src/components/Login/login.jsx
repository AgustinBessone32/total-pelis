import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { useToasts } from 'react-toast-notifications'
import './login.css'
import {auth} from '../../firebase-config'
import {SERVER} from '../../config'


const Login = () => {
  const { addToast } = useToasts()
  const history = useHistory()
  const [user , setUser] = useState('')
  const [pass , setPass] = useState('')


  const registerUser = (e) =>{
      e.preventDefault()
    
      auth.createUserWithEmailAndPassword(user, pass)
        .then(res => 
          axios({
            method: 'post',
            url: SERVER + `/addUser/${res.user.email}`
          }))
        .then(()=> addToast('Registro exitoso! Por favor inicie sesion', {
            appearance: 'success',
            autoDismiss: true,
          }))

        .catch(e => {
          if(e.code === 'auth/email-already-in-use'){ addToast('Email ya registrado', {
            appearance: 'error',
            autoDismiss: true,
            })}
          if(e.code === 'auth/invalid-email') { addToast('Email incorrecto, porfavo ingrese otro', {
          appearance: 'error',
          autoDismiss: true,
          })}
          if(e.code === 'auth/weak-password') { addToast('Ingrese una contraseña con 6 o mas caracteres', {
            appearance: 'error',
            autoDismiss: true,
          })}

    })
  }

  const loginUser = () =>{
    auth.signInWithEmailAndPassword(user, pass)
    .then(()=> addToast('Inicio de sesión exitoso', {
      appearance: 'success',
      autoDismiss: true,
    }))
    .then(() => history.push('/total-pelis/home'))
    .catch( e => {
      if(e.code === 'auth/wrong-password') { addToast('Contraseña incorrecta', {
        appearance: 'error',
        autoDismiss: true,
        })}
      else{
        { addToast('El usuario no se encuentra registrado', {
          appearance: 'error',
          autoDismiss: true,
          })}
      }
    })
    
  }

    return(
        <div className='login-content'>
          <div className='form-content'>
            <h3 className='login-title'>Total Pelis</h3>
            <form  onSubmit={registerUser}>
                <input type='text'
                        placeholder='Ingrese el usuario'
                        onChange={(e) => setUser(e.target.value)}
                />
                <br/>
                <input type='password'
                        placeholder='Ingrese la contraseña'
                        onChange={(e) => setPass(e.target.value)}
                />
                <br/>
                <button type='submit' className='btn-reg'> Registrarse </button>
                <br/>
                <button  onClick={loginUser} className='btn-log'> Iniciar Sesión </button>
            </form>
          </div>
        </div>
    )
}

export default Login