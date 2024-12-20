interface SVGProps {
  width?: string;
  height?: string;
  fill?: string;
}

const Grapes = ({ width, height, fill }: SVGProps) => {
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

      <g id="_x32_2_Purple_Grapes">
        <g id="XMLID_1105_">
          <g id="XMLID_1106_">
            <path
              className="st0"
              d="M65.694,10.65c-3.275,4.901-3.678,10.629-1.661,15.614     c5.841-0.739,11.276-3.749,14.551-8.65C81.858,12.713,82.261,6.985,80.245,2C74.403,2.739,68.968,5.749,65.694,10.65z"
              id="XMLID_1108_"
            ></path>

            <path
              className="st52"
              d="M64.473,45.501c-1.104,0-2-0.896-2-2V29.899c0-4.505-2.337-8.669-6.251-11.138     c-0.935-0.589-1.214-1.824-0.625-2.759c0.59-0.934,1.825-1.213,2.758-0.624c5.083,3.206,8.117,8.634,8.117,14.521v13.602     C66.473,44.605,65.577,45.501,64.473,45.501z"
            ></path>
          </g>

          <g id="XMLID_1109_">
            <ellipse
              className="st53"
              cx="92.237"
              cy="51.952"
              id="XMLID_1126_"
              rx="10.763"
              ry="10.549"
            ></ellipse>

            <ellipse
              className="st54"
              cx="35.763"
              cy="51.952"
              id="XMLID_1125_"
              rx="10.763"
              ry="10.549"
            ></ellipse>

            <ellipse
              className="st53"
              cx="53.71"
              cy="43.501"
              id="XMLID_1124_"
              rx="10.763"
              ry="10.549"
            ></ellipse>

            <ellipse
              className="st55"
              cx="73.566"
              cy="43.501"
              id="XMLID_1123_"
              rx="10.763"
              ry="10.549"
            ></ellipse>

            <ellipse
              className="st53"
              cx="64.473"
              cy="57.969"
              id="XMLID_1122_"
              rx="10.763"
              ry="10.549"
            ></ellipse>

            <ellipse
              className="st54"
              cx="84.329"
              cy="57.969"
              id="XMLID_1121_"
              rx="10.763"
              ry="10.549"
            ></ellipse>

            <ellipse
              className="st55"
              cx="46.526"
              cy="59.014"
              id="XMLID_1120_"
              rx="10.763"
              ry="10.549"
            ></ellipse>

            <ellipse
              className="st54"
              cx="35.763"
              cy="71.773"
              id="XMLID_1119_"
              rx="10.763"
              ry="10.549"
            ></ellipse>

            <ellipse
              className="st53"
              cx="53.71"
              cy="73.036"
              id="XMLID_1118_"
              rx="10.763"
              ry="10.549"
            ></ellipse>

            <ellipse
              className="st55"
              cx="73.566"
              cy="73.036"
              id="XMLID_1117_"
              rx="11.788"
              ry="11.367"
            ></ellipse>

            <ellipse
              className="st53"
              cx="90.099"
              cy="71.773"
              id="XMLID_1116_"
              rx="10.763"
              ry="10.549"
            ></ellipse>

            <ellipse
              className="st55"
              cx="45.501"
              cy="87.969"
              id="XMLID_1115_"
              rx="11.788"
              ry="11.367"
            ></ellipse>

            <ellipse
              className="st54"
              cx="64.518"
              cy="87.974"
              id="XMLID_1114_"
              rx="11.598"
              ry="11.367"
            ></ellipse>

            <ellipse
              className="st53"
              cx="84.329"
              cy="87.969"
              id="XMLID_1113_"
              rx="11.598"
              ry="11.367"
            ></ellipse>

            <ellipse
              className="st53"
              cx="56.264"
              cy="101.942"
              id="XMLID_1112_"
              rx="10.763"
              ry="10.549"
            ></ellipse>

            <ellipse
              className="st55"
              cx="75.235"
              cy="102.703"
              id="XMLID_1111_"
              rx="10.763"
              ry="10.549"
            ></ellipse>

            <ellipse
              className="st54"
              cx="67.027"
              cy="115.451"
              id="XMLID_1110_"
              rx="10.763"
              ry="10.549"
            ></ellipse>
          </g>

          <g id="XMLID_1843_">
            <ellipse
              className="st56"
              cx="31.446"
              cy="49.727"
              id="XMLID_1737_"
              rx="2.266"
              ry="3.422"
            ></ellipse>

            <ellipse
              className="st56"
              cx="51.443"
              cy="41.404"
              id="XMLID_1753_"
              rx="2.266"
              ry="3.422"
            ></ellipse>

            <ellipse
              className="st56"
              cx="42.947"
              cy="56.57"
              id="XMLID_1746_"
              rx="2.266"
              ry="3.422"
            ></ellipse>

            <ellipse
              className="st56"
              cx="31.446"
              cy="69.562"
              id="XMLID_1770_"
              rx="2.266"
              ry="3.422"
            ></ellipse>

            <ellipse
              className="st56"
              cx="40.68"
              cy="85.743"
              id="XMLID_1773_"
              rx="2.266"
              ry="3.422"
            ></ellipse>

            <ellipse
              className="st56"
              cx="53.71"
              cy="99.212"
              id="XMLID_1776_"
              rx="2.266"
              ry="3.422"
            ></ellipse>

            <ellipse
              className="st56"
              cx="50.654"
              cy="69.562"
              id="XMLID_1781_"
              rx="2.266"
              ry="3.422"
            ></ellipse>

            <ellipse
              className="st56"
              cx="62.803"
              cy="54.049"
              id="XMLID_1784_"
              rx="2.266"
              ry="3.422"
            ></ellipse>

            <ellipse
              className="st56"
              cx="73.566"
              cy="40.079"
              id="XMLID_1793_"
              rx="2.266"
              ry="3.422"
            ></ellipse>

            <ellipse
              className="st56"
              cx="71.3"
              cy="69.562"
              id="XMLID_1796_"
              rx="2.266"
              ry="3.422"
            ></ellipse>

            <ellipse
              className="st56"
              cx="62.803"
              cy="84.268"
              id="XMLID_1799_"
              rx="2.266"
              ry="3.422"
            ></ellipse>

            <ellipse
              className="st56"
              cx="72.731"
              cy="99.199"
              id="XMLID_1802_"
              rx="2.266"
              ry="3.422"
            ></ellipse>

            <ellipse
              className="st56"
              cx="64.473"
              cy="113.252"
              id="XMLID_1805_"
              rx="2.266"
              ry="3.422"
            ></ellipse>

            <ellipse
              className="st56"
              cx="81.474"
              cy="85.743"
              id="XMLID_1808_"
              rx="2.266"
              ry="3.422"
            ></ellipse>

            <ellipse
              className="st56"
              cx="89.971"
              cy="68.517"
              id="XMLID_1811_"
              rx="2.266"
              ry="3.422"
            ></ellipse>

            <ellipse
              className="st56"
              cx="81.474"
              cy="56.57"
              id="XMLID_1815_"
              rx="2.266"
              ry="3.422"
            ></ellipse>

            <ellipse
              className="st56"
              cx="95.092"
              cy="47.42"
              id="XMLID_1825_"
              rx="2.266"
              ry="3.422"
            ></ellipse>
          </g>
        </g>
      </g>

      <g id="_x32_1_Melon"></g>

      <g id="_x32_0_Green_Grapes"></g>

      <g id="_x31_9_Papaya"></g>

      <g id="_x31_8_Pineapple"></g>

      <g id="_x31_7_Banana"></g>

      <g id="_x31_6_Tender_Coconut"></g>

      <g id="_x31_5_Strawberry"></g>

      <g id="_x31_4_Dragon_Fruit"></g>

      <g id="_x31_3_Plum"></g>

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

export default Grapes;
