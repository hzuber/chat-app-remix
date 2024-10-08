interface SVGProps {
  width?: number;
  height?: number;
  fill?: string;
}

const Icecream = ({ width, height, fill }: SVGProps) => {
  return (
    <svg
      width={width || "100"}
      height={height || "100"}
      fill={fill || "currentColor"}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="food">
        <circle
          cx="57.5"
          cy="6.5"
          r="2.5"
          fill="none"
          stroke="#4c241d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
        ></circle>

        <circle cx="24.5" cy="23.5" r="21.5" fill="#e5efef"></circle>

        <line
          x1="22.837"
          y1="6.663"
          x2="19.163"
          y2="10.337"
          fill="none"
          stroke="#4c241d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
        ></line>

        <line
          x1="19.163"
          y1="6.663"
          x2="22.837"
          y2="10.337"
          fill="none"
          stroke="#4c241d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
        ></line>

        <circle cx="17" cy="14" r="1" fill="#4c241d"></circle>

        <path
          d="M8.756,34c2.173,11.259,8.827,20.117,17.276,23H22v3H42V57H37.968c8.449-2.883,15.1-11.741,17.276-23"
          fill="#ffffff"
          stroke="#4c241d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
        ></path>

        <circle
          cx="25"
          cy="25"
          r="6"
          fill="#bf7e68"
          stroke="#4c241d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
        ></circle>

        <circle
          cx="32.5"
          cy="19.5"
          r="7.5"
          fill="#f4aeab"
          stroke="#4c241d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
        ></circle>

        <circle
          cx="40"
          cy="25"
          r="6"
          fill="#e2e2e2"
          stroke="#4c241d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
        ></circle>

        <path
          d="M25,31a6,6,0,0,0-12,0Z"
          fill="#77a052"
          stroke="#4c241d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
        ></path>

        <path
          d="M38,31a6,6,0,0,0-12,0Z"
          fill="#ffce56"
          stroke="#4c241d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
        ></path>

        <path
          d="M51,31a6,6,0,0,0-12,0Z"
          fill="#816982"
          stroke="#4c241d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
        ></path>

        <path
          d="M61,60a6,6,0,0,0-12,0Z"
          fill="#e66353"
          stroke="#4c241d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
        ></path>

        <polygon
          points="27.771 40.271 30.378 40.554 32.021 38.51 33.664 40.554 36.271 40.271 35.987 42.878 38.031 44.521 35.987 46.164 36.271 48.771 33.664 48.487 32.021 50.531 30.378 48.487 27.771 48.771 28.054 46.164 26.01 44.521 28.054 42.878 27.771 40.271"
          fill="#ffce56"
          stroke="#4c241d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
        ></polygon>

        <path
          d="M14.78,34H8.5A1.5,1.5,0,0,1,7,32.5H7A1.5,1.5,0,0,1,8.5,31h47A1.5,1.5,0,0,1,57,32.5h0A1.5,1.5,0,0,1,55.5,34H22"
          fill="#ffffff"
          stroke="#4c241d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
        ></path>

        <line
          x1="26"
          y1="57"
          x2="31"
          y2="57"
          fill="none"
          stroke="#4c241d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
        ></line>

        <line
          x1="60"
          y1="60"
          x2="5"
          y2="60"
          fill="none"
          stroke="#4c241d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2px"
        ></line>
      </g>
    </svg>
  );
};

export default Icecream;
