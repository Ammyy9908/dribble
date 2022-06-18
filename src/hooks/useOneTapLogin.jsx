import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

function useOneTapLogin() {
  const [user_return, setUserReturn] = React.useState(null);

  const callback = (response) => {
    const { credential } = response;
    Cookies.set("token", credential);
    const user = jwt_decode(credential);
    setUserReturn(user);
  };

  useEffect(() => {
    if (!Cookies.get("token")) {
      window.google.accounts.id.initialize({
        client_id:
          "692645558184-h7v24nrgulj6heotcv7ad3j5k8u4hmqq.apps.googleusercontent.com",
        callback,
      });

      window.google.accounts.id.renderButton(
        document.querySelector(".buttonDiv"),
        { theme: "outline", size: "large" } // customization attributes
      );

      window.google.accounts.id.prompt((notification) => {
        console.log(notification);
        if (notification.isNotDisplayed()) {
          console.log(notification.getNotDisplayedReason());
        } else if (notification.isSkippedMoment()) {
          console.log(notification.getSkippedReason());
        } else if (notification.isDismissedMoment()) {
          console.log(notification.getDismissedReason());
        }
      });
    } else {
      const token = Cookies.get("token");
      const decoded = jwt_decode(token);
      setUserReturn(decoded);
    }
  }, []);
  return user_return;
}

export default useOneTapLogin;
