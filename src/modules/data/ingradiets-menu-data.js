import bun from "/src/images/bun_middle.svg";
import cheese from "/src/images/Type=cheese.svg";
import cucumber from "/src/images/Type=cucumber.png";
import cutlet from '/src/images/Type=cutlet.svg';
import mayo from "/src/images/Type=mayo.svg";
import onion from "/src/images/Type=onion.png";
import salad from "/src/images/Type=salad.svg";
import tomato from "/src/images/Type=tomato.png";

function ingradientMenuData() {
   const ingradientMenu = [{
         imgSource: cutlet,
         imgAlt: "cutlet",
         parentSelector: ".main__botside",
         munusButSelector: "cutletMinus",
         plusButSelector: "cutletPlus",
         counterSelector: "cutletCount",
         title: "Cutlet",
      },
      {
         imgSource: mayo,
         imgAlt: "mayo",
         parentSelector: ".main__botside",
         munusButSelector: "mayoMinus",
         plusButSelector: "mayoPlus",
         counterSelector: "mayoCount",
         title: "Mayo",
      },
      {
         imgSource: onion,
         imgAlt: "onion",
         parentSelector: ".main__botside",
         munusButSelector: "onionMinus",
         plusButSelector: "onionPlus",
         counterSelector: "onionCount",
         title: "Onion",
      },
      {
         imgSource: tomato,
         imgAlt: "tomato",
         parentSelector: ".main__botside",
         munusButSelector: "tomatoMinus",
         plusButSelector: "tomatoPlus",
         counterSelector: "tomatoCount",
         title: "Tomato",
      },
      {
         imgSource: cucumber,
         imgAlt: "cucumber",
         parentSelector: ".main__botside",
         munusButSelector: "cucumberMinus",
         plusButSelector: "cucumberPlus",
         counterSelector: "cucumberCount",
         title: "Cucumber",
      },
      {
         imgSource: cheese,
         imgAlt: "cheese",
         parentSelector: ".main__botside",
         munusButSelector: "cheeseMinus",
         plusButSelector: "cheesePlus",
         counterSelector: "cheeseCount",
         title: "Cheese",
      },
      {
         imgSource: salad,
         imgAlt: "salad",
         parentSelector: ".main__botside",
         munusButSelector: "saladMinus",
         plusButSelector: "saladPlus",
         counterSelector: "saladCount",
         title: "Salad",
      },
      {
         imgSource: bun,
         imgAlt: "bun",
         parentSelector: ".main__botside",
         munusButSelector: "bunMinus",
         plusButSelector: "bunPlus",
         counterSelector: "bunCount",
         title: "Bun",
      },
   ]

   return ingradientMenu;
}

export default ingradientMenuData;