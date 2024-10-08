interface SVGProps {
  width?: number;
  height?: number;
  fill?: string;
}

const SpiritedAway = ({ width, height, fill }: SVGProps) => {
  return (
    <svg
      width={width || "100"}
      height={height || "100"}
      fill={fill || "currentColor"}
      viewBox="0 0 128 128"
      data-name="Layer 1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`.cls-1{fill:#00adfe;}.cls-2{fill:#356cb6;opacity:0.3;}.cls-3,.cls-8{fill:#393c54;}.cls-4{fill:#ffffff;}.cls-5,.cls-6{fill:none;stroke:#393c54;stroke-linecap:round;stroke-miterlimit:10;}.cls-5{stroke-width:5.51px;}.cls-6{stroke-width:2.21px;}.cls-7{fill:#a7aece;}.cls-8{opacity:0.2;}`}</style>
      </defs>
      <title></title>
      <circle className="cls-1" cx="64" cy="64" r="60"></circle>
      <circle className="cls-2" cx="64" cy="64" r="48"></circle>
      <path
        className="cls-3"
        d="M64,124a59.8,59.8,0,0,0,41.54-16.72c-1-22.43-3.94-55.49-12.65-75.18C88.06,21.18,76.74,13.88,64,13.88h0c-12.74,0-24.65,7-28.89,18.22C27.58,51.93,24.35,85.33,23,107.76A59.74,59.74,0,0,0,64,124Z"
      ></path>
      <path
        className="cls-4"
        d="M84.13,36.13c-3.52-8.48-10.48-12.82-19.74-13v0h-.78v0c-9.26.22-16.22,4.56-19.74,13-3.63,8.71-4.83,21.77,0,39.19,4.69,17,10.54,20.49,19.74,20.67h.78c9.2-.18,15-3.72,19.74-20.67C89,57.9,87.76,44.84,84.13,36.13Z"
      ></path>
      <line
        className="cls-5"
        x1="77.58"
        x2="81.99"
        y1="52.83"
        y2="52.83"
      ></line>
      <path
        className="cls-3"
        d="M68.5,88a30.85,30.85,0,0,1-9,0c-1.25-.33-2.5-1.12-2.5-2.5s1.2-2.13,2.5-2.5a20.4,20.4,0,0,1,9,0c1.21.31,2.5,1.12,2.5,2.5S69.73,87.68,68.5,88Z"
      ></path>
      <path className="cls-6" d="M82.05,58.11a9.91,9.91,0,0,1-5.73-.37"></path>
      <path
        className="cls-7"
        d="M75.42,65A3.31,3.31,0,0,1,82,65c0,1.83-3.31,14.33-5.51,14.33C75.42,79.29,75.42,66.79,75.42,65Z"
      ></path>
      <path
        className="cls-7"
        d="M75.37,45A3.31,3.31,0,0,0,82,45c0-1.82-2.59-9.92-4.41-9.92S75.37,43.19,75.37,45Z"
      ></path>
      <line
        className="cls-5"
        x1="46.01"
        x2="50.42"
        y1="52.83"
        y2="52.83"
      ></line>
      <path className="cls-6" d="M51.68,57.76a10,10,0,0,1-5.91.29"></path>
      <path
        className="cls-7"
        d="M52.63,45A3.31,3.31,0,0,1,46,45c0-1.82,2.59-9.92,4.41-9.92S52.63,43.19,52.63,45Z"
      ></path>
      <path
        className="cls-7"
        d="M52.58,65A3.31,3.31,0,0,0,46,65c0,1.83,3.31,14.33,5.51,14.33C52.58,79.29,52.58,66.79,52.58,65Z"
      ></path>
      <path
        className="cls-7"
        d="M68.41,90.32c0,1.22-2,2.21-4.41,2.21s-4.41-1-4.41-2.21c0-.62,2-.27,4.41-.27S68.41,89.7,68.41,90.32Z"
      ></path>
      <path
        className="cls-8"
        d="M84.13,36.13a21.8,21.8,0,0,0-4.48-6.94c1.45,10.32.63,23.64-1.36,41.86-2.09,19.1-11.43,23.3-21,24a21.16,21.16,0,0,0,6.35.94h.78c9.2-.18,15-3.72,19.74-20.67C89,57.9,87.76,44.84,84.13,36.13Z"
      ></path>
    </svg>
  );
};

export default SpiritedAway;
