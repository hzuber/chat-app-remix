interface SVGProps {
  width?: string;
  height?: string;
  fill?: string;
}

const Plum = ({ width, height, fill }: SVGProps) => {
  return (
    <svg
      width={width || "100"}
      height={height || "100"}
      fill={fill || "currentColor"}
      viewBox="0 0 128 128"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <style type="text/css">{`.st0{fill:#69A401;}
	.st1{fill:#EFE691;}
	.st2{fill:#B20000;}
	.st3{fill:#DF1801;}
	.st4{fill:#F40603;}
	.st5{fill:#FFEEEE;}
	.st6{fill:#847B3C;}
	.st7{fill:#CEB600;}
	.st8{fill:#F8CD02;}
	.st9{fill:#F7C800;}
	.st10{fill:#F6E8B9;}
	.st11{fill:#F6E9CA;}
	.st12{fill:#CF8A11;}
	.st13{fill:#286F0D;}
	.st14{fill:#63271D;}
	.st15{fill:#EB8102;}
	.st16{fill:#E37303;}
	.st17{fill:#D97102;}
	.st18{fill:#BF6302;}
	.st19{fill:#EA9735;}
	.st20{fill:#3E1A01;}
	.st21{fill:#C96A0A;}
	.st22{fill:#CE2335;}
	.st23{fill:#C0242D;}
	.st24{fill:#BA1A23;}
	.st25{fill:#F9DCC7;}
	.st26{fill:#DBE2CE;}
	.st27{fill:#7D4B12;}
	.st28{fill:#75480C;}
	.st29{fill:#66410C;}
	.st30{fill:#88550D;}
	.st31{fill:#FFFEE9;}
	.st32{fill:#9B9F1A;}
	.st33{fill:#F6E177;}
	.st34{fill:#443A00;}
	.st35{fill:#305209;}
	.st36{fill:#7F7C04;}
	.st37{fill:#BAB424;}
	.st38{fill:#F7CF43;}
	.st39{fill:#DE940E;}
	.st40{fill:#5F570A;}
	.st41{fill:#175424;}
	.st42{fill:#215B25;}
	.st43{fill:#1B5020;}
	.st44{fill:#C0F9C0;}
	.st45{fill:#F3DA78;}
	.st46{fill:#BC441C;}
	.st47{fill:#148E2E;}
	.st48{fill:#283767;}
	.st49{fill:#425285;}
	.st50{fill:#CFDFFF;}
	.st51{fill:#1F2C55;}
	.st52{fill:#776220;}
	.st53{fill:#90236B;}
	.st54{fill:#5D1A47;}
	.st55{fill:#99499A;}
	.st56{fill:#FCCAFA;}
	.st57{fill:#917C31;}
	.st58{fill:#F4C435;}
	.st59{fill:#F1BC02;}
	.st60{fill:#F0B102;}
	.st61{fill:#F1F7BA;}
	.st62{fill:#E3DCB9;}
	.st63{fill:#BD6800;}
	.st64{fill:#E19704;}
	.st65{fill:#B2CA2B;}
	.st66{fill:#AFC20F;}
	.st67{fill:#B9CB00;}
	.st68{fill:#E5F392;}
	.st69{fill:#F78202;}
	.st70{fill:#F79613;}
	.st71{fill:#331F07;}
	.st72{fill:#402B16;}
	.st73{fill:#669404;}
	.st74{fill:#F58E13;}
	.st75{fill:#D87117;}
	.st76{fill:#216604;}
	.st77{fill:#286D08;}
	.st78{fill:#C8C625;}
	.st79{fill:#2C441F;}
	.st80{fill:#F1E6BF;}
	.st81{fill:#F2BE2E;}
	.st82{fill:#BF8F33;}
	.st83{fill:#568804;}
	.st84{fill:#669614;}
	.st85{fill:#688E0C;}
	.st86{fill:#4C7005;}
	.st87{fill:#A0CA49;}
	.st88{fill:#99BD70;}
	.st89{fill:#78AA25;}
	.st90{fill:#4B7C23;}
	.st91{fill:#EADBC8;}
	.st92{fill:#F0D5B0;}
	.st93{fill:#DF2B2B;}
	.st94{fill:#D1262C;}
	.st95{fill:#B7252C;}
	.st96{fill:#46670C;}
	.st97{fill:#F49D5B;}
	.st98{fill:#F57A55;}
	.st99{fill:#F1C3A7;}
	.st100{fill:#CC0917;}
	.st101{fill:#DC1035;}
	.st102{fill:#9BAC0F;}
	.st103{fill:#667A1D;}
	.st104{fill:#7A9D18;}
	.st105{fill:#F6F7E6;}
	.st106{fill:#F0194D;}
	.st107{fill:#362420;}
	.st108{fill:#530618;}
	.st109{fill:#44041A;}
	.st110{fill:#490419;}
	.st111{fill:#F8A459;}
	.st112{fill:#871B22;}
	.st113{fill:#600613;}
	.st114{fill:#F8C790;}
	.st115{fill:#447832;}
	.st116{fill:#7C473D;}
	.st117{fill:#441432;}
	.st118{fill:#51163F;}
	.st119{fill:#5B1A41;}
	.st120{fill:#FCEBF9;}
	.st121{fill:#ECE5CE;}
	.st122{fill:#BC3E2C;}
	.st123{fill:#A60F26;}
	.st124{fill:#C61632;}
	.st125{fill:#BD1331;}
	.st126{fill:#F8B772;}
	.st127{fill:#F7DDAC;}
	.st128{fill:#850E11;}
	.st129{fill:#191200;}
	.st130{fill:#553D2D;}
	.st131{fill:#F9E2D2;}
	.st132{fill:#CA8937;}
	.st133{fill:#462D16;}
	.st134{fill:#6D8916;}
	.st135{fill:#96B54E;}
	.st136{fill:#E3E2DE;}
	.st137{fill:#261811;}
	.st138{fill:#525C11;}
	.st139{fill:#14581E;}
	.st140{fill:#3D7712;}
	.st141{fill:#9BC148;}
	.st142{fill:#E22434;}
	.st143{fill:#C6DD9E;}
	.st144{fill:#F89A07;}
	.st145{fill:#F7A410;}
	.st146{fill:#F8AB19;}
	.st147{fill:#F7B81C;}
	.st148{fill:#E5870A;}
	.st149{fill:#97A304;}
	.st150{fill:#A88C5C;}
	.st151{fill:#ADC21E;}
	.st152{fill:#A3BA0B;}
	.st153{fill:#8D9E08;}
	.st154{fill:#E0DAB9;}
	.st155{fill:#684219;}
	.st156{fill:#777F05;}
	.st157{fill:#F2E9C4;}
	.st158{fill:#CBB465;}
	.st159{fill:#FFF5CA;}
	.st160{fill:#E52828;}
	.st161{fill:#F87302;}
	.st162{fill:#FF7B22;}
	.st163{fill:#FC7F10;}
	.st164{fill:#F8A200;}
	.st165{fill:#F8DC91;}
	.st166{fill:#FFFFFF;}
	.st167{fill:#F5D7D5;}
	.st168{fill:#EDA07A;}
	.st169{fill:#FCBEBE;}
	.st170{fill:#EAD991;}
	.st171{fill:#582612;}`}</style>

      <g id="_x33_0_Mulberry"></g>

      <g id="_x32_9_Star_Fruit"></g>

      <g id="_x32_8_Apricot"></g>

      <g id="_x32_7_Litchi"></g>

      <g id="_x32_6_Kiwi"></g>

      <g id="_x32_5_Jackfruit"></g>

      <g id="_x32_4_Avacado"></g>

      <g id="_x32_3_Blueberry"></g>

      <g id="_x32_2_Purple_Grapes"></g>

      <g id="_x32_1_Melon"></g>

      <g id="_x32_0_Green_Grapes"></g>

      <g id="_x31_9_Papaya"></g>

      <g id="_x31_8_Pineapple"></g>

      <g id="_x31_7_Banana"></g>

      <g id="_x31_6_Tender_Coconut"></g>

      <g id="_x31_5_Strawberry"></g>

      <g id="_x31_4_Dragon_Fruit"></g>

      <g id="_x31_3_Plum">
        <g id="XMLID_817_">
          <g id="XMLID_826_">
            <g id="XMLID_829_">
              <path
                className="st35"
                d="M43.091,11.185c-3.337,5.204-3.747,11.286-1.692,16.579      c5.952-0.785,11.49-3.981,14.827-9.185S59.973,7.293,57.918,2C51.966,2.785,46.428,5.981,43.091,11.185z"
                id="XMLID_831_"
              ></path>

              <path
                className="st14"
                d="M41.847,36.207c-1.104,0-2-0.896-2-2v-2.583c0-4.841-2.399-9.309-6.418-11.952      c-0.923-0.606-1.179-1.847-0.572-2.77c0.606-0.923,1.847-1.179,2.77-0.572c5.148,3.384,8.221,9.102,8.221,15.293v2.583      C43.847,35.311,42.951,36.207,41.847,36.207z"
              ></path>
            </g>

            <path
              className="st108"
              d="M77.655,78.742c3.243-10.35,2.96-19.166,1.716-25.657     C77.02,40.818,66.966,31.398,54.763,30.838c-0.432-0.02-0.866-0.03-1.303-0.03c-4.443,0-6.587,1.043-10.322,2.891     c-0.772,0.382-1.675,0.382-2.446,0c-3.736-1.848-5.88-2.891-10.322-2.891c-15.546,0-26.046,11.334-28.148,28.35     c-1.777,14.383,6.841,56.209,39.041,54.989C67.482,113.154,75.826,85.001,77.655,78.742z"
              id="XMLID_832_"
            ></path>

            <path
              className="st109"
              d="M21.854,59.158c1.565-12.668,7.787-22.182,17.277-26.22     c-2.854-1.367-4.977-2.13-8.763-2.13c-15.546,0-26.046,11.334-28.148,28.35c-1.777,14.383,6.841,56.209,39.041,54.989     c3.118-0.118,5.975-0.63,8.606-1.434C26.697,105.308,20.299,71.738,21.854,59.158z"
              id="XMLID_694_"
            ></path>

            <path
              className="st110"
              d="M12.554,59.158c1.835-14.85,10.067-25.371,22.465-27.809     c-1.34-0.348-2.791-0.541-4.651-0.541c-15.546,0-26.046,11.334-28.148,28.35c-1.777,14.383,6.841,56.209,39.041,54.989     c1.33-0.05,2.602-0.188,3.841-0.371C18.229,109.569,10.902,72.522,12.554,59.158z"
              id="XMLID_237_"
            ></path>

            <path
              className="st25"
              d="M18.52,82.19c-0.53,0-1.04-0.21-1.42-0.58c-0.37-0.37-0.58-0.89-0.58-1.41c0-0.53,0.21-1.05,0.58-1.42     c0.75-0.74,2.09-0.74,2.83,0c0.38,0.37,0.59,0.89,0.59,1.42c0,0.52-0.21,1.04-0.59,1.41C19.56,81.98,19.05,82.19,18.52,82.19z"
            ></path>

            <path
              className="st25"
              d="M15.116,74.492c-0.836,0-1.615-0.528-1.896-1.365c-3.344-9.978-1.675-19.554,1.702-23.856     c0.682-0.868,1.94-1.021,2.808-0.338c0.869,0.682,1.021,1.939,0.338,2.808c-2.112,2.691-4.267,10.533-1.055,20.115     c0.351,1.047-0.214,2.181-1.261,2.532C15.541,74.458,15.327,74.492,15.116,74.492z"
            ></path>
          </g>

          <g id="XMLID_818_">
            <path
              className="st111"
              d="M123.785,95.386c2.779-8.943,2.537-16.56,1.471-22.169     c-2.014-10.599-10.629-18.739-21.087-19.223c-0.37-0.017-0.742-0.026-1.117-0.026c-3.807,0-5.644,0.901-8.845,2.498     c-0.661,0.33-1.435,0.33-2.096,0c-3.201-1.597-5.038-2.498-8.845-2.498c-13.321,0-22.814,9.741-24.12,24.496     C58.058,90.737,66.414,126,92.6,125.977C115.084,125.958,122.218,100.793,123.785,95.386z"
              id="XMLID_825_"
            ></path>

            <g id="XMLID_820_">
              <ellipse
                className="st112"
                cx="92.478"
                cy="89.984"
                id="XMLID_824_"
                rx="12.034"
                ry="17.913"
              ></ellipse>

              <path
                className="st113"
                d="M95.438,91.984h-4.73c-1.104,0-2-0.896-2-2s0.896-2,2-2h4.73c1.104,0,2,0.896,2,2      S96.543,91.984,95.438,91.984z"
              ></path>

              <path
                className="st113"
                d="M95.438,84.147h-4.73c-1.104,0-2-0.896-2-2s0.896-2,2-2h4.73c1.104,0,2,0.896,2,2      S96.543,84.147,95.438,84.147z"
              ></path>

              <path
                className="st113"
                d="M95.438,99.821h-4.73c-1.104,0-2-0.896-2-2s0.896-2,2-2h4.73c1.104,0,2,0.896,2,2      S96.543,99.821,95.438,99.821z"
              ></path>
            </g>

            <path
              className="st114"
              d="M70.583,94.043c-0.837,0-1.616-0.528-1.896-1.365c-3.344-9.979-1.675-19.554,1.702-23.856     c0.682-0.869,1.94-1.021,2.809-0.338s1.02,1.939,0.338,2.808c-2.113,2.691-4.268,10.532-1.056,20.115     c0.351,1.047-0.214,2.181-1.261,2.532C71.008,94.01,70.793,94.043,70.583,94.043z"
            ></path>

            <path
              className="st109"
              d="M123.785,89.186c-1.567,5.408-8.717,29.734-31.185,30.592     c-23.562,0.9-32.382-25.311-33.51-40.729c-1.238,12.922,6.326,47.968,33.51,46.929c22.468-0.858,29.618-25.184,31.185-30.592     c2.036-6.551,2.447-12.387,2.104-17.247C125.652,81.522,125.016,85.223,123.785,89.186z"
              id="XMLID_437_"
            ></path>
          </g>
        </g>
      </g>

      <g id="_x31_2_Fig"></g>

      <g id="_x31_1_Peach"></g>

      <g id="_x31_0_Cherry"></g>

      <g id="_x30_9_Sapota"></g>

      <g id="_x30_8_Custard_Apple"></g>

      <g id="_x30_7_Watermelon"></g>

      <g id="_x30_6_Mango"></g>

      <g id="_x30_5_Pear"></g>

      <g id="_x30_4_Guava"></g>

      <g id="_x30_3_Pomegranate"></g>

      <g id="_x30_2_Orange"></g>

      <g id="_x30_1_Apple"></g>
    </svg>
  );
};

export default Plum;
