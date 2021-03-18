import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {auth} from '../../firebase-config';
import './movieDetail.css'
import {IMAGES , SERVER} from '../../config'
import { useToasts } from 'react-toast-notifications'


const MovieDetail = () =>{
    const { addToast } = useToasts()

    const idMovie = window.location.pathname.split('/')[4]
    const [inFav , setInFav ] = useState(false)
    const [movie , setMovie] = useState([])
    const [userLog, setUserLog] = useState(null)

const color = (num) => {
    if(num <= 4) return 'red'
    if(num > 4 && num < 8) return 'orange'
    return 'green'
}

const addFav = (id,image,name) =>{
    setInFav(true)
    axios({
        method: 'put',
        url: SERVER + `/addFav/${userLog}/${id}${image}/${name}`})
        .then(() => 
            addToast('Pelicula añadida a favoritos', {
            appearance: 'success',
            autoDismiss: true,
          }) )
          .catch(err=> console.log(err) )
}


useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=f3e32df54960b38fb814c3b24b0097d0`)
        .then((response)=>setMovie(response.data) )
    
        
    auth.onAuthStateChanged((user) => {   
        if(user) {setUserLog(user.email)  }
         })

    },[])
    
    return(
        <div className='md-con' > 
            <div className='movie-detail-content'>
                <div className='img-movie'>
                    <img src={IMAGES + movie.poster_path}></img>
                </div>
                <div className='movie-detail'>
                    <h2>{movie.title}</h2>
                    <div className='div-md'>
                        <p>{movie.overview}</p>
                    </div>
                    <h3 className={`md-vote ${color(movie.vote_average)} `}>
                        Calificacion {movie.vote_average}</h3>
                    { userLog !== null ?
                        inFav === false ?
                        <button className='btn-fav' onClick={() => 
                        addFav(idMovie,movie.poster_path,movie.title)}>
                        Añadir a Favoritos</button>
                        : <span className='spn-err'>En favoritos!</span>
                        : <span className='spn-err'>Inicia sesion añardila a favoritos</span>
                    }
                </div>
        </div>

        </div>
    )
}

export default MovieDetail

