import React from "react";
const HomeIcon = ({ color }: IconProps) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="50 0 830 900"
      className={`${color}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M815.418 325.675L539.432 39.6201C498.072 2.35448 435.26 2.35448 393.89 39.6201L117.915 325.675C90.6967 352.06 113.759 396.664 151.666 396.664H209.999V734.998H723.332L724.171 396.664H781.665C819.571 396.664 842.637 352.06 815.418 325.675Z"
        stroke-width="23.3333"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M571.667 735V583.334C571.667 525.339 524.662 478.333 466.667 478.333C408.672 478.333 361.667 525.339 361.667 583.334V735"
        stroke-width="23.3333"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M653.73 396.667H728.563"
        stroke-width="23.3333"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M210 396.667H280"
        stroke-width="23.3333"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default HomeIcon;
