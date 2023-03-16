import "./home-styles/Sustainability.styles.css";
import { Typography } from "@mui/material";
const Sustainability = () => {
  return (
    <div className="container ws-page-container">
      <div className="row">
        <div className="col-sm-12">
          <div className="ws-contact-offices text-center">
            <div className="row">
              <div className="ws-works-title">
                <div className="col-sm-12">
                  <Typography variant="h2" textAlign="center" padding="20px">
                    <b> sustainability</b>
                  </Typography>
                  <div className="ws-separator"></div>
                </div>
              </div>

              <div
                className="col-sm-6 col-sm-4 ws-contact-office-item"
                data-sr="wait 0.1s, ease-in 20px"
              >
                <div className="thumbnail">
                  <img
                    src={require("./images/cotton.jpg")}
                    alt="Alternative Text"
                  ></img>
                </div>
                <div className="ws-works-caption text-center">
                  <div className="ws-item-category">
                    <h2>Natural Materials</h2>
                  </div>
                  <div className="ws-separator"></div>

                  <h4>
                    We use natural materials, not plastic. And everything we
                    make is designed to be sent back when it is worn out. We
                    make new products from material we recover.
                  </h4>
                </div>
              </div>

              <div
                className="col-sm-6 col-sm-4 ws-contact-office-item"
                data-sr="wait 0.1s, ease-in 20px"
              >
                <div className="thumbnail">
                  <img
                    src={require("./images/renewable-energy.jpg")}
                    alt="Alternative Text"
                  ></img>
                </div>
                <div className="ws-works-caption text-center">
                  <div className="ws-item-category">
                    <h2>Sustainable Resources</h2>
                  </div>
                  <div className="ws-separator"></div>

                  <h4>
                    We make products in real time, in the seconds after they are
                    ordered, so there's no waste. And we use renewable energy to
                    power our factories from the sun and the wind
                  </h4>
                </div>
              </div>

              <div
                className="col-sm-6 col-sm-4 ws-contact-office-item"
                data-sr="wait 0.1s, ease-in 20px"
              >
                <div className="thumbnail">
                  <img
                    src={require("./images/plastic-free-packaging.jpg")}
                    alt="Alternative Text"
                  ></img>
                </div>
                <div className="ws-works-caption text-center">
                  <div className="ws-item-category">
                    <h2>Plastic Free</h2>
                  </div>
                  <div className="ws-separator"></div>

                  <h4>
                    All of our products are printed and shipped from the UK.
                    Every order is sent out in our own design of plastic-free
                    packaging, designed to be coloured in by you
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
