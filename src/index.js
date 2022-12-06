import {
   modal,
   modalP
} from "./modules/modal";
import ui from "./modules/ui";
import burgerConstructor from "./modules/burger-constructor";
import pageChanger from "./modules/page-changer";
import firstPageAnimat from "./modules/first-page-animat";
import ingradientMenu from "./modules/ingradient-menu"
import ingradientMenuData from "./modules/data/ingradiets-menu-data";
import itemCalculationData from "./modules/data/calculation-item-data";

import "./styles/index.scss";

const dataForVisualization = {
   itemImg: {
      cutletKey: [],
      mayoKey: [],
      onionKey: [],
      tomatoKey: [],
      cucumberKey: [],
      cheeseKey: [],
      saladKey: [],
      bunKey: []
   },
   margin: {
      cutletMar: [],
      mayoMar: [],
      onionMar: [],
      tomatoMar: [],
      cucumberMar: [],
      cheeseMar: [],
      saladMar: [],
      bunMar: []
   },
   sum: {
      cutletSum: [],
      mayoSum: [],
      onionSum: [],
      tomatoSum: [],
      cucumberSum: [],
      cheeseSum: [],
      saladSum: [],
      bunSum: []
   },
   time: {
      cutletTime: [],
      mayoTime: [],
      onionTime: [],
      tomatoTime: [],
      cucumberTime: [],
      cheeseTime: [],
      saladTime: [],
      bunTime: []
   },
   oz: {
      cutletOz: [],
      mayoOz: [],
      onionOz: [],
      tomatoOz: [],
      cucumberOz: [],
      cheeseOz: [],
      saladOz: [],
      bunOz: []
   },
   kcal: {
      cutletKcal: [],
      mayoKcal: [],
      onionKcal: [],
      tomatoKcal: [],
      cucumberKcal: [],
      cheeseKcal: [],
      saladKcal: [],
      bunKcal: []
   }
};

const orderData = {
   recipe: [],
   sum: [0],
   time: [0],
   oz: [0],
   kcal: [0],
}


window.onload = function () {
   document.body.classList.add('loaded_hiding');
   window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
   }, 500);
}

window.addEventListener("DOMContentLoaded", () => {

   document.body.style.overflow = "hidden";

   const firstPageBtn = document.querySelector("#first-page-btn");
   const secondPageBtn = document.querySelector("#second-page-btn");
   const wrapper = document.querySelector(".main__wrapper");
   const field = document.querySelector(".main__inner");
   const pages = document.querySelectorAll(".forslide");
   const page1 = document.querySelector(".main__inner-pg1");
   const page2 = document.querySelector(".main__inner-pg2");
   const bigBtn = document.querySelector(".main__btn");

   ingradientMenu(ingradientMenuData);
   firstPageAnimat(bigBtn, firstPageBtn, secondPageBtn);
   pageChanger(firstPageBtn, secondPageBtn, wrapper, field, pages, page1, page2, bigBtn);
   ui();
   burgerConstructor(dataForVisualization, orderData, itemCalculationData);
   modal();
   modalP();
});