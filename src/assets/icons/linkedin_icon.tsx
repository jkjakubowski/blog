import React from "react";
const LinkedinIcon = ({ color, size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      className={`${color}`}
      stroke-width="2"
      stroke-linejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M52 34.6901V50.0001H42.146V35.7491C42.146 32.0201 40.606 29.4771 37.217 29.4771C34.623 29.4771 33.179 31.1941 32.511 32.8461C32.257 33.4441 32.298 34.2701 32.298 35.1001V50.0001H22.535C22.535 50.0001 22.662 24.7601 22.535 22.4651H32.298V26.7871C32.875 24.8971 35.996 22.2021 40.971 22.2021C47.147 22.2021 52 26.1591 52 34.6901Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.54297 49.9998H17.231V22.4658H8.54297V49.9998Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.7815 14.3798C17.7815 16.7978 15.9335 18.7148 12.9735 18.7148H12.9135C10.0595 18.7148 8.21149 16.8068 8.21149 14.3848C8.21149 11.9158 10.1145 10.0498 13.0285 10.0498C15.9335 10.0498 17.7215 11.9118 17.7815 14.3798Z"
      />
    </svg>
  );
};

export default LinkedinIcon;
