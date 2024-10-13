import BeetleSVG from "./animals/Beetle";
import CrabSVG from "./animals/Crab";
import MonkeyFace from "./animals/MonkeyFace";
import Panda from "./animals/Panda";
import PigFace from "./animals/PigFace";
import Turtle from "./animals/Turtle";
import FrankensteinFace from "./fantasy/FrankensteinFace";
import SlimeMonster from "./fantasy/SlimeMonster";
import SpiritedAway from "./fantasy/SpiritedAway";
import Totoro from "./fantasy/Totoro";
import BiBiBumSVG from "./food/Bibimbub";
import Grapes from "./food/Grapes";
import HotChocolate from "./food/HotChocolate";
import Icecream from "./food/IceCream";
import Kebab from "./food/Kebab";
import NoodleBowl from "./food/NoodleBowl";
import Orange from "./food/Orange";
import Plum from "./food/Plum";
import PumpkinPie from "./food/PumpkinPie";
import RamenBowl from "./food/RamenBowl";
import SpaFace from "./people/SpaFace";

const Icons = [
  {
    Animals: [
      <BeetleSVG key={"beetle"} />,
      <CrabSVG key="crab" />,
      <MonkeyFace key="monkeyFace" />,
      <Panda key="panda" />,
      <PigFace key="pigFace" />,
      <Turtle key="turtle" />,
    ],
  },
  {
    Fantasy: [
      <FrankensteinFace key="frankensteinFace" />,
      <SlimeMonster key="slimeMonster" />,
      <SpiritedAway key="spiritedAway" />,
      <Totoro key="totoro" />,
    ],
  },
  {
    Food: [
      <BiBiBumSVG key="bibibum" />,
      <Grapes key="grapes" />,
      <HotChocolate key="hotChocolate" />,
      <Icecream key="icecream" />,
      <Kebab key="kebab" />,
      <NoodleBowl key="noodleBowl" />,
      <Orange key="orange" />,
      <Plum key="plum" />,
      <PumpkinPie key="pumpkinPie" />,
      <RamenBowl key="ramenBowl" />,
    ],
  },
  { People: [<SpaFace key="spaFace" />] },
];

export default Icons;
