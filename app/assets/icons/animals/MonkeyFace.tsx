interface SVGProps {
  width?: number;
  height?: number;
  fill?: string;
}

const MonkeyFace = ({ width, height, fill }: SVGProps) => {
  return (
    <svg
      width={width || "100"}
      height={height || "100"}
      fill={fill || "currentColor"}
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      className="iconify iconify--twemoji"
      preserveAspectRatio="xMidYMid meet"
    >
      <ellipse
        transform="rotate(-14.999 5.05 17.456)"
        fill="#D79E84"
        cx="5.05"
        cy="17.455"
        rx="3.818"
        ry="5.455"
      ></ellipse>
      <ellipse
        transform="rotate(-75.001 31.05 17.455)"
        fill="#D79E84"
        cx="31.05"
        cy="17.455"
        rx="5.455"
        ry="3.818"
      ></ellipse>
      <path
        fill="#BF6952"
        d="M19.018 36h-2.036C10.264 36 3.75 30.848 3.75 23.636c0-4.121 1.527-6.182 1.527-6.182s-.509-2.061-.509-4.121C4.768 7.152 11.282 2 18 2c6.718 0 13.232 6.182 13.232 11.333c0 2.061-.509 4.121-.509 4.121s1.527 2.061 1.527 6.182C32.25 30.848 25.736 36 19.018 36z"
      ></path>
      <path
        fill="#D79E84"
        d="M30 16.042C30 12.153 26.825 9 22.909 9A7.088 7.088 0 0 0 18 10.968A7.088 7.088 0 0 0 13.091 9C9.175 9 6 12.153 6 16.042c0 2.359 1.172 4.441 2.965 5.719a10.69 10.69 0 0 0-.783 4.031C8.182 31.476 12.578 35 18 35s9.818-3.524 9.818-9.208c0-1.431-.28-2.793-.783-4.031C28.828 20.483 30 18.4 30 16.042z"
      ></path>
      <ellipse fill="#292F33" cx="13" cy="17" rx="2.25" ry="3.25"></ellipse>
      <ellipse fill="#292F33" cx="23" cy="17" rx="2.25" ry="3.25"></ellipse>
      <path
        fill="#642116"
        d="M18 32.727c2.838 0 5.254-1.505 6.162-3.61a1.32 1.32 0 0 0-1.21-1.844h-9.904a1.32 1.32 0 0 0-1.21 1.844c.908 2.105 3.324 3.61 6.162 3.61z"
      ></path>
      <circle fill="#642116" cx="16.25" cy="23" r="1"></circle>
      <circle fill="#642116" cx="19.75" cy="23" r="1"></circle>
      <path
        fill="#BF6952"
        d="M22.66.175s-5.455-1.091-7.636 2.182s4.364 1.091 4.364 1.091S20.478.175 22.66.175z"
      ></path>
    </svg>
  );
};

export default MonkeyFace;
