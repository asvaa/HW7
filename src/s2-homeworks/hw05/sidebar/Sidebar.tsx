import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";
import { PATH } from "../Pages";
import closeIcon from "./closeOutline.svg";

type PropsType = {
  open: boolean;
  handleClose: () => void;
};

export const Sidebar: FC<PropsType> = ({ open, handleClose }) => {
  const sidebarClass = s.sidebar + (open ? " " + s.open : "");

  return (
    <>
      {open && <div className={s.background} onClick={handleClose} />}

      <aside className={sidebarClass}>
        <button className={s.close} onClick={handleClose}>
          <img src={closeIcon} alt="close sidebar" />
        </button>
        <nav className={s.nav}>
          <NavLink
            to={PATH.PRE_JUNIOR}
            onClick={handleClose}
            className={({ isActive }) => (isActive ? s.active : "")}
            id="hw5-junior-link"
          >
            Pre-junior
          </NavLink>
          <NavLink
            to={PATH.JUNIOR}
            onClick={handleClose}
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            Junior
          </NavLink>
          <NavLink
            to={PATH.JUNIOR_PLUS}
            onClick={handleClose}
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            Junior Plus
          </NavLink>
        </nav>
      </aside>
    </>
  );
};
