
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselPic1 from '../../images/hydrefs/DundrumCo-Ord 03.JPG';
import CarouselPic2 from '../../images/hydrefs/Picture1.jpg';
import CarouselPic3 from '../../images/hydrefs/Resim1.png';
import CarouselPic4 from '../../images/hydrefs/Resim10.jpg';
import CarouselPic5 from '../../images/hydrefs/Resim2.jpg';
import CarouselPic6 from '../../images/hydrefs/Resim3.jpg';
import CarouselPic7 from '../../images/hydrefs/Resim4.jpg';
import CarouselPic8 from '../../images/hydrefs/Resim5.png';
import CarouselPic9 from '../../images/hydrefs/Resim6.png';
import CarouselPic10 from '../../images/hydrefs/Resim7.jpg';
import CarouselPic11 from '../../images/hydrefs/Resim8.jpg';
import CarouselPic12 from '../../images/hydrefs/Resim9.jpg';
import CarouselPic13 from '../../images/hydrefs/T20170508_094652.jpg';
import CarouselPic14 from '../../images/hydrefs/T20170508_095248.jpg';
import CarouselPic15 from '../../images/hydrefs/T20170508_095310.jpg';
import CarouselPic16 from '../../images/hydrefs/TDSCN0805.JPG';
 
        

export default class HydrefsCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true} infiniteLoop={true} verticalSwipe={"natural"}>
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
 
                <div>
                    <img src={CarouselPic4}/>
                    <p className="legend">Legend</p>
                </div>
 
                <div>
                    <img src={CarouselPic5}/>
                    <p className="legend">Legend</p>
                </div>
 
                <div>
                    <img src={CarouselPic6}/>
                    <p className="legend">Legend</p>
                </div>
 
                <div>
                    <img src={CarouselPic7}/>
                    <p className="legend">Legend</p>
                </div>
 
                <div>
                    <img src={CarouselPic8}/>
                    <p className="legend">Legend</p>
                </div>
 
                <div>
                    <img src={CarouselPic9}/>
                    <p className="legend">Legend</p>
                </div>
 
                <div>
                    <img src={CarouselPic10}/>
                    <p className="legend">Legend</p>
                </div>
 
                <div>
                    <img src={CarouselPic11}/>
                    <p className="legend">Legend</p>
                </div>
 
                <div>
                    <img src={CarouselPic12}/>
                    <p className="legend">Legend</p>
                </div>
 
                <div>
                    <img src={CarouselPic13}/>
                    <p className="legend">Legend</p>
                </div>
 
                <div>
                    <img src={CarouselPic14}/>
                    <p className="legend">Legend</p>
                </div>
 
                <div>
                    <img src={CarouselPic15}/>
                    <p className="legend">Legend</p>
                </div>
 
                <div>
                    <img src={CarouselPic16}/>
                    <p className="legend">Legend</p>
                </div>
 
            </Carousel>
        );
    }
};