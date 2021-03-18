import React from 'react'
import './footer.css'
import { AiOutlineCopyrightCircle ,AiFillGithub,AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return(
        <div className='content-all-footer'>
            <div className='content-copy'>
                <AiOutlineCopyrightCircle /> 2021 , Agustin Bessone
            </div>
            <div className='content-social'>
                <a href='https://github.com/AgustinBessone32' target='_blank'>
                    <AiFillGithub className='icn-soc'/>
                </a>
                <a href='https://www.linkedin.com/in/agustinbessone/' target='_blank'>
                    <AiFillLinkedin className='icn-soc'/>
                </a>
            </div>
        </div>
    )
}

export default Footer