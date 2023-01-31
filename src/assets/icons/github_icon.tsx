import React from "react";
const GithubIcon = ({ color }: IconProps) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 60 60"
      className={`${color} `}
      stroke-width="2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M54.9999 31.1999C54.9999 42.2559 47.8609 51.6339 37.9579 54.9539C36.6909 55.1989 36.2439 54.4189 36.2439 53.7489C36.2439 52.9279 36.275 50.2259 36.275 46.8799C36.275 44.5419 35.4749 43.0149 34.5809 42.2459C40.1349 41.6219 45.9699 39.5079 45.9699 29.8909C45.9699 27.1579 45.0039 24.9179 43.4029 23.1679C43.6629 22.5339 44.5149 19.9929 43.1539 16.5429C43.1539 16.5429 41.0649 15.8729 36.3059 19.1099C34.3159 18.5539 32.1809 18.2779 30.0609 18.2679C27.9409 18.2779 25.8059 18.5539 23.8159 19.1099C19.0569 15.8729 16.9579 16.5429 16.9579 16.5429C15.6019 19.9929 16.4589 22.5339 16.7189 23.1679C15.1179 24.9179 14.1469 27.1579 14.1469 29.8909C14.1469 39.4819 19.9709 41.6329 25.5099 42.2609C24.7979 42.8899 24.1539 43.9919 23.9249 45.6069C22.5009 46.2519 18.8899 47.3579 16.6669 43.5289C16.6669 43.5289 15.3469 41.1289 12.8479 40.9519C12.8479 40.9519 10.4109 40.9209 12.6759 42.4739C12.6759 42.4739 14.3129 43.2429 15.4459 46.1319C15.4459 46.1319 16.9059 51.0059 23.8469 49.4889C23.8569 51.5819 23.8779 53.1569 23.8779 53.7489C23.8779 54.4139 23.4259 55.1829 22.1789 54.9539C12.2659 51.6449 5.12195 42.2609 5.12195 31.1999C5.12195 17.3689 16.2869 6.16187 30.0609 6.16187C43.8349 6.16187 54.9999 17.3689 54.9999 31.1999Z"
      />
    </svg>
  );
};

export default GithubIcon;
