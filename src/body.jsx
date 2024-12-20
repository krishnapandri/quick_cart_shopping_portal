import React from 'react';
import FeatureHighlights from './FeatureHighlights.jsx';
import { Category } from './newCategoryComp';
import Carousel from 'react-bootstrap/Carousel';
import {Banner} from './banner.jsx'  
import BlackFridayBanner from './BlackFridayComponent/BlackFridayBanner.jsx';
import ProductCard from './ProductCardComponent/ProductCardComponent.jsx';
import { RectBanner } from './RectangleBanner/RectBanner.jsx';
import CategoryList from './CategoryList/CategoryList.jsx';
import LogoCarousel from './LogoCarousel/LogoCarousel.jsx';
import SelectedProducts from './ProductTabs/SelectedProducts.jsx';
import FooterComponent from './FooterComponent/FooterComponent.jsx';

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

            <div style={{display:'flex',overflow:'hidden',justifyContent:'space-between',width: '95%',margin: '0 auto',height:'max-content',padding:'20px 0px',paddingTop:'0px'}}>
                <div style={{width:'70%'}}>
                    <Carousel>{/* interval={3*1000} */}
                    <Carousel.Item>
                        <img style={{width:'100%'}} height={500} 
                        src="https://template.getbazaar.io/assets/images/banners/banner-15.jpg" alt="" />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{width:'100%'}} height={500} 
                        src="https://template.getbazaar.io/assets/images/banners/banner-25.jpg" alt="" />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <img style={{width:'100%'}} height={500} 
                        src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75" alt="" />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                    </Carousel>
                </div>

                <div style={{width:'30%'}} className="banner text-center">
                    <Banner sx={{'marginBottom':'10px',paddingLeft:'2.9px'}} firstText={'NEW ARRIVALS'} secondText={'SUMMER SALE 20% OFF'} bgImg={'https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-17.jpg&w=384&q=75'} ></Banner>
                    <Banner sx={{paddingLeft:'2.9px'}} firstText={'GAMING 4K'} secondText={'DESKTOPS & LAPTOPS'} bgImg={'https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-16.jpg&w=384&q=75'} />
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

            <div className='w-95 mx-auto d-flex'>
                <div className='w-30'>
                    <div className="w-100 rounded h-100 text-left">
                        <CategoryList/>
                    </div>
                </div>
                <div className="w-70 d-flex justify-content-between">
                    {[<ProductCard individualWidth={24}/>,<ProductCard individualWidth={24}/>,<ProductCard individualWidth={24}/>,<ProductCard individualWidth={24}/>]}
                </div>
            </div>

            <div className="w-95 d-flex mx-auto justify-content-between mt-4" style={{height:'180px',marginBottom:'30px'}} >
                <div className='w-45 overflow-hidden position-relative' style={{borderRadius:'15px'}} >
                    <div className='position-absolute'style={{top:'37px',left:'30px'}}>
                        <h5 className='m-0'>Final Reduction</h5>
                        <h2 className='m-0'>Sale up to 20% Off</h2>
                        <div className='bg-dark separatorOne'></div>
                        <h5 className='m-0'>Only From $270.00</h5>
                    </div>
                    <img style={{'width':'100%',height:'100%'}} src={'https://template.getbazaar.io/assets/images/banners/banner-21.jpg'}/>
                </div>
                <div className='w-45 overflow-hidden position-relative' style={{borderRadius:'15px'}} >
                <div className='position-absolute text-white' style={{top:'37px',left:'30px'}}>
                        <h5 className='m-0' >Weekend Sale</h5>
                        <h2 className='m-0' >Fine Smart Speaker</h2>
                        <div className='bg-white separatorOne'></div>
                        <h5 className='m-0' >Starting at $185.00</h5>
                    </div>
                    <img style={{'width':'100%',height:'100%'}} src={'https://template.getbazaar.io/assets/images/banners/banner-22.jpg'}/>
                </div>
            </div>


        <div className='my-5'>
            <div className='my-2 w-95 mx-auto'>
                <div>
                    <h2>Featured Brands</h2>
                </div>
            </div>

            <div className='w-95 mx-auto'>
                <LogoCarousel />
            </div>
        </div>

            <div className='w-95 mx-auto d-flex'>
                <div className='w-30'>
                    <div className="w-100 rounded h-100 text-left">
                        <CategoryList title="Men's Fashion" />
                    </div>
                </div>
                <div className="w-70 d-flex justify-content-between">
                    {[<ProductCard individualWidth={24}/>,<ProductCard individualWidth={24}/>,<ProductCard individualWidth={24}/>,<ProductCard individualWidth={24}/>]}
                </div>
            </div>


            <div className='mb-5'>
                <SelectedProducts/>
            </div>

        <div>
            <FooterComponent/>
        </div>

        </>

    )
}






