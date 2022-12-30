import React from "react";
const TwitterIcon = ({ color }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 60 60"
      fill="none"
      className={`stroke-dark_blue ${color}`}
      stroke-width="2"
      stroke-linejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M53.382 10.121C52.624 12.555 51.015 14.596 48.917 15.88C50.969 15.633 52.928 15.071 54.748 14.246C53.392 16.334 51.67 18.164 49.685 19.634C49.701 20.077 49.711 20.531 49.711 20.984C49.711 34.746 39.497 50.61 20.817 50.61C15.084 50.61 9.74795 48.883 5.25195 45.934C6.04595 46.027 6.85495 46.078 7.67495 46.078C12.429 46.078 16.811 44.413 20.286 41.618C15.842 41.536 12.094 38.525 10.8 34.39C11.418 34.513 12.058 34.575 12.712 34.575C13.64 34.575 14.538 34.452 15.388 34.209C10.738 33.255 7.23695 29.043 7.23695 23.995V23.872C8.60795 24.645 10.181 25.119 11.841 25.166C9.11395 23.299 7.32495 20.113 7.32495 16.504C7.32495 14.596 7.82495 12.802 8.69595 11.26C13.707 17.566 21.189 21.711 29.629 22.144C29.454 21.381 29.366 20.587 29.366 19.773C29.366 14.024 33.913 9.36304 39.518 9.36304C42.441 9.36304 45.081 10.621 46.932 12.647C49.247 12.183 51.418 11.317 53.382 10.121Z"
      />
    </svg>
  );
};

export default TwitterIcon;
