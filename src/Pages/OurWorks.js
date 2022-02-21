import A1 from '../Img/A1.jpeg'
import A2 from '../Img/A2.jpeg'
import A3 from '../Img/A3.jpeg'
import A4 from '../Img/A4.jpeg'
import A5 from '../Img/A5.jpeg'
import A6 from '../Img/A6.jpeg'
import A7 from '../Img/A7.jpeg'
import A8 from '../Img/A8.jpeg'
import A9 from '../Img/A9.jpeg'
import A10 from '../Img/A10.jpeg'
import "../CSS/OurWorks.css"
import {useState} from 'react'
import ClearIcon from '@mui/icons-material/Clear'




function OurWorks() {
   

        let data = [
            {
                id:1,
                imgSrc: A1
            },
            {
                id:2,
                imgSrc: A2
            },
            {
                id:3,
                imgSrc: A3
            
            },
            {
                id:4,
                imgSrc : A4
            },
            {
                id:5,
                imgSrc: A5
            },
            {
                id:6,
                imgSrc: A6
    
            },
            {
                id:7,
                imgSrc: A7
            
            },
            {
                id:8,
                imgSrc :A8
            },
            {
                id:9,
                imgSrc: A9
            },
            {
                id:10,
                imgSrc: A10
            },
            
         
        ]
        const [model, setModel] = useState(false)
        const [tempimgSrc, setTempimgSrc] = useState('')
        const getImg = (imgSrc) =>{
            setTempimgSrc(imgSrc);
            setModel(true);
    
        }
        return (
            <>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} />
                <ClearIcon onClick={()=> setModel(false)} />
                
            </div>
            <div className='OurWorks'>
                {data.map((item, index)=>{
                    return(
                        <div className='pics' key={index} onClick={()=> getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{width:'100%'}}/>
                        </div>
                    )
                })}
    
            </div>
            
            </>
        )
    
    
    
}
export default OurWorks