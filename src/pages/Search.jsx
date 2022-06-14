import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileNav from "../components/MobileNav";
import ShotCard from "../components/ShotCard";
import SearchIcon from "../Icons/SearchIcon";
import "./Search.css";
function Search() {
  const [menu, setMenu] = React.useState(false);
  return (
    <div>
      <Header menu={menu} setMenu={setMenu} />
      {menu && <MobileNav />}
      <div className="search_header">
        <div className="search__hero">
          <div className="search__hero_image__box">
            <img
              src="https://cdn.dribbble.com/assets/searches/search-header-800-1f49142870a5c1428edf0f570465ce9114ca4dc76f9d645bcf5c786a18dc697f.png"
              alt="dribble_hero"
            />
          </div>
        </div>
        <div className="search_results">
          <div className="search_input_container">
            <div className="search_input_with_dropdown">
              <div className="search__left">
                <SearchIcon />
                <form action="">
                  <input
                    type="search"
                    name="keyword"
                    placeholder="Search"
                    id="keyword"
                  />
                </form>
              </div>
              <div className="search__divider"></div>
              <span className="search_btn_dropdown">
                <a href="#" className="btn__dropdown_link">
                  <span>Shots</span>
                  <span>
                    {" "}
                    <img src="/assets/down_arrow.svg" alt="arrow_down" />
                  </span>
                </a>
              </span>
            </div>
          </div>
          <ul className="search_suggestions">
            <li className="search_suggestion_heading">Suggested:</li>
            <li className="search-result-suggestion">
              <a href="#">landing page</a>
            </li>
            <li className="search-result-suggestion">
              <a href="#">ios</a>
            </li>
            <li className="search-result-suggestion">
              <a href="#">food</a>
            </li>
            <li className="search-result-suggestion">
              <a href="#">landingpage</a>
            </li>
            <li className="search-result-suggestion">
              <a href="#">uxdesign</a>
            </li>
            <li className="search-result-suggestion">
              <a href="#">app design</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
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
      <Footer />
    </div>
  );
}

export default Search;
