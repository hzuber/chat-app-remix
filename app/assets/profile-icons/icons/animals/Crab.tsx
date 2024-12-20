interface SVGProps {
  width?: string;
  height?: string;
  fill?: string;
}

const CrabSVG = ({ width, height, fill }: SVGProps) => {
  return (
    <svg
      id="crab"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width || "100"}
      height={height || "100"} // Use default value if height is not provided
      fill={fill || "black"}
      viewBox="0 0 300 300"
      preserveAspectRatio="xMidYMid meet"
    >
      <g>
        <circle
          cx="178"
          cy="134"
          r="16"
          fill="#DDDDDD"
          fillRule="evenodd"
          clipRule="evenodd"
          stroke="#000000"
          strokeWidth="7.7333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <path
          d="M90,158c0,0-26.752-1.487-18.376-56"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <path
          d="   M218,158c0,0,26.752-1.487,18.376-56"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <path
          d="   M90,214c0,0-26.752,1.487-18.376,56"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <path
          d="   M218,214c0,0,26.752,1.487,18.376,56"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <circle
          cx="134"
          cy="134"
          r="16"
          fill="#DDDDDD"
          fillRule="evenodd"
          clipRule="evenodd"
          stroke="#000000"
          strokeWidth="7.7333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <path
          d="   M90.33,38.001C90.257,38,90.184,38,90.11,38C70.167,38,54,54.118,54,74s16.167,36,36.11,36c18.587,0,33.894-14,35.89-32.001   C106.158,77.881,90.11,61.809,90.11,42C90.11,40.648,90.185,39.314,90.33,38.001z"
          fill="#ED5481"
          fillRule="evenodd"
          clipRule="evenodd"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <path
          d="   M217.67,38.001c0.073,0,0.147-0.001,0.22-0.001C237.833,38,254,54.118,254,74s-16.167,36-36.11,36   c-18.587,0-33.894-14-35.89-32.001c19.842-0.118,35.89-16.19,35.89-35.999C217.89,40.648,217.815,39.314,217.67,38.001z"
          fill="#ED5481"
          fillRule="evenodd"
          clipRule="evenodd"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <line
          fill="#26BBEC"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          x1="78"
          x2="54"
          y1="194"
          y2="194"
        />

        <line
          fill="#26BBEC"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          x1="254"
          x2="230"
          y1="194"
          y2="194"
        />

        <path
          d="   M74,178.018C74,155.917,91.888,138,113.962,138h80.076c22.07,0,39.962,17.902,39.962,40.018v11.964   C234,212.083,216.112,230,194.038,230h-80.076C91.892,230,74,212.098,74,189.982V178.018z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#ED5481"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
      </g>

      <g />

      <g />

      <g />

      <g />

      <g />

      <g />

      <g />

      <g />

      <g />

      <g />

      <g />

      <g />

      <g />

      <g />

      <g />
    </svg>
  );
};
export default CrabSVG;
