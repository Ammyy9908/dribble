import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShotCard from "../components/ShotCard";
import "./Home.css";
function Home() {
  const [filterTab, setFilterTab] = React.useState(false);
  return (
    <div>
      <Header />

      <div className="hero_section_background">
        <div className="signed_out_hero">
          <div className="hero_content">
            <h1>Explore the world’s leading design portfolios</h1>
            <h2>
              Millions of designers and agencies around the world showcase their
              portfolio work on Dribbble - the home to the world’s best design
              and creative professionals.
            </h2>
            <a href="#" className="signup_btn">
              Sign up
            </a>
          </div>
          <div className="hero_image__container">
            <div className="hero_image">
              <img
                src="https://cdn.dribbble.com/assets/art-banners/romainbriaux-510w-4f2dbdb739cfcc67d5adede6bcc1095f41ad559af391f762194d1c35c318303a.png"
                alt="dribble_hero_banner"
              />
            </div>
            <div className="credit_container">
              <span>Art by </span>
              <a href="https://dribbble.com/romainbriaux">Romain Briaux</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="subnav">
            <div
              className="feed_filter"
              tabIndex={1}
              onClick={() => {
                setFilterTab(!filterTab);
              }}
              onBlur={() => {
                setFilterTab(false);
              }}
            >
              <p>Following</p>
              <span
                style={{
                  transform: filterTab ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <img src="/assets/down_arrow.svg" alt="arrow_down" />
              </span>

              {filterTab && (
                <div className="btn-dropdown-options">
                  <ul>
                    <li>
                      <a href="#" className="active_filter">
                        Following
                      </a>
                    </li>
                    <li>
                      <a href="#">Popular</a>
                    </li>
                    <li>
                      <a href="#">New &amp; Noteworthy</a>
                    </li>
                    <li className="rule"></li>
                    <li>
                      <a href="#">Marketplace</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <ul className="subnav_items flex">
              <li>
                <a href="#" className="active_tab">
                  All
                </a>
              </li>
              <li>
                <a href="#">Animation</a>
              </li>
              <li>
                <a href="#">Branding</a>
              </li>
              <li>
                <a href="#">Illustration</a>
              </li>
              <li>
                <a href="#">Mobile</a>
              </li>
              <li>
                <a href="#">Print</a>
              </li>
              <li>
                <a href="#">Product Design</a>
              </li>
              <li>
                <a href="#">Typography</a>
              </li>
              <li>
                <a href="#">Web Design</a>
              </li>
            </ul>
            <div className="filters_button">
              <span>
                <img src="/assets/filter.svg" alt="filter-icon" />
              </span>
              <p>Filters</p>
            </div>
          </div>

          <div className="shots">
            <ShotCard
              thumb={"/assets/card1.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card2.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card3.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card4.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card5.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card6.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card7.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card8.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card9.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card10.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card11.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card12.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card13.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card14.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card15.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card16.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card17.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card18.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card19.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card20.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card21.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card22.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card23.png"}
              userImage={"/assets/user1.png"}
            />
            <ShotCard
              thumb={"/assets/card24.png"}
              userImage={"/assets/user1.png"}
            />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;