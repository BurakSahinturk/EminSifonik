
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselPic1 from 'a/a/26fb8829-40d1-41c3-ba1b-44b8e416de66.JPG';
import CarouselPic2 from 'a/a/640px-istanbul_Yeni_Havalimani_airport_Dec_2019.jpg';
import CarouselPic3 from 'a/a/aa6b9319-4988-42a4-b240-68c827258752.JPG';
 
        

export default istclass ACarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={CarouselPic1}/>
                    <p className="legend">Legend</p>
                </div>
 
                <div>
                    <img src={CarouselPic2}/>
                    <p className="legend">Legend</p>
                </div>
 
                <div>
                    <img src={CarouselPic3}/>
                    <p className="legend">Legend</p>
                </div>
 
            </Carousel>
        );
    }
};import CarouselPic1 from '../images/a/26fb8829-40d1-41c3-ba1b-44b8e416de66.JPG';
import CarouselPic2 from '../images/a/640px-istanbul_Yeni_Havalimani_airport_Dec_2019.jpg';
import CarouselPic3 from '../images/a/aa6b9319-4988-42a4-b240-68c827258752.JPG';
