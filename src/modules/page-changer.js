function pageChanger(firstPageBtn, secondPageBtn, wrapper, field, pages, page1, page2, bigBtn, ) {
   const width = (wrapper.offsetWidth - 20);
   const widthAfterSwipe = page1.offsetWidth;
   let offset = 0;
   field.style.width = width * pages.length + "px";
   page2.style.width = width + "px";
   field.style.display = "flex";
   field.style.transition = "0.8s all";
   field.style.transform = `translateX(0px)`;
   pages.forEach(slide => {
      slide.style.width = width;
   });

   page2.style.display = "none";
   firstPageBtn.classList.add("header__page-changer--active");

   function swipeToSecondPage() {
      if (offset == 0) {
         offset += width;
      } else {
         return;
      }
      field.style.transform = `translateX(-${offset}px)`;
      page1.style.display = "none";
      page2.style.display = "flex";
      page2.style.marginLeft = `${widthAfterSwipe}px`;
      secondPageBtn.classList.add("header__page-changer--active");
      firstPageBtn.classList.remove("header__page-changer--active");

      function itemsOpening() {

         document.querySelectorAll(".main__ingradient").forEach((e, i) => {
            let timing = i * (100 * (i / 2.5));

            setTimeout(() => {
               setTimeout(() => {
                  e.style.opacity = 1;
                  e.classList.add("showed");
               }, timing);
            }, 250);

         });
      }

      itemsOpening()

   }

   function swipeToFirstPage() {
      if (offset > 0) {
         offset -= width;
      } else {
         return;
      }
      field.style.transform = `translateX(-${offset}px)`;
      page1.style.display = "flex";
      page2.style.display = "none";
      page2.style.marginLeft = widthAfterSwipe;
      firstPageBtn.classList.add("header__page-changer--active");
      secondPageBtn.classList.remove("header__page-changer--active");

      document.querySelectorAll(".main__ingradient").forEach(e => {
         e.style.opacity = 0;
      });
   }


   function handlerInstalligkTo1(btn) {
      btn.addEventListener("click", to1);
   }

   function to1() {
      if (document.querySelectorAll(".main__ingradient")[7].classList.contains("showed")) {
         swipeToFirstPage();
         document.querySelectorAll(".main__ingradient").forEach(e => {
            e.classList.remove("showed");
         });
      }
      firstPageBtn.removeEventListener("click", to1);
      handlerInstalligkTo2(bigBtn, secondPageBtn);
   }

   function handlerInstalligkTo2(btn1, btn2) {
      let arr = [];
      arr.push(btn1, btn2);
      arr.forEach(e => {
         e.addEventListener("click", to2);
      })
   }

   function to2() {
      setTimeout(() => {
         swipeToSecondPage();
      }, 1000);
      firstPageBtn.removeEventListener("click", to1);
      let arr = [];
      arr.push(bigBtn, secondPageBtn);
      arr.forEach(e => {
         e.removeEventListener("click", to2);
      })

      setTimeout(() => {
         handlerInstalligkTo1(firstPageBtn)
      }, 3000)
   }

   handlerInstalligkTo1(firstPageBtn)
   handlerInstalligkTo2(bigBtn, secondPageBtn);

}






export default pageChanger;