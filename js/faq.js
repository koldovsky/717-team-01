$(document).ready(function(){
    $(".set > a").on("click", function(){
      if($(this).hasClass('active')){
        $(this).removeClass("active");
        $(this).siblings('.content').slideUp(200);
        $(".set > a span").removeClass("minus").addClass("plus");
      }else{
        $(".set > a span").removeClass("minus").addClass("plus");
        $(this).find("span").removeClass("plus").addClass("minus");
        $(".set > a").removeClass("active");
        $(this).addClass("active");
        $('.content').slideUp(200);
        $(this).siblings('.content').slideDown(200);
      }    
    });
  });
  
  // var parentTitleAcc = document.querySelector('.sn-accordion-container');
  // var titleAcc = document.querySelector('.sn-accordion-container a');
  
  // titleAcc.onclick = function (e) {
  // 	e.preventDefault();
  //   var target = e.target;
    
  //   if (traget.titleAcc != 'a') return;
    
  //   highlight(target); // подсветить TD
  // };
  