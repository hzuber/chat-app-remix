interface SVGProps {
  width?: string;
  height?: string;
  fill?: string;
}

const BiBiBumSVG = ({ width, height, fill }: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width || "100"}
      height={height || "100"} // Use default value if height is not provided
      fill={fill || "black"}
      viewBox="0 0 75 75"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <style>{`.cls-1{fill:#af8756;}.cls-2{fill:#89643d;}.cls-3{fill:#ffd7a3;}.cls-4{fill:#ffe9cc;}.cls-5{fill:#fff7ed;}.cls-6{fill:#ffffff;}.cls-7{fill:#ff5900;}.cls-8{fill:#f80;}.cls-9{fill:#ffb700;}.cls-10{fill:#fa0;}.cls-11{fill:#351207;}.cls-12{fill:#4a190a;}.cls-13{fill:#6b240e;}.cls-14{fill:#963314;}.cls-15{fill:#e8786f;}.cls-16{fill:#e86358;}.cls-17{fill:#ffe399;opacity:0.53;}.cls-18{fill:#730f00;}.cls-19{fill:#540b00;}.cls-20{fill:#9c1400;}.cls-21{fill:url(#radial-gradient);}.cls-22{fill:#ffc95c;}.cls-23{fill:#ffb870;}.cls-24{fill:#ffeddb;}.cls-25{fill:#009c08;}.cls-26{fill:#00c40a;}.cls-27{fill:#1cff28;}`}</style>

        <radialGradient
          cx="33.542"
          cy="33.966"
          gradientTransform="matrix(-0.428, 1.065, -1.089, -0.607, 84.864, 15.25)"
          gradientUnits="userSpaceOnUse"
          id="radial-gradient"
          r="8.431"
        >
          <stop offset="0" stopColor="#ffb640" />

          <stop offset="0.855" stopColor="#ff9224" />

          <stop offset="1" stopColor="#ffb152" />
        </radialGradient>
      </defs>

      <title />

      <g id="bibimbub">
        <circle className="cls-1" cx="31.992" cy="32.115" r="27.537" />

        <circle className="cls-2" cx="32.056" cy="32.147" r="23.526" />

        <path
          className="cls-1"
          d="M6.03,26.755S1.08,26.207,1,31.784c-.091,6.491,5.578,5.577,5.578,5.577Z"
        />

        <path
          className="cls-1"
          d="M57.8,38.015s4.95.548,5.028-5.028c.092-6.492-5.577-5.578-5.577-5.578Z"
        />

        <circle className="cls-3" cx="36.665" cy="30.543" r="0.56" />

        <path
          className="cls-4"
          d="M13.968,29.356s-1.041-2.006.439-2.69,1.713.022,1.713.022-1.841-2.133-.936-3.411a12.05,12.05,0,0,1,2.44-2.37s-1.313.041-.466-1.413,3.073-1.6,3.073-1.6a1.039,1.039,0,0,1,.559-1.751c1.539-.507,2.292,1.2,2.292,1.2a1.623,1.623,0,0,1,.156-2.4,2.914,2.914,0,0,1,3.138-.252s.447-1.518,1.131-1.743,3.324,2.035,3.324,2.035a4.129,4.129,0,0,1,2.047-1.262c1.084-.162,1.546.665,1.324,1.716a4.3,4.3,0,0,1,3.764-.654A5.089,5.089,0,0,1,40.749,16.9a1.964,1.964,0,0,1,2.771.358,14.3,14.3,0,0,1,2.163,3.4s5.725,2.419,6.153,6.878a3.857,3.857,0,0,1,1.19,3.033s1.152,1.48.388,2.612-.371.025-.371.025.73,2.5-.373,4.038S48.828,39.1,48.828,39.1s2.157,2.518,1.312,4.265a1.916,1.916,0,0,1-2.678.785s.685.068-.024.791a5.218,5.218,0,0,1-1.82,1.09l-.872,1.951s-.027.2-1.111.367c0,0,.352,1.352-2.354,2.342a2.426,2.426,0,0,1-2.3,1.054s-1.133,1.451-3.65.715c0,0-3.752,2.412-5.342-.685,0,0-1.762,1.266-2.713-.182,0,0-1.2.688-1.713-.022,0,0-2.8-.154-2.843-2.586,0,0-1.134,1.157-1.629-.344,0,0-2.766.521-3.643-2.713l-.213-2.083s-1.482.391-1.573-.46a.989.989,0,0,1,.792-1.044s-2.716-.768-1.731-2.953l.967-.515a3.253,3.253,0,0,1-.992-3.294S11.192,32.718,13.968,29.356Z"
        />

        <path
          className="cls-5"
          d="M19.923,29.129c-.665.226-1.22.351-1.54,1.052-.274.6-.271,1.371.6,1.362-.317.565-1.041,1.01-1.081,1.7-.05.867.726.906,1.263,1.288-.581.516-1.63,1.47-1.672,2.3a2.523,2.523,0,0,0,.315,1c.4.613.675.329,1.2.627-.334.746-.956,2.024-.51,2.847.49.905,1.86.53,2.425.034.308.809.782.537,1.347.615.941.129,1.144.275,1.243-.766.013-.143-.143-.63-.1-.7.208-.348,1.3-.182,1.72-.2.581-.024,1.851.071,2.326-.416.544-.558,0-1.327.2-1.866.32-.89,2.066-.962,2.763-1.817.756-.927,1.005-3.573-.758-2.846.392-.683.1-1.529-.825-1.36-.036-2.043-2.13-1.327-3.223-.742a4.268,4.268,0,0,0-1.166-2.411c-.551-.513-1.02-.469-1.582-.672a2.2,2.2,0,0,0-1.8-.222,4.352,4.352,0,0,0-1.439.567"
        />

        <path
          className="cls-5"
          d="M22.633,44.671c.134.689.182,1.256.832,1.668.56.354,1.322.456,1.432-.406.516.392.858,1.17,1.533,1.3.852.168,1-.6,1.448-1.075.432.645,1.235,1.815,2.047,1.969a2.532,2.532,0,0,0,1.036-.176c.662-.314.419-.624.786-1.1.693.433,1.875,1.223,2.75.894.963-.363.779-1.771.365-2.4.843-.195.638-.7.792-1.251.257-.915.429-1.1-.589-1.336-.14-.032-.644.056-.7.007-.317-.254,0-1.314.037-1.732.056-.579.323-1.824-.1-2.361-.478-.615-1.313-.183-1.821-.449-.838-.438-.671-2.179-1.423-2.985-.816-.876-3.4-1.483-2.923.363-.624-.482-1.5-.3-1.459.631-2.029-.242-1.606,1.93-1.175,3.092a4.273,4.273,0,0,0-2.548.827c-.583.476-.6.946-.881,1.475a2.206,2.206,0,0,0-.466,1.751,4.376,4.376,0,0,0,.366,1.5"
        />

        <path
          className="cls-5"
          d="M38.4,35.3c.133.689.181,1.256.832,1.668.559.354,1.321.456,1.431-.406.517.392.859,1.17,1.533,1.3.852.168,1-.6,1.449-1.075.432.645,1.234,1.815,2.047,1.969a2.535,2.535,0,0,0,1.036-.176c.662-.314.418-.624.785-1.1.693.433,1.875,1.223,2.751.894.963-.363.778-1.771.364-2.4.844-.195.638-.7.793-1.251.256-.915.429-1.1-.59-1.336-.139-.032-.644.056-.7.007-.316-.254,0-1.314.037-1.732.056-.579.323-1.825-.095-2.361-.479-.615-1.314-.183-1.822-.449-.837-.438-.671-2.179-1.423-2.985-.815-.876-3.4-1.483-2.923.363-.623-.482-1.5-.3-1.459.631-2.029-.242-1.6,1.93-1.174,3.092a4.282,4.282,0,0,0-2.549.826c-.583.477-.6.947-.881,1.476a2.206,2.206,0,0,0-.465,1.751,4.376,4.376,0,0,0,.366,1.5"
        />

        <path
          className="cls-6"
          d="M22.6,36.136s-2.012-.878-1.408-2.347a.955.955,0,0,1,1.689-.376.966.966,0,0,1,.875-1.195c1.117-.187.976,1.31.976,1.31s1.445-.3,1.387.631a2.758,2.758,0,0,1-.822,1.631s1.738,1.421.647,2.235a1.712,1.712,0,0,1-2.151-.2S21.445,38.419,22.6,36.136Z"
        />

        <ellipse
          className="cls-6"
          cx="28.721"
          cy="41.097"
          rx="0.99"
          ry="0.947"
          transform="translate(-11.428 11.065) rotate(-18.255)"
        />

        <ellipse
          className="cls-6"
          cx="28.063"
          cy="42.402"
          rx="0.99"
          ry="0.861"
          transform="translate(-11.87 10.925) rotate(-18.255)"
        />

        <ellipse
          className="cls-6"
          cx="30.071"
          cy="42.511"
          rx="1.313"
          ry="1.292"
          transform="translate(-11.803 11.559) rotate(-18.255)"
        />

        <ellipse
          className="cls-6"
          cx="30.459"
          cy="40.388"
          rx="1.313"
          ry="1.292"
          transform="translate(-11.118 11.574) rotate(-18.255)"
        />

        <path
          className="cls-6"
          d="M28.049,41.228a.564.564,0,0,1-.365.71.548.548,0,0,1-.716-.353c-.1-.435.064-.8.365-.71S27.952,40.935,28.049,41.228Z"
        />

        <ellipse
          className="cls-6"
          cx="46.244"
          cy="32.234"
          rx="0.99"
          ry="0.947"
          transform="translate(-7.77 16.108) rotate(-18.255)"
        />

        <ellipse
          className="cls-6"
          cx="45.587"
          cy="33.539"
          rx="0.99"
          ry="0.861"
          transform="translate(-8.212 15.968) rotate(-18.255)"
        />

        <ellipse
          className="cls-6"
          cx="47.595"
          cy="33.648"
          rx="1.313"
          ry="1.292"
          transform="translate(-8.145 16.602) rotate(-18.255)"
        />

        <ellipse
          className="cls-6"
          cx="47.983"
          cy="31.525"
          rx="1.313"
          ry="1.292"
          transform="translate(-7.46 16.617) rotate(-18.255)"
        />

        <ellipse
          className="cls-6"
          cx="45.032"
          cy="32.544"
          rx="0.569"
          ry="0.56"
          transform="translate(-7.928 15.744) rotate(-18.255)"
        />

        <ellipse
          className="cls-6"
          cx="46.576"
          cy="30.833"
          rx="1.116"
          ry="1.098"
          transform="translate(-7.314 16.141) rotate(-18.255)"
        />

        <circle className="cls-3" cx="26.145" cy="24.765" r="0.99" />

        <ellipse
          className="cls-3"
          cx="34.156"
          cy="27.2"
          rx="0.947"
          ry="0.99"
          transform="translate(-6.801 12.068) rotate(-18.255)"
        />

        <ellipse
          className="cls-3"
          cx="35.283"
          cy="49.859"
          rx="0.861"
          ry="0.904"
          transform="translate(-13.842 13.561) rotate(-18.255)"
        />

        <circle className="cls-3" cx="44.28" cy="42.086" r="1.076" />

        <circle className="cls-3" cx="19.847" cy="44.432" r="0.732" />

        <circle className="cls-3" cx="20.483" cy="24.229" r="0.775" />

        <circle className="cls-3" cx="35.551" cy="38.436" r="1.593" />

        <circle className="cls-3" cx="34.697" cy="41.347" r="0.99" />

        <circle className="cls-3" cx="34.702" cy="39.85" r="0.861" />

        <circle className="cls-3" cx="39.981" cy="41.01" r="0.947" />

        <circle className="cls-3" cx="32.152" cy="36.656" r="1.076" />

        <circle className="cls-3" cx="26.018" cy="21.905" r="0.56" />

        <circle className="cls-3" cx="18.12" cy="38.789" r="0.946" />

        <circle className="cls-6" cx="43.697" cy="28.224" r="0.474" />

        <circle className="cls-3" cx="30.331" cy="35.67" r="0.431" />

        <circle className="cls-3" cx="38.567" cy="49.093" r="0.517" />

        <circle className="cls-3" cx="26.258" cy="49.299" r="0.56" />

        <circle className="cls-3" cx="30.555" cy="25.214" r="0.474" />

        <circle className="cls-3" cx="16.103" cy="31.432" r="0.474" />

        <circle className="cls-3" cx="33.847" cy="34.646" r="0.387" />

        <path
          className="cls-7"
          d="M31.558,40.74l-.02,0a1.015,1.015,0,0,0-1.161.847L28.791,52.931a1.016,1.016,0,0,0,.847,1.161l.086.014a1.017,1.017,0,0,0,1.163-.862l1.52-11.358A1.016,1.016,0,0,0,31.558,40.74Z"
        />

        <path
          className="cls-8"
          d="M31.634,41.413l-.013,0a.621.621,0,0,0-.709.517L29.6,51.52a.622.622,0,0,0,.517.71l.053.008a.622.622,0,0,0,.711-.527l1.27-9.6A.62.62,0,0,0,31.634,41.413Z"
        />

        <path
          className="cls-7"
          d="M34.6,40.634l-.02,0a1.016,1.016,0,0,0-.918,1.106L34.91,53.131a1.015,1.015,0,0,0,1.106.917l.087-.008a1.017,1.017,0,0,0,.916-1.121L35.7,41.536A1.016,1.016,0,0,0,34.6,40.634Z"
        />

        <path
          className="cls-8"
          d="M34.835,41.268h-.013a.62.62,0,0,0-.56.675l1.086,9.62a.621.621,0,0,0,.676.561l.053-.005a.622.622,0,0,0,.56-.685L35.51,41.819A.621.621,0,0,0,34.835,41.268Z"
        />

        <path
          className="cls-7"
          d="M37.027,39.934l-.02,0a1.016,1.016,0,0,0-.856,1.154L38.014,52.4a1.016,1.016,0,0,0,1.154.856l.087-.013a1.016,1.016,0,0,0,.854-1.168l-1.93-11.3A1.015,1.015,0,0,0,37.027,39.934Z"
        />

        <path
          className="cls-8"
          d="M37.3,40.554h-.012a.621.621,0,0,0-.523.7l1.6,9.548a.62.62,0,0,0,.7.523l.053-.008a.621.621,0,0,0,.522-.714L38,41.068A.621.621,0,0,0,37.3,40.554Z"
        />

        <path
          className="cls-7"
          d="M38.537,39.121l-.019.006a1.016,1.016,0,0,0-.656,1.278l3.687,10.848a1.015,1.015,0,0,0,1.278.656l.084-.026a1.017,1.017,0,0,0,.651-1.293L39.811,39.762A1.015,1.015,0,0,0,38.537,39.121Z"
        />

        <path
          className="cls-8"
          d="M38.908,39.687l-.012,0a.62.62,0,0,0-.4.781l3.143,9.157a.621.621,0,0,0,.781.4l.051-.017a.621.621,0,0,0,.4-.789l-3.182-9.145A.621.621,0,0,0,38.908,39.687Z"
        />

        <path
          className="cls-8"
          d="M33.126,41.02l-.021,0a1.016,1.016,0,0,0-1.086.94l-.64,11.44a1.017,1.017,0,0,0,.94,1.087l.088.006a1.015,1.015,0,0,0,1.087-.955l.573-11.444A1.016,1.016,0,0,0,33.126,41.02Z"
        />

        <path
          className="cls-9"
          d="M33.257,41.684h-.012a.62.62,0,0,0-.664.574l-.512,9.668a.622.622,0,0,0,.575.664l.053,0a.621.621,0,0,0,.665-.584l.47-9.67A.621.621,0,0,0,33.257,41.684Z"
        />

        <path
          className="cls-7"
          d="M40,38.233l-.017.012a.974.974,0,0,0-.294,1.342l6.182,8.394a.974.974,0,0,0,1.364.166l.071-.05a.973.973,0,0,0,.286-1.353l-6.236-8.356A.976.976,0,0,0,40,38.233Z"
        />

        <path
          className="cls-8"
          d="M40.491,38.614l-.011.007a.6.6,0,0,0-.179.82l5.246,7.076a.6.6,0,0,0,.833.1l.044-.031a.593.593,0,0,0,.175-.826l-5.28-7.052A.6.6,0,0,0,40.491,38.614Z"
        />

        <path
          className="cls-7"
          d="M40.344,37.36l-.013.016a.974.974,0,0,0,.079,1.371l8.221,6.412a.972.972,0,0,0,1.357-.209l.055-.068a.97.97,0,0,0-.09-1.379l-8.262-6.36A.975.975,0,0,0,40.344,37.36Z"
        />

        <path
          className="cls-8"
          d="M40.918,37.6l-.008.009a.6.6,0,0,0,.049.838l6.963,5.4a.6.6,0,0,0,.83-.128l.034-.041a.6.6,0,0,0-.055-.843l-6.99-5.363A.6.6,0,0,0,40.918,37.6Z"
        />

        <path
          className="cls-8"
          d="M35.133,40.131l-.02,0a1.017,1.017,0,0,0-.825,1.177l2.172,11.25a1.015,1.015,0,0,0,1.177.824l.086-.015a1.015,1.015,0,0,0,.822-1.191L36.307,40.941A1.015,1.015,0,0,0,35.133,40.131Z"
        />

        <path
          className="cls-9"
          d="M35.422,40.743l-.012,0a.621.621,0,0,0-.5.719l1.864,9.5a.621.621,0,0,0,.719.5l.053-.01a.62.62,0,0,0,.5-.728l-1.9-9.492A.62.62,0,0,0,35.422,40.743Z"
        />

        <path
          className="cls-8"
          d="M38.755,38.729l-.017.011a1.016,1.016,0,0,0-.353,1.393l6.026,9.745a1.015,1.015,0,0,0,1.393.352l.075-.044a1.017,1.017,0,0,0,.345-1.406L40.14,39.069A1.016,1.016,0,0,0,38.755,38.729Z"
        />

        <path
          className="cls-9"
          d="M39.243,39.2l-.011.006a.621.621,0,0,0-.215.851l5.116,8.219a.621.621,0,0,0,.851.215l.046-.027a.621.621,0,0,0,.211-.859l-5.152-8.2A.621.621,0,0,0,39.243,39.2Z"
        />

        <path
          className="cls-8"
          d="M37.8,40.884l-.019.006a1.017,1.017,0,0,0-.668,1.273l1.359,4.359a1.017,1.017,0,0,0,1.273.668l.083-.026a1.016,1.016,0,0,0,.663-1.287l-1.423-4.339A1.017,1.017,0,0,0,37.8,40.884Z"
        />

        <path
          className="cls-10"
          d="M38.165,41.454l-.012,0a.621.621,0,0,0-.407.778l.83,2.663a.62.62,0,0,0,.777.407l.051-.016a.62.62,0,0,0,.4-.786l-.869-2.65A.621.621,0,0,0,38.165,41.454Z"
        />

        <path
          className="cls-8"
          d="M28.224,46.56l-.02-.005a1.016,1.016,0,0,0-1.221.757l-1.045,4.445a1.016,1.016,0,0,0,.756,1.222l.086.02a1.017,1.017,0,0,0,1.225-.772l.979-4.46A1.016,1.016,0,0,0,28.224,46.56Z"
        />

        <path
          className="cls-10"
          d="M28.249,47.237l-.012,0a.619.619,0,0,0-.746.462l-.639,2.715a.622.622,0,0,0,.462.747l.052.012a.622.622,0,0,0,.749-.471l.6-2.725A.62.62,0,0,0,28.249,47.237Z"
        />

        <path
          className="cls-8"
          d="M45.622,39.265l-.006.02a1.016,1.016,0,0,0,.62,1.3L50.543,42.1a1.016,1.016,0,0,0,1.3-.621l.029-.083a1.015,1.015,0,0,0-.635-1.3L46.9,38.64A1.017,1.017,0,0,0,45.622,39.265Z"
        />

        <path
          className="cls-10"
          d="M46.3,39.314l0,.011a.621.621,0,0,0,.379.792l2.631.927a.621.621,0,0,0,.792-.379l.017-.051a.62.62,0,0,0-.387-.794l-2.645-.889A.621.621,0,0,0,46.3,39.314Z"
        />

        <path
          className="cls-11"
          d="M54.461,34.655s-8.129,4.522-13.735,1.068,1.065-3.646,1.553-2.035,3.1,1.888,4.821,1.611,4.059-1.07,4.491-2.06S57.2,31.349,54.461,34.655Z"
        />

        <path
          className="cls-12"
          d="M54.022,32.04s-5.862,5.094-11.037,3.238.242-3.162.918-1.93,2.858,1.009,4.216.486,3.132-1.574,3.314-2.456S55.689,28.868,54.022,32.04Z"
        />

        <path
          className="cls-13"
          d="M53.7,36.38s-5.584,3.625-8.371.655,1.226-3.017,1.257-1.668,1.544,1.625,2.616,1.424,2.6-.822,3.014-1.639S55.865,33.675,53.7,36.38Z"
        />

        <path
          className="cls-13"
          d="M54.735,32.186s-6.931,3.61-11.56.581.979-3.038,1.352-1.674,2.56,1.657,4.012,1.464,3.433-.805,3.818-1.626S57.111,29.473,54.735,32.186Z"
        />

        <path
          className="cls-11"
          d="M52.805,27.61s-8.881-2.767-13.664,1.759,1.787,3.351,1.936,1.675,2.65-2.481,4.391-2.561,4.192.219,4.816,1.1S56.161,30.288,52.805,27.61Z"
        />

        <path
          className="cls-14"
          d="M52.141,30.39s-6.207-2.409-8.329,1.068,1.817,2.7,1.571,1.376,1.18-1.906,2.271-1.927,2.709.274,3.285.988S54.817,32.6,52.141,30.39Z"
        />

        <path
          className="cls-15"
          d="M36.69,16.831s-2.538-6.339-7.573-6.024-4.154,3.321-3.938,4.017c.548,1.762,3.04,3.505,4.111,4.555s.609,3.48,2.08,4.664S39.237,24.054,36.69,16.831Z"
        />

        <path
          className="cls-16"
          d="M25.389,12.229s.934-.894,1.229-.9a2.594,2.594,0,0,0-.613,3.6c1.464,2.019,3.687,3.382,4.524,4.552s-.048,4.1,2.936,4.921A2.3,2.3,0,0,1,30.472,22.7c-.584-2.44-.649-3.087-2.281-4.22S23.555,14.457,25.389,12.229Z"
        />

        <path
          className="cls-16"
          d="M25.094,12.946s4.583.861,6.19,2.48,2.088,5.5,3.928,8.358a2.548,2.548,0,0,0,.527-.358,11.325,11.325,0,0,1-1.333-2.97c-.706-2.137-1.267-5.225-4.948-6.47s-3.707-1.665-3.707-1.665Z"
        />

        <path
          className="cls-16"
          d="M29.979,10.82s3.221,1.714,4.264,4.311.738,5.407,2.479,7.114l.194-.422S35.3,19.585,35.6,18.256s-.114-4.838-4.8-7.333Z"
        />

        <path
          className="cls-17"
          d="M31.9,15.42a9.157,9.157,0,0,1,2.141,4.155,9.082,9.082,0,0,0,1.7,3.851l.131-.179a11.823,11.823,0,0,1-1.628-3.74A7.585,7.585,0,0,0,31.9,15.42Z"
        />

        <path
          className="cls-15"
          d="M28.025,17.443s-5.34-4.256-9.561-1.492-1.969,4.94-1.437,5.438c1.348,1.261,4.376,1.544,5.826,1.927s2.249,2.725,4.113,3.027S33.81,22.462,28.025,17.443Z"
        />

        <path
          className="cls-16"
          d="M15.927,19.03s.37-1.238.624-1.387A2.594,2.594,0,0,0,17.8,21.076c2.271,1.031,4.877,1.116,6.183,1.72s1.983,3.584,4.985,2.826a2.3,2.3,0,0,1-3.446-.006c-1.714-1.832-2.091-2.363-4.07-2.541S15.434,21.873,15.927,19.03Z"
        />

        <path
          className="cls-16"
          d="M16.025,19.8s4.409-1.518,6.607-.905,4.535,3.752,7.546,5.324a2.546,2.546,0,0,0,.281-.573,11.313,11.313,0,0,1-2.628-1.922c-1.67-1.508-3.684-3.915-7.5-3.178s-4.045.386-4.045.386Z"
        />

        <path
          className="cls-16"
          d="M19.22,15.536s3.647-.1,5.837,1.64,3.315,4.334,5.672,4.957l-.039-.463s-2.509-1.148-2.908-2.449-2.492-4.149-7.8-4Z"
        />

        <path
          className="cls-17"
          d="M23.166,18.583a9.153,9.153,0,0,1,3.915,2.554,9.089,9.089,0,0,0,3.378,2.508l.025-.219a11.834,11.834,0,0,1-3.264-2.447A7.587,7.587,0,0,0,23.166,18.583Z"
        />

        <path
          className="cls-15"
          d="M20.747,22.267s-6.767-.909-8.97,3.63.848,5.25,1.56,5.4c1.8.39,4.548-.922,5.989-1.338s3.329,1.182,5.084.484S28.289,23.6,20.747,22.267Z"
        />

        <path
          className="cls-16"
          d="M11.181,29.842a4.461,4.461,0,0,1-.175-1.511,2.594,2.594,0,0,0,2.833,2.3c2.478-.282,4.758-1.547,6.188-1.7s3.543,2.057,5.729-.135a2.3,2.3,0,0,1-2.96,1.765c-2.411-.692-3.007-.954-4.8-.09S12.219,32.535,11.181,29.842Z"
        />

        <path
          className="cls-16"
          d="M11.661,30.452s3-3.567,5.2-4.17,5.819.89,9.209.692a2.554,2.554,0,0,0-.053-.635,11.318,11.318,0,0,1-3.242-.3c-2.207-.437-5.172-1.467-8.066,1.125s-3.273,2.408-3.273,2.408Z"
        />

        <path
          className="cls-16"
          d="M12.213,25.153s3.077-1.961,5.851-1.591,5.071,2.016,7.412,1.34l-.271-.377s-2.742.3-3.753-.608-4.269-2.28-8.747.574Z"
        />

        <path
          className="cls-17"
          d="M17.164,25.74a9.169,9.169,0,0,1,4.671.181,9.091,9.091,0,0,0,4.186.418l-.091-.2a11.826,11.826,0,0,1-4.057-.422A7.582,7.582,0,0,0,17.164,25.74Z"
        />

        <path
          className="cls-18"
          d="M40.187,25.688s-4.062-2.438-2.75-5.438-.062-3.25.5-4.625S45.187,13.25,47,16.938s1.375,3.812,3.75,5,4.5,4.25-1.125,4.312S43.625,28.563,40.187,25.688Z"
        />

        <path
          className="cls-19"
          d="M37.5,21.938a3.426,3.426,0,0,1,.281-2.157,7.086,7.086,0,0,0,.406-3.218c.063-.688.625-1.688,1.563-.938s-.188,3.938-.188,6.125,2.688,3.625,4.25,3.625,4.5-.437,4.813.125-4.375,1.313-5.219,1.375C42.045,26.976,38.187,25.125,37.5,21.938Z"
        />

        <path
          className="cls-20"
          d="M50.437,23.563s-4.375.875-4.812-.75,0-2.688-.5-4.375.75-2.063,1.312-1.188,1.063,3.625,2.688,4.25S52.25,23.438,50.437,23.563Z"
        />

        <ellipse
          className="cls-21"
          cx="33.375"
          cy="32.126"
          rx="8.943"
          ry="8.542"
        />

        <path
          className="cls-22"
          d="M36.641,32.126c.031-2.026-1.713-4.089-3.212-5.083l-.054-.035c-1.817-1.176-.2-4.973,4.819-1.322s4.028,9.5,1.684,11.753C37.8,39.431,36.574,36.6,36.641,32.126Z"
        />

        <path
          className="cls-23"
          d="M25.675,32.944a2.246,2.246,0,0,1,.163-1.57c.143-.261.325-.4.524-.063.452.768.646,3.068,2.084,5.039s-.174,1.424-1.042,0A9.671,9.671,0,0,1,25.675,32.944Z"
        />

        <path
          className="cls-24"
          d="M37.158,27.008a.831.831,0,0,1,.07-1.1c.525-.526,1.955.491,1.676,1.286S37.83,28.22,37.158,27.008Z"
        />

        <path
          className="cls-25"
          d="M21.1,29.421s.918-.955-.91-1.021-1.332.772-1.332.772.791-1.507-.495-.838a3.726,3.726,0,0,0-1.641,2.3s-.071-2.071-1.839-.873a1.815,1.815,0,0,0-.685,2.667s-.665.944-1.125.864-.3,1.23-.3,1.23l-.458,1.035s-.111,1.345.842,1.734-1.827-.066-1.9.647S12.643,39.3,12.643,39.3s-1.517.071-.389,1.437a4.13,4.13,0,0,0,3,1.328l-.884.6s.876,1.378,1.324,1.205.4,1.045.979,1.423,1.6-.531,1.6-.531,1.094,1.722,1.968,1.985,1.345-.98,1.345-.98.447.287,1.388-.163,1.664.89,2.387-.971-.77-1.284-.77-1.284,1.676.772,1.8-.116-1.282-1.8-1.282-1.8,2,.589,1.727-1.017a2.292,2.292,0,0,0-1.385-1.937s.292-.56.5-1.023-1.076-1.321-1.076-1.321.215.571-.108-.841a3.683,3.683,0,0,0-1.727-2.156s1.079-.76.733-1.656-2.116-.813-2.116-.813S24.13,29.278,21.1,29.421Z"
        />

        <path
          className="cls-26"
          d="M19.224,29.867a.593.593,0,0,1-.579.608h0a.593.593,0,0,1-.608-.579l-.044-1.781a.594.594,0,0,1,.58-.608h0a.594.594,0,0,1,.608.579Z"
        />

        <path
          className="cls-26"
          d="M20.517,30.572c-.121.125-.41.041-.645-.188h0c-.236-.228-.328-.515-.207-.639l.658-.678c.121-.124.41-.04.645.189h0c.235.228.328.514.207.639Z"
        />

        <path
          className="cls-27"
          d="M18.871,30a.531.531,0,0,1,0,.732h0a.53.53,0,0,1-.693.234l-1.045-.746a.532.532,0,0,1,0-.732h0a.53.53,0,0,1,.693-.234Z"
        />

        <path
          className="cls-26"
          d="M13.481,35.131a.6.6,0,0,1,.065.838h0a.594.594,0,0,1-.837.065l-1.354-1.157a.594.594,0,0,1-.066-.838h0a.6.6,0,0,1,.838-.065Z"
        />

        <path
          className="cls-26"
          d="M14.869,34.641c.012.173-.244.332-.571.354h0c-.327.022-.6-.1-.614-.273l-.064-.942c-.012-.174.244-.332.571-.355h0c.327-.022.6.1.614.274Z"
        />

        <path
          className="cls-27"
          d="M13.342,35.481c.231-.051.476.167.547.487h0a.533.533,0,0,1-.289.673l-1.253.279c-.231.051-.475-.167-.547-.487h0c-.071-.32.058-.622.289-.673Z"
        />

        <path
          className="cls-26"
          d="M16.687,38.571a.6.6,0,0,1-.58.609h0a.594.594,0,0,1-.608-.58l-.043-1.781a.593.593,0,0,1,.579-.608h0a.593.593,0,0,1,.608.579Z"
        />

        <path
          className="cls-26"
          d="M17.979,39.277c-.121.124-.41.04-.645-.189h0c-.235-.228-.328-.514-.207-.639l.658-.677c.121-.125.41-.041.645.188h0c.236.228.328.515.207.639Z"
        />

        <path
          className="cls-27"
          d="M16.334,38.7a.532.532,0,0,1,0,.732h0a.532.532,0,0,1-.693.235L14.6,38.923a.531.531,0,0,1,0-.732h0a.532.532,0,0,1,.693-.235Z"
        />

        <path
          className="cls-26"
          d="M17.357,32.586a.594.594,0,0,1-.58.608h0a.593.593,0,0,1-.608-.579l-.043-1.781a.594.594,0,0,1,.579-.609h0a.594.594,0,0,1,.608.58Z"
        />

        <path
          className="cls-26"
          d="M18.649,33.291c-.121.124-.41.04-.645-.188h0c-.235-.229-.328-.515-.207-.64l.658-.677c.121-.125.41-.04.645.188h0c.236.229.328.515.207.64Z"
        />

        <path
          className="cls-27"
          d="M17,32.717a.532.532,0,0,1,0,.732h0a.533.533,0,0,1-.694.234l-1.044-.746a.531.531,0,0,1,0-.732h0a.532.532,0,0,1,.693-.235Z"
        />

        <path
          className="cls-26"
          d="M24.532,35.187a.594.594,0,0,1-.835-.1h0a.593.593,0,0,1,.1-.834l1.395-1.108a.594.594,0,0,1,.835.1h0a.593.593,0,0,1-.1.834Z"
        />

        <path
          className="cls-26"
          d="M24.748,36.643c-.173-.021-.279-.3-.239-.628h0c.041-.325.214-.572.386-.55l.937.117c.172.021.279.3.238.628h0c-.04.325-.213.572-.385.55Z"
        />

        <path
          className="cls-27"
          d="M24.215,34.984c.006.236-.255.435-.583.444h0c-.328.008-.6-.176-.605-.412l-.034-1.284c-.006-.236.255-.435.583-.443h0c.327-.009.6.175.605.412Z"
        />

        <path
          className="cls-26"
          d="M21.316,39.785a.593.593,0,0,1-.839-.018h0a.594.594,0,0,1,.018-.84L21.782,37.7a.6.6,0,0,1,.84.019h0a.593.593,0,0,1-.019.839Z"
        />

        <path
          className="cls-26"
          d="M21.666,41.216c-.174-.006-.306-.276-.3-.6h0c.011-.328.16-.589.334-.583l.943.03c.174.005.306.275.3.6h0c-.011.328-.16.589-.333.584Z"
        />

        <path
          className="cls-27"
          d="M20.982,39.613c.028.234-.213.456-.539.495h0c-.326.039-.612-.12-.64-.354l-.153-1.275c-.028-.235.214-.457.539-.5h0c.326-.039.613.12.641.355Z"
        />

        <path
          className="cls-26"
          d="M21.635,44.7a.593.593,0,0,1-.579.608h0a.593.593,0,0,1-.608-.579l-.043-1.781a.593.593,0,0,1,.579-.608h0a.593.593,0,0,1,.608.579Z"
        />

        <path
          className="cls-26"
          d="M22.928,45.4c-.121.125-.41.041-.645-.188h0c-.235-.228-.328-.515-.207-.639l.658-.678c.121-.124.41-.04.645.188h0c.235.229.328.515.207.64Z"
        />

        <path
          className="cls-27"
          d="M21.283,44.829a.533.533,0,0,1,0,.732h0a.531.531,0,0,1-.694.234l-1.045-.746a.533.533,0,0,1,0-.732h0a.531.531,0,0,1,.694-.234Z"
        />

        <path
          className="cls-26"
          d="M17.161,42.98a.593.593,0,0,1-.837-.067h0a.593.593,0,0,1,.067-.837l1.357-1.155a.594.594,0,0,1,.837.068h0a.593.593,0,0,1-.067.837Z"
        />

        <path
          className="cls-26"
          d="M17.427,44.429c-.174-.016-.29-.293-.26-.62h0c.029-.327.193-.579.367-.563l.94.085c.173.015.289.293.26.62h0c-.03.326-.194.578-.367.563Z"
        />

        <path
          className="cls-27"
          d="M16.837,42.788c.015.236-.239.444-.567.463h0c-.327.02-.6-.155-.618-.391l-.078-1.281c-.014-.236.24-.444.567-.463h0c.327-.02.6.155.619.391Z"
        />

        <path
          className="cls-26"
          d="M12.7,40.258a.593.593,0,0,1,.492.68h0a.593.593,0,0,1-.68.492l-1.759-.283a.593.593,0,0,1-.492-.68h0a.593.593,0,0,1,.68-.492Z"
        />

        <path
          className="cls-26"
          d="M13.629,39.116c.1.141-.035.41-.3.6h0c-.268.189-.566.228-.667.086l-.545-.771c-.1-.141.035-.41.3-.6h0c.267-.189.566-.228.666-.086Z"
        />

        <path
          className="cls-27"
          d="M12.763,40.628a.533.533,0,0,1,.721.131h0a.532.532,0,0,1,.1.725l-.924.891a.532.532,0,0,1-.72-.131h0a.532.532,0,0,1-.1-.725Z"
        />

        <path
          className="cls-26"
          d="M25.476,39.458a.594.594,0,0,1-.822-.17h0a.6.6,0,0,1,.17-.823l1.489-.978a.6.6,0,0,1,.823.171h0a.594.594,0,0,1-.171.822Z"
        />

        <path
          className="cls-26"
          d="M25.561,40.928c-.17-.037-.251-.326-.182-.647h0c.07-.32.264-.55.434-.513l.922.2c.17.037.251.327.182.647h0c-.07.321-.264.551-.434.514Z"
        />

        <path
          className="cls-27"
          d="M25.179,39.228c-.015.236-.293.41-.62.389h0c-.328-.021-.581-.229-.566-.465l.082-1.281c.015-.236.292-.41.62-.389h0c.327.02.58.229.565.464Z"
        />

        <path
          className="cls-26"
          d="M25.192,43.419a.593.593,0,0,1-.579.608h0a.594.594,0,0,1-.608-.579l-.044-1.782a.6.6,0,0,1,.58-.608h0a.6.6,0,0,1,.608.58Z"
        />

        <path
          className="cls-26"
          d="M26.485,44.124c-.121.124-.41.04-.645-.188h0c-.236-.229-.328-.515-.207-.64l.658-.677c.121-.125.41-.04.645.188h0c.235.229.328.515.207.64Z"
        />

        <path
          className="cls-27"
          d="M24.839,43.549a.531.531,0,0,1,0,.732h0a.532.532,0,0,1-.693.235L23.1,43.77a.532.532,0,0,1,0-.732h0a.532.532,0,0,1,.693-.235Z"
        />

        <path
          className="cls-26"
          d="M19,36.3a.6.6,0,0,1-.829.137h0a.594.594,0,0,1-.137-.829l1.037-1.449a.594.594,0,0,1,.828-.137h0a.6.6,0,0,1,.138.829Z"
        />

        <path
          className="cls-26"
          d="M19.6,37.642c-.172.027-.352-.214-.4-.538h0c-.051-.324.048-.608.219-.635l.933-.145c.172-.027.352.214.4.538h0c.05.324-.048.608-.22.635Z"
        />

        <path
          className="cls-27"
          d="M18.634,36.194c.071.225-.125.488-.438.586h0a.531.531,0,0,1-.7-.229l-.385-1.225c-.071-.226.125-.488.437-.587h0a.533.533,0,0,1,.7.23Z"
        />

        <path
          className="cls-26"
          d="M21.353,32.746a.594.594,0,0,1-.806-.237h0a.6.6,0,0,1,.237-.806l1.565-.853a.593.593,0,0,1,.8.237h0a.594.594,0,0,1-.237.806Z"
        />

        <path
          className="cls-26"
          d="M21.317,34.218c-.166-.051-.223-.346-.127-.66h0c.095-.314.307-.527.474-.476l.9.275c.166.051.223.346.127.66h0c-.095.314-.307.527-.474.476Z"
        />

        <path
          className="cls-27"
          d="M21.076,32.492c-.035.234-.326.385-.65.337h0c-.325-.047-.56-.275-.526-.509l.186-1.271c.034-.233.325-.384.65-.337h0c.324.047.56.276.525.509Z"
        />

        <path
          className="cls-25"
          d="M20.689,51.219s-.854.85.806.947,1.227-.675,1.227-.675-.749,1.354.433.772A3.385,3.385,0,0,0,24.693,50.2s.024,1.885,1.655.831a1.651,1.651,0,0,0,.677-2.412s.623-.844,1.04-.762.295-1.113.295-1.113l.437-.932s.128-1.22-.731-1.593,1.66.1,1.736-.55-1.228-1.259-1.228-1.259,1.38-.034.382-1.3a3.76,3.76,0,0,0-2.7-1.268l.816-.527S26.3,38.047,25.89,38.2s-.346-.958-.862-1.314-1.462.451-1.462.451-.961-1.587-1.75-1.844-1.242.864-1.242.864-.4-.271-1.266.119-1.5-.842-2.19.836.675,1.182.675,1.182-1.509-.735-1.642.069,1.13,1.666,1.13,1.666-1.806-.576-1.591.889a2.084,2.084,0,0,0,1.22,1.79s-.277.5-.477.919.951,1.224.951,1.224-.184-.524.081.766a3.353,3.353,0,0,0,1.527,2s-1,.669-.7,1.491,1.908.781,1.908.781S17.927,51.288,20.689,51.219Z"
        />

        <path
          className="cls-26"
          d="M22.4,50.851a.539.539,0,0,1,.538-.541h0a.541.541,0,0,1,.542.539l0,1.62a.539.539,0,0,1-.539.541h0a.54.54,0,0,1-.541-.539Z"
        />

        <path
          className="cls-26"
          d="M21.238,50.184c.113-.111.374-.028.583.184h0c.209.213.288.475.175.586l-.611.6c-.113.111-.374.029-.583-.184h0c-.21-.212-.288-.475-.175-.586Z"
        />

        <path
          className="cls-27"
          d="M22.723,50.739a.483.483,0,0,1,.012-.665h0a.483.483,0,0,1,.635-.2l.935.7a.484.484,0,0,1-.012.666h0a.483.483,0,0,1-.635.2Z"
        />

        <path
          className="cls-26"
          d="M27.728,46.181a.54.54,0,0,1-.043-.763h0a.541.541,0,0,1,.763-.043l1.208,1.08a.541.541,0,0,1,.042.763h0a.54.54,0,0,1-.762.043Z"
        />

        <path
          className="cls-26"
          d="M26.455,46.6c-.007-.158.229-.3.527-.311h0c.3-.014.545.1.552.261l.04.858c.007.158-.228.3-.526.31h0c-.3.014-.546-.1-.553-.261Z"
        />

        <path
          className="cls-27"
          d="M27.86,45.865c-.21.042-.428-.161-.487-.453h0c-.058-.293.066-.564.276-.606l1.145-.228c.211-.042.429.161.488.453h0c.058.293-.066.564-.276.606Z"
        />

        <path
          className="cls-26"
          d="M24.882,42.988a.541.541,0,0,1,.539-.541h0a.54.54,0,0,1,.541.539l0,1.62a.54.54,0,0,1-.539.541h0a.539.539,0,0,1-.541-.539Z"
        />

        <path
          className="cls-26"
          d="M23.721,42.321c.113-.111.374-.029.583.184h0c.209.213.288.475.175.586l-.612.6c-.112.111-.373.029-.583-.184h0c-.209-.212-.287-.475-.175-.586Z"
        />

        <path
          className="cls-27"
          d="M25.206,42.876a.482.482,0,0,1,.012-.665h0a.484.484,0,0,1,.635-.2l.935.7a.485.485,0,0,1-.012.666h0a.485.485,0,0,1-.636.2Z"
        />

        <path
          className="cls-26"
          d="M24.152,48.417a.54.54,0,0,1,.539-.541h0a.54.54,0,0,1,.542.539l0,1.62a.54.54,0,0,1-.539.541h0a.539.539,0,0,1-.541-.539Z"
        />

        <path
          className="cls-26"
          d="M22.991,47.75c.113-.111.374-.029.583.184h0c.209.212.288.475.175.585l-.612.6c-.112.111-.373.028-.583-.184h0c-.209-.213-.287-.475-.175-.586Z"
        />

        <path
          className="cls-27"
          d="M24.476,48.305a.483.483,0,0,1,.012-.665h0a.484.484,0,0,1,.635-.2l.935.7a.484.484,0,0,1-.012.666h0a.484.484,0,0,1-.635.2Z"
        />

        <path
          className="cls-26"
          d="M17.681,45.907a.541.541,0,0,1,.757.1h0a.541.541,0,0,1-.1.757l-1.291.979a.54.54,0,0,1-.757-.1h0a.541.541,0,0,1,.1-.757Z"
        />

        <path
          className="cls-26"
          d="M17.514,44.579c.156.023.248.281.2.576h0c-.043.3-.2.515-.362.492l-.849-.125c-.156-.023-.248-.281-.2-.576h0c.043-.295.2-.516.361-.493Z"
        />

        <path
          className="cls-27"
          d="M17.965,46.1c0-.215.24-.39.539-.391h0c.3,0,.54.171.541.386l0,1.168c0,.215-.24.39-.538.392h0c-.3,0-.541-.172-.542-.387Z"
        />

        <path
          className="cls-26"
          d="M20.7,41.791a.54.54,0,0,1,.763.034h0a.539.539,0,0,1-.033.763l-1.2,1.094a.54.54,0,0,1-.763-.034h0a.54.54,0,0,1,.034-.763Z"
        />

        <path
          className="cls-26"
          d="M20.408,40.484c.158.008.273.256.257.554h0c-.016.3-.157.533-.315.524l-.857-.046c-.158-.009-.273-.257-.257-.555h0c.016-.3.157-.532.315-.524Z"
        />

        <path
          className="cls-27"
          d="M21,41.955c-.021-.214.2-.411.5-.44h0c.3-.028.554.122.575.336l.113,1.162c.02.214-.2.411-.5.439h0c-.3.029-.555-.121-.575-.335Z"
        />

        <path
          className="cls-26"
          d="M20.506,37.318a.54.54,0,0,1,.539-.541h0a.539.539,0,0,1,.541.539l0,1.62a.541.541,0,0,1-.539.541h0a.54.54,0,0,1-.541-.539Z"
        />

        <path
          className="cls-26"
          d="M19.345,36.651c.113-.111.374-.029.583.184h0c.209.212.288.474.175.585l-.612.6c-.112.111-.373.028-.583-.184h0c-.209-.213-.287-.475-.175-.586Z"
        />

        <path
          className="cls-27"
          d="M20.83,37.206a.483.483,0,0,1,.012-.666h0a.484.484,0,0,1,.635-.2l.935.7a.484.484,0,0,1-.012.665h0a.484.484,0,0,1-.635.2Z"
        />

        <path
          className="cls-26"
          d="M24.54,38.97a.541.541,0,0,1,.76.078h0a.54.54,0,0,1-.079.76L23.964,40.83a.538.538,0,0,1-.759-.078h0a.539.539,0,0,1,.078-.76Z"
        />

        <path
          className="cls-26"
          d="M24.328,37.648c.157.017.257.272.223.568h0c-.033.3-.188.523-.345.5l-.853-.1c-.157-.018-.257-.273-.224-.569h0c.034-.3.188-.522.345-.5Z"
        />

        <path
          className="cls-27"
          d="M24.83,39.151c-.008-.215.227-.4.525-.41h0c.3-.011.546.154.555.369l.044,1.166c.009.215-.226.4-.524.41h0c-.3.011-.547-.153-.555-.368Z"
        />

        <path
          className="cls-26"
          d="M28.542,41.535a.539.539,0,0,1-.434-.628h0a.54.54,0,0,1,.629-.434l1.593.293a.54.54,0,0,1,.434.629h0a.54.54,0,0,1-.629.433Z"
        />

        <path
          className="cls-26"
          d="M27.673,42.555c-.088-.131.041-.372.288-.539h0c.247-.167.519-.2.608-.065l.48.711c.088.131-.04.373-.287.54h0c-.248.167-.52.2-.608.065Z"
        />

        <path
          className="cls-27"
          d="M28.491,41.2a.485.485,0,0,1-.653-.133h0a.484.484,0,0,1-.079-.661l.858-.792a.486.486,0,0,1,.653.134h0a.484.484,0,0,1,.079.661Z"
        />

        <path
          className="cls-26"
          d="M16.908,42.005a.541.541,0,0,1,.745.171h0a.541.541,0,0,1-.172.745l-1.374.859a.54.54,0,0,1-.744-.172h0a.54.54,0,0,1,.172-.744Z"
        />

        <path
          className="cls-26"
          d="M16.861,40.666c.154.037.222.3.152.592h0c-.07.29-.251.495-.405.458l-.834-.2c-.154-.037-.222-.3-.152-.592h0c.07-.29.251-.5.405-.458Z"
        />

        <path
          className="cls-27"
          d="M17.174,42.22c.019-.214.274-.367.572-.341h0c.3.025.523.219.5.434l-.1,1.163c-.019.214-.275.367-.572.342h0c-.3-.026-.523-.22-.5-.434Z"
        />

        <path
          className="cls-26"
          d="M17.247,38.409a.54.54,0,0,1,.539-.541h0a.541.541,0,0,1,.541.539l0,1.62a.54.54,0,0,1-.539.542h0a.541.541,0,0,1-.541-.539Z"
        />

        <path
          className="cls-26"
          d="M16.085,37.742c.113-.111.374-.028.583.184h0c.21.213.288.475.175.586l-.611.6c-.113.111-.374.029-.583-.184h0c-.21-.212-.288-.474-.175-.585Z"
        />

        <path
          className="cls-27"
          d="M17.57,38.3a.484.484,0,0,1,.012-.666h0a.483.483,0,0,1,.635-.2l.935.7a.484.484,0,0,1-.012.666h0a.483.483,0,0,1-.635.2Z"
        />

        <path
          className="cls-26"
          d="M22.738,45.006a.54.54,0,0,1,.756-.109h0a.54.54,0,0,1,.108.756l-.972,1.3a.54.54,0,0,1-.756.108h0a.54.54,0,0,1-.108-.756Z"
        />

        <path
          className="cls-26"
          d="M22.212,43.774c.156-.021.315.2.355.5h0c.039.3-.056.552-.213.573l-.851.113c-.157.021-.315-.2-.355-.5h0c-.039-.3.056-.552.213-.573Z"
        />

        <path
          className="cls-27"
          d="M23.063,45.111c-.06-.207.124-.441.41-.525h0a.485.485,0,0,1,.628.223l.326,1.121c.06.207-.124.442-.41.525h0a.485.485,0,0,1-.628-.223Z"
        />

        <path
          className="cls-26"
          d="M20.522,48.191a.54.54,0,0,1,.728.232h0a.54.54,0,0,1-.232.728l-1.44.744a.539.539,0,0,1-.727-.232h0a.54.54,0,0,1,.231-.728Z"
        />

        <path
          className="cls-26"
          d="M20.584,46.853c.15.05.2.319.1.6h0c-.093.283-.291.473-.441.423l-.815-.268c-.15-.05-.2-.319-.1-.6h0c.093-.283.29-.473.441-.423Z"
        />

        <path
          className="cls-27"
          d="M20.769,48.427c.036-.212.3-.343.6-.293h0c.3.049.5.261.468.473l-.194,1.152c-.036.212-.3.343-.6.294h0c-.294-.05-.5-.262-.468-.474Z"
        />
      </g>
    </svg>
  );
};
export default BiBiBumSVG;