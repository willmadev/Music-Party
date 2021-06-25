import React, { FC } from "react";
import { useAppSelector } from "../hooks/store";

export const MainMenu: FC = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <div>
      <p>logged in</p>
      <p>uid: {user.uid}</p>
      <p>name: {user.displayName}</p>
    </div>
  );
};
