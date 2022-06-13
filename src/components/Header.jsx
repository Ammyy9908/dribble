import React from "react";
import BlogIcon from "../Icons/BlogIcon";
import CalenderIcon from "../Icons/CalenderIcon";
import GridIcon from "../Icons/GridIcon";
import HeartIcon from "../Icons/HeartIcon";
import LeftArrow from "../Icons/LeftArrow";
import MenuIcon from "../Icons/MenuIcon";
import PlayOffIcon from "../Icons/PlayOffIcon";
import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <div
        className={`${styles.header__wrapper} flex items-center justify-between`}
      >
        <button className={styles.menu_btn}>
          <MenuIcon />
        </button>
        <div className={`${styles.header__left}items-center gap-10 flex`}>
          <a href="#brand" className={styles.brand_logo}>
            <img src="/assets/logo_desktop.png" alt="" />
          </a>
          <ul className={`${styles.nav_list}  items-center gap-5`}>
            <li className={styles.inspiration_link}>
              <a
                href="#"
                className={`text-gray-600 font-semibold hover:text-gray-900 text-md`}
              >
                Inspiration
              </a>
              <div className={styles.nav_dropdown}>
                <div className={styles.inspiration_types}>
                  <ul
                    className={`${styles.inpiration_type_list} flex flex-col gap-5`}
                  >
                    <div className={styles.inspiration}>
                      <li
                        className={`${styles.inspiration_item} ${styles.purple}`}
                      >
                        <a href="#">
                          <div className={styles.inspiration_icon}>
                            <GridIcon />
                          </div>
                          <div className={styles.inspiration_type_text}>
                            <div className={styles.inspiration_title}>
                              Explore Design Work
                            </div>
                            <p className="text-xs text-gray-500">
                              Trending design to inspire you
                            </p>
                          </div>
                          <div className={styles.inspiration_visit_button}>
                            <LeftArrow />
                          </div>
                        </a>
                      </li>
                      <li
                        className={`${styles.inspiration_item} ${styles.red}`}
                      >
                        <a href="#">
                          <div className={styles.inspiration_icon}>
                            <HeartIcon />
                          </div>
                          <div className={styles.inspiration_type_text}>
                            <div className={styles.inspiration_title}>
                              New &amp; Noteworthy
                            </div>
                            <p className="text-xs text-gray-500">
                              Up-and-coming designers
                            </p>
                          </div>
                          <div className={styles.inspiration_visit_button}>
                            <LeftArrow />
                          </div>
                        </a>
                      </li>
                      <li
                        className={`${styles.inspiration_item} ${styles.green}`}
                      >
                        <a href="#">
                          <div className={styles.inspiration_icon}>
                            <PlayOffIcon />
                          </div>
                          <div className={styles.inspiration_type_text}>
                            <div className={styles.inspiration_title}>
                              Playoff
                            </div>
                            <p className="text-xs text-gray-500">
                              Work designers are rifting on
                            </p>
                          </div>
                          <div className={styles.inspiration_visit_button}>
                            <LeftArrow />
                          </div>
                        </a>
                      </li>
                      <li
                        className={`${styles.inspiration_item} ${styles.yellow}`}
                      >
                        <a href="#">
                          <div className={styles.inspiration_icon}>
                            <BlogIcon />
                          </div>
                          <div className={styles.inspiration_type_text}>
                            <div className={styles.inspiration_title}>Blog</div>
                            <p className="text-xs text-gray-500">
                              Interviews,tutorials and more
                            </p>
                          </div>
                          <div className={styles.inspiration_visit_button}>
                            <LeftArrow />
                          </div>
                        </a>
                      </li>
                      <li
                        className={`${styles.inspiration_item} ${styles.purple}`}
                      >
                        <a href="">
                          <div className={styles.inspiration_icon}>
                            <CalenderIcon />
                          </div>
                          <div className={styles.inspiration_type_text}>
                            <div className={styles.inspiration_title}>
                              Weekly Warm-up
                            </div>
                            <p className="text-xs text-gray-500">
                              Prompt to flex your design skills
                            </p>
                          </div>
                          <div className={styles.inspiration_visit_button}>
                            <LeftArrow />
                          </div>
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
                <div className={styles.browse_categories}>
                  <ul className={styles.category_list}>
                    <p>Browse Categories</p>
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
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 font-semibold hover:text-gray-900 text-md"
              >
                Find Work
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 font-semibold hover:text-gray-900 text-md"
              >
                Learn Design
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 font-semibold hover:text-gray-900 text-md"
              >
                Go Pro
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 font-semibold hover:text-gray-900 text-md"
              >
                Hire Designers
              </a>
            </li>
          </ul>
        </div>
        <div className={`${styles.header__right}  items-center gap-5`}>
          <div
            className={`${styles.search_box} flex items-center gap-2`}
            tabIndex={1}
          >
            <div className="search_icon">
              <img src="/assets/search.svg" alt="searc-icon" />
            </div>
            <input
              type="text"
              name="keyword"
              id="keyword"
              placeholder="Search"
              autoFocus
            />
          </div>
          <div className="nav_buttons flex items-center gap-5">
            <a href="#">
              <img src="/assets/work.svg" alt="work-icon" />
            </a>
            <a href="#">
              <img src="/assets/message.svg" alt="heart-icon" />
            </a>
            <a href="#">
              <img src="/assets/activity.svg" alt="activity-icon" />
            </a>
          </div>
          <a href="#">
            <img src="/assets/avatar.png" alt="avatar-icon" />
          </a>
          <a href="#upload" className={styles.upload_btn}>
            Upload
          </a>
        </div>
        <a href="#login" className={styles.mobile_login_btn}>
          Login
        </a>
      </div>
    </header>
  );
}

export default Header;
