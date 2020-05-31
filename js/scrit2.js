
// $(window).scroll(function () {
//     // console.log("asdasdas");
//     let windScrol = $(window).scrollTop();
//     console.log(windScrol);
// });
                //  navbar scroll////////
  let featuresOffset  = $("#features").offset().top;

$(window).scroll(function () {
  let wScroll=  $(window).scrollTop();
  if(wScroll >  featuresOffset-50)
{
  $("#btnUp").fadeIn(500);
  $("#navbar").css("backgroundColor","rgba(0,0,0,0.5)");
 }
 else
 {
  $("#btnUp").fadeOut(500);
  $("#navbar").css("backgroundColor","transparent");

  }

});
// /////////botton up scroll//////////
$("#btnUp").click(function () {
      $("html,body").animate({ scrollTop: "0" }, 1500);
});

// //////////navbar links //////////////
$("a").click(function () {
    let aHref = $(this).attr("href"); //#service#menu
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({ scrollTop: sectionOffset }, 1500);
 });

// ////////////////// color box //////////////
  (function () {
    let colorBoxs = $(".color-item");

    colorBoxs.eq(0).css("backgroundColor", "orange");
    colorBoxs.eq(1).css("backgroundColor", "teal");
    colorBoxs.eq(2).css("backgroundColor", "tomato");
    colorBoxs.eq(3).css("backgroundColor", "#09c");
    colorBoxs.eq(4).css("backgroundColor", "purple");

    let optionsBoxWidth = $(".options-box").outerWidth(); //
    $("#options").css("left", `-${optionsBoxWidth}`);

    colorBoxs.click(function () {
      let color = $(this).css("backgroundColor");
      $("body").css("color", color);

      $(".img-box").click(function () {
        let imgSrc = $(this).attr("src");
        $("header").css("backgroundImage", `url(${imgSrc})`);
      });
    });

    $("#options i").click(function () {
      if ($("#options").css("left") == "0px") {
        $("#options").animate({ left: `-${optionsBoxWidth}` }, 500);
      } else {
        $("#options").animate({ left: `0px` }, 500);
      }
    });
  })();
$(document).ready(function () {
  $("#loading").slideUp(2000, function () {
    $("body").css("overflow", "auto");
  });
});
