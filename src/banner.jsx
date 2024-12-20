import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { AnimatedUnderLineText } from "./AnimatedUnderLineText";
export const Banner =  ({firstText,secondText,bgImg,sx}) => {
    return (
        <>
            <div className="bannerBody" style={{...sx,backgroundImage:`url(${bgImg})`}}>
                <div className="bannerText">
                    <h6>{firstText}</h6>
                    <h4 className="bannerHeading w-60 py-2">{secondText}</h4>
                    {/* <p className="shopNow">Show Now <FontAwesomeIcon icon={faArrowRight} /></p> */}
                    <AnimatedUnderLineText Text="Show Now" ></AnimatedUnderLineText>
                </div>
            </div>
        </>
    )
}