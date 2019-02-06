
function openSlideMenu() {
    document.getElementById('side-menu').style.width = '30%';
    document.getElementById('main').style.marginLeft = '30%';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $(".scroll_img").fadeIn();
    } else (
        $(".scroll_img").fadeOut()
    )
});
$(".scroll_img").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
});







$(document).ready(function(){
            $(".search_input").click(function(){
                   $(".search_input").addClass('search_input2')
                 $(".search_icon").css({ "display": "block" });
                $(".search_input").css({ "width": "25%"});
                 $(".search_input").removeClass('search_input3')
               
            });
            $(".mouse").mouseleave(function(){
                
                 $(".search_icon").css({ "display": "none" });
                $(".search_input").css({ "width": "7%"});
                 $(".search_input").addClass('search_input3')
               
                
            });
        });
