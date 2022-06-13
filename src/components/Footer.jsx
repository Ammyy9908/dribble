import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer_top">
        <div className="footer_top_left">
          <div className="footer_top_left_wrapper">
            <a href="#brand">
              <img src="/assets/dribble_pink.png" alt="footer_brand" />
            </a>
            <p>
              Dribbble is the world’s leading community for creatives to share,
              grow, and get hired.
            </p>
            <div className="footer_social_wrappe">
              <ul>
                <li>
                  <a href="#">
                    <img src="/assets/dribble.svg" alt="brand-icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/assets/twitter.svg" alt="twitter-icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/assets/fb.svg" alt="fb-icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/assets/insta.svg" alt="insta-icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/assets/pin.svg" alt="pinterest-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_top_columns">
          <div className="footer-col">
            <div className="footer-col-label">For designers</div>
            <ul>
              <li>
                <a href="#">Go Pro!</a>
              </li>
              <li>
                <a href="#">Explore design work</a>
              </li>
              <li>
                <a href="#">Design blog</a>
              </li>
              <li>
                <a href="#">Overtime podcast</a>
              </li>
              <li>
                <a href="#">Dribble meetup</a>
              </li>
              <li>
                <a href="#">Playoffs</a>
              </li>
              <li>
                <a href="#">Weekly warm-up</a>
              </li>
              <li>
                <a href="#">Code of conduct</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-label">Hire designers</div>
            <ul>
              <li>
                <a href="#">Post a job opening</a>
              </li>
              <li>
                <a href="#">Post a freelance project</a>
              </li>
              <li>
                <a href="#">Search for designers</a>
              </li>
              <li>
                <a href="#">Brands</a>
              </li>
              <li>
                <a href="#">Advertise with us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_divider"></div>
      <div className="footer_bottom"></div>
    </footer>
  );
}

export default Footer;
