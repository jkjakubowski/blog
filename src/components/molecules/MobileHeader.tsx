import * as React from "react";

import Signature from "components/atoms/template/Signature";

const MobileHeader = () => {
  return (
    <div className="mt-4 md:hidden">
      <Signature />
    </div>
  );
};

export default MobileHeader;
