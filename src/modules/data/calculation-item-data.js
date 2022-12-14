function itemCalculationData(dataForVisualization, orderData) {
   const itemCalculationData = [{
         minusBtnSelector: "cutletMinus",
         plusBtnSelector: "cutletPlus",
         countSelector: "cutletCount",
         title: "Cutlet",
         itemSelector: "item__cutlet",
         price: 3,
         time: 4,
         oz: 7,
         kcal: 600,
         dataVis: dataForVisualization,
         dataOrder: orderData,
         imgKey: dataForVisualization.itemImg.cutletKey,
         priceKey: dataForVisualization.sum.cutletSum,
         timeKey: dataForVisualization.time.cutletTime,
         ozKey: dataForVisualization.oz.cutletOz,
         kcalKey: dataForVisualization.kcal.cutletKcal,
         startMargin: -50,
         marginKey: dataForVisualization.margin.cutletMar
      },
      {
         minusBtnSelector: "mayoMinus",
         plusBtnSelector: "mayoPlus",
         countSelector: "mayoCount",
         title: "Mayo",
         itemSelector: "item__mayo",
         price: 1,
         time: 0.5,
         oz: 2,
         kcal: 150,
         dataVis: dataForVisualization,
         dataOrder: orderData,
         imgKey: dataForVisualization.itemImg.mayoKey,
         priceKey: dataForVisualization.sum.mayoSum,
         timeKey: dataForVisualization.time.mayoTime,
         ozKey: dataForVisualization.oz.mayoOz,
         kcalKey: dataForVisualization.kcal.mayoKcal,
         startMargin: -10,
         marginKey: dataForVisualization.margin.mayoMar
      },
      {
         minusBtnSelector: "onionMinus",
         plusBtnSelector: "onionPlus",
         countSelector: "onionCount",
         title: "Onion",
         itemSelector: "item__onion",
         price: 0.5,
         time: 0.5,
         oz: 1,
         kcal: 40,
         dataVis: dataForVisualization,
         dataOrder: orderData,
         imgKey: dataForVisualization.itemImg.onionKey,
         priceKey: dataForVisualization.sum.onionSum,
         timeKey: dataForVisualization.time.onionTime,
         ozKey: dataForVisualization.oz.onionOz,
         kcalKey: dataForVisualization.kcal.onionKcal,
         startMargin: -10,
         marginKey: dataForVisualization.margin.onionMar
      },
      {
         minusBtnSelector: "tomatoMinus",
         plusBtnSelector: "tomatoPlus",
         countSelector: "tomatoCount",
         title: "Tomato",
         itemSelector: "item__tomato",
         price: 1,
         time: 0.5,
         oz: 1,
         kcal: 60,
         dataVis: dataForVisualization,
         dataOrder: orderData,
         imgKey: dataForVisualization.itemImg.tomatoKey,
         priceKey: dataForVisualization.sum.tomatoSum,
         timeKey: dataForVisualization.time.tomatoTime,
         ozKey: dataForVisualization.oz.tomatoOz,
         kcalKey: dataForVisualization.kcal.tomatoKcal,
         startMargin: -10,
         marginKey: dataForVisualization.margin.tomatoMar
      },
      {
         minusBtnSelector: "cucumberMinus",
         plusBtnSelector: "cucumberPlus",
         countSelector: "cucumberCount",
         title: "Cucumber",
         itemSelector: "item__cucumber",
         price: 0.5,
         time: 0.5,
         oz: 1,
         kcal: 40,
         dataVis: dataForVisualization,
         dataOrder: orderData,
         imgKey: dataForVisualization.itemImg.cucumberKey,
         priceKey: dataForVisualization.sum.cucumberSum,
         timeKey: dataForVisualization.time.cucumberTime,
         ozKey: dataForVisualization.oz.cucumberOz,
         kcalKey: dataForVisualization.kcal.cucumberKcal,
         startMargin: -10,
         marginKey: dataForVisualization.margin.cucumberMar
      },
      {
         minusBtnSelector: "cheeseMinus",
         plusBtnSelector: "cheesePlus",
         countSelector: "cheeseCount",
         title: "Cheese",
         itemSelector: "item__cheese",
         price: 2,
         time: 0.5,
         oz: 2,
         kcal: 150,
         dataVis: dataForVisualization,
         dataOrder: orderData,
         imgKey: dataForVisualization.itemImg.cheeseKey,
         priceKey: dataForVisualization.sum.cheeseSum,
         timeKey: dataForVisualization.time.cheeseTime,
         ozKey: dataForVisualization.oz.cheeseOz,
         kcalKey: dataForVisualization.kcal.cheeseKcal,
         startMargin: -5,
         marginKey: dataForVisualization.margin.cheeseMar
      },
      {
         minusBtnSelector: "saladMinus",
         plusBtnSelector: "saladPlus",
         countSelector: "saladCount",
         title: "Salad",
         itemSelector: "item__salad",
         price: 0.5,
         time: 0.5,
         oz: 1,
         kcal: 40,
         dataVis: dataForVisualization,
         dataOrder: orderData,
         imgKey: dataForVisualization.itemImg.saladKey,
         priceKey: dataForVisualization.sum.saladSum,
         timeKey: dataForVisualization.time.saladTime,
         ozKey: dataForVisualization.oz.saladOz,
         kcalKey: dataForVisualization.kcal.saladKcal,
         startMargin: -20,
         marginKey: dataForVisualization.margin.saladMar
      },
      {
         minusBtnSelector: "bunMinus",
         plusBtnSelector: "bunPlus",
         countSelector: "bunCount",
         title: "Bun",
         itemSelector: "item__midbun",
         price: 0.5,
         time: 0.5,
         oz: 1,
         kcal: 90,
         dataVis: dataForVisualization,
         dataOrder: orderData,
         imgKey: dataForVisualization.itemImg.bunKey,
         priceKey: dataForVisualization.sum.bunSum,
         timeKey: dataForVisualization.time.bunTime,
         ozKey: dataForVisualization.oz.bunOz,
         kcalKey: dataForVisualization.kcal.bunKcal,
         startMargin: -20,
         marginKey: dataForVisualization.margin.bunMar
      }
   ]

   return itemCalculationData;
}

export default itemCalculationData;