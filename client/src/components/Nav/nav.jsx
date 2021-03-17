import React ,{useState , useEffect}from 'react';
import {useHistory} from 'react-router-dom';
import './nav.css';
import {auth} from '../../firebase-config';
import { BiCameraMovie } from 'react-icons/bi'
import { RiLogoutBoxLine ,RiLoginBoxLine} from 'react-icons/ri'
import { AiOutlineStar} from 'react-icons/ai'


const Nav = () => {
    const history = useHistory()
    const [userLog, setUserLog] = useState(null)
    let width = window.screen.width

    useEffect(() =>{
        auth.onAuthStateChanged((user) => {   
           if(user) {setUserLog(user.email) }
        })
    }, [])
    
    const logout = () =>{
        auth.signOut()
        setUserLog(null)
        history.push('/total-pelis/login')
    }
  
    return(
        <div className='content-nav'>
            <a className='nav-logo' onClick={() => history.push('/total-pelis/home')}>
                <BiCameraMovie />Total Pelis</a>
            
            {
                userLog !== null  ?
                        <div className='log-con'>
                            <span className='txt-nav'>¡Hola  {userLog}!</span>

                            {width > 450 ?
                            <>
                                <button className='btn-nav-fav' 
                                        onClick={() => history.push('/total-pelis/home/favorites')}>
                                                Mis favoritos</button>
                                <button className='btn-nav' onClick={logout}>Cerrar sesión</button> 
                            </>
                            :
                            <> 
                                <AiOutlineStar className='btn-nav-res' 
                                    onClick={() => history.push('/total-pelis/home/favorites')} />
                                <RiLogoutBoxLine  className='btn-nav-res' onClick={logout}/>
                            </>}
                             
                        </div>
                        :
                        <>
                        {width > 450 ?
                            <button className='btn-nav-g' 
                            onClick={() =>history.push('/total-pelis/login')}>Iniciar sesión</button> 
                            : <RiLoginBoxLine className='btn-nav-res' 
                                onClick={() =>history.push('/total-pelis/login')}/>}
                        </>
            }
        </div>
    )
}

export default Nav