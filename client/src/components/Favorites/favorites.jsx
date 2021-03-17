import React, {useEffect , useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {SERVER} from '../../config'
import './favorites.css'
import Fav from '../Fav/fav'

const Favorites = ({user}) =>{
    const history = useHistory()
    const [ids, setIds] =useState([])
   
    useEffect(()=>{
        axios({
            method: 'get',
            url: SERVER + `/showMovies/${user}`})
                .then(res => setIds(res.data)) 
    },[])

    return(
        <div className='content-allFavs'>
            {ids?.length ? ids.map(id => <Fav movie={id} user={user}/>) :
            <h3 className='fav-err'>No tenes favoritos todavia</h3> }
        </div>
    )
}

export default Favorites