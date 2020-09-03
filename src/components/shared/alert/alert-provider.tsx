import React, { FC } from "react";
import { useTranslator } from "localization";
import { Alert } from "./alert";

export interface IAlertProvider {}

export const AlertProvider: FC = ({ children }) => {
  return (
    <>
      {children}
      <Alert />
    </>
  );
};
