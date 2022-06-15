/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PalleteIcon from "../Icons/PalleteIcon";
import SearchIcon from "../Icons/SearchIcon";

function Filters() {
  return (
    <div className="shots__filters">
      <form action="" className="shots_filter_form">
        <fieldset className="find-shot-tags">
          <a href="#clear">Clear</a>
          <label htmlFor="tags">Tags</label>
          <div className="input__container">
            <input type="search" name="tags" id="tags" autoComplete="off" />
            <SearchIcon />
          </div>
        </fieldset>

        <fieldset className="find-shot-colors">
          <a href="#clear">Clear</a>
          <label>Color</label>
          <div className="input__container">
            <input type="search" name="colors" id="colors" autoComplete="off" />
            <PalleteIcon />
          </div>
        </fieldset>

        <fieldset className="find-shot-time">
          <a href="#clear">Clear</a>
          <label>Timeframe</label>
          <span className="btn__dropdown">
            <a href="#" className="btn_dropdown_link default_option">
              <span>Now</span>
            </a>
          </span>
        </fieldset>

        <fieldset className="find-shot-downloads">
          <a href="#clear">Clear</a>
          <label>Downloads</label>
          <span className="btn__dropdown">
            <a href="#" className="btn_dropdown_link default_option">
              <span>All Shots</span>
            </a>
          </span>
        </fieldset>
      </form>
    </div>
  );
}

export default Filters;
