import "../CSS/AboutUs.css"
import A1 from '../Img/A1.jpeg'
import A2 from '../Img/A2.jpeg'
import A3 from '../Img/A3.jpeg'


function AboutUs() {
    return (
        <div className='container1' >
            <div className='container2'>


                <div>

                    <img src={A1} />
                    <p>
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                        of Lorem Ipsum
                    </p>

                </div>

                <div className='item'>

                    <p>
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum
                    </p>
                    <img src={A2} />


                </div>

                <div >

                    <img src={A3} />
                    <p>
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum
                    </p>

                </div>
            </div>

        </div>
    )


}
export default AboutUs