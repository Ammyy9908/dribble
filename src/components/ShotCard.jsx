import React from "react";
import LikeIcon from "../Icons/LikeIcon";
import SaveIcon from "../Icons/SaveIcon";
import "./ShotCard.css";
function ShotCard({ thumb, userImage }) {
  return (
    <div className="shot_card">
      <div className="shot_card_thumb overflow-hidden">
        <img src={thumb} alt="Shot" />
        <div className="card_overlay">
          <div className="overlay_content">
            <div className="shot-title">Landing Page Design</div>

            <ul className="shot_controls">
              <li>
                <button>
                  <SaveIcon />
                </button>
              </li>
              <li>
                <button>
                  <LikeIcon />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="short_card_lower flex justify-between mt-3">
        <div className="shot_user_info flex gap-2 items-center">
          <div className="user_image">
            <img src={userImage} alt="user-icon" />
          </div>
          <p className="text-sm">Setproduct</p>
          <div className="user_variant">
            <span className="user_type text-sm">Team</span>
          </div>
        </div>
        <div className="short_stats flex gap-4">
          <div className="like_stat flex items-center gap-2">
            <span>
              <img src="/assets/like.svg" alt="like-icon" />
            </span>
            <span className="text-xs">257</span>
          </div>
          <div className="view_stat flex items-center gap-2">
            <span>
              <img src="/assets/eye.svg" alt="like-icon" />
            </span>
            <span className="text-xs">20.2k</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShotCard;
