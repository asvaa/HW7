import React from "react";
import s from "./FriendMessage.module.css";
import { MessageType } from "../HW1";

export type FriendMessagePropsType = {
  message: MessageType;
};

const FriendMessage = (props: FriendMessagePropsType) => {
  const { message } = props;
  return (
    <div id={"hw1-friend-message-" + message.id} className={s.friendMessage}>
      <div className={s.friendImageAndText}>
        <img
          id={"hw1-friend-avatar-" + message.id}
          src={message.user.avatar}
          alt="Friend Avatar"
          className={s.friendAvatar}
        />
        <div className={s.friendText}>
          <div id={"hw1-friend-name-" + message.id} className={s.friendName}>
            {message.user.name} 
          </div>
          <pre
            id={"hw1-friend-text-" + message.id}
            className={s.friendMessageText}
          >
            {message.message.text}
          </pre>
        </div>
      </div>
      <div id={"hw1-friend-time-" + message.id} className={s.friendTime}>
        {message.message.time}
      </div>
    </div>
  );
};

export default FriendMessage;
