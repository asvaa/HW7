import React, { FC } from 'react';
import burgerIcon from './burger.svg';
import s from './Header.module.css';
import { useLocation } from 'react-router-dom';
import { PATH } from '../Pages';

type PropsType = {
  handleOpen: () => void;
};

export const Header: FC<PropsType> = ({ handleOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const pageName =
    currentPath === PATH.PRE_JUNIOR
      ? 'Pre-junior'
      : currentPath === PATH.JUNIOR
      ? 'Junior'
      : currentPath === PATH.JUNIOR_PLUS
      ? 'Junior Plus'
      : 'Error';

  return (
    <div id={'hw5-header'} className={s.header}>
       ЭТО ВАЖНО!!! ID должен быть именно hw5-burger-menu 
      <img
        src={burgerIcon}
        id={'hw5-burger-menu'} // <-- чтобы Cypress нашёл
        className={s.burgerMenuIcon}
        onClick={handleOpen}
        alt={'open menu'}
      />
      <h1>{pageName}</h1>
    </div>
  );
};
