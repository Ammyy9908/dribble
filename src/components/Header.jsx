/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BlogIcon from "../Icons/BlogIcon";
import CalenderIcon from "../Icons/CalenderIcon";
import CupIcon from "../Icons/CupIcon";
import GridIcon from "../Icons/GridIcon";
import HeartIcon from "../Icons/HeartIcon";
import JobBoardIcon from "../Icons/JobBoardIcon";
import LeftArrow from "../Icons/LeftArrow";
import MailIcon from "../Icons/MailIcon";
import MenuCloseIcon from "../Icons/MenuCloseIcon";
import MenuIcon from "../Icons/MenuIcon";
import PlayOffIcon from "../Icons/PlayOffIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import SearchIcon from "../Icons/SearchIcon";
import TickIcon from "../Icons/TickIcon";
import styles from "./Header.module.css";
function Header({ setMenu, menu, user, setToast, work, setWork }) {
  return (
    <header className={styles.header}>
      <div
        className={`${styles.header__wrapper} flex items-center justify-between`}
      >
        <button className={styles.menu_btn} onClick={() => setMenu(!menu)}>
          {menu ? <MenuCloseIcon /> : <MenuIcon />}
        </button>
        <div className={`${styles.header__left}items-center gap-10 flex`}>
          <Link to="/" className={styles.brand_logo}>
            <img src="/assets/logo_desktop.png" alt="" />
          </Link>
          <ul className={`${styles.nav_list}  items-center gap-5`}>
            <li className={styles.inspiration__link}>
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
                        className={`${styles.dropdown_item} ${styles.purple}`}
                      >
                        <a href="#">
                          <div className={styles.dropdown_icon}>
                            <GridIcon />
                          </div>
                          <div className={styles.dropdown_type_text}>
                            <div className={styles.dropdown_title}>
                              Explore Design Work
                            </div>
                            <p className="text-xs text-gray-500">
                              Trending design to inspire you
                            </p>
                          </div>
                          <div className={styles.visit_button}>
                            <LeftArrow />
                          </div>
                        </a>
                      </li>
                      <li className={`${styles.dropdown_item} ${styles.red}`}>
                        <a href="#">
                          <div className={styles.dropdown_icon}>
                            <HeartIcon />
                          </div>
                          <div className={styles.dropdown_type_text}>
                            <div className={styles.dropdown_title}>
                              New &amp; Noteworthy
                            </div>
                            <p className="text-xs text-gray-500">
                              Up-and-coming designers
                            </p>
                          </div>
                          <div className={styles.visit_button}>
                            <LeftArrow />
                          </div>
                        </a>
                      </li>
                      <li className={`${styles.dropdown_item} ${styles.green}`}>
                        <a href="#">
                          <div className={styles.dropdown_icon}>
                            <PlayOffIcon />
                          </div>
                          <div className={styles.dropdown_type_text}>
                            <div className={styles.dropdown_title}>Playoff</div>
                            <p className="text-xs text-gray-500">
                              Work designers are rifting on
                            </p>
                          </div>
                          <div className={styles.visit_button}>
                            <LeftArrow />
                          </div>
                        </a>
                      </li>
                      <li
                        className={`${styles.dropdown_item} ${styles.yellow}`}
                      >
                        <a href="#">
                          <div className={styles.dropdown_icon}>
                            <BlogIcon />
                          </div>
                          <div className={styles.dropdown_type_text}>
                            <div className={styles.dropdown_title}>Blog</div>
                            <p className="text-xs text-gray-500">
                              Interviews,tutorials and more
                            </p>
                          </div>
                          <div className={styles.visit_button}>
                            <LeftArrow />
                          </div>
                        </a>
                      </li>
                      <li
                        className={`${styles.dropdown_item} ${styles.purple}`}
                      >
                        <a href="">
                          <div className={styles.dropdown_icon}>
                            <CalenderIcon />
                          </div>
                          <div className={styles.dropdown_type_text}>
                            <div className={styles.dropdown_title}>
                              Weekly Warm-up
                            </div>
                            <p className="text-xs text-gray-500">
                              Prompt to flex your design skills
                            </p>
                          </div>
                          <div className={styles.visit_button}>
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
            <li className={styles.work__link}>
              <a
                href="#"
                className="text-gray-600 font-semibold hover:text-gray-900 text-md"
              >
                Find Work
              </a>

              <div className={styles.work__dropdown}>
                <ul className={styles.work_dropdown__list}>
                  <div className={styles.work_list_wrapper}>
                    <li className={`${styles.dropdown_item} ${styles.purple}`}>
                      <a href="#">
                        <div className={styles.dropdown_icon}>
                          <JobBoardIcon />
                        </div>
                        <div className={styles.dropdown_type_text}>
                          <div className={styles.dropdown_title}>Job Board</div>
                          <p className="dropdown_item_subtitle text-xs text-gray-500">
                            Find your dream design job
                          </p>
                        </div>
                        <div className={styles.visit_button}>
                          <LeftArrow />
                        </div>
                      </a>
                    </li>
                    <li className={`${styles.dropdown_item} ${styles.red}`}>
                      <a href="#">
                        <div className={styles.dropdown_icon}>
                          <CupIcon />
                        </div>
                        <div className={styles.dropdown_type_text}>
                          <div className={styles.dropdown_title}>
                            Freelance Projects
                          </div>
                          <p className="dropdown_item_subtitle text-xs text-gray-500">
                            An exclusive list for contract work
                          </p>
                        </div>
                        <div className={styles.visit_button}>
                          <LeftArrow />
                        </div>
                      </a>
                    </li>
                    <li>
                      <hr />
                    </li>
                    <li className={`${styles.dropdown_item} ${styles.green}`}>
                      <a href="#">
                        <div className={styles.dropdown_icon}>
                          <MailIcon />
                        </div>
                        <div className={styles.dropdown_type_text}>
                          <div className={styles.dropdown_title}>
                            Want freelance design projects?
                          </div>
                          <p className="dropdown_item_subtitle text-xs text-gray-500">
                            Get new leads in your inbox every day
                          </p>
                        </div>
                        <div className={styles.visit_button}>
                          <LeftArrow />
                        </div>
                      </a>
                    </li>
                    <li className={`${styles.dropdown_item} ${styles.yellow}`}>
                      <a href="#">
                        <div className={styles.dropdown_icon}>
                          <ProfileIcon />
                        </div>
                        <div className={styles.dropdown_type_text}>
                          <div className={styles.dropdown_title}>
                            Personalize your profile with video
                          </div>
                          <p className="dropdown_item_subtitle text-xs text-gray-500">
                            Introduce yourself to new clients with Pitch
                          </p>
                        </div>
                        <div className={styles.visit_button}>
                          <LeftArrow />
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
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
        {user ? (
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
              <button className={styles.work_button}>
                <img src="/assets/work.svg" alt="work-icon" />
                {work && (
                  <div className={styles.work__status}>
                    <TickIcon />
                  </div>
                )}
                <div className={styles.work__pref_dropdown}>
                  <div className={styles.work_avalability_toogle}>
                    <span className={styles.pre_toggle_text}>
                      Not available
                    </span>
                    <label className={styles.toggle}>
                      <input
                        type="checkbox"
                        value={true}
                        onChange={() => {
                          setWork(!work);
                          setToast(true);
                        }}
                      />
                      <div className={styles.toggle_control}></div>
                    </label>
                    <span className="toggle_text">Available for work</span>
                  </div>
                  <hr />

                  <ul className={styles.work_preferences_list}>
                    <li>
                      <a href="#">Edit work preferences</a>
                    </li>
                    <li>
                      <a href="#">Add Video Presentation</a>
                    </li>
                  </ul>
                </div>
              </button>
            </div>
            <a href="#">
              <img
                src={user.picture}
                alt="avatar-icon"
                className={styles.user__avatar}
              />
            </a>
            <a href="#upload" className={styles.upload_btn}>
              Upload
            </a>
          </div>
        ) : (
          <div className={`${styles.non_auth_nav} flex gap-2 items-center`}>
            <div className={`${styles.non_auth_item} mr-5`}>
              <Link to="/search">
                <SearchIcon />
              </Link>
            </div>
            <div className={`${styles.non_auth_item} mr-5`}>
              <Link to="/session/new">Sign in</Link>
            </div>
            <div className={styles.non_auth_item}>
              <Link to="/signup/new" className={styles.signup_btn}>
                Share my work
              </Link>
            </div>
          </div>
        )}
        <div className={styles.mobile_right_nav}>
          {!user ? (
            <Link to="/session/new" className={styles.mobile_login_btn}>
              Login
            </Link>
          ) : (
            <button className={styles.work_button}>
              <img src="/assets/work.svg" alt="work-icon" />
              {work && (
                <div className={styles.work__status}>
                  <TickIcon />
                </div>
              )}
              <div className={styles.work__pref_dropdown}>
                <div className={styles.work_avalability_toogle}>
                  <span className={styles.pre_toggle_text}>Not available</span>
                  <label className={styles.toggle}>
                    <input
                      type="checkbox"
                      value={true}
                      onChange={() => {
                        setWork(!work);
                        setToast(true);
                      }}
                    />
                    <div className={styles.toggle_control}></div>
                  </label>
                  <span className="toggle_text">Available for work</span>
                </div>
                <hr />

                <ul className={styles.work_preferences_list}>
                  <li>
                    <a href="#">Edit work preferences</a>
                  </li>
                  <li>
                    <a href="#">Add Video Presentation</a>
                  </li>
                </ul>
              </div>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  user: state.appReducer.user,
});

export default connect(mapStateToProps, null)(Header);
