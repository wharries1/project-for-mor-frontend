import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";
import "./home-styles/Carousel.styles.css";
// imports all images from assets folder
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Carousel
      color="rgb(0, 0, 0, 0.8)"
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40, background: "rgb(0, 0, 0, 0.2)"}} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40, background: "rgb(0, 0, 0, 0.2)" }} />
        </IconButton>
      )}
    >
      {Object.values(heroTextureImports).map((texture, index) => (
        <div className="sliderImages" key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "800px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
              backgroundColor: "black",
            }}
          />
          <div>
            <div className="overlay">
              <Box className="overlay-content"
                width={isNonMobile ? "40%" : "100%"}
                left={isNonMobile ? "auto" : "0"}
                right={isNonMobile ? undefined : "0"}
                margin={isNonMobile ? undefined : "0 auto"}
                maxWidth={isNonMobile ? undefined : "400px"}
                fontSize={isNonMobile ? undefined : "10rem"}
              >
                <Typography variant="h2">Protect - Respect - Enjoy</Typography>
                <Typography>Handmade goods, designed and made in Pembrokeshire, West-Wales.  Inspired by and with love and respect for our magnificent coastline and all that inhabit it.</Typography>
              </Box>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
