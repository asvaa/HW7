// Sidebar.tsx
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
      {open && (
        <div
          className={s.background}
          onClick={handleClose}
          data-testid="sidebar-background"
        />
      )}

      <aside className={sidebarClass}>
        <button
          className={s.close}
          onClick={handleClose}
          data-testid="close-sidebar-button"
        >
          <img src={closeIcon} alt="close sidebar" />
        </button>
        <nav className={s.nav}>
          <NavLink
            to={PATH.PRE_JUNIOR}
            id="hw5-pre-junior-link" // ✅ добавлен id
            onClick={handleClose}
            className={({ isActive }) => (isActive ? s.active : "")}
            data-testid="pre-junior-link"
          >
            Pre-junior
          </NavLink>

          <NavLink
            to={PATH.JUNIOR}
            id="hw5-junior-link" // ✅ нужный id для Cypress
            onClick={handleClose}
            className={({ isActive }) => (isActive ? s.active : "")}
            data-testid="junior-link"
          >
            Junior
          </NavLink>

          <NavLink
            to={PATH.JUNIOR_PLUS}
            id="hw5-junior-plus-link" // ✅ тоже можно добавить
            onClick={handleClose}
            className={({ isActive }) => (isActive ? s.active : "")}
            data-testid="junior-plus-link"
          >
            Junior Plus
          </NavLink>
        </nav>
      </aside>
    </>
  );
};
