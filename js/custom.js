$(function () {
  $("ul.wrap li").on("click", function () {
    $("ul.wrap li").not(this).removeClass("on");

    $(".bottom").not($(this).find(".bottom")).stop().slideUp(500);

    $(this).toggleClass("on");

    $(this).find(".bottom").stop().slideToggle(500);

    if ($("ul.wrap li").hasClass("on")) {
      $("ul.wrap").animate({ bottom: "30px" });
    } else {
      $("ul.wrap").animate({ bottom: "80px" });
    }
  });
});
