import "./home-styles/About.styles.css";
import Post from "./Post";
import video1 from "./images/printing.mp4";
import video2 from "./images/printing2.mp4";
import video3 from "./images/beach-clean.mp4";
import Map from "../../components/Map";
const About = () => {
  return (
    <div className="container ws-page-container2">
      <div className="row">
        <div className="ws-about-content col-sm-12">
          <Post />

          <div className="row text-center">
            <div className="ws-about">
              <div
                className="col-sm-6 ws-about-item"
                data-sr="wait 0.1s, ease-in 20px"
              >
                <img
                  src={require("./images/jeff.jpeg")}
                  alt="Alternative Text"
                ></img>
                <div className="caption">
                  <h3>Jeff Ruiz</h3>
                  <div className="ws-separator"></div>
                  <p>
                    Life began in Barcelona, to a mixed culture couple. Growing
                    up with an amalgamation of Peruvian and Irish heritage fused
                    with the Spanish way of life. My youth was spent doodling
                    and searching for a little adreneline boost. The practical
                    art of sculpture helped towards reducing the anxious fuelled
                    daydreams that distracted me from the realities of life. Tt
                    was only in my late teens that I found the grounding effects
                    of nature.
                  </p>
                </div>
              </div>

              <div
                className="col-sm-6 ws-about-item"
                data-sr="wait 0.3s, ease-in 20px"
              >
                <img
                  src={require("./images/emily-etching.jpg")}
                  alt="Alternative Text"
                ></img>
                <div className="caption">
                  <h3>Emily Ruiz-Harries</h3>
                  <div className="ws-separator"></div>
                  <p>
                    The ocean has an incredible hold on me. It always has. I
                    grew up on or in the water. Endless summer days spent
                    messing around in boats exploring the coast, finding
                    secluded bays and searching for washed up treasures. Oh the
                    treasures we found! Gnarled pieces of tree, fishing buoys
                    and rope that had come adrift and wicker fenders washed in
                    from some distant land. We felt so special returning home
                    after a long day collecting showing anyone and everyone our
                    wares. Things we didnt know we wanted but now couldnt live
                    without. I was around 8 years old at this time. Plastic was
                    not a common sight in these secluded coves then. But now, 24
                    years on my heart bleeds for what my eyes behold. Seeing
                    this change in my lifetime utterly terrifies and saddens me
                    to my core. Something that gave me such immense joy is now
                    tainted by the destruction that man has created and it
                    horrifies me that the next generation will not know our
                    coastline as I did. I must do something.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="padding-top-x70"></div>

          <div className="row vertical-align">
            <div className="col-sm-9" data-sr="wait 0.1s, ease-in 20px">
              <div className="caption">
                <h3>The Process</h3>
              </div>
              <div className="ws-footer-separator"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam
              </p>
              <div className="video-container">
                <video controls="controls" id="video">
                  <source src={video1} type="video/mp4" />
                </video>
                <video controls="controls" id="video">
                  <source src={video2} type="video/mp4" />
                </video>
              </div>
              <p>
                Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat
              </p>

              <p>
                Vel illum dolore eu feugiat nulla facilisis at vero eros et
                accumsan et iusto odio dignissim qui blandit praesent luptatum
                zzril delenit augue duis dolore te feugait nulla facilisi. Nam
                liber tempor.
              </p>

              <Map />
            </div>

            <div className="col-sm-3"></div>
          </div>
          <div className="row vertical-align">
            <div className="col-sm-9" data-sr="wait 0.1s, ease-in 20px">
              <div className="caption">
                <h3>Keeping our oceans clean</h3>
              </div>
              <div className="ws-footer-separator"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam
              </p>

              <p>
                Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat
              </p>

              <p>
                Vel illum dolore eu feugiat nulla facilisis at vero eros et
                accumsan et iusto odio dignissim qui blandit praesent luptatum
                zzril delenit augue duis dolore te feugait nulla facilisi. Nam
                liber tempor.
              </p>
            </div>
          </div>
          <p>
            Vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
            et iusto odio dignissim qui blandit praesent luptatum zzril delenit
            augue duis dolore te feugait nulla facilisi. Nam liber tempor.
          </p>
          <div className="padding-top-x70"></div>

          <div className="row text-center">
            <div className="ws-about">
              <div
                className="col-sm-6 ws-about-item"
                data-sr="wait 0.1s, ease-in 20px"
              >
                <img
                  src={require("./images/beach-clean.jpg")}
                  alt="Alternative Text"
                ></img>
              </div>

              <div className="video-container">
                <video controls="controls" id="video">
                  <source src={video3} type="video/mp4" />
                </video>
              </div>
              <div
                className="col-sm-6 ws-about-item"
                data-sr="wait 0.3s, ease-in 20px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
