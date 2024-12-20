import { AnimatedUnderLineText } from "../AnimatedUnderLineText"
export const RectBanner =  () => {
    return (
        <>
        <div className="d-flex justify-content-between w-95 mx-auto rectbanner">
            <div className="overflow-hidden position-relative" style={{borderRadius:'10px'}}>
                <div style={{position:'absolute',top:'20px',left:'20px'}}>
                    <p className="m-0">NEW ARRIVALS</p>
                    <h4 className="m-0 pt-1">SKI CLOTHES SALE</h4>
                    <p>Up to 35% Off</p>
                    {/* <p>Shop Now <FontAwesomeIcon icon={faArrowRight} /></p> */}
                    <AnimatedUnderLineText Text="Shop Now" />
                </div>
                <img src={'https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-18.jpg&w=384&q=75'} alt="" />
            </div>
            <div className="overflow-hidden position-relative" style={{borderRadius:'10px'}}>
                <div style={{position:'absolute',top:'20px',left:'20px',color:'white'}}>
                    <p className="m-0">NEW ARRIVALS</p>
                    <h4 className="m-0 pt-1">SKI CLOTHES SALE</h4>
                    <p>Up to 35% Off</p>
                    {/* <p>Shop Now <FontAwesomeIcon icon={faArrowRight} /></p> */}
                    <AnimatedUnderLineText Text="Shop Now" Color="white" />
                </div>
                <img src={'https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-19.jpg&w=384&q=75'} alt="" />
            </div>
            <div className="overflow-hidden position-relative" style={{borderRadius:'10px'}}>
                <div style={{position:'absolute',top:'20px',left:'20px'}}>
                    <p className="m-0">NEW ARRIVALS</p>
                    <h4 className="m-0 pt-1">SKI CLOTHES SALE</h4>
                    <p>Up to 35% Off</p>
                    {/* <p>Shop Now <FontAwesomeIcon icon={faArrowRight} /></p> */}
                    <AnimatedUnderLineText Text="Shop Now" />
                </div>
                <img src={'https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-20.jpg&w=384&q=75'} alt="" />
            </div>
        </div>
        </>
    )
}