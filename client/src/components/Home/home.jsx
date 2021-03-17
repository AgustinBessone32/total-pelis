import React from 'react'
import {useHistory} from 'react-router-dom'
import './home.css'

const Home = () => {
    const history = useHistory()
    return(
    <div className='content-home'>
        <h3>Disfruta toda la informacion de las mejores peliculas</h3>
        <div className='div-name' 
            onClick={() => history.push('/total-pelis/login')}>
                Presiona para continuar</div>   
    </div>
    )
}

export default Home