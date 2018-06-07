
$(".tab_item").not(":first").hide();
$(".block2_menu li").click(function() {
	$(".block2_menu li").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");




    $(function(){
        $('.menu_toggle').on('click',function(){
            $('ul').slideToggle(300,function(){
                if($(this).css('display')==='none'){
                    $(this).removeAttr('style');
                }
            });
        });
    });

