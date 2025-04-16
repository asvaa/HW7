import React, { FC, ReactNode, useEffect, useState } from "react";
import { Header } from "../header/Header"; 
import { Sidebar } from "../sidebar/Sidebar";

type PropsType = {
  children: ReactNode;
};

export const Layout: FC<PropsType> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  return (
    <>
      <Sidebar open={open} handleClose={handleClose} />
      <Header handleOpen={handleOpen} />
      <div>{children}</div>
    </>
  );
};
