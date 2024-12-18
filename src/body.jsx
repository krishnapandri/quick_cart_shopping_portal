import React from 'react';
import FeatureHighlights from './FeatureHighlights.jsx';
import { Category } from './newCategoryComp';
import Carousel from 'react-bootstrap/Carousel';
import {Banner} from './banner.jsx'  
import BlackFridayBanner from './BlackFridayComponent/BlackFridayBanner.jsx';
import ProductCard from './ProductCardComponent/ProductCardComponent.jsx';
import { RectBanner } from './RectangleBanner/RectBanner.jsx';

export function Body(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className='w-95 mx-auto py-2'>
                <Category/>
            </div>

            <div style={{display:'flex',overflow:'hidden',justifyContent:'space-between',width: '95%',margin: '0 auto',height:'max-content',padding:'20px 0px'}}>
                <div style={{width:'70%'}}>
                    <Carousel>{/* interval={3*1000} */}
                    <Carousel.Item>
                        <img style={{width:'100%'}} height={500} 
                        src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75" alt="" />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{width:'100%'}} height={500} 
                        src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75" alt="" />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{width:'100%'}} height={500} 
                        src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75" alt="" />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </div>

                <div style={{width:'30%'}} className="banner text-center">
                    <Banner sx={{'marginBottom':'10px'}} firstText={'NEW ARRIVALS'} secondText={'SUMMER SALE 20% OFF'} bgImg={''} ></Banner>
                    <Banner firstText={'GAMING 4K'} secondText={'DESKTOPS & LAPTOPS'} />
                </div>
            </div>
            
            <div>
                <FeatureHighlights/>
            </div>
            
            <div>
                <BlackFridayBanner/>
            </div>

            <div className='text-left w-95  mx-auto my-3'>
                <h2 className='m-0' style={{'fontWeight':'400'}}>Deals Of The Day</h2>
            </div>

            <div className='d-flex justify-content-around mb-3 w-95 flex-wrap mx-auto'>
                {[<ProductCard individualWidth={19} />,<ProductCard individualWidth={19}/>,<ProductCard individualWidth={19}/>,<ProductCard individualWidth={19}/>,<ProductCard individualWidth={19}/>]}
            </div>
            
            <div style={{margin:'38px 0px'}} >
                <RectBanner/>
            </div>   

            <div className='w-95 mx-auto'>
                <div className='w-30'>
                    <div className="w-100 rounded bg-dark"></div>
                </div>
                <div className="w-70 d-flex justify-content-between">
                    {[<ProductCard individualWidth={24}/>,<ProductCard individualWidth={24}/>,<ProductCard individualWidth={24}/>,<ProductCard individualWidth={24}/>]}
                </div>
            </div>

        </>

    )
}






