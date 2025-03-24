import React from "react";
import s from "./Message.module.css";
import { MessageType } from "../HW1";

export type MessagePropsType = {
  message: MessageType;
};

const Message = (props: MessagePropsType) => {
  const { message } = props;
  return (
    <div id={"hw1-message-" + message.id} className={s.message}>
      <div className={s.imageAndText}>
        <img
          id={"hw1-avatar-" + message.id}
          src={message.user.avatar}
          alt="User Avatar"
          className={s.avatar}
        />
        <div className={s.text}>
          <div id={"hw1-name-" + props.message.id} className={s.name}>
            {message.user.name}
          </div>
          <pre id={"hw1-text-" + props.message.id} className={s.messageText}>
            {message.message.text}
          </pre>
        </div>
      </div>
      <div id={"hw1-time-" + props.message.id} className={s.time}>
        {message.message.time}
      </div>
    </div>
  );
};

export default Message;
