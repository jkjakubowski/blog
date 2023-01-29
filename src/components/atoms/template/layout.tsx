import * as React from "react";
import { I18nextProvider } from "react-i18next";
import { Helmet } from "react-helmet";

import i18n from "src/i18n/config";

import Navbar from "components/molecules/navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="src/assets/images/wolf.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="src/assets/images/wolf.png"
        />
      </Helmet>
      <>
        <Navbar />
        <div className="h-20" />
        {children}
      </>
    </I18nextProvider>
  );
};
