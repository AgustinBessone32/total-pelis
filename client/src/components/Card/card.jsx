import React from 'react'
import {useHistory} from 'react-router-dom'
import {IMAGES} from '../../config'
import './card.css'

const Card = ({movie}) => {
    const history = useHistory()

    const color = (num) => {
        if(num <= 4) return 'red'
        if(num > 4 && num < 8) return 'orange'
        return 'green'
    }
    return(
        <div className='card-content' onClick={() => history.push(`/total-pelis/home/movie/${movie.id}`)}>
            {movie.poster_path ? <img src={IMAGES + movie.poster_path}></img> :
            <img src='https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixid=
                MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&
                fit=crop&w=750&q=80'></img>}
            
            <div className='card-body'>
                <p>{movie.title}</p>
                <p className={`vote ${color(movie.vote_average)} `}>{movie.vote_average}</p>
            </div>  
        </div>
    )
}

export default Card