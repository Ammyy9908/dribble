import React from "react";
import SearchIcon from "../Icons/SearchIcon";
import "./MobileNav.css";
function MobileNav() {
  return (
    <div className="mobile_nav">
      <nav className="mobile_nav_main">
        <ul>
          <li>
            <form className="mobile_search_form">
              <SearchIcon />
              <input type="text" name="keyword" id="key" placeholder="Search" />
            </form>
          </li>
          <li className="mobile-nav-dropdown-item">
            <input type="checkbox" name="dropdown" id="inspiration" />
            <label htmlFor="inspiration" className="mobile_nav_dropdown_item">
              Inspiration
            </label>
            <ul className="mobile_nav_dropdown_list">
              <div className="mobile_nav_dropdown_list_container">
                <li>
                  <a href="#">Explore Design Work</a>
                </li>
                <li>
                  <a href="#"> New &amp; Noteworthy</a>
                </li>
                <li>
                  <a href="#">Playoffs</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Weekly Warmup</a>
                </li>
              </div>
            </ul>
          </li>
          <li className="mobile-nav-dropdown-item">
            <input type="checkbox" name="dropdown" id="work" />
            <label htmlFor="work" className="mobile_nav_dropdown_item">
              Find Work
            </label>
            <ul className="mobile_nav_dropdown_list">
              <div className="mobile_nav_dropdown_list_container">
                <li>
                  <a href="#">Job Board</a>
                </li>
                <li>
                  <a href="#"> Freelance Projects</a>
                </li>
                <li>
                  <a href="#">Want freelance design projects?</a>
                </li>
                <li>
                  <a href="#">Personalize your profile with video</a>
                </li>
              </div>
            </ul>
          </li>
          <li className="mobile-nav-dropdown-item">
            <input type="checkbox" name="dropdown" id="learn" />
            <label htmlFor="learn" className="mobile_nav_dropdown_item">
              Learn design
            </label>
            <ul className="mobile_nav_dropdown_list">
              <div className="mobile_nav_dropdown_list_container">
                <li>
                  <a href="#">Certified Product Design Course</a>
                </li>
                <li>
                  <a href="#"> Browse our courses &amp; workshops</a>
                </li>
              </div>
            </ul>
          </li>
          <li className="mobile-nav-dropdown-item">
            <input type="checkbox" name="dropdown" id="pro" />
            <label htmlFor="pro" className="mobile_nav_dropdown_item">
              Go Pro
            </label>
            <ul className="mobile_nav_dropdown_list">
              <div className="mobile_nav_dropdown_list_container">
                <li>
                  <a href="#">For Designers</a>
                </li>
                <li>
                  <a href="#">For Freelancers</a>
                </li>
                <li>
                  <a href="#">For Teams</a>
                </li>
              </div>
            </ul>
          </li>
          <li className="mobile-nav-dropdown-item">
            <input type="checkbox" name="dropdown" id="marketplace" />
            <label htmlFor="marketplace" className="mobile_nav_dropdown_item">
              Marketplace
            </label>
            <ul className="mobile_nav_dropdown_list">
              <div className="mobile_nav_dropdown_list_container">
                <li>
                  <a href="#">Discover</a>
                </li>
                <li>
                  <a href="#">Graphics</a>
                </li>
                <li>
                  <a href="#">Fonts</a>
                </li>
                <li>
                  <a href="#">3D</a>
                </li>
                <li>
                  <a href="#">Templates</a>
                </li>
                <li>
                  <a href="#">Add-Ons</a>
                </li>
                <li>
                  <a href="#">Web Themes</a>
                </li>
                <li>
                  <a href="#">Open a Shop</a>
                </li>
              </div>
            </ul>
          </li>
          <li className="mobile-nav-dropdown-item">
            <input type="checkbox" name="dropdown" id="hiring" />
            <label htmlFor="hiring" className="mobile_nav_dropdown_item">
              Hire Designers
            </label>
            <ul className="mobile_nav_dropdown_list">
              <div className="mobile_nav_dropdown_list_container">
                <li>
                  <a href="#">About Dribbble Hiring</a>
                </li>
                <li>
                  <a href="#">Designer Search</a>
                </li>
                <li>
                  <a href="#">List my Job Openings</a>
                </li>
                <li>
                  <a href="#">Post a Freelance Project</a>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileNav;
