import { useEffect } from "react";

const Notification = ({ message }) => {
  useEffect(() => {
    const messageBox = document.getElementById("message");
    if (message) {
      messageBox.classList.remove("hide");
      messageBox.classList.add("show");
      setTimeout(() => {
        messageBox.classList.remove("show");
        messageBox.classList.add("hide");
      }, 5000);
    }
  }, [message]);

  return (
    <div id="message" className="message hide">
      {message}
    </div>
  );
};
export default Notification;
