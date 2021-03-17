import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import './cardList.css'
import {API , SEARCH} from '../../config'
import Card from '../Card/card'
import { BiSearchAlt2 } from 'react-icons/bi';

const CardList = () =>{
    const [movies , setMovies] = useState([])
    useEffect(()=>{
        axios.get(API)
            .then(response => setMovies(response.data.results))
    },[])

    const searchMovies = (mov)=> {
        if(mov !== ''){
            axios.get(SEARCH + mov)
            .then(response => setMovies(response.data.results))
        }
        else{
            axios.get(API)
            .then(response => setMovies(response.data.results))
        }

    }
    return(
        <div className='content-all'>
             <div className='content-inp-sb'>
                <BiSearchAlt2 className='ic-search' />
                <input 
                    type='text'
                    onChange={(e)=> searchMovies(e.target.value)}
                    placeholder='Ingrese la pelicula...'
                    className='inp-sb'
                    />
            </div>
            <div className='content-cards'>
                {movies.length === 0 ? 
                    <div className='div-err'> 
                        <h2>Busqueda sin resultados</h2>
                        <img src='https://www.inacatalog.com/hubfs/Imported_Blog_Media/Errores-tipicos-en-las-ventas-2.jpg'> 
                        </img>
                    </div>
                    : movies.map(movie => <Card movie={movie}/>)}
            </div>
        </div>
    )
}

export default CardList