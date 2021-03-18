import React, { useEffect, useState } from 'react'
import './fav.css'
import axios from 'axios'
import {SERVER, IMAGES} from '../../config'
import { useToasts } from 'react-toast-notifications'
import {useHistory} from 'react-router-dom'

const Fav = ({movie , user}) => {
    const history = useHistory()
    const { addToast } = useToasts()
    const [movLoc, setMovLoc] = useState(true)
    const delFav = (id) =>{
        axios({
            method: 'delete',
            url: SERVER + `/deleteFav/${user}/${id}`})
                .then(() => 
                    addToast('Pelicula borrada de favoritos', {
                    appearance: 'info',
                    autoDismiss: true,
                }) )
                .then(()=> setMovLoc(false))
            .catch(err=> console.log(err) )
            }

            const updateMovLoc = (mov) =>{
                if(mov) return ''
                else return 'none'
            }   

    return(
        <div className={`content-all-fav ${updateMovLoc(movLoc)}`} >
            <div className='content-fav'>
                <img src={IMAGES + movie.image} 
                    onClick={() => history.push(`/total-pelis/home/movie/${movie.idMovie}`)}/>
                <p>{movie.name}</p>
                <button className='btn-del-fav' onClick={() => delFav(movie.idMovie)}>
                    Borrar de favoritos</button>
            </div>
        </div>
    )
}

export default Fav