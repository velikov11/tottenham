import React from 'react'
import './Team.css'
import glava from '../../assets/glava.webp'

const Team = () => {
    return (
        <div className="team">
            <img src={glava} alt='' style={{ width: '100%', height: '100%' }} />
            <div className="zaglavie"><h1>Добре дошли в официалният български сайт на Тотнъм</h1></div>
        </div>
    )
}

export default Team