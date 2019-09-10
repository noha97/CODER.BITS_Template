//start loading
$(document).ready(function () {
    $("#loading").fadeOut(2000, function () {
        $("body").css("overflow", "auto");
    });
})
//end loading

//start navbar
$(".nav-link").click(function (){
    if(!$(this).hasClass("active")&&!$(this).parent().hasClass("current"))
        {
            $(".nav-link").removeClass("active");
            $(".nav-link").parent().removeClass("current");
            $(this).addClass("active");
            $(this).parent().addClass("current");
        }
})

$(".navbar .nav-link").click(function () {

    let linkHref = $(this).attr("href");
    let hrefOffset = $(linkHref).offset().top;
    $("body,html").animate({
        scrollTop: hrefOffset
    }, 1500)
})

$(window).scroll(function () {    
    
           $(".block").each(function(){
            var blockId=$(this).attr('id'); 
            if($(window).scrollTop()>$(this).offset().top)
                {
                   if(!$(".nav-link[href='#"+blockId+"']").hasClass("active")&&!$(".nav-link[href='#"+blockId+"']").parent().hasClass("current"))
                        {
                          $(".nav-link").removeClass("active");
                          $(".nav-link").parent().removeClass("current");
                          $(".nav-link[href='#"+blockId+"']").addClass("active");
                          $(".nav-link[href='#"+blockId+"']").parent().addClass("current");
                        }
      }

})})
//end navbar

//start header
$("#scrollDown,#knowMore").click(function () {
    let aboutOffset = $("#about").offset().top;
    $("body,html").animate({
        scrollTop: aboutOffset
    }, 1200)
})
//end header



//start portfolio
$(".portfolio .portfolio-list ul li .btn").click(function(){
    if(!$(this).hasClass("active"))
        {
            $(".portfolio .portfolio-list ul li .btn").removeClass("active");
            $(this).addClass("active");
        }
})

$("#btnAll").click(function(){
    $(".portfolio .portfolioGallery").fadeIn(1000);
})

$("#btnWebsite").click(function(){
    for(let i=0;i<$(".portfolio .portfolioGallery").length;i++)
        {
           if(!$(".portfolio .portfolioGallery").eq(i).hasClass("website"))
               {
                $(".portfolio .portfolioGallery").eq(i).fadeOut(400);
               }
               else
               {
                $(".portfolio .portfolioGallery").eq(i).fadeIn(400);
               }
        }
})

$("#btnBrand").click(function(){
    for(let i=0;i<$(".portfolio .portfolioGallery").length;i++)
        {
           if(!$(".portfolio .portfolioGallery").eq(i).hasClass("branding"))
               {
                $(".portfolio .portfolioGallery").eq(i).fadeOut(400);
               }
               else
               {
                $(".portfolio .portfolioGallery").eq(i).fadeIn(400);
               }
        }
})

$("#btnIllustra").click(function(){
    for(let i=0;i<$(".portfolio .portfolioGallery").length;i++)
        {
           if(!$(".portfolio .portfolioGallery").eq(i).hasClass("illustration"))
               {
                $(".portfolio .portfolioGallery").eq(i).fadeOut(400);
               }
               else
               {
                $(".portfolio .portfolioGallery").eq(i).fadeIn(400);
               }
        }
})

//portfolio gallery
var currentImgIndex;
$(".portfolio .portfolioGallery .item-img").click(function(e){

        $(".portfolio .lightBoxGallery").css("display","flex");
        var imgSrc=$(this).attr("src");
        $('.portfolio  .lightBoxGallery-item').css('background-image','url('+imgSrc+')');
     
        currentImgIndex= $(".portfolio .portfolioGallery .item-img").index(this);
})




$("#Wclose").click(function(){
    $(".portfolio .lightBoxGallery").css("display","none");
})
$(document).keydown(function(event){
    if(event.keyCode==27)
    {
        $(".portfolio .lightBoxGallery").css("display","none");
    }
    else if(event.keyCode==39)
    {
        nextMove();
    }
    else if(event.keyCode==37)
    {
        prevMove();
    }
})
$("#next").click(function(){
   nextMove();
})

function nextMove()
{
    currentImgIndex++;
    if(currentImgIndex==$(".portfolio .portfolioGallery .item-img").length)
    {
        currentImgIndex=0;
    }
 $('.portfolio  .lightBoxGallery-item').css('background-image','url('+$(".portfolio .portfolioGallery .item-img").eq(currentImgIndex).attr('src')+')');
}

$("#prev").click(function(){
    prevMove();
 })

 function prevMove()
{
    currentImgIndex--;
    if(currentImgIndex<0)
    {
        currentImgIndex=$(".portfolio .portfolioGallery .item-img").length-1;
    }
 $('.portfolio  .lightBoxGallery-item').css('background-image','url('+$(".portfolio .portfolioGallery .item-img").eq(currentImgIndex).attr('src')+')');
}

//end portfolio



//start scroll
$("#scrollUp").click(function () {
    let homeOffset = $("#home").offset().top;
    $("body,html").animate({
        scrollTop: homeOffset
    }, 2000);
})






$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > $("#about").offset().top) {
        $("#scrollUp").fadeIn(600);
    } else {
        $("#scrollUp").fadeOut(600);
    }
})

//end scroll



