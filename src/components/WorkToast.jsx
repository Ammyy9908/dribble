import React from "react";
import "./WorkToast.css";
import { IoMdClose } from "react-icons/io";
import { BsCheck2 } from "react-icons/bs";
function WorkToast({ work, setToast, toast }) {
  React.useEffect(() => {
    setTimeout(() => {
      setToast(false);
    }, 5000);
  }, []);
  return (
    <div
      className={`${
        toast && "toast_enable"
      } work_toast py-5 px-5 text-white rounded-3xl`}
    >
      <div className="work_toast_content flex items-start gap-5">
        <div className="work_toast_icon">
          <BsCheck2 />
        </div>
        <div className="work_content_text">
          <h3 className="text-2xl font-semibold">Changes saved</h3>
          <p>Your work availablity is now {work ? "enabled" : "disabled"}</p>
        </div>

        <button className="toast_close">
          <IoMdClose />
        </button>
      </div>
    </div>
  );
}

export default WorkToast;
