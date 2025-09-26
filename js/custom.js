$(function () {
  $("ul.wrap li").on("click", function () {
    $("ul.wrap li").not(this).removeClass("on");

    $(".bottom").not($(this).find(".bottom")).stop().slideUp(500);

    $(this).toggleClass("on");

    $(this).find(".bottom").stop().slideToggle(500);
  });
});
