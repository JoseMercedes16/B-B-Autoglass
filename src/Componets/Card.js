import React from 'react'
import '../CSS/Cards.css'

function Card({title, imageSRC,text}) {
    return (
        <div className='card text-center bg-dark'>
            <img className='card-img-to' src={imageSRC} alt='Card image cap'/>
            <div className='card-body text-light'>
                <h4 className='card-title'>{title} </h4>
                <p className='card-text text-secondary'>{text} </p>
                    <a href='#!' className='btn btn-outline-secondary' > conose mas </a>
            </div>
        </div>
    )
 
}
export default Card
