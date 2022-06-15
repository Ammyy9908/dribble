/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
function FooterColumn({ label, links }) {
  return (
    <div className="footer-col">
      <div className="font-bold mb-5 footer-col-label">{label}</div>
      <ul>
        {links.map((link, i) => {
          return (
            <li key={i} className="my-3">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const footer_links = [
  [
    {
      name: "Go Pro",
      link: "#",
    },
    {
      name: "Explore design works",
      link: "#",
    },
    {
      name: "Design blog",
      link: "#",
    },
    {
      name: "Overtime podcasts",
      link: "#",
    },
    {
      name: "Dribble meetups",
      link: "#",
    },
    {
      name: "Playoffs",
      link: "#",
    },
    {
      name: "Weekly Warm-up",
      link: "#",
    },
    {
      name: "Code of conduct",
      link: "#",
    },
  ],
  [
    {
      name: "Post a job opening",
      link: "#",
    },
    {
      name: "Post a Job Opening",
      link: "#",
    },
    {
      name: "Post a freelance project",
      link: "#",
    },
    {
      name: "Search for designers",
      link: "#",
    },
    {
      name: "Brands",
      link: "#",
    },
    {
      name: "Advertise with us",
      link: "#",
    },
  ],
];
function Footer() {
  return (
    <footer>
      <div className="footer_top">
        <div className="footer_top_left">
          <div className="footer_top_left_wrapper">
            <a href="#brand">
              <img src="/assets/dribble_pink.png" alt="footer_brand" />
            </a>
            <p className="mt-10 mb-10 text-sm">
              Dribbble is the world’s leading community for creatives to share,
              grow, and get hired.
            </p>
            <div className="footer_social_wrapper">
              <ul className="flex gap-2 items-center">
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
          <FooterColumn links={footer_links[0]} label="For designers" />
          <FooterColumn links={footer_links[1]} label="Hire designers" />
          <FooterColumn links={footer_links[1]} label="Hire designers" />
          <FooterColumn links={footer_links[1]} label="Hire designers" />
          <FooterColumn links={footer_links[1]} label="Hire designers" />
        </div>
      </div>
      <div className="footer_divider"></div>
      <div className="footer_bottom">
        <p className="footer_bottom_copyright text-center">
          © 2021 Dribbble. All rights reserved.
        </p>
        <div className="footer_bottom_right flex items-center gap-5">
          <span>
            <strong>15,240,042</strong>
          </span>
          <span>shots dribbbled</span>
          <span>
            <img src="/assets/dribble_ball_pink.png" alt="" />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
