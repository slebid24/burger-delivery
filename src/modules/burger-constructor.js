import ItemCalculationData from "./data/calculation-item-data";

function burgerConstructor(dataForVisualization, orderData, arr) {
   class ItemCalculation {
      constructor(btnIdM, btnIdP, countId, title, conImg, price, time, oz, kcal,
         dataForVisualization, orderData, imgKey, priceKey, timeKey, ozKey, kcalKey, startMargin, pathMargin) {
         this.btnIdM = btnIdM;
         this.btnIdP = btnIdP;
         this.countId = countId;
         this.title = title;
         this.conImg = conImg;
         this.price = price;
         this.time = time;
         this.oz = oz;
         this.kcal = kcal;
         this.dataForVisualization = dataForVisualization;
         this.orderData = orderData;
         this.imgKey = imgKey;
         this.priceKey = priceKey;
         this.timeKey = timeKey;
         this.ozKey = ozKey;
         this.kcalKey = kcalKey;
         this.startMargin = startMargin;
         this.pathMargin = pathMargin;
         this.counter();
         this.setDefault();

      }

      setDefault() {
         document.querySelector(`#${this.countId}`).innerHTML = 0;
         document.querySelector(".main__total").innerHTML = "$0.00";
         document.querySelector(".main__time").innerHTML = "0.0 min";
         document.querySelector(".main__capacity").innerHTML = "0 oz";
         document.querySelector(".main__kcal").innerHTML = "0 kcal";
      }

      counter() {
         let n = 0;

         document.querySelector(`#${this.btnIdP}`).addEventListener("click", () => {

            setTimeout(() => {
               if (n < 10) {
                  document.querySelector(`#${this.countId}`).innerHTML = ++n;
                  let parentSelectorBur = document.querySelector(".main__const-inner");

                  this.imgKey.push(this.conImg);
                  this.orderData.recipe.push(this.title);

                  let lenghthOfArr = this.orderData.recipe.length;

                  let newItem = document.createElement("div");
                  newItem.classList.add(this.imgKey[this.imgKey.length - 1]);
                  newItem.classList.add("for_comparison");
                  newItem.classList.add("for_start_ani");

                  this.pathMargin.push(this.startMargin);
                  let concatArr = dataForVisualization.margin.cutletMar
                     .concat(dataForVisualization.margin.mayoMar, dataForVisualization.margin.cucumberMar, dataForVisualization.margin.cheeseMar,
                        dataForVisualization.margin.tomatoMar, dataForVisualization.margin.saladMar, dataForVisualization.margin.onionMar,
                        dataForVisualization.margin.bunMar);
                  concatArr.unshift(0);
                  let marginFin = concatArr.reduce((sum, current) => sum + current);
                  newItem.style = `top: ${marginFin}%`;
                  parentSelectorBur.append(newItem);

                  let topBun = document.createElement("div");
                  if (lenghthOfArr > 0 && (document.querySelectorAll(".item__topbun").length < 1)) {
                     topBun.classList.add("item__topbun");
                     parentSelectorBur.append(topBun);
                     document.querySelector(".item__topbun").animate([{
                           top: `-400%`,
                           opacity: "0"
                        },
                        {
                           top: `${parseInt(marginFin) - 90}%`,
                           opacity: "1"
                        }
                     ], {
                        duration: 400,
                        easing: "ease-in-out"
                     });
                  } else {
                     document.querySelector(".item__topbun").animate([{
                           transform: "skew(0)",
                           top: `${parseInt(marginFin) - 90}%`,
                           left: "0%"
                        },
                        {
                           transform: "skew(-5deg, 5deg)",
                           top: `${(parseInt(marginFin) - 90) - 15}%`,
                           left: "2%"
                        },
                        {
                           transform: "skew(0)",
                           top: `${parseInt(marginFin) - 90}%`,
                           left: "0%"
                        },
                     ], {
                        duration: 500,
                        easing: "ease-in-out"
                     });
                  }
                  document.querySelector(".item__topbun").style.top = `${parseInt(marginFin) - 90}%`;



                  this.priceKey.push(this.price);
                  let tprice = dataForVisualization.sum.cutletSum
                     .concat(dataForVisualization.sum.mayoSum, dataForVisualization.sum.cucumberSum, dataForVisualization.sum.cheeseSum,
                        dataForVisualization.sum.tomatoSum, dataForVisualization.sum.saladSum, dataForVisualization.sum.onionSum,
                        dataForVisualization.sum.bunSum);
                  tprice.unshift(0);

                  let sumprice = tprice.reduce((sum, current) => sum + current);
                  document.querySelector(".main__total").innerHTML = `$${sumprice.toFixed(2)}`;

                  this.timeKey.push(this.time);
                  let ttime = dataForVisualization.time.cutletTime
                     .concat(dataForVisualization.time.mayoTime, dataForVisualization.time.cucumberTime, dataForVisualization.time.cheeseTime,
                        dataForVisualization.time.tomatoTime, dataForVisualization.time.saladTime, dataForVisualization.time.onionTime,
                        dataForVisualization.time.bunTime);
                  ttime.unshift(0);

                  let sumTime = ttime.reduce((sum, current) => sum + current);
                  document.querySelector(".main__time").innerHTML = `${sumTime.toFixed(1)} min`;

                  this.ozKey.push(this.oz);
                  let toz = dataForVisualization.oz.cutletOz
                     .concat(dataForVisualization.oz.mayoOz, dataForVisualization.oz.cucumberOz, dataForVisualization.oz.cheeseOz,
                        dataForVisualization.oz.tomatoOz, dataForVisualization.oz.saladOz, dataForVisualization.oz.onionOz,
                        dataForVisualization.oz.bunOz);
                  toz.unshift(0);

                  let sumOz = toz.reduce((sum, current) => sum + current);
                  document.querySelector(".main__capacity").innerHTML = `${sumOz} oz`;

                  this.kcalKey.push(this.kcal);
                  let tkcal = dataForVisualization.kcal.cutletKcal
                     .concat(dataForVisualization.kcal.mayoKcal, dataForVisualization.kcal.cucumberKcal, dataForVisualization.kcal.cheeseKcal,
                        dataForVisualization.kcal.tomatoKcal, dataForVisualization.kcal.saladKcal, dataForVisualization.kcal.onionKcal,
                        dataForVisualization.kcal.bunKcal);
                  tkcal.unshift(0);

                  let sumKcal = tkcal.reduce((sum, current) => sum + current);
                  document.querySelector(".main__kcal").innerHTML = `${sumKcal} kcal`;


                  if (tprice.reduce((sum, current) => sum + current) >= 10 && !(document.querySelector(".main__const-inner-catchup"))) {
                     const catchup = document.createElement("div")
                     catchup.classList.add("main__const-inner-catchup")
                     document.querySelector(".main__const-inner").append(catchup)
                  }
               } else {

               }
            }, 100);
         });


         document.querySelector(`#${this.btnIdM}`).addEventListener("click", () => {

            setTimeout(() => {
               if (n > 0) {
                  document.querySelector(`#${this.countId}`).innerHTML = --n;

                  this.imgKey.pop(this.conImg);

                  let deletedM = this.pathMargin.pop(this.startMargin);

                  let a = "." + this.conImg;
                  let arr = document.querySelectorAll(a);

                  let comparDefin = arr[arr.length - 1].style.top;
                  let classForDelAni = (((this.orderData.recipe.length - 1) % 2) === 0) ? "for_del_ani_left" :
                     "for_del_ani_right";
                  arr[arr.length - 1].classList.replace("for_start_ani", classForDelAni);

                  setTimeout(() => {
                     arr[arr.length - 1].remove();
                  }, 100);

                  let compar = document.querySelectorAll(".for_comparison");
                  let comparArr = Array.from(compar);
                  let toChange = comparArr.filter((e) => {
                     return parseInt(e.style.top) < parseInt(comparDefin);
                  });

                  toChange.forEach((e) => {
                     e.style.top = `${parseInt(e.style.top) - parseInt(deletedM)}%`;
                  });

                  let concatArr = dataForVisualization.margin.cutletMar
                     .concat(dataForVisualization.margin.mayoMar, dataForVisualization.margin.cucumberMar, dataForVisualization.margin.cheeseMar,
                        dataForVisualization.margin.tomatoMar, dataForVisualization.margin.saladMar, dataForVisualization.margin.onionMar,
                        dataForVisualization.margin.bunMar);
                  concatArr.unshift(0);
                  let marginFin = concatArr.reduce((sum, current) => sum + current);

                  setTimeout(() => {
                     if (lenghthOfArr > 0) {
                        document.querySelector(".item__topbun").style.top = `${parseInt(marginFin) - 90}%`;

                     }
                  }, 220);

                  this.orderData.recipe.pop(this.num);
                  let lenghthOfArr = this.orderData.recipe.length;

                  if (lenghthOfArr == 0) {
                     let deleteBun = document.querySelector(".item__topbun").animate([{
                           top: `${parseInt(deletedM) - 90}%`,
                           opacity: "1"
                        },
                        {
                           top: `-400%`,
                           opacity: "0"
                        }
                     ], {
                        duration: 400,
                        easing: "ease-in-out"
                     });

                     Promise.all(
                        document.querySelector(".item__topbun").getAnimations().map(
                           function (deleteBun) {
                              return deleteBun.finished;
                           }
                        )
                     ).then(() => {
                        document.querySelector(".item__topbun").remove();
                     });
                  }

                  this.priceKey.pop(this.price);
                  let dprice = dataForVisualization.sum.cutletSum
                     .concat(dataForVisualization.sum.mayoSum, dataForVisualization.sum.cucumberSum, dataForVisualization.sum.cheeseSum,
                        dataForVisualization.sum.tomatoSum, dataForVisualization.sum.saladSum, dataForVisualization.sum.onionSum,
                        dataForVisualization.sum.bunSum);
                  dprice.unshift(0);


                  let sumprice = dprice.reduce((sum, current) => sum + current, 0);
                  document.querySelector(".main__total").innerHTML = `$${sumprice.toFixed(2)}`;

                  this.timeKey.pop(this.time);
                  let dtime = dataForVisualization.time.cutletTime
                     .concat(dataForVisualization.time.mayoTime, dataForVisualization.time.cucumberTime, dataForVisualization.time.cheeseTime,
                        dataForVisualization.time.tomatoTime, dataForVisualization.time.saladTime, dataForVisualization.time.onionTime,
                        dataForVisualization.time.bunTime);
                  dtime.unshift(0);


                  let sumTime = dtime.reduce((sum, current) => sum + current, 0);
                  document.querySelector(".main__time").innerHTML = `${sumTime.toFixed(1)} min`;


                  this.ozKey.pop(this.oz);
                  let doz = dataForVisualization.oz.cutletOz
                     .concat(dataForVisualization.oz.mayoOz, dataForVisualization.oz.cucumberOz, dataForVisualization.oz.cheeseOz,
                        dataForVisualization.oz.tomatoOz, dataForVisualization.oz.saladOz, dataForVisualization.oz.onionOz,
                        dataForVisualization.oz.bunOz);
                  doz.unshift(0);

                  let sumOz = doz.reduce((sum, current) => sum + current, 0);
                  document.querySelector(".main__capacity").innerHTML = `${sumOz} oz`;


                  this.kcalKey.pop(this.kcal);
                  let dkcal = dataForVisualization.kcal.cutletKcal
                     .concat(dataForVisualization.kcal.mayoKcal, dataForVisualization.kcal.cucumberKcal, dataForVisualization.kcal.cheeseKcal,
                        dataForVisualization.kcal.tomatoKcal, dataForVisualization.kcal.saladKcal, dataForVisualization.kcal.onionKcal,
                        dataForVisualization.kcal.bunKcal);
                  dkcal.unshift(0);

                  let sumKcal = dkcal.reduce((sum, current) => sum + current, 0);
                  document.querySelector(".main__kcal").innerHTML = `${sumKcal} kcal`;


                  if (dprice.reduce((sum, current) => sum + current, 0) < 10 && document.querySelector(".main__const-inner-catchup")) {
                     document.querySelector(".main__const-inner-catchup").classList.add("main__const-inner-catchup-delete")
                     setTimeout(() => {
                        document.querySelector(".main__const-inner-catchup").remove()
                     }, 200);

                  }


               } else {
                  return;
               }
            }, 200);
         });
      }
   }

   arr(dataForVisualization, orderData).forEach(item => {
      const keys = Object.keys(item)
      new ItemCalculation(...keys.map(key => item[key]))
   })
}

export default burgerConstructor;