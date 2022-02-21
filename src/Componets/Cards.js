import React from 'react'
import Card from './Card'
import img1 from '../Img/autoglass1.jpg'



function Cards() {
    const cards = [
        {
            id: 1,
            title: 'About US',
            image: img1,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            direccion:"/aboutUs"
        },
        {
            id: 2,
            title: "Our Works",
            image: img1,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            direccion:"/ourWorks"
        },
        {
            id: 3,
            title: "Contact US",
            image: img1,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            direccion:"/contactUs"
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
                            <Card title={card.title} imageSRC={card.image} text={card.text} direccion={card.direccion} />
                        </div>
                    ))
                }

            </div>

        </div>

    )

}
export default Cards


