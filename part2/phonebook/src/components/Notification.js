import { useEffect } from "react";

const Notification = ({ message }) => {
  useEffect(() => {
    const messageBox = document.getElementById("message");
    console.log(message.type, message.text, messageBox);
    if (message.text !== "") {
      if (message.type === "error") {
        messageBox.classList.remove("success");
        messageBox.classList.add("error");
      }
      messageBox.classList.remove("hide");
      messageBox.classList.add("show");
      setTimeout(() => {
        messageBox.classList.remove("show");
        messageBox.classList.add("hide");
        if (message.type === "error") {
          messageBox.classList.remove("error");
          messageBox.classList.add("success");
        }
      }, 4000);
    }
  }, [message]);

  return (
    <div id="message" className="message success hide">
      {message.text}
    </div>
  );
};
export default Notification;
