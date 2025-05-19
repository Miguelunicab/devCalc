if (localStorage.getItem('devcalc_darkMode') == 'true') {
     document.querySelector('body').classList.add("dark")
     document.querySelector('#lightMode').classList.toggle("d-none")
     document.querySelector('#darkMode').classList.toggle("d-none")
}

/* Functions */

function calculateRem(PxValue) {
     return (PxValue / 16);
}

function calculateDistance(Height, top, top2) {
     Height = parseInt(Height);
     top = parseInt(top);
     top2 = parseInt(top2);
     
     return (top2 - (Height + top)) / 16;
}

/* Theme Btns */

$(document).ready(function() {
     $('#darkMode').on("click", function(e) {
          e.preventDefault();

          $('body').toggleClass("dark");
          $('#lightMode').toggleClass("d-none");
          $('#darkMode').toggleClass("d-none");
          localStorage.setItem('devcalc_darkMode', 'true')
     });

     $('#lightMode').on("click", function(e) {
          e.preventDefault();
          
          $('body').toggleClass("dark");
          $('#darkMode').toggleClass("d-none");
          $('#lightMode').toggleClass("d-none");
          localStorage.setItem('devcalc_darkMode', 'false')
     });

     // Calculators
     $('#remCalc-Input').on("input", function() {
          const pxAmount = $('#remCalc-Input').val()
          $('#remCalc-Result').val(`${calculateRem(pxAmount)}rem`);
     });

     let objHeight = 0;
     let obj2Top = 0;
     let objTop = 0;
     $('#distanceCalc-Height').on("input", function() {
          objHeight = $('#distanceCalc-Height').val();
          $('#distanceCalc-Result').val(`${calculateDistance(objHeight, objTop, obj2Top)}rem`);
          console.log(objHeight, objTop, obj2Top);
     });

     $('#distanceCalc-Top1').on("input", function() {
          objTop = $('#distanceCalc-Top1').val();
          $('#distanceCalc-Result').val(`${calculateDistance(objHeight, objTop, obj2Top)}rem`);
          console.log(objHeight, objTop, obj2Top);
     });
     
     $('#distanceCalc-Top2').on("input", function() {
          obj2Top = $('#distanceCalc-Top2').val();
          $('#distanceCalc-Result').val(`${calculateDistance(objHeight, objTop, obj2Top)}rem`);
          console.log(objHeight, objTop, obj2Top);
     });
});