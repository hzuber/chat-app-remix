interface SVGProps {
  width?: string;
  height?: string;
  fill?: string;
}

const Panda = ({ width, height, fill }: SVGProps) => {
  return (
    <svg
      width={width || "100"}
      height={height || "100"}
      fill={fill || "currentColor"}
      viewBox="0 0 300 300"
      id="panda"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <path
          d="   M225.867,120c17.673,0,36-22.328,36-40s-14.327-32-32-32s-36,22.328-36,40S208.193,120,225.867,120z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#595959"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></path>

        <path
          d="   M97.867,120c-17.673,0-36-22.328-36-40s14.327-32,32-32s36,22.328,36,40S115.54,120,97.867,120z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#595959"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></path>

        <path
          d="   M153.867,232c53.019,0,116-11.816,116-56s-62.981-116-116-116s-116,71.816-116,116S100.848,232,153.867,232z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#DDDDDD"
          stroke="#000000"
          strokeWidth="7.7333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></path>

        <path
          d="   M106.633,192c13.678,0,22.102-15.412,29.27-32.308C143.07,142.796,129.318,132,115.639,132c-13.678,0-33.773,9.848-33.773,27.692   C81.867,177.536,92.955,192,106.633,192z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#595959"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></path>

        <circle
          cx="121.867"
          cy="148"
          r="8"
          fillRule="evenodd"
          clipRule="evenodd"
        ></circle>

        <path
          d="   M205.104,192c-13.676,0-22.071-13.944-29.264-32.308C168.647,141.332,182.424,132,196.1,132c13.676,0,33.767,9.848,33.767,27.692   C229.867,177.536,218.78,192,205.104,192z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#595959"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></path>

        <path
          d="   M153.867,260c21.208,0,48-14.328,48-32s-26.792-32-48-32s-48,14.328-48,32S132.659,260,153.867,260z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#595959"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></path>

        <circle
          cx="189.867"
          cy="148"
          r="8"
          fillRule="evenodd"
          clipRule="evenodd"
        ></circle>

        <path
          d="   M117.867,228c0,6.627,8.059,12,18,12c9.941,0,18-5.373,18-12"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></path>

        <path
          d="   M153.867,228c0,6.627,8.059,12,18,12c9.941,0,18-5.373,18-12"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></path>

        <path
          d="   M159.147,225.399c-4.023,3.472-10.554,3.464-14.567,0l-8.255-7.117c-4.023-3.472-2.99-6.282,2.229-6.282h26.618   c5.254,0,6.243,2.818,2.229,6.282L159.147,225.399z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#DDDDDD"
          stroke="#000000"
          strokeWidth="7.7333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></path>
      </g>

      <g></g>

      <g></g>

      <g></g>

      <g></g>

      <g></g>

      <g></g>

      <g></g>

      <g></g>

      <g></g>

      <g></g>

      <g></g>

      <g></g>

      <g></g>

      <g></g>

      <g></g>
    </svg>
  );
};

export default Panda;
