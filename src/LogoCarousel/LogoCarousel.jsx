import React from "react";
import './LogoCarousel.css'; 
 
const logos = [
  { src: "https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Falibaba.png&w=1920&q=75", alt: "Alibaba" },
  { src: "https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Flevis.png&w=1920&q=75", alt: "Levis" },
  { src: "https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Flotto.png&w=1920&q=75", alt: "Lotto" },
  { src: "https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fraymond.png&w=1920&q=75", alt: "Raymond" },
  { src: "https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fsamsung.png&w=1920&q=75", alt: "Samsung" },
  { src: "https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Falibaba.png&w=1920&q=75", alt: "Alibaba" },
  { src: "https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Flevis.png&w=1920&q=75", alt: "Levis" },
  { src: "https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Flotto.png&w=1920&q=75", alt: "Lotto" },
  { src: "https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fraymond.png&w=1920&q=75", alt: "Raymond" },
  { src: "https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fsamsung.png&w=1920&q=75", alt: "Samsung" },
  { src: "https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Falibaba.png&w=1920&q=75", alt: "Alibaba" },
  { src: "https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Flevis.png&w=1920&q=75", alt: "Levis" },
  { src: "https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Flotto.png&w=1920&q=75", alt: "Lotto" },
  { src: "https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fraymond.png&w=1920&q=75", alt: "Raymond" },
  { src: "https://template.getbazaar.io/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fsamsung.png&w=1920&q=75", alt: "Samsung" },
];

const LogoCarousel = () => {
  return (
    <div className="mainContainer">
        <div className="slick-track d-flex justify-content-between align-items-center overflow-auto removeScrollBar">
            {logos.map(x=><div className="brand-item"><img src={x.src} className="innerIMg" alt={x.alt} /></div>)}
        </div>
    </div>
  );
};

export default LogoCarousel;
