import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import slide1 from '../img/carousel/slide1.jpg'
import slide2 from '../img/carousel/slide2.jpg'
import slide3 from '../img/carousel/slide3.jpg'

const imgStyle = {
    width: "100%",

}

const slideImages = [
    {
        url: slide1,
        caption: 'Slide 1'
    },
    {
        url: slide2,
        caption: 'Slide 2'
    },
    {
        url: slide3,
        caption: 'Slide 3'
    },
];

const HomeSlideshow = () => {
    return (
        <div className="slide-container" style={{width: '40%', minWidth: '350px', margin:"0 auto"}}>
            <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div key={index}>
                        <img style={imgStyle} src={slideImage.url}/>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default HomeSlideshow;