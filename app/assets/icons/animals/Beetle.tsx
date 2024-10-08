interface SVGProps {
  width?: number;
  height?: number;
  fill?: string;
}

const BeetleSVG = ({ width, height, fill }: SVGProps) => {
  console.log("beetle", width, height, fill);
  return (
    <svg
      id="bug"
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
        <polyline
          points="   198,82 229.631,76.697 246,58  "
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <polyline
          points="   206,122 237.631,116.697 254,98  "
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <polyline
          points="   222,146 250.57,177.307 270,182  "
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <polyline
          points="   110,82 78.369,76.697 62,58  "
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <polyline
          points="   102,122 70.369,116.697 54,98  "
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <polyline
          points="   86,146 57.43,177.307 38,182  "
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <path
          d="   M154,254c39.764,0,80-42.98,80-96s-40.236-96-80-96s-80,42.98-80,96S114.236,254,154,254z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#FFDD95"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <path
          d="   M154,122c10.349,0,48-22.757,48-36.008S180.51,62,154,62s-48,10.741-48,23.992S143.651,122,154,122z"
          fillRule="evenodd"
          clipRule="evenodd"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          fill="#ED5481"
        />

        <ellipse
          cx="154"
          cy="62"
          rx="32"
          ry="8"
          fill="#26BBEC"
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
          x1="154"
          x2="154"
          y1="250"
          y2="122"
        />

        <circle
          cx="198"
          cy="138"
          r="8"
          fill="#ED5481"
          fillRule="evenodd"
          clipRule="evenodd"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <circle
          cx="190"
          cy="194"
          r="8"
          fill="#ED5481"
          fillRule="evenodd"
          clipRule="evenodd"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <circle
          cx="130"
          cy="194"
          r="8"
          fill="#ED5481"
          fillRule="evenodd"
          clipRule="evenodd"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />

        <circle
          cx="102"
          cy="150"
          r="8"
          fill="#ED5481"
          fillRule="evenodd"
          clipRule="evenodd"
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
export default BeetleSVG;
