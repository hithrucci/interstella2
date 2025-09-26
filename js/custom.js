$(function () {
  $(".title").on("click", function () {
    $(".title").not(this).removeClass("on"); //this를 제외한 .title 모두 on클래스 제거
    $(".bottom").not($(this).siblings(".bottom")).stop().slideUp(500); //this의 형제요소인 .bottom을 제외한 모든 .bottom을 슬라이드업

    $(this).toggleClass("on"); //this, 즉 클릭한 .title에 클래스 토글
    $(this).siblings(".bottom").stop().slideToggle(500); //this의 형제.bottom은 슬라이드 토글
  });
});
