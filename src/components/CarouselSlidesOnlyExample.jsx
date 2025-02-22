import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import Banner from "../assets/BannerMes.png";
import Banner2 from "../assets/BannerPet.jpg";
import Banner3 from "../assets/BannerPistache.png";

export const CarouselSlidesOnlyExample = () => {
  return (
    <CCarousel interval={3000}>
      <CCarouselItem>
        <CImage
          className="d-block w-100"
          src={Banner}
          style={{ height: "500px" }} // Definindo altura com estilo inline
          alt="slide 1"
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className="d-block w-100"
          src={Banner2}
          style={{ height: "500px" }}
          alt="slide 1"
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className="d-block w-100"
          src={Banner3}
          style={{ height: "500px" }}
          alt="slide 1"
        />
      </CCarouselItem>
    </CCarousel>
  );
};
