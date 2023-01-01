import * as React from "react";
import { I18nextProvider } from "react-i18next";

import i18next from "src/i18n/config.ts";

import Navbar from "components/molecules/navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18next}>
      <>
        <Navbar />
        {children}
      </>
    </I18nextProvider>
  );
};
