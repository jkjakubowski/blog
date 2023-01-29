import * as React from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "src/i18n/config";

import Navbar from "components/molecules/navbar/Navbar";
import MobileHeader from "components/molecules/MobileHeader";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="px-4">
        <Navbar />
        <MobileHeader />
        <div className="hidden md:block h-20" />
        {children}
      </div>
    </I18nextProvider>
  );
};
