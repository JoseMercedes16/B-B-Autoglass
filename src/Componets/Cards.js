import React from 'react'
import Card from './Card'
import img1 from '../Img/autoglass1.jpg'



function Cards() {
    const cards = [
        {
            id: 1,
            title: 'About US',
            image: img1,
            text: "tamo aqui"
        },
        {
            id: 2,
            title: "Our Works",
            image: img1,
            text:'tamo  aya '
        },
        {
            id: 3,
            title: "Contact US",
            image: img1,
            text:'mentimo mano'
        },
    ]
    return (
        <div className="container d-flex justify-content-center align-item-center " style={{
            marginTop: '30px',
            justifyContent: 'center'
        }}>
            <div className='row'>
                {
                    cards.map(card => (
                        <div className='col-md-4' key={card.id}>
                            <Card title={card.title} imageSRC={card.image} text={card.text} />
                        </div>
                    ))
                }

            </div>

        </div>

    )

}
export default Cards


